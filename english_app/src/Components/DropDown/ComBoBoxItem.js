/** @format */

export default function ComBoBoxItem(props) {
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
