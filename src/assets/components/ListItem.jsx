import PropTypes from "prop-types";

import "./ListItem.css";

function ListItem(props) {
  if (props.isEditing) {
    return (
      <div>
        <label className="listItem">
          <span className="checkmark"></span>
          <input
            className="editingText"
            type="text"
            value={props.text}
            onChange={props.onChange}
            onBlur={props.onSubmit}
            autoFocus
          ></input>
        </label>
      </div>
    );
  } else {
    return (
      <div>
        <label className="listItem">
          {/* <input type="checkbox" /> */}
          <span
            className="checkmark"
            onClick={() => {
              props.onChecked(props.id);
            }}
          ></span>
          <span
            onDoubleClick={() => {
              props.onDoubleClick(props.id);
            }}
          >
            {props.text}
          </span>
        </label>
      </div>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onChecked: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ListItem;
