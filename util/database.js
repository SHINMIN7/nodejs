//mysql 패키지를 임포트
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: '0000',
});

//promise를 사용해서 콜백 대신 비동기적 데이터를 다룸.
module.exports = pool.promise();
