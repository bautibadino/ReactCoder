export const products = [
  {
      id: "1",
      name: "iPad Air",
      capacity: "256 GB",
      description: "Chip M1",
      year: "2022",
      img: "https://www.sagitariodigital.com.ar/wp-content/uploads/2022/03/ipad-air-2022-2.jpg",
      price: 810,
  },
  {
      id: "2",
      name: "iPad Pro",
      capacity: " 512 GB",
      description: "Chip M2",
      year: "2022",
      img: "https://cdn-ipoint.waugi.com.ar/21936-large_default/ipad-pro-129-wi-fi-128gb-5ta-gen-space-gray.jpg",
      price: 1200,
  },
  {
      id: "3",
      name: "iPad mini",
      capacity: "512 GB",
      description: "Chip A15 Bionic",
      year: "2022",
      img: "https://carrello.com.ar/ecom/wp-content/uploads/2021/11/ipad-mini-select-wifi-pink-202109_FMT_WHH.jpg",
      price: 600,
  },
  {
    id: "4",
    category: "macbook",
    name: "MacBook Air",
    capacity: "256 GB",
    description: "Chip M1",
    year: "2021",
    img: "https://www.sagitariodigital.com.ar/wp-content/uploads/2022/03/ipad-air-2022-2.jpg",
    price: 850,
},
{
    id: "5",
    category: "macbook",
    name: "MacBook Pro",
    capacity: " 512 GB",
    description: "Chip M2",
    year: "2022",
    img: "https://cdn-ipoint.waugi.com.ar/21936-large_default/ipad-pro-129-wi-fi-128gb-5ta-gen-space-gray.jpg",
    price: 1450,
},
{
    id: "6",
    category: "macbook",
    name: "MacBook pro 14",
    capacity: "1 TB",
    description: "M1 Pro chip o M1 Max chip",
    year: "2022",
    img: "https://carrello.com.ar/ecom/wp-content/uploads/2021/11/ipad-mini-select-wifi-pink-202109_FMT_WHH.jpg",
    price: 2100,
},
{
  id: "7",
  category: "iphone",
  name: "iPhone 11",
  capacity: "256 GB",
  description: "blabla",
  year: "2021",
  img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  price: 850,
},
{
  id: "8",
  category: "iphone",
  name: "iphone 14",
  capacity: " 512 GB",
  description: "Serious power. Serious value.",
  year: "2022",
  img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617560",
  price: 1450,
},
{
  id: "9",
  category: "iphone",
  name: "iphone 13",
  capacity: "1 TB",
  description: "The ultimate iPhone.",
  year: "2022",
  img: "https://i.blogs.es/4c5b2b/ipihone-13-pro-00/1366_2000.jpeg",
  price: 2100,
},

];

export const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
        
      }, 2000);
    });
  }