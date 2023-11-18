/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <>
      <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="addItem">Add Item</label>
        <input
          ref={inputRef}
          type="text"
          id="addItem"
          placeholder="Add Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        />
        <button
          type="submit"
          aria-label="Add Item"
          className="formButton"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
    </>
  );
};

export default AddItem;
