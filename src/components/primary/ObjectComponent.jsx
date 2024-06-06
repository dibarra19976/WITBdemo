export const ObjectComponent = ({ object }) => {
  return (
    <div className="collection">
      <h1>{object.name}</h1>
      <span className="info">
        <span className="label">Size:</span> {object.size}
      </span>
      <span className="info">
        <span className="label">Description:</span> {object.description}
      </span>
      <span className="info">
        <span className="label">Extra info:</span> {object.extrainfo}
      </span>
    </div>
  );
};
