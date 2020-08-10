import React from "react";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div class="container mx-auto py-12">
      <div class="flex -mx-4">
        {bookmarks.map(bookmark => {
          return (
            <a
              href={bookmark.url}
              class="w-1/4 mx-4 shadow block p-6 hover:shadow-lg"
            >
              <div class="font-bold">{bookmark.name}</div>
              {bookmark.tagsCollection &&
                bookmark.tagsCollection.items.map(tag => {
                  return <div class="font-light">{tag.name}</div>;
                })}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
