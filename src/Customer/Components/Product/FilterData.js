export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      {
        value: "white",
        label: "White",
      },
      {
        value: "black",
        label: "Black",
      },
      {
        value: "red",
        label: "Red",
      },
      {
        value: "marun",
        label: "Marun",
      },
      {
        value: "being",
        label: "Being",
      },
      {
        value: "pink",
        label: "Pink",
      },
      {
        value: "green",
        label: "Green",
      },
      {
        value: "yellow",
        label: "Yellow",
      },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "2XL", label: "2XL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 - ₹399" },
      { value: "399-999", label: "₹399 - ₹999" },
      { value: "999-1999", label: "₹999 - ₹1999" },
      { value: "1999-2999", label: "₹1999 - ₹2999" },
      { value: "3999-4999", label: "₹3999 - ₹4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount",
    options: [
      { value: "10%", label: "10% or more" },
      { value: "20%", label: "20% or more" },
      { value: "30%", label: "30% or more" },
      { value: "40%", label: "40% or more" },
      { value: "50%", label: "50% or more" },
      { value: "60%", label: "60% or more" },
      { value: "70%", label: "70% or more" },
      { value: "80%", label: "80% or more" },
    ],
  },
  {
    id: "stock",
    name: "Stock",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out of Stock" },
    ],
  },
];
