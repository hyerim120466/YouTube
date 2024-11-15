import { Button } from "../../ui/Button";

const TopMenu = ({ name, category, thisMenu, setThisMenu }) => {
  return (
    <li
      className={`top-menu-li ${thisMenu === category ? " active" : ""}`}
      onClick={() => setThisMenu(category)}
    >
      <Button className="top-menu-button">{name}</Button>
    </li>
  );
};

export default TopMenu;
