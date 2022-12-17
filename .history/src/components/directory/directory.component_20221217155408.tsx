import { Key } from 'react';

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    https://www.shutterstock.com/shutterstock/photos/161874146/display_1500/stock-photo-handsome-man-resting-161874146.jpg
    route: "shop/mens",
  },
];

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
}



const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
