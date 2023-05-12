import React from "react";
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";
import Team from "./components/Team";

const App = () => {
 const frontPage=useSelector(state=>state.team.frontPage);
  const Data=useSelector(state=>state.team.arr);
console.log(Data);
  return <div className="app">
   {frontPage && <HomePage />}
   {!frontPage && <Team data={Data}/>}
  </div>;
};

export default App;
