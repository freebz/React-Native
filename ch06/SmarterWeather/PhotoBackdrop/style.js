// 예제 6-20 <PhotoBackdrop>의 3가지 버전 모두 다음 스타일시트를 사용한다

import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    backdrop: {
	flex: 1,
	flexDirection: 'column'
    },
    button: {
	flex: 1,
	margin: 100,
	alignItems: 'center'
    }
});

export default styles;
