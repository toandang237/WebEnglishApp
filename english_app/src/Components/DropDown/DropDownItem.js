/** @format
 * action: event handle when onlick item
 * displayName: name display on item
 */

export default function DropDownItem(props) {
  const handleOnClick = () => {
    props.action();
    props.setSelectedIndex(props.idx);
  };
  return (
    <li onClick={handleOnClick}>
      <span className={`k-icon ${props.icon}`}></span>
      {props.displayName}
    </li>
  );
}
// profile
//profileHandle
