import Header from "./Header";
import Content from "./Content";
import AddItem from "./AddItem";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Coca Cola",
    },
    {
      id: 2,
      checked: false,
      item: "Appy Fizz",
    },
    {
      id: 3,
      checked: false,
      item: "Lemon Juice",
    },
  ]);
  const [newItem, setNewItem] = useState("");
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: { item } };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  return (
    <>
      <div className="App">
        <Header title="Groceries List" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
