import Header from "./Header";
import Content from "./Content";
import AddItem from "./AddItem";
import Footer from "./Footer";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import apiRequest from "./apiRequest";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";
function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response);
        if (!response.ok) {
          throw new Error("Did not receive expected data ");
        }
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 3000);
  }, []);
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const handleCheck = async (id) => {
    debugger;
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {
      setFetchError(result);
    }
  };
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) {
      setFetchError(result);
    }
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
        <SearchItem search={search} setSearch={setSearch} />
        <main>
          {isLoading && <LoadingComponent />}
          {fetchError && <ErrorComponent fetchError={fetchError} />}
          {!isLoading && !fetchError && (
            <Content
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )}
        </main>
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
