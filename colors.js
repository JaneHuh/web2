var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a'); //javascript get element by css selector multiple
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = { //객체를 담을 거임
  setColor:function(color){ //setColor라는 프로퍼티
    document.querySelector('body').style.color = color;
  }, //주의) 객체의 프로퍼티 구분할 때 콤마가 있어야 함, 대소문자 주의!!
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){//this가 아닌 self
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day'; //this가 아닌 self
    Links.setColor('powderblue');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
    }
  }
