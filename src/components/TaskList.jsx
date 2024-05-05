import React from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";

export default function TaskList() {
  const tasks = useSelector((state) => state.todos);
  return (
    <>
      <ul>
        {tasks.map((items) => (
          <li key={items.id} style={{ listStyle: "none" }}>
            <SingleTask task={items} />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
