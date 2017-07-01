// 예제 5-6 자바스크립트 파일에서 스타일 내보내기

import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    text: {
	color: '#FF00FF',
	fontSize: 16
    },
    bold: {
	fontWeight: 'bold'
    }
});

export default styles;
