"use client";
import React from "react";
import IndexDB from "@/db/IndexDB";
import ThoughtsCard from "@/components/Cards/thoughts-card";
import { useLiveQuery } from "dexie-react-hooks";
const AppContent = () => {
  const AllThoughts = useLiveQuery(() => IndexDB.todos.toArray());
  return (
    <div className="redd flex h-full w-full flex-wrap flex-col items-start justify-start gap-1 p-1 py-5">
      {AllThoughts ? (
        AllThoughts.map((data) => {
          return (
            <ThoughtsCard key={data.id} title={data.name} text={data.text} />
          );
        })
      ) : (
        <p>No thoughts availble</p>
      )}
    </div>
  );
};

export default AppContent;
