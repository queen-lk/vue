import {fillzero} from './fillzero.js';

let date = (data) => {
  let d = new Date();
  d.setTime(data);
  let year = d.getFullYear()
  let mon = d.getMonth() + 1;
  let date = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  return `${year}年${fillzero(mon)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`;
}

export default date;
