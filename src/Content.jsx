/* eslint-disable react/prop-types */

import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      <main>
        {items.length > 0 ? (
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <h1>List is Empty!</h1>
        )}
      </main>
    </>
  );
};
export default Content;
