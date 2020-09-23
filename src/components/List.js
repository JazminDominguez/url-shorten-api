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

  const linksList =
    Object.keys(links).length > 0 ? (
      links.map((link) => {
        return (
          <Flex
            className="collection-links"
            flexDirection={["column", "column", "row"]}
            marginY={[3]}
            key={link.hashid}
          >
            <Box
              className="original-link-container"
              width={[1, 1, 6 / 12, 7 / 12]}
            >
              <p className="original-link">{link.url}</p>
            </Box>
            <Box
              className="cropped-link-container"
              width={[1, 1, 4 / 12, 4 / 12]}
            >
              <p className="cropped-link"> https://rel.ink/{link.hashid}</p>
            </Box>
            <Box
              className="copy-button-container"
              id={link.hashid}
              width={[1, 1, 2 / 12, 1 / 12]}
            >
              <button
                id={link.hashid}
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
      <div />
    );
  return <section id="list">{linksList}</section>;
};

List.propTypes = {
  links: PropTypes.object,
};
export default List;
