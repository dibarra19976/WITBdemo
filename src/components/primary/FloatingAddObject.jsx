import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

export const FloatingAddObject = ({ boxes, handleNewObject}) => {
  

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
    let resp = handleNewObject({ name, size, description, extrainfo, boxId });
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

  const {
    onInputChange,
    onResetForm,
    name,
    size,
    description,
    extrainfo,
    boxId,
  } = useForm({
    name: "",
    size: "",
    description: "",
    extrainfo: "",
    boxId: 1,
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
          <h1 className="font-semibold text-xl">New Object</h1>
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
              <h1>Size</h1>
              <input
                type="text"
                name="size"
                className="rounded-lg bg-slate-200 w-full h-10 p-1"
                value={size}
                onInput={onInputChange}
                required
              />
            </div>
            <div>
              <h1>Description</h1>
              <input
                type="text"
                name="description"
                className="rounded-lg bg-slate-200 w-full h-10 p-1"
                value={description}
                onInput={onInputChange}
                required
              />
            </div>
            <div>
              <h1>Extra info</h1>
              <input
                type="text"
                name="extrainfo"
                className="rounded-lg bg-slate-200 w-full h-20 p-1"
                value={extrainfo}
                onInput={onInputChange}
              />
            </div>
            <div>
              <h1>Box</h1>
              {/* <input
                type="text"
                name="password"
                className="rounded-lg bg-slate-200 w-full h-20 p-1"
                value={password}
                onInput={onInputChange}
                required
              /> */}
              <select
                name="boxId"
                id="boxId"
                className="rounded-lg bg-slate-200 w-full h-10 p-1"
                value={boxId}
                onInput={onInputChange}
              >
                {boxes.map((e) => {
                  console.log(e);
                  return (
                    <option value={e.id} key={e.id}>
                      {e.name}
                    </option>
                  );
                })}
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
      <button className="absolute bottom-0 right-0  " onClick={handleNewPopup}>
        <span className="material-icons-round text-7xl m-10 activebtn">
          add_circle
        </span>
      </button>
    </>
  );
};
