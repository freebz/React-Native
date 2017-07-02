// 예제 6-11 SmarterWeather/styles/typography.js에 정의된 공통 폰트 스타일

import { StyleSheet } from 'react-native';

const baseFontSize = 18;

var styles = StyleSheet.create({
    bigText: {
	fontSize: baseFontSize + 8,
	color: '#FFFFFF'
    },
    mainText: {
	fontSize: baseFontSize,
	color: '#FFFFFF'
    }
});

// For use elsewhere...
// 다른 파일에서 사용할 수 있도록 별도로 지정한다
styles['baseFontSize'] = baseFontSize;

export default styles;
