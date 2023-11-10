import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
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
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...items, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <>
      <main>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label>{item.item}</label>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <h1>List is Empty!</h1>
        )}
      </main>
    </>
  );
};
export default Content;
