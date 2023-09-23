/** @format */

export default function AlertErrorInput(props) {
  return (
    <div className="UIRow">
      <div className="UINotice UINotice--alert UINotice--boxed UINotice--deprecated">
        <span className="UINotice-message">
          <ul className="UIList">
            {props.errors.map((e, idx) => {
              return <li className="lvwq407" key={idx}>{e}</li>;
            })}
          </ul>
        </span>
      </div>
    </div>
  );
}
