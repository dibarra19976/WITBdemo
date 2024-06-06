import { Link } from "react-router-dom";

export const BoxComponent = ({ boxObj }) => {
  // console.log(boxObj);
  return (
    <Link to={`/box/${boxObj.id}`}>
      <div className="box box-card">
        <img src={`./${boxObj.img}`} alt="" className="boxImg" />
        <h1>{boxObj.name}</h1>
        <span className="info">
          <span className="label">Owner:</span> {boxObj.owner}
        </span>
        <span className="info">
          <span className="label">Items:</span> {boxObj.items}
        </span>
      </div>
    </Link>
  );
};

//add props validation
