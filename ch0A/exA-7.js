// 예제 A-7 ES5 호환 자바스크립트에서 수동으로함수 바인딩하기

var callbackFunc = function(val) {
    console.log('Do something');
}.bind(this);
