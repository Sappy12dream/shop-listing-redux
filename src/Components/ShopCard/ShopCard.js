import { useState } from "react";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteShop } from "../../Services/ShopSlice";
import Modal from "../Modal/Modal";
function ShopCard({ shop }) {
  const [Toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteShop(shop));
  };
  return (
    <div className="Shop__card ">
      <div className="shop__name font">{shop.name}</div>
      <div className="shop__area font">{shop.area}</div>
      <div className="shop__category font">{shop.category}</div>
      <div className="shop__status font">
        {new Date(shop.closingDate) > Date.now() ? "Open" : "Closed"}
      </div>
      <div className="shop__action font">
        <button className="shop__edit " onClick={() => setToggle(true)}>
          <AiTwotoneEdit />
        </button>
        <button onClick={handleDelete}>
          <AiTwotoneDelete />
        </button>
      </div>
      <Modal Toggle={Toggle} setToggle={setToggle} shop={shop} />
    </div>
  );
}

export default ShopCard;
