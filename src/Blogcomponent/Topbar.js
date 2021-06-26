import "./Topbar.css";
// export const Topbar = () => {
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIconsfab fa-instagram"></i>
//         <i className="topIconsfab fa-github"></i>
//         <i className="topIconsfab fa-linkedin"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">Home</li>
//           <li className="topListItem">About</li>
//           <li className="topListItem">Contact</li>
//           <li className="topListItem">Create</li>
//           <li className="topListItem">Portfolio</li>
//           <li className="topListItem">Logout</li>
//         </ul>
//       </div>
//   <div className="topRight">
//     <img
//       className="topImg"
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegdLPBUw9F-YVGoqjyYcgSA8VQOfyF4aFTg&usqp=CAU"
//       alt="profile"
//     />
//   </div>
//     </div>
//   );
// };

// import "../components/Navbar/Navbar.css";
import { NavLink, Link } from "react-router-dom";
const Topbar = () => {
  let currentUser = false;
  return (
    <div className="header">
      <div className="topLeft">
        <i className="topIcons fab fa-instagram"></i>
        <i className="topIcons fab fa-github"></i>
        <i className="topIcons fab fa-linkedin"></i>
      </div>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn-blog">
        <i className="fas fa-bars hid" />
      </label>
      <ul className="menu-blog">
        <li>
          <NavLink exact className="links" to="/Blog/">
            Posts
          </NavLink>
        </li>

        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/Blog/write"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="links"
            exact
            activeClassName="active_class"
            to="/"
          >
            Portfolio
          </NavLink>
        </li>
        <li>{currentUser && "Logout"}</li>
        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fas fa-times " />
        </label>
      </ul>
      <div className="topRight">
        {currentUser ? (
          <img
            className="topImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegdLPBUw9F-YVGoqjyYcgSA8VQOfyF4aFTg&usqp=CAU"
            alt="profile"
          />
        ) : (
          <ul className="menu-blog">
            <li>
              <NavLink
                className="links"
                exact
                activeClassName="active_class"
                to="/Blog/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links"
                exact
                activeClassName="active_class"
                to="/Blog/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Topbar;
