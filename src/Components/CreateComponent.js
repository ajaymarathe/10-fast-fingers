import React from "react";

function CreateComponent({
  currentWord,
  onChangeText,
  setIsActive,
  setCurrentKey,
  count,
}) {
  return (
    <div className="mt-5 d-flex">
      <div className="form-group mb-2 mr-2">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          onChange={(e) => onChangeText(e)}
          onKeyUp={(e) => {
            setIsActive(true);
            setCurrentKey(e.key);
          }}
          value={currentWord}
          style={{ width: "100%" }}
        />
      </div>
      <button className="btn btn-primary mb-2 mr-2">
        0:{count < 10 ? `0${count}` : count}
      </button>
      <button className="btn btn-primary mb-2" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
}

export default CreateComponent;
