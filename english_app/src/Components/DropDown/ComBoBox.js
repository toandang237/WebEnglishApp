/** @format */

import { useState } from "react";
import ComBoBoxItem from "./ComBoBoxItem";

/**
 * items: list items display on dropdown
 *
 */
export default function ComBoBox(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className="dropdown DropDownList"
      style={{
        marginLeft: props.marginLeft,
        width: "calc(var(--modal-width) - 64px)",
      }}
    >
      <ul
        className={`dropdown-content ${
          props.show ? "dropdown-content-click" : ""
        }`}
        style={{
          width: "100%",
          overflow: "auto",
          maxHeight: "150px",
          minHeight: "50px",
        }}
      >
        {props.items.map((e, idx) => {
          return (
            <ComBoBoxItem
              key={idx}
              idx={idx}
              action={e.action}
              displayName={e.displayName}
              icon={e.icon}
              setSelectedIndex={setSelectedIndex}
            />
          );
        })}
      </ul>
    </div>
  );
}
