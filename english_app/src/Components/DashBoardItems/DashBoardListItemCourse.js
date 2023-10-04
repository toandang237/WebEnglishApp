/** @format */

import DashBoardItemCourse from "./DashBoardItemCourse";

export default function DashBoardListItemCourse(props) {
  const listItems = props.items;
  return (
    <div>
      {listItems.map((e, idx) => {
        return <DashBoardItemCourse item={e} key={idx} />;
      })}
    </div>
  );
}
