import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Flex, Box } from "rebass";

const List = () => {
  const links = useSelector((state) => state);
  const [buttonId, setButtonId] = useState("");
  const shortLinkRef = useRef(null);

  const handleClick = (e) => {
    setButtonId(e.target.id);
    navigator.clipboard.writeText(`https://rel.ink/${e.target.id}`);
  };

  const linksList = links ? (
    links.map((link) => {
      return (
        <Flex
          className="collection-links"
          flexDirection={["column", "row"]}
          marginY={[3]}
          key={link.hashid}
        >
          <Box className="original-link">{link.url}</Box>
          <Box className="cropped-link">https://rel.ink/{link.hashid}</Box>
          <Box id={link.hashid}>
            <button
              id={link.hashid}
              value={`https://rel.ink/${link.hashid}`}
              ref={shortLinkRef}
              className={
                "copy-button " + (buttonId === link.hashid ? "copied" : "")
              }
              onClick={handleClick}
            >
              {buttonId === link.hashid ? "Copied!" : "Copy"}
            </button>
          </Box>
        </Flex>
      );
    })
  ) : (
    <p>you have no links left</p>
  );
  return <section id="list">{linksList}</section>;
};

List.propTypes = {
  links: PropTypes.object,
};
export default List;
