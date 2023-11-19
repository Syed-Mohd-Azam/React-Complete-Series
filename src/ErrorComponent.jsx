/* eslint-disable react/prop-types */
const ErrorComponent = ({ fetchError }) => {
  return (
    <>
      <section className="error">
        <p>Oops!! {fetchError}</p>
      </section>
    </>
  );
};
export default ErrorComponent;
