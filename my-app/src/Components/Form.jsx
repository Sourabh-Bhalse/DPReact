import React from 'react'
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted")
    return (
        <div>
            <p>form is submitted</p>
 
        
    </div>
    );
    
}

export default  function Form () {
  return (
   <form>
    <input placeholder="write something" />
    <button onClick={handleFormSubmit}>Submit</button>
   </form>
  )
}
 
