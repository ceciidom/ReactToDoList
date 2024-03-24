import "./ListItem.css";

function ListItem(props) {
  if (props.isEditing) {
    return (
      <div>
        <label className="listItem">
          <span className="checkmark"></span>
          <input className="editingText"
          type="text"
          value={props.text}
          onChange={props.onChange}
          onBlur={props.onSubmit} 
          autoFocus
          ></input>
        </label>
      </div>
    )
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

export default ListItem;