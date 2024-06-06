import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

import dvdImg from "../../assets/dvd.jpeg";
import bdImg from "../../assets/bd.jpg";
import catImg from "../../assets/cat.jpg";

export const FloatingAddBox = ({ handleNewBox }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewPopup = () => {
    setIsModalOpen(true);
    disableScroll()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onResetForm();
    enableScroll();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let resp = handleNewBox({ name, img });
    onResetForm();
    setIsModalOpen(false);
    enableScroll();
    if (resp) {
      Swal.fire({
        title: "New object created!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Somethign went wrong.",
        icon: "error",
      });
    }
  };

  const { onInputChange, onResetForm, name, img } = useForm({
    name: "",
    img: dvdImg,
  });

  function disableScroll() { 
    document.body.classList.add("remove-scrolling"); 
  } 
  
  function enableScroll() { 
    document.body.classList.remove("remove-scrolling"); 
  }
  
  return (
    <>
      <div
        className={
          "absolute  top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-50 flex justify-center align-middle items-center " +
          (isModalOpen ? "" : "hidden")
        }
      >
        <div className="bg-white rounded-lg w-80 min-h-96  p-10 shadow-md ">
          <h1 className="font-semibold text-xl">New Box</h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <h1>Name</h1>
              <input
                type="text"
                name="name"
                className="rounded-lg bg-slate-200 w-full h-10 p-1 "
                value={name}
                onInput={onInputChange}
                required
              />
            </div>
            <div>
              <h1>Image</h1>
              {/* <input
                type="text"
                name="password"
                className="rounded-lg bg-slate-200 w-full h-20 p-1"
                value={password}
                onInput={onInputChange}
                required
              /> */}
              {/* <select
                name="boxId"
                id="boxId"
                value={boxId}
                onInput={onInputChange}
              >
                {boxes.map((e) => {
                  console.log(e);
                  return (
                    <option value={e.name} key={e.id}>
                      {e.name}
                    </option>
                  );
                })}
              </select> */}
              <select
                name="img"
                id="img"
                value={img}
                onInput={onInputChange}
                className="rounded-lg bg-slate-200 w-full h-10 p-1"
              >
                <option value={dvdImg}>Image 1</option>
                <option value={bdImg}>Image 2</option>
                <option value={catImg}>Image 3</option>
              </select>
            </div>
            <div className="flex gap-1 mt-3">
              <button
                type="submit"
                className="rounded-lg text-white font-semibold w-full h-10 p-1 btn-color"
              >
                Añadir
              </button>
              <button
                className="rounded-lg text-white font-semibold w-full h-10 p-1 btn-color-second"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      <button className="absolute bottom-0 right-24  " onClick={handleNewPopup}>
        <span className="material-icons-round text-7xl m-10 btn-second">
          add_circle
        </span>
      </button>
    </>
  );
};
