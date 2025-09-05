 import React from 'react'
 import Counter from "./components/Counter"
 import LikeButton from './components/LikeButton'
 
 const App = () => {
  let styles ={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"

  }
   return (
     <div>
      <>
     <div style={styles} className="card">
       <h1>react states</h1>
      {/* < Counter /> */}
      < LikeButton />
     </div>
      </>
       
     </div>
   )
 }
 
 export default App
 