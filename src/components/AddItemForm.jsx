import { useState, useRef } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!itemText) {
      alert("Item can't be empty");
      return;
    }

    onAddItem(itemText);
    inputRef.current.focus();
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        type='text'
        onChange={(e) => {
          setItemText(e.target.value);
          // console.log(itemText);
        }}
        autoFocus
      />
      <Button className='btn'>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
