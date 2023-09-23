/** @format */

import DashBoardItem from "./DashBoardItem";

export default function DashBoardListItems(props) {
  const listItems = props.items;
  return listItems.map((e, idx) => {
    return <DashBoardItem item={e} key={idx} />;
  });
}
