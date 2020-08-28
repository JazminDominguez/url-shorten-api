import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLink } from "../actions/index";
import { Flex, Box } from "rebass";

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
    <form className="form-container">
      <Flex flexWrap="wrap" flexDirection={["column", "row"]} padding={[3]}>
        <Box width={[1, 1 / 2]} padding={[1]}>
          <Flex flexDirection="column">
            <input
              type="text"
              className={error === true ? "error error--message" : ""}
              placeholder="Shorten a link here..."
              onChange={handleChange}
              value={originalLink}
            />
            {error ? (
              <span className="error">please add a link</span>
            ) : (
              <span />
            )}
          </Flex>
        </Box>
        <Box width={[1, 1 / 2]} textAlign="center" padding={[1]}>
          <button
            className="button_shorten_it"
            type="submit"
            onClick={handleSubmit}
          >
            Shorten It!
          </button>
        </Box>
      </Flex>
    </form>
  );
};

export default Form;
