import React from "react";
import "./App.css";
import Header from "./Mycomponents/Header";
import SignInButt from "./Mycomponents/SignInButt";
function App() {
  
    const divStyle = {
      backgroundImage: "url(/img1.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "800px", // Adjust the height as needed
    };
    
  return (
    <>
    <Header />
    < SignInButt/>
    <h4>One Step Toward The Enviroment</h4>
      <div style={divStyle}></div>
         
  
    
  </>
  );
}

export default App;
