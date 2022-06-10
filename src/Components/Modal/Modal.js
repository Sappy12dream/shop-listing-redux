import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { addShop } from "../../Services/ShopSlice";
function Modal({ Toggle, setToggle, shop }) {
  useEffect(() => {
    if (shop) {
      setShopDetails(shop);
    }
  }, [shop]);
  const [Errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const Areas = [
    "Thane",
    "Pune",
    "Mumbai Suburban",
    "Nashik",
    "Nagpur",
    "Ahmednagar",
    "Solapur",
  ];
  const categories = [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
  ];
  const dispatch = useDispatch();
  const initialValues = {
    id: nanoid(),
    name: "",
    area: "",
    category: "",
    openingDate: "",
    closingDate: "",
  };
  const [ShopDetails, setShopDetails] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopDetails({ ...ShopDetails, [name]: value });
  };
  const submitDetails = (e) => {
    e.preventDefault();
    setErrors(validate(ShopDetails));

    if (isSubmit) {
      dispatch(addShop(ShopDetails));
      setShopDetails(initialValues);
      setIsSubmit(false);
      setToggle(false);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setToggle(false);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Shop name is required!";
      setIsSubmit(false);
    } else if (values.name.search(/[^a-zA-Z]+/) === -1) {
      errors.name = "Only Alphabets is allowed!";
      setIsSubmit(false);
    } else if (!values.area) {
      errors.area = "Area is required!";
      setIsSubmit(false);
    } else if (!values.category) {
      errors.category = "Category is required!";
      setIsSubmit(false);
    } else if (!values.openingDate) {
      errors.openingDate = "Opening date is required!";
      setIsSubmit(false);
    } else if (!values.closingDate) {
      errors.closingDate = "Closing date is required!";
      setIsSubmit(false);
    } else if (new Date(values.openingDate) > new Date(values.closingDate)) {
      errors.closingDate = "Closing date cannot be before Opening date";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }

    return errors;
  };

  return (
    <div className={Toggle ? "Modal" : "none"}>
      <form className="form" onSubmit={submitDetails}>
        <h3>Add Shop</h3>
        <div>
          <label>Shop Name</label>
          <input
            type="text"
            placeholder="type here..."
            className="input"
            name="name"
            value={ShopDetails.name}
            onChange={handleChange}
          />
          {Errors?.name && <p style={{ color: "red" }}>{Errors.name}</p>}
        </div>
        <div>
          <label>Area</label>
          <select
            className="input"
            name="area"
            value={ShopDetails.area}
            onChange={handleChange}
          >
            {Areas?.map((a) => (
              <option value={a} key={a}>
                {a}
              </option>
            ))}
          </select>
          {Errors?.area && <p style={{ color: "red" }}>{Errors.area}</p>}
        </div>
        <div>
          <label>Category</label>
          <select
            className="input"
            value={ShopDetails.category}
            name="category"
            onChange={handleChange}
          >
            {categories?.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
          {Errors?.category && (
            <p style={{ color: "red" }}>{Errors.category}</p>
          )}
        </div>
        <div>
          <label>Opening Date</label>
          <input
            type="Date"
            placeholder=""
            className="input"
            name="openingDate"
            value={ShopDetails.openingDate}
            onChange={handleChange}
          />
        </div>
        {Errors?.openingDate && (
          <p style={{ color: "red" }}>{Errors.openingDate}</p>
        )}

        <div>
          <label>Closing Date</label>
          <input
            type="Date"
            placeholder=""
            className="input"
            name="closingDate"
            value={ShopDetails.closingDate}
            onChange={handleChange}
          />
        </div>
        {Errors?.closingDate && (
          <p style={{ color: "red" }}>{Errors.closingDate}</p>
        )}

        <div>
          <input type="submit" placeholder="" className="input button" />
        </div>
        <div>
          <button
            className="input button cancel"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
