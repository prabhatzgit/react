import createStore from "react-redux";
import BookReducer from "./BookReducer";

export const store = createStore(BookReducer);
