time = new date()

var seconds = time.getSeconds()
var minutes = time.getMinutes()
var hours = time.getHours()

if(hour < 12) {
	ampm = "AM"
} else {
	ampm = "PM"
}

while(hours > 12) {
	hours = hours-12
} 

if(hours<10) {
	hours = "0" + hours
}
if(minutes<10) {
	minutes = "0" + minutes
}
if(seconds<10) {
	seconds = "0" + seconds
}

digclock.text = hours + ":" + minutes + ":" + seconds + " " + ampm

