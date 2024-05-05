import React, { useState } from "react";

import SlButton from "@shoelace-style/shoelace/dist/react/button";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import { useDispatch } from "react-redux";
import { addTask } from "../feature/todo/todoSlice";
import SlTooltip from "@shoelace-style/shoelace/dist/react/tooltip";

export default function AddTask() {
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTask({ id: Date.now(), text: text, done: false }));

    setText("");
  }

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <SlInput
          placeholder="Enter todo ..."
          value={text}
          onSlInput={(e) => setText(e.target.value)}
          clearable
          pill
          style={{ width: "75%" }}
        />
        <br />{" "}
        <SlTooltip content="Add todo">
          <SlButton type="submit" variant="primary" pill>
            Add
          </SlButton>
        </SlTooltip>
      </div>
    </form>
  );
}
