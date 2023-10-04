/** @format */

import { useState } from "react";
import DropDownItem from "./DropDownItem";

/**
 * items: list items display on dropdown
 *
 */
export default function DropDownList(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div
      className="dropdown DropDownList"
      style={{ marginLeft: props.marginLeft }}
    >
      <ul
        className={`dropdown-content ${
          props.show ? "dropdown-content-click" : ""
        }`}
      >
        {props.items.map((e, idx) => {
          return (
            <DropDownItem
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
