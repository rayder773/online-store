
export default class ItemsService {

  data = [
    {
      id: 0,
      title: 'Asus X560UD-EJ388',
      price: 1000,
      coverImage: 'https://i.citrus.ua/imgcache/size_500/uploads/shop/2/9/29b579d6c144a4f3f8d768deba4d854e.jpg'},

    {
      id: 1,
      title: 'Mac pro',
      price: 2200,
      coverImage: 'https://i1.rozetka.ua/goods/9277553/47881262_images_9277553355.jpg'},
      
    {
      id: 2,
      title: 'LENOVO Legion Y520-15IKBM',
      price: 1500,
      coverImage: 'https://img.moyo.ua/img/products/3953/43_600x_1512631820.png'},

    {
      id: 3,
      title: 'ACER Swift 3 SF315-41',
      price: 1500,
      coverImage: 'https://img.moyo.ua/img/products/4088/28_600x_1538377864.jpg'}    
  ];

    getItems() {
    return new Promise((resolve) => {
      resolve(this.data); 
    });
  }
}