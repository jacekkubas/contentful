import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Person = ({ person }) => {
  return (
    <div class="bg-blue-100">
      <div class="flex py-12 container mx-auto px-10 md:px-0">
        <div class="w-64 h-64 bg-gray-100 mr-12">
          <img
            class="object-cover h-full"
            src={person.image.url}
            alt={person.image.title}
          />
        </div>
        <div class="flex flex-col justify-between">
          <h1 class="text-center font-bold text-3xl">{person.name}</h1>
          <div>{documentToReactComponents(person.bio.json)}</div>
          <div>
            <div>
              <a class="hover:text-blue-300" href={person.linkedin}>
                LinkedIn
              </a>
            </div>
            <div>
              <a class="hover:text-blue-300" href={person.github}>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
