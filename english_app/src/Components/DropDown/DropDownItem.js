/** @format
 * action: event handle when onlick item
 * displayName: name display on item
 */

export default function DropDownItem(props) {
  return (
    <li onClick={props.action}>
      <span className={`k-icon ${props.icon}`}></span>
      {props.displayName}
    </li>
  );
}
// profile
//profileHandle
