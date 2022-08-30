import { useState } from "react";

const initialState = [
  {
    x: 10,
    y: 10,
    width: "100",
    height: "100",
    color: "red",
    fill: "rgba(255, 0, 0, 0.25)",
    id: "1",
  },
  {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    color: "green",
    fill: "rgba(0, 128, 0, 0.25)",
    id: "2",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    color: "blue",
    fill: "rgba(0, 0, 255, 0.25)",
    id: "3",
  },
  {
    x: 200,
    y: 200,
    width: 100,
    height: 100,
    color: "purple",
    fill: "rgba(128, 0, 128, 0.25)",
    id: "4",
  },
];

export default initialState;
