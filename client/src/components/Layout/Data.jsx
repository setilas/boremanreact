import { connect } from "mongoose";
import React from "react";
import DataTables from "./DataTable";

const tableData = [
  {
    code: "1",
    name: "Product ",
    active: "5",
    total: "2018-04-18T00:00:00",
    total_work: "123",
    info: <button className="btn btn-primary">More info</button>,
  },
  {
    code: "1",
    name: "Product Menu",
    active: "7",
    total: "2018-04-18T00:00:00",
    total_work: "123",
    info: <button className="btn btn-primary">More info</button>,
  },
  {
    code: "2",
    name: " Menu",
    active: "4",
    total: "2018-04-18T00:00:00",
    total_work: "123",
    info: <button className="btn btn-primary">More info</button>,
  },
  {
    code: "4",
    name: "Product Menu",
    active: "4",
    total: "2018-04-18T00:00:00",
    total_work: "123",
    info: <button className="btn btn-primary">More info</button>,
  },

  {
    code: "4",
    name: "Product Menu",
    active: "6",
    total: "2018-04-18T00:00:00",
    total_work: "123",
    info: <button className="btn btn-primary">More info</button>,
  },
];

export const Data = () => {
  return <DataTables tableData={tableData} />;
};
