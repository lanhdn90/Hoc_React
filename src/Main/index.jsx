import React from "react";
import Sidebar from "../Sidebar";
import List from "../List";

import "../Main/styles.css";

import Image from '../image/download.jpg'

function Main() {
  const dataList = [
    {
      name: "Group 1",
      information: [
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
      ],
    },
    {
      name: "Group 2",
      information: [
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
      ],
    },
    {
      name: "Group 3",
      information: [
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: Image,
          name: "Phòng 1",
        },
        {
          img: "#374052",
          name: "Phòng 1",
        },
        {
          img: "#374052",
          name: "Phòng 1",
        },
        {
          img: "#374052",
          name: "Phòng 1",
        },
      ],
    },
  ];
  return (
    <div className="main">
      <Sidebar />
      <List dataList={dataList} />
    </div>
  );
}
export default Main;
