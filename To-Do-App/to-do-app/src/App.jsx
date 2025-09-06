  import ToDoList from "./components/ToDoList";
 
 export default function App() {
   const styles = {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     // backgroundColor: "#f5f5f5",
     // minHeight: "100vh",
   };
 
   return (
     <div style={styles} className="card">
       <ToDoList />
     </div>
   );
 }
 