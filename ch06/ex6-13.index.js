// 예제 6-13 Button 컴포넌트는 적절한 스타일이 적용된 <TouchableHighlight>이며 <Text>를 자식으로 포함하고 있다

import React, {
    Component,
} from 'react';

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import styles from './style';

class Button extends Component {
    static propTypes = {
	onPress: React.PropTypes.func,
	label: React.PropTypes.string
    }

    render() {
	return (
	    <TouchableHighlight onPress={this.props.onPress}>
	      <View style={[styles.button, this.props.style]}>
		<Text>
		  {this.props.label}
		</Text>
	      </View>
	    </TouchableHighlight>
	);
    }
}

export default Button;
