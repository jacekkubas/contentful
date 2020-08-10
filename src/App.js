import React from "react";
import useContentful from "./hooks/use-contentful";
import Person from "./components/Person";
import Bookmarks from "./components/Bookmarks";

const query = `
  query {
    person(id: "015z5lqHG6JyiviAH5a1W") {
      name
      bio {
        json
      }
      linkedin
      github
      image {
        title
        url
      }
    }

    bookmarksCollection {
      items {
        name
        url
        tagsCollection{
          items {
            name
          }
        }
      }
    }
  }
`;

function App() {
  const { data, errors } = useContentful(query);

  if (errors)
    return <div>{errors && errors.map(err => <div>{err.message}</div>)}</div>;
  if (!data) return <h3>Loading..</h3>;

  return (
    <div>
      <Person person={data.person} />
      <Bookmarks bookmarks={data.bookmarksCollection.items} />
    </div>
  );
}

export default App;
