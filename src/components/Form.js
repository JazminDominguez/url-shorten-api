import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLink } from "../actions/index";

const Form = () => {
  const dispatch = useDispatch();
  const [originalLink, setOriginalLink] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setOriginalLink(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (originalLink === "") {
      setError(true);
    } else {
      setOriginalLink("");
      dispatch(getLink(originalLink));
    }
  };

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleChange}
          value={originalLink}
        />
        {error ? <span>please add a link</span> : <span />}
      </div>
      <button className="shorten_it" type="submit" onClick={handleSubmit}>
        Shorten it!
      </button>
    </form>
  );
};

export default Form;
