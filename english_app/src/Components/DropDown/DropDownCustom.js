/** @format */

import DropDownItem from "./DropDownItem";

/**
 * items: list items display on dropdown
 *
 */
export default function DropDownCustom(props) {
  return (
    <div
      className="dropdown dropdownCustom"
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
              action={e.action}
              displayName={e.displayName}
              icon={e.icon}
            />
          );
        })}

        {/* <li onClick={profileHandle}>
          <span className="k-icon k-i-info"></span>Profile
        </li>
        <li onClick={logoutHandle}>
          <span className="k-icon k-i-logout"></span>Logout
        </li> */}
      </ul>
    </div>
  );
}
