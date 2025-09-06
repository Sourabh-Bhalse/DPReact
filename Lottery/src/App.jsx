 import React from "react";
import Lottery from "./components/Lottery";
import Form from "./components/Form";
import Comments from "./components/Comment";
import CommentBox from "./components/CommentBox";
import Joker from "./components/Joker";

export default function App() {
  return (
    <div>
       {/* <Form /> */}
       <br /><br /><hr />
       {/* <Comments /> */}
       < Joker />
       <br /><br /><hr />
       <CommentBox/>
       <hr />
      
      <Lottery />
     
    </div>
  );
}