//파일에서 데이터를 읽어올 경우에만 사용
// const fs = require('fs');
// const path = require('path');

const db = require('../util/database');

const Cart = require('./cart');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

//파일에서 제품을 가져오는 헬퍼 함수
// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  //새 제품 생성
  save() {}

  static deleteById(id) {}

  //파일에서 데이터를 가져올때 사용하는 메소드
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {}
};
