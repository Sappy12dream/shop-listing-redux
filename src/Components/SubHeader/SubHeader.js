import { useState } from "react";
import { useDispatch } from "react-redux";
import { setArea, setCate, setStatus } from "../../Services/ShopSlice";
import Modal from "../Modal/Modal";
function SubHeader() {
  const [Toggle, setToggle] = useState(false);
  const [OpenA, setOpenA] = useState(false);
  const [OpenC, setOpenC] = useState(false);
  const [OpenS, setOpenS] = useState(false);
  const dispatch = useDispatch();
  const handleArea = (a) => {
    dispatch(setArea(a));
    setOpenA(false);
  };
  const handleCate = (a) => {
    dispatch(setCate(a));
    setOpenC(false);
  };
  const handleStatus = (a) => {
    dispatch(setStatus(a));
    setOpenS(false);
  };
  const Areas = [
    "All",
    "Thane",
    "Pune",
    "Mumbai Suburban",
    "Nashik",
    "Nagpur",
    "Ahmednagar",
    "Solapur",
  ];
  const categories = [
    "All",
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
  ];
  const status = ["All", "Open", "Close"];
  return (
    <div className="Sub__header">
      <div className="sub_filters">
        <>
          <button onClick={() => setOpenA(!OpenA)}>Area</button>
          {OpenA && (
            <div className="dropdown">
              {Areas?.map((a) => (
                <span key={a} onClick={() => handleArea(a)}>
                  {a}
                </span>
              ))}
            </div>
          )}
        </>
        <>
          <button onClick={() => setOpenC(!OpenC)}>Category</button>
          {OpenC && (
            <div className="dropdown cat">
              {categories?.map((a) => (
                <span key={a} onClick={() => handleCate(a)}>
                  {a}
                </span>
              ))}
            </div>
          )}
        </>
        <>
          <button onClick={() => setOpenS(!OpenS)}>Status</button>
          {OpenS && (
            <div className="dropdown status">
              {status?.map((a) => (
                <span key={a} onClick={() => handleStatus(a)}>
                  {a}
                </span>
              ))}
            </div>
          )}
        </>
      </div>
      <div className="add_new">
        <button onClick={() => setToggle(true)} style={{ color: "white" }}>
          ADD
        </button>
      </div>
      <Modal Toggle={Toggle} setToggle={setToggle} />
    </div>
  );
}

export default SubHeader;
