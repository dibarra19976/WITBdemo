import { BoxesSection } from "../sections/BoxesSection";
import { CollectionSection } from "../sections/CollectionSection";

export const Home = () => {
  const list = [
    {
      name: "DVDs",
      img: "dvd.jpeg",
      owner: "You",
      items: 12,
    },
{
      name: "BDs",
      img: "bd.jpg",
      owner: "You",
      items: 5,
    },

    {
      name: "Cats",
      img: "cat.jpg",
      owner: "You",
      items: 2,
    },
    {
      name: "DVDs",
      img: "dvd.jpeg",
      owner: "You",
      items: 12,
    },
    {
      name: "BDs",
      img: "bd.jpg",
      owner: "You",
      items: 5,
    },

    {
      name: "Cats",
      img: "cat.jpg",
      owner: "You",
      items: 2,
    },
  ];

  const collection = { name: "Private collection", owner: "You", boxes: list };

  const collectionlist = [collection]
  return (
    <>
      <div className="home">
        <h1>Your Boxes</h1>
        <BoxesSection list={list} />
        <h1>Your Collections</h1>
        <CollectionSection list={collectionlist} />
      </div>
    </>
  );
};
