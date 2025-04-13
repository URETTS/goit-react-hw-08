import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../redux/filters/slice";  
import { selectNameFilter } from "../redux/filters/selectors";
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
        onChange={(e) => dispatch(setNameFilter(e.target.value))} 
      />
    </div>
  );
};

export default SearchBox;
