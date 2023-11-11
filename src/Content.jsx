/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
const Content = (props) => {
  const { items, handleCheck, handleDelete } = props;
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
