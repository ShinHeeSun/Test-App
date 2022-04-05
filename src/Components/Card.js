import PropTypes from 'prop-types';

const Card = ({ id, password, onClick, children }) => {
  return (
    <div className="card mb-3 cursor-pointet " onClick={onClick}>
      <div className="card-body">{children}</div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Card;
