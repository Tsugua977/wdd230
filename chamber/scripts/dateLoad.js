const todayDate = document.querySelector(".todayDate");

const today = new Date();
const currentDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
const time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
const dateTime = "Date: "+currentDate+" | Time: "+time;

console.log(todayDate)
console.log(dateTime)
todayDate.innerHTML = dateTime;