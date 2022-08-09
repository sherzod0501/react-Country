import "./List.css";

export const List = ({ children, theme }) => {
  return <ul className={`${theme} Card-list`}>{children}</ul>;
};
