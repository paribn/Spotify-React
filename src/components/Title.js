import { NavLink } from "react-router-dom";

function Title({ title, more = false, onClick }) {
  return (
    <header className="flex items-center justify-between mb-4">
      <NavLink to={more ?? "#"}>
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {title}
        </h3>
      </NavLink>

      <NavLink
        className={"text-sm hover:underline font-semibold text-link "}
        onClick={onClick}
      >
        {more ? "Show Less" : "Show All"}
      </NavLink>
    </header>
  );
}

export default Title;
