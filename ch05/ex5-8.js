// 예제 5-8 컴포넌트는 스타일 객체를 prop으로 전달받을 수 있다.

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

class CustomizableText extends Component {
    constructor(props) {
	super(props);
    }
    static defaultProps = {
	style: {}
    }
    static porpTypes = {
	style: Text.propTypes.style
    }
    render() {
	return (
	    <Text style={[myStyles.text, this.props.style]}>
	      Hello, world
	    </Text>
	);
    }
}
