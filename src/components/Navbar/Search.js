import { Icon } from "../Icons";

function Search() {
  return (
    <>
      <div className="mr-auto ml-4 relative">
        <label
          htmlFor="search-input"
          className="w-12 h-12 flex  justify-center items-center absolute top-0 left-0 "
        >
          <Icon name="search" />
        </label>
        <input
          autoFocus={true}
          type="text"
          id="search-input"
          className="h-10 bg-search text-sm pl-12 text-white p-6 rounded-3xl placeholder-textColor/60 max-w-full  w-[22.75rem] "
          placeholder="What do you want to play?"
        />
      </div>
    </>
  );
}
export default Search;
