import { Key } from 'react';

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Hats",
    // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    imageUrl: "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    // imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    imageUrl: "https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    // imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    imageUrl: "https://images.unsplash.com/photo-1512633611077-51bf3c872a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    imageUrl: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
