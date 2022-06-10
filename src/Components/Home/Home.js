import { useSelector } from "react-redux";
import {
  area,
  category,
  selectAllShop,
  status,
} from "../../Services/ShopSlice";
import ShopCard from "../ShopCard/ShopCard";

function Home() {
  const shopList = useSelector(selectAllShop);
  const areaVal = useSelector(area);
  const categoryVal = useSelector(category);
  const statusVal = useSelector(status);
  const shortedList = shopList?.filter((el) => {
    if (areaVal === "All") {
      return true;
    }
    return !areaVal.localeCompare(el.area);
  });
  const filteredList = shortedList?.filter((el) => {
    if (categoryVal === "All") {
      return true;
    }
    return !categoryVal.localeCompare(el.category);
  });

  const finalList = filteredList?.filter((el) => {
    if (statusVal === "All") {
      return true;
    }
    if (statusVal === "Open") return new Date(el.closingDate) > Date.now();
    if (statusVal === "Close") return new Date(el.closingDate) < Date.now();
    return false;
  });

  return (
    <div className="Home">
      <div className="Shop__card card">
        <div className="shop__name font">Name</div>
        <div className="shop__area font">Area</div>
        <div className="shop__category font">Category</div>
        <div className="shop__status font">Status</div>
        <div className="shop__action font">Actions</div>
      </div>
      {finalList?.length === 0 ? (
        <div className="margin">No Shop available</div>
      ) : (
        finalList?.map((shop) => <ShopCard key={shop.id} shop={shop} />)
      )}
    </div>
  );
}

export default Home;
