import { findByLabelText } from "@testing-library/react";
import React, {useState} from "react";

import "../Item/styles.css";

function Item(props) {
  // const color = props.color;
  // const active = props.active;
  //Or dùng cách dưới để khai báo biến
  // const {color, name, active} = props;

  // const itemColorStyle = {
  //   height: 200,
  //   backgroundColor: color,
  // };
  const { member, name, index,active,listActiveIndex, setListActiveIndex } = props;
  // console.log(props);

  const renderMembers = () => {
    return member.map((member, index) => {
      if (index > 2) {
        return null;
      }
      return (
        <img
          key={index}
          className="border rounder-circle mr-1"
          src={member.img}
          alt={member.name}
          width={50}
          height={50}
        />
      );
    });
  };

  const renderMoreMember = () => {
    if (member.length <= 3) return null;
    return (
      <div
        className="d-flex bg-dark text-white justify-content-center align-item-center border rounded-circle"
        style={{ width: 50, height: 50, }}
      >
        +{member.length - 3}
      </div>
    );
  };

  // let itemclass = "";
  // if (active) {
  //   itemclass = "item item-active";
  // } else {
  //   itemclass = "item";
  // }

  // let itemclass = active ? "item-active" : "";
  const [countValue, setCountValue] = useState(1);

  const countPlus = () =>{
    setCountValue(countValue +1)
  }

  return (
    <div className="col-md-4">
      <div className={`item ${active === index ? "item-active" : "" }`}>
        <div className="p-2">
          <div className="d-flex">
            <h4>
              {name} - {countValue}
            </h4>
            <button className=" ml-4 btn btn-primary" style={{width: 80}} onClick={() => setListActiveIndex(index)}>
              Select
            </button>
          </div>
          <div className="d-flex">
            {renderMembers()}
            {renderMoreMember()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
