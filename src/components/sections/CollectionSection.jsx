import { CollectionComponent } from "../primary/CollectionComponent";

export const CollectionSection = ({ list }) => {
  return (
    <div className="boxes">
      {list.map((collection) => {
        return (
          <CollectionComponent
            collectionObj={collection}
            key={collection.name}
          />
        );
      })}
    </div>
  );
};

//add props validation
