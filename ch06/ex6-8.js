// 예제 6-8 ImagePickerIOS를 이용하여 사진 선택기 호출하기

ImagePickerIOS.openSelectDialog(
    {
	showImages: true,
	showVideos: false,
    },
    (data) => {
	this.setState({
	    photoSource: {uri: data}
	});
    },
    () => {
	console.log('User canceled the action');
    });
