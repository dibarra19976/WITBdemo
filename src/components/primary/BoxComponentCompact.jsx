export const BoxComponentCompact = ({ boxObj }) => {
  // console.log(boxObj);
  return (
    <div className="box-compact box">
      <img src={`./${boxObj.img}`} alt="" className="boxImg" />
      <h1>{boxObj.name}</h1>
      <span className="info">
        <span className="label">Owner:</span> {boxObj.owner}
      </span>
      <span className="info">
        <span className="label">Items:</span> {boxObj.items}
      </span>
    </div>
  );
};

//add props validation