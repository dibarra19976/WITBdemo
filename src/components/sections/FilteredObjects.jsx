import { useParams } from "react-router-dom";
import { ObjectComponent } from "../primary/ObjectComponent";

export const FilteredObjects = ({ boxes, objects }) => {
  let { id } = useParams();
  console.log(id);

  let filteredObj = objects.filter((e) => {
    return e.boxId == id;
  });
  console.log(objects);
  console.log(filteredObj);
  let box = { name: "box" };
  boxes.forEach((element) => {
    if (element.id == id) box = element;
  });
  return (
    <div>
      <h1 className="text-4xl font-bold my-10">Objects from {box.name}</h1>

      <div className="flex gap-2">
        {filteredObj.map((element) => {
          return (
            <ObjectComponent
              object={element}
              key={element.id}
            ></ObjectComponent>
          );
        })}
      </div>
    </div>
  );
};
