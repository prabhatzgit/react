import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchaseBook from "src/reduxContainer/BookContainer.jsx";

const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <>
      <div>BookContainer</div>
      <h2>No of books : {noOfBooks}</h2>
      <button onClick={() => dispatch(purchaseBook)}>Buy Book</button>
    </>
  );
};

export default BookContainer;
