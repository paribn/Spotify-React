import { useDispatch } from "react-redux";
import { Icon } from "../Icons";
import { useState } from "react";
import { setData } from "../../redux/slices/filters";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleFilter = async (e) => {
    if (searchValue.length === 0) {
      dispatch(setData([]));
      return;
    }
    e.preventDefault();
    const result = await fetch(
      `https://localhost:44365/api/Search?input=${searchValue}`
    );
    const data = await result.json();

    dispatch(setData(data));
  };
  return (
    <>
      <div className="mr-auto ml-4 relative">
        <form onSubmit={(e) => handleFilter(e)}>
          <label
            htmlFor="search-input"
            className="w-12 h-12 flex  justify-center items-center absolute top-0 left-0 "
          >
            <Icon name="search" />
          </label>
          <input
            autoFocus={true}
            value={searchValue}
            type="text"
            id="search-input"
            className="h-10 bg-search text-sm pl-12 text-white p-6 rounded-3xl placeholder-textColor/60 max-w-full  w-[22.75rem] "
            placeholder="What do you want to play?"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
export default Search;
