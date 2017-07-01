// 예제 5-7 외부 자바스크립트 파일에서 스타일 불러오기

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from './style';

class ComponentName extends Component {
    render() {
	return (
	    <Text style={[styles.text, styles.bold]}>
	      Hello, world
	    </Text>
	);
    }
}
