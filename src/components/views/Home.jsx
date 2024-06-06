import { BoxesSection } from "../sections/BoxesSection";
import { BoxesSectionCompact } from "../sections/BoxesSectionCompact";

import { CollectionSection } from "../sections/CollectionSection";

import { FloatingAddObject } from "../primary/FloatingAddObject";
import { FloatingAddBox } from "../primary/FloatingAddBox";

export const Home = ({ view, list, handleNewObject, handleNewBox }) => {
  const collection = { name: "Private collection", owner: "You", boxes: list };

  const collectionlist = [collection];

  switch (view) {
    case "card":
      return (
        <>
          <div className="home">
            <h1 className="text-4xl font-bold">Your Boxes</h1>
            <BoxesSection list={list} />
            {/* <h1>Your Collections</h1>
            <CollectionSection list={collectionlist} /> */}
            <FloatingAddObject
              boxes={list}
              handleNewObject={handleNewObject}
            ></FloatingAddObject>
            <FloatingAddBox handleNewBox={handleNewBox}></FloatingAddBox>
          </div>
        </>
      );
    case "compact":
      return (
        <>
          <div className="home">
            <h1 className="text-4xl font-bold">Your Boxes</h1>
            <BoxesSectionCompact list={list} />
            {/* <h1>Your Collections</h1>
            <CollectionSection list={collectionlist} /> */}
            <FloatingAddBox handleNewBox={handleNewBox}></FloatingAddBox>
            <FloatingAddObject
              boxes={list}
              handleNewObject={handleNewObject}
            ></FloatingAddObject>
          </div>
        </>
      );
    case "list":
      return (
        <>
          <div className="home">
          <h1 className="text-4xl font-bold">Your Boxes</h1>
            <BoxesSection list={list} />
            {/* <h1>Your Collections</h1>
            <CollectionSection list={collectionlist} /> */}
          </div>{" "}
          <FloatingAddBox handleNewBox={handleNewBox}></FloatingAddBox>
          <FloatingAddObject
            boxes={list}
            handleNewObject={handleNewObject}
          ></FloatingAddObject>
        </>
      );
    default:
      return (
        <>
          <div className="home">
          <h1 className="text-4xl font-bold">Your Boxes</h1>
            <BoxesSection list={list} />
            <h1>Your Collections</h1>
            <CollectionSection list={collectionlist} />
            <FloatingAddObject
              boxes={list}
              handleNewObject={handleNewObject}
            ></FloatingAddObject>
            <FloatingAddBox handleNewBox={handleNewBox}></FloatingAddBox>
          </div>
        </>
      );
  }
};
