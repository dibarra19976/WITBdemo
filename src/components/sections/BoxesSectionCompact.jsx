import { BoxComponentCompact } from "../primary/BoxComponentCompact";

export const BoxesSectionCompact = ({ list }) => {
  return (
    <div className="boxes-compact">
      {list.map((box) => {
        return <BoxComponentCompact boxObj={box} key={box.name} />;
      })}
    </div>
  );
};

//add props validation
