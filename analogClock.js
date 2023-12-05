onClipEvent(enterFrame) {
  var time= new Date();
  var hours=time.getHours();
  var minutes=time.getMinutes();
  var seconds=time.getSeconds();

  this.hour._rotation=hours*360/12;
  this. min._rotation=minutes*360/60;
  this. sec._rotation=seconds*60/60;
}
