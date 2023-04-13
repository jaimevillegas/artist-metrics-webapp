import PropTypes from 'prop-types';

const Details = (props) => {
  // eslint-disable-next-line react/prop-types
  const { testProp } = props;

  console.log(testProp);

  return (
    <>
      <h1>Details</h1>
      <p>{testProp}</p>
    </>
  );
};

Details.protoTypes = {
  testProp: PropTypes.string.isRequired,
};

export default Details;
