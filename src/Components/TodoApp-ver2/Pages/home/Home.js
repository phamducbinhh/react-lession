import React from "react";
import Footer from "../../Footer";
import FormInput from "../../FormInput";
import ListItem from "../../ListItem";
import Navbar from "../../Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Main">
        <h1>TodoList</h1>
        <FormInput />
        <ListItem />
        <Footer />
      </div>
    </>
  );
};

export default Home;
