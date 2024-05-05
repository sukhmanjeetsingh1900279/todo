import React from "react";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button";
import { useState } from "react";
import { deleteTask, updateTask } from "../feature/todo/todoSlice";
import { useDispatch } from "react-redux";
import SlCheckbox from "@shoelace-style/shoelace/dist/react/checkbox";
import SlTooltip from "@shoelace-style/shoelace/dist/react/tooltip";

export default function SingleTask({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteTask(task.id));
  };
  const handleEdit = (e) => {
    dispatch(updateTask({ ...task, text: e.target.value }));
  };
  const updateTaskDone = (e) => {
    dispatch(updateTask({ ...task, done: e.target.checked }));
  };
  let showit;
  if (isEditing) {
    showit = (
      <>
        {" "}
        <SlInput
          type="text"
          value={task.text}
          onSlInput={handleEdit}
          clearable
        />
        <SlTooltip content="Save changes">
          <SlIconButton
            name="save"
            label="Save"
            onClick={() => setIsEditing(false)}
            style={{ fontSize: "1.4rem" }}
          />
        </SlTooltip>
      </>
    );
  } else {
    showit = (
      <>
        <div
          style={{
            maxWidth: "85%",
            wordWrap: "break-word",
            textDecoration: task.done ? "line-through" : "",
          }}
        >
          {task.text}
        </div>
        <SlTooltip content={task.done ? "Cannot edit task done" : "Edit"}>
          {" "}
          <SlIconButton
            name="pencil"
            label="Edit"
            disabled={task.done}
            onClick={() => setIsEditing(true)}
            style={{ fontSize: "1.4rem" }}
          />
        </SlTooltip>
      </>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",

        flexWrap: "wrap",
      }}
    >
      <SlTooltip content="mark completed or in complete">
        {" "}
        <SlCheckbox checked={task.done} onSlChange={updateTaskDone} />
      </SlTooltip>

      {showit}
      <SlTooltip content="delete task">
        {" "}
        <SlIconButton
          name="trash"
          label="delete"
          onClick={handleDelete}
          style={{ fontSize: "1.4rem" }}
        />
      </SlTooltip>
    </div>
  );
}
