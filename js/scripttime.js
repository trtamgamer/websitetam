var date = new date();
const todaydate = document.querySelector('.date');
const todayday = document.querySelector('.day');
const todaytime = document.querySelector('.time');
const noofday = ["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ Nhật"];

function printDate(){
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        todaydate.innerHTML = day + "/" + month + "/" + year;
}
printDate();


function printDay(){
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayday.innerHTML = day;
}
printDate();



function printTime(){
    var date = new date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if(hour ==0){
        hour = 23;
    }
    if(hour >23){
        hour = hour - 23; //if hour 23 ===> hour = 23-22 = 1
    }
}
