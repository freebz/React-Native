// 예제 6-5 CameraRoll.getPhotos의 기본적인 사용법

CameraRoll.getPhotos(
    {first: 1},
    (data) => {
	console.log(data);
    },
    (error) => {
	console.warn(error);
    });
