// 예제 6-7 ImagePickerIOS를 이용하여 카메라 접근과 비디오 기록의 가능 여부 확인하기

ImagePickerIOS.canUseCamera((result) => {
    console.log(result);  // boolean
});

ImagePickerIOS.canRecordVideos((result) => {
    console.log(result);  // boolean
});
