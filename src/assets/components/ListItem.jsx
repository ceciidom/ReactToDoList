import "./ListItem.css";

function ListItem(props) {
    return (
      <div
        onClick={() => {
          props.onChecked(props);
        }}
      >
        <label className="listItem">
          <input type="checkbox" />
          <span className="checkmark"></span>
          {props.text}
        </label>
      </div>
    );
}

export default ListItem;