import React, { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBox = {
  className: string;
  placeHolder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ onChangeHandler, className, placeHolder }: SearchBox) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
