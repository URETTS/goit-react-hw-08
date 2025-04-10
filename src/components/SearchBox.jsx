import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import { selectNameFilter } from "../redux/filtersSlice";
import { useId } from "react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);
  const searchFieldId = useId();

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={searchFieldId}
        value={searchTerm}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;

