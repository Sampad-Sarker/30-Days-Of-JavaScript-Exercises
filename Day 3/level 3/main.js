/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/ 

let time = new Date("2020-01-02 07:05")

let year = time.getFullYear()
let month = time.getMonth()+1
month < 10 ? month='0'+month : month

let day = time.getDate()
day < 10 ? day='0'+day : day

let hours = time.getHours()
hours < 10 ? hours='0'+hours : hours

let minutes = time.getMinutes()
minutes < 10 ? minutes='0'+minutes: minutes


console.log(`${year}-${month}-${day} ${hours}:${minutes}`);