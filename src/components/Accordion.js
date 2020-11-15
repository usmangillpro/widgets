import React from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (index) => {
    console.log("Title was clicked", index);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui stylled accordion"> {renderedItems}</div>;
};

export default Accordion;
