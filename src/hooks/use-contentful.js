import { useState, useEffect } from "react";

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function useContentful(query) {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
        },
        body: JSON.stringify({ query })
      }
    )
      .then(response => response.json())
      .then(({ data, errors }) => {
        // throw new Error("baddd!!!!");
        if (errors) setErrors(errors);
        if (data) setData(data);
      })
      .catch(error => setErrors([error]));
  }, [query]);

  return { data, errors };
}

export default useContentful;
