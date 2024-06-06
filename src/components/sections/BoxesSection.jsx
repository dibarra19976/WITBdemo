import { BoxComponent } from "../primary/BoxComponent";

export const BoxesSection = ({ list }) => {
  return (
    <div className="boxes">
      {list.map((box) => {
        return <BoxComponent boxObj={box} key={box.name} />;
      })}
    </div>
  );
};

//add props validation
