import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const List = () => {
  const links = useSelector((state) => state);

  const linksList = links ? (
    links.map((link) => {
      return (
        <div className="collection-item" key={link.hashid}>
          <span>{link.url}</span>
          <span>https://rel.ink/{link.hashid}</span>
        </div>
      );
    })
  ) : (
    <p>you have no links left</p>
  );
  return <div>{linksList}</div>;
};

List.propTypes = {
  links: PropTypes.object,
};
export default List;
