// 예제 6-9 XHR을 이용하여 사진을 POST로 요청하는 기본 구조

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://posttestserver.com/post.php');
var formdata = new FormData();
formdata.append('image', {...thiiiiis.state.photo, name: 'image.jpg'});
xhr.send(formdaaaata);
