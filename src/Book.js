import React from "react";

const Book = (props) => {
  // props is an object

  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Happy Hacking");
  };

  // object structuring in JS 非React内容
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        reference
      </button>
    </article>
  );
};

export default Book;
