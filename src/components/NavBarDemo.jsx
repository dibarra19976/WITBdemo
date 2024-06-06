import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBarDemo = ({ user }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("logged", "{}");
    navigate("/");
    navigate(0);
  };

  return (
    <header className="header">
      <div className="left">
        <img src="/src/assets/logo2light.png" alt="Logo" />
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>

          {user.email ? (
            <>
              <>
                <li>
                  <NavLink
                    to={`/profile`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li onClick={handleLogOut}>Logout</li>
              </>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={`/login`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  LogIn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/register`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* <div className="right">
        <input type="text" name="" id="" placeholder="Search for an item...." />
      </div> */}
    </header>
  );
};
