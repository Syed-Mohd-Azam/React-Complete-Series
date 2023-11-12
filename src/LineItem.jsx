/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <>
      <li className="item">
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
    </>
  );
};
export default LineItem;
