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
];

export const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
        
      }, 2000);
    });
  }