import React from "react";
import "./App.css";
import { AuthUser } from "./components/AuthUser";
import { Customer } from "./components/Customer";
import { EmployeeCard } from "./components/EmployeeCard";
import { HobbySelector } from "./components/HobbySelector";
import { HobbySelectorRadio } from "./components/HobbySelectorRadio";

// 🚀 Class Based Component 🚀
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
//           <div className="conatainer">
//             <a href="/" className="navbar-brans text-white">
//               React Hooks
//             </a>
//           </div>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

//  🚀🚀🚀🚀  Functional Component  🚀🚀🚀🚀  //

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brans text-white h3">
            React Hooks With Conditionals and Looping
          </a>
          <ul className="ml-auto font-weight-bold text-white">
            <li>Login</li>
          </ul>
        </div>
      </nav>

      <AuthUser />

      <HobbySelector />

      <HobbySelectorRadio />

      <EmployeeCard />
      <Customer />

      <div style={{ marginBottom: 150 }}></div>
    </React.Fragment>
  );
};

export default App;
