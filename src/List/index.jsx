import React, {useState} from "react";
import Item from "../Item";

import "../List/styles.css";
function List(props) {
  const { dataList } = props;
  const listContentCss = {
    padding: 16,
  };
  const [listActiveIndex, setListActiveIndex] = useState(0);

  // [].map((item,index)=>{})

  const renderItems = () => {
    return  dataList.map((item, index)=>{
      return(
        <Item 
        key={index} 
        index={index}
        member={item.information} 
        active = {listActiveIndex}
        setListActiveIndex={setListActiveIndex}
        name={item.name} />   
      );  
    });
  }
  
  return (
    <div className="list-container">
      <div style={listContentCss}>
        <div className="row">{renderItems()}</div>
      </div>
    </div>
  );
}
export default List;
