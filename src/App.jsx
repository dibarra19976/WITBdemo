import { useEffect, useState } from "react";
import { NavBarDemo } from "./components/NavBarDemo";
import { Home } from "./components/views/Home";
import { ViewButtons } from "./components/ViewButtons";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Login } from "./components/views/Login";
import { Register } from "./components/views/Register";
import { Profile } from "./components/views/Profile";
import { FilteredObjects } from "./components/sections/FilteredObjects";


function App() {
  // const list = [
  //   {
  //     name: "DVDs",
  //     img: dvdImg,
  //     owner: 1717660323010,
  //     items: 12,
  //     id: 1,
  //   },
  //   {
  //     name: "BDs",
  //     img: bdImg,
  //     owner: 1717660323010,
  //     id: 2,
  //   },

  //   {
  //     name: "Cats",
  //     img: catImg,
  //     owner: 1717660323010,
  //     id: 3,
  //   },
  // ];

  const [view, setView] = useState(
    localStorage.getItem("view") ? localStorage.getItem("view") : "card"
  );

  const [users, setUsers] = useState([]);

  const [logged, setLogged] = useState({});

  const [objects, setObjects] = useState([]);

  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("logged")) {
      setLogged(JSON.parse(localStorage.getItem("logged")));
    } else {
      localStorage.setItem("logged", "{}");
      setLogged(JSON.parse(localStorage.getItem("logged")));
    }

    if (localStorage.getItem("users")) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    } else {
      localStorage.setItem("users", "[]");
      setUsers(JSON.parse(localStorage.getItem("users")));
    }

    if (localStorage.getItem("objects")) {
      setObjects(JSON.parse(localStorage.getItem("objects")));
    } else {
      localStorage.setItem("objects", "[]");
      setObjects(JSON.parse(localStorage.getItem("objects")));
    }

    if (localStorage.getItem("boxes")) {
      setBoxes(JSON.parse(localStorage.getItem("boxes")));
    } else {
      localStorage.setItem("boxes", "[]");
      setBoxes(JSON.parse(localStorage.getItem("boxes")));
    }
  }, []);

  // function/event handlers
  const handleChange = (e) => {
    let newView = e.target.getAttribute("data-view");
    console.log(newView);
    if (view != newView) {
      setView(newView);
      localStorage.setItem("view", newView);
    }
  };

  const handleCreateUser = (user) => {
    let exists = false;
    users.forEach((e) => {
      if (e.email === user.email) exists = true;
    });
    if (exists) return false;
    user.id = new Date().getTime();
    setLogged(user);
    setUsers([...users, user]);
    localStorage.setItem("users", JSON.stringify([...users, user]));
    localStorage.setItem("logged", JSON.stringify(user));
    return true;
  };

  const handleLogIn = (user) => {
    let loginUser = null;
    users.forEach((e) => {
      if (e.email === user.email && e.password === user.password) loginUser = e;
    });
    if (loginUser === null) return false;
    setLogged(loginUser);
    localStorage.setItem("logged", JSON.stringify(loginUser));
    return true;
  };

  const handleNewObject = (object) => {
    let id = new Date().getTime();
    if (logged.id) {
      let newObj = { ...object, id, userId: logged.id };
      setObjects([...objects, newObj]);
      localStorage.setItem("objects", JSON.stringify([...objects, newObj]));
      return true;
    } else {
      return false;
    }
  };

  const handleNewBox = (box) => {
    let id = new Date().getTime();
    if (logged.id) {
      let newBox = { ...box, id, owner: logged.id };
      setBoxes([...boxes, newBox]);
      localStorage.setItem("boxes", JSON.stringify([...boxes, newBox]));
      return true;
    } else {
      return false;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBarDemo user={logged} />
          <main>
            <ViewButtons handleChange={handleChange} view={view} />{" "}
            <Home
              view={view}
              list={boxes}
              objects={objects}
              handleNewObject={handleNewObject}
              handleNewBox={handleNewBox}
            />
          </main>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBarDemo user={logged} />
          <main>
            <Login handleLogIn={handleLogIn} />
          </main>
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <NavBarDemo user={logged} />
          <main>
            <Register handleCreateUser={handleCreateUser} />
          </main>
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <NavBarDemo user={logged} />
          <main>
            <Profile user={logged} />
          </main>
        </>
      ),
    },
    {
      path: "/box/:id",
      element: (
        <>
          <NavBarDemo user={logged} />
          <main>
            <FilteredObjects boxes={boxes} objects={objects} />
          </main>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
