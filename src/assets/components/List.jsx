import "./List.css";
import InputBox from "./InputBox";
import ListItem from "./ListItem";
import React, { useState } from "react";


function List() {
    const [items, setItems] = useState([]);

    const addItem = (inputText) => {
        console.log("added items: " + items);
        setItems(prevItems => {
            return [...prevItems, inputText]
        });
    }

    const deleteItem =(id) => {
        setItems(prevItems => {
            const newItems = prevItems.filter((item, index) => index !== id)
            return newItems
    })}

  return (
    <div className="card">
        <span className="title">To Do List</span>
        <InputBox click = {addItem}/>
        <div>
                {items.map((item, index) => (
                <ListItem
                    key = {index}
                    id = {index}
                    text = {item}
                    onChecked = {deleteItem}
                />
            ))}
        </div>
            
        
        

    </div>

  )
}

export default List;
