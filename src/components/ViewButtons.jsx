export const ViewButtons = ({ handleChange, view }) => {
  return (
    <div className="w-full flex justify-end mt-12">
      <button
        data-view="card"
        className={view === "card" ? "activebtn" : ""}
        onClick={handleChange}
      >
        <span data-view="card" className="material-icons-round text-4xl">
          grid_view
        </span>
      </button>
      <button
        data-view="compact"
        className={view === "compact" ? "activebtn" : ""}
        onClick={handleChange}
      >
        <span data-view="compact" className="material-icons-round text-4xl">
          view_agenda
        </span>
      </button>
      <button
        data-view="list"
        className={view === "list" ? "activebtn" : ""}
        onClick={handleChange}
      >
        <span data-view="list" className="material-icons-round text-4xl">
          table_rows
        </span>
      </button>
    </div>
  );
};
