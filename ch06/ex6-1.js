// 예제 6-1 navigator.geolocation을 호출하여 사용자의 위치 정보 알아내기

navigator.geolocation.getCurrentPosition(
    (position) => {
	console.log(position);
    },
    (error) => {alert(error.message)},
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
);
