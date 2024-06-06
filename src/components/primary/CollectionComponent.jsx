export const CollectionComponent = ({ collectionObj }) => {
  // console.log(collectionObj);
  return (
    <div className="collection">
      <h1>{collectionObj.name}</h1>
      <span className="info">
        <span className="label">Owner:</span> {collectionObj.owner}
      </span>
      <span className="info">
        <span className="label">Boxes:</span> {collectionObj.boxes.length}
      </span>
    </div>
  );
};

//add props validation
