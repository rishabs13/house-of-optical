const routes = {
  LOGIN: '',
  DASHBOARD: 'dashboard',
  SIGNUP: 'signUp',
  CHECKOUT: 'checkout',
  PRODUCTS: 'products'
};


export const cart = [];

export const address = [];

let total = 0;
function setTotal(value) {
  total = value;
}

export { total, setTotal };

export const productDetailsData = [
  {
     "id":1,
     "title":"Versace Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image1.jpg",
     "description":"LENS TYPE Premium Anti Glare Blue-light-filtering TransistionProgressive (No Line Bifocal) Premium Bifocal",
     "price":100
  },
  {
     "id":2,
     "title":"Ray-Ban Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image2.jpg",
     "description":"Fashionable Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":3,
     "title":"Burberry Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image3.jpg",
     "description":"Cat Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":4,
     "title":"Prada Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image4.jpg",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":5,
     "title":"Guess Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image5.jpg",
     "description":"Ova/ Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":350
  },
  {
     "id":6,
     "title":"Gucci Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image6.jpg",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":450
  },
  {
     "id":7,
     "title":"Versace Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image7.jpg",
     "description":"Rimless Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":8,
     "title":"Ray-Ban Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image8.jpg",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":650
  },
  {
     "id":9,
     "title":"Prada Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image9.jpg",
     "description":"Red lens Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":560
  },
  {
     "id":10,
     "title":"Gucci Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image10.jpg",
     "description":"Classy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":650
  },
  {
     "id":11,
     "title":"Burberry Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image11.jpg",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":670
  },
  {
     "id":12,
     "title":"Prada Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image12.jpg",
     "description":"Latest Fashion Premium Anti Glare  Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":68
  },
  {
     "id":13,
     "title":"Gucci Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image13.jpg",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":354
  },
  {
     "id":14,
     "title":"Burberry Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image14.jpg",
     "description":"Trendy Premium Anti Glare Blue-light-filtering TransistionProgressive (No Line Bifocal) Premium Bifocal",
     "price":56
  },
  {
     "id":15,
     "title":"Armani Eyeglasses",
     "imgUrl":"/images/Eyeglasses/image15.jpg",
     "description":"LENS TYPE Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":16,
     "title":"Burberry Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image16.webp",
     "description":"cat Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":450
  },
  {
     "id":17,
     "title":"Ray-Ban Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image17.webp",
     "description":"Oval Premium Anti Glare  Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":18,
     "title":"Versace Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image18.webp",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":19,
     "title":"Prada Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image19.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":20,
     "title":"Prada Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image20.webp",
     "description":"Rimless Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":21,
     "title":"Guess Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image21.webp",
     "description":"Wih Rim Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":22,
     "title":"Burberry Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image22.webp",
     "description":"Premium Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":23,
     "title":"Versace Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image23.webp",
     "description":"Best seller Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":350
  },
  {
     "id":24,
     "title":"Ray-Ban Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image24.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":550
  },
  {
     "id":25,
     "title":"Guess Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image25.webp",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":26,
     "title":"GuessWomen Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image26.webp",
     "description":"Latest fashion Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":27,
     "title":"Armani Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image27.webp",
     "description":"Best Brand Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":28,
     "title":"Ray-Ban Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image28.webp",
     "description":"Red Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":29,
     "title":"Prada Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image29.webp",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":30,
     "title":"Burberry Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image30.webp",
     "description":"Fashionable Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":31,
     "title":"Armani Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image31.webp",
     "description":"Latest design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":32,
     "title":"Gucci Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image32.webp",
     "description":"Latest fashion Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":33,
     "title":"Armani Women Sunglasses ",
     "imgUrl":"/images/Women Sunglasses/image33.webp",
     "description":"Best seller Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":34,
     "title":"Ray-Ban Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image34.webp",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":35,
     "title":"Guess Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image35.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":36,
     "title":"Burberry Women Sunglasses",
     "imgUrl":"/images/Women Sunglasses/image36.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":350
  },
  {
     "id":37,
     "title":"Prada Women Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image37.webp",
     "description":"With Rim Premium Anti Glare Blue-light-filtering Transistion  Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":38,
     "title":"Versace Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image38.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":39,
     "title":"Ray-Ban Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image39.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":40,
     "title":"Prada Men Sunglasses Prada",
     "imgUrl":"/images/Men Sunglasses/image40.webp",
     "description":"Cat Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":41,
     "title":"Burberry Men Sunglasses ",
     "imgUrl":"/images/Men Sunglasses/image41.webp",
     "description":"Rimless Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":42,
     "title":"Armani Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image42.webp",
     "description":"Latest design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":43,
     "title":"Ray-Ban Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image43.webp",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":250
  },
  {
     "id":44,
     "title":"Versace Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image44.webp",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":450
  },
  {
     "id":45,
     "title":"Ray-Ban Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image45.webp",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":46,
     "title":"Burberry Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image46.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":47,
     "title":"Prada Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image47.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":35
  },
  {
     "id":48,
     "title":"Gucci Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image48.webp",
     "description":"Red Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":100
  },
  {
     "id":49,
     "title":"Ray-Ban Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image49.webp",
     "description":"With rim Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":56
  },
  {
     "id":50,
     "title":"Armani Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image50.webp",
     "description":"Rimless Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":56
  },
  {
     "id":51,
     "title":"Gucci Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image51.webp",
     "description":"Trendy  Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":122
  },
  {
     "id":52,
     "title":"Burberry Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image52.webp",
     "description":"Best seller Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":33
  },
  {
     "id":53,
     "title":"Armani Men Sunglasses ",
     "imgUrl":"/images/Men Sunglasses/image53.webp",
     "description":"Casual Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":122
  },
  {
     "id":54,
     "title":"Prada Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image54.webp",
     "description":"Informal Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":56
  },
  {
     "id":55,
     "title":"Jimmy Choo Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image55.webp",
     "description":"Great design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":142
  },
  {
     "id":56,
     "title":"Jimmy Choo Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image56.webp",
     "description":"Casual Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":57
  },
  {
     "id":57,
     "title":"Burberry Men Sunglasses",
     "imgUrl":"/images/Men Sunglasses/image57.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":242
  },
  {
     "id":58,
     "title":"Ray-Ban KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image58.webp",
     "description":"Rimless Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":150
  },
  {
     "id":59,
     "title":"Gucci KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image59.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":450
  },
  {
     "id":60,
     "title":"Burberry KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image60.webp",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":24
  },
  {
     "id":61,
     "title":"Prada KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image61.webp",
     "description":"Latest design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":45
  },
  {
     "id":62,
     "title":"Jimmy Choo KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image62.webp",
     "description":"Best seller Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":35
  },
  {
     "id":63,
     "title":"Prada KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image63.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":242
  },
  {
     "id":64,
     "title":"Armani KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image64.webp",
     "description":"Cool Premium Anti Glare Blue-light-filterin Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":132
  },
  {
     "id":65,
     "title":"Versace KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image65.webp",
     "description":"With rim Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":35
  },
  {
     "id":66,
     "title":"Burberry KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image66.webp",
     "description":"Great design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":120
  },
  {
     "id":67,
     "title":"Ray-Ban KIDS Eyeglasses ",
     "imgUrl":"/images/Kids Eyeglasses/image67.webp",
     "description":"Kids friendly Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":45
  },
  {
     "id":68,
     "title":"Burberry KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image68.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":67
  },
  {
     "id":69,
     "title":"Prada KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image69.webp",
     "description":"Cat Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":70,
     "title":"Ray-Ban KIDS Eyeglasses",
     "imgUrl":"/images/Kids Eyeglasses/image70.webp",
     "description":"Best seller Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":51
  },
  {
     "id":71,
     "title":"Jimmy Choo KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image71.webp",
     "description":"great design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":60
  },
  {
     "id":72,
     "title":"Ray-Ban KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image72.webp",
     "description":"Oval Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":90
  },
  {
     "id":73,
     "title":"Armani KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image73.webp",
     "description":"Red Eyeglasses Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":50
  },
  {
     "id":74,
     "title":"Prada KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image74.webp",
     "description":"Trendy Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":86
  },
  {
     "id":75,
     "title":"Versace KIDS",
     "imgUrl":"/images/kids Sunglasses/image75.webp",
     "description":"Great design Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":57
  },
  {
     "id":76,
     "title":"Burberry KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image76.webp",
     "description":"Cool Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":78
  },
  {
     "id":77,
     "title":"Jimmy Choo Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image77.webp",
     "description":"Best Seller Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":63
  },
  {
     "id":78,
     "title":"Gucci KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image78.webp",
     "description":"LENS TYPE Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":560
  },
  {
     "id":79,
     "title":"Gucci KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image79.webp",
     "description":"Round Premium Anti Glare Blue-light-filtering Transistion Progressive (No Line Bifocal) Premium Bifocal",
     "price":230
  },
  {
     "id":80,
     "title":"Armani KIDS Sunglasses",
     "imgUrl":"/images/kids Sunglasses/image80.webp",
     "description":"With Rim Premium Anti Glare Blue-light-filtering TransistionProgressive (No Line Bifocal) Premium Bifocal",
     "price":150
  }
]

export default routes;