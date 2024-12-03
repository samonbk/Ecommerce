import { create } from "zustand";

const product = [
  {
    id: 1,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 0,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 2,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 6,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 3,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 5,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 4,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 0,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 5,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 0,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 6,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 10,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 7,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 0,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
  {
    id: 8,
    name: "Macbook pro 2024",
    price: 1000,
    brand: "Apple",
    disscount: 8,
    image: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
      "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
    ],
  },
];

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  fetchProducts: () => {
    set({ products: product });
  },
}));
