import { FcShop } from "react-icons/fc";
function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <h1>
          <FcShop /> <span>ShopList</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
