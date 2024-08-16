import React from "react";

function CreateComponent({
  currentWord,
  onChangeText,
  setIsActive,
  setCurrentKey,
  count,
}) {
  return (
    <div className="create-component mt-4 d-flex align-items-center">
      <div className="form-group mb-2 mr-2 flex-grow-1">
        <input
          type="text"
          className="form-control"
          placeholder="Type to start..."
          onChange={(e) => onChangeText(e)}
          onKeyUp={(e) => {
            setIsActive(true);
            setCurrentKey(e.key);
          }}
          value={currentWord}
          autoFocus
        />
      </div>
      <button className="btn btn-outline-primary mb-2 mr-2 timer-button">
        0:{count < 10 ? `0${count}` : count}
      </button>
      <button className="btn btn-outline-danger mb-2" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
}

export default CreateComponent;
