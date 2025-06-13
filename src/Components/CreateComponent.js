import React from "react";
import PropTypes from 'prop-types';

const CreateComponent = ({
  currentWord,
  onChangeText,
  setIsActive,
  setCurrentKey,
  count,
  onRefresh = () => {},
}) => {
  const handleInputChange = (e) => {
    onChangeText(e);
  };

  const handleKeyUp = (e) => {
    setIsActive(true);
    setCurrentKey(e.key);
  };

  return (
    <div className="create-component mt-4 d-flex align-items-center">
      <div className="form-group mb-2 mr-2 flex-grow-1">
        <input
          type="text"
          className="form-control"
          placeholder="Type to start..."
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          value={currentWord}
          autoFocus
        />
      </div>
      <button className="btn btn-outline-primary mb-2 mr-2 timer-button">
        0:{count < 10 ? `0${count}` : count}
      </button>
      <button className="btn btn-outline-danger mb-2" onClick={onRefresh}>
        Refresh
      </button>
    </div>
  );
};

CreateComponent.propTypes = {
  currentWord: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
  setCurrentKey: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default CreateComponent;
