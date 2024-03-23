import "./List.css";
import InputBox from "./InputBox";
import ListItem from "./ListItem";
import React, { useState } from "react";


let itemId = 0;

export function List() {
    const [items, setItems] = useState([]);

    const addItem = (inputText) => {
        console.log("added items: " + items);
        const newItem = { id: itemId++, text: inputText };
        setItems(prevItems => [...prevItems, newItem]);
    }

    const deleteItem =(id) => {
        setItems(items.filter(item => item.id !== id));
            //return newItems
    };

  return (
    <div className="card">
        <span className="title">To Do List</span>
        <InputBox click = {addItem}/>
        <div>
                {items.map((item) => (
                <ListItem
                    key = {item.id}
                    id = {item.id}
                    text = {item.text}
                    onChecked = {deleteItem}
                />
            ))}
        </div>
    </div>

  )
}
