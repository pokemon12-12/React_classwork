const Errormessage = ({ itemError }) => {
  return (
    <>
      {itemError.length === 0 && <h3>I am still hungry</h3>}
    </>
  );
};

export default Errormessage;

