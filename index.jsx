import useLocalStorage from "./useLoacalStorage";
import './theme.css'

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Welcome to my custom theme changer!</p>
        <button onClick={handleToggleTheme}>Theme Changer</button>
      </div>
    </div>
  );
}