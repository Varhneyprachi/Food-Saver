import React from "react";

const Note = ({noteData}) => {
    const {email, text, postedDate, photoUrl, authorName} = noteData;
  return (
    <>
      <div
        className="flex flex-col w-full p-6 divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-200"
        bis_skin_checked="1"
      >
        <div className="flex justify-between p-4" bis_skin_checked="1">
          <div className="flex space-x-4" bis_skin_checked="1">
            <div bis_skin_checked="1">
              <img
                src={photoUrl}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div bis_skin_checked="1">
              <h4 className="font-bold">{authorName}</h4>
              <p className="text-xs text-gray-600">{email}</p>
              <span className="text-xs text-gray-600">{postedDate.split("T")[0]}</span>
            </div>
          </div>
        </div>
        <div
          className="p-4 space-y-2 text-sm dark:text-gray-600"
          bis_skin_checked="1"
        >
          <p>
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Note;
