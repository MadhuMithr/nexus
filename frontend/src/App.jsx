// import Login from "./Login.jsx";
// import React from "react";
// function App() {
//   return(
//       <Login/>
    
//   );
// }

// export default App
import React from "react";
import Login from "./components/auth_comp/Login";
import Home from "./components/student_comp/Home";
import ManagePrograms from "./components/manage_programs/ManagePrograms";
function App() {
  return (
    <div>
    <ManagePrograms/>
    </div>
  );
}

export default App;
