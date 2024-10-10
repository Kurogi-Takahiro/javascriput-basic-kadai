const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const YYYYMMDD = `現在の日付は${year}年${month}月${date}日です。`;

console.log(YYYYMMDD);