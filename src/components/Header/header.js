import "./header.css";
const header = ({ theme, setTheme }) => {
  return (
    <header className={`${theme} header`}>
      <div className="header-wrapper">
        <h3 className="header-head">Where in the world?</h3>

        <select
          defaultValue={theme}
          onChange={(evt) => {
            setTheme(evt.target.value);
          }}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </header>
  );
};

export default header;
