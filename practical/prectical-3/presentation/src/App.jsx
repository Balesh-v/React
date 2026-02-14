import React from "react";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";

const App = () => {
  const user = [
    {
      img: "https://i.pinimg.com/736x/97/29/82/972982ec787befacdc9df0bef36eb708.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,doloribus?",
      buttonText: "Satisfied",
      color : "blue",
    },

    {
        img: "https://i.pinimg.com/736x/70/e2/a7/70e2a742e956ce3bef21f2a1efc5e0e2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,doloribus?",
        buttonText: "Underservice",
        color : "red",
    },

    {
        img: "https://i.pinimg.com/736x/94/b8/45/94b845821b69f9e1926e5f4fd3753c31.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,doloribus?",
        buttonText: "Underbreak",
        color : "black",
    }


  ];

  return (
    <>
      <Page1  puser={user} />
      <Page2 />
      <Page3 />
    </>
  );
};

export default App;
