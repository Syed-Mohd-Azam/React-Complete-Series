/* eslint-disable react/prop-types */
const Footer = ({ length }) => {
  return (
    <>
      <footer>
        <p>
          {length > 0
            ? `${length} List ${length === 1 ? "item" : "items"}`
            : "No items in the List"}
        </p>
      </footer>
    </>
  );
};
export default Footer;
