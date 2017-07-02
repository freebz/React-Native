// 예제 6-17 local_image.js는 초기 버전이다. require를 호출하여 불러온다

import React, {
    Component,
} from 'react';

import {
    Image
} from 'react-native';

import styles from './style.js';

class PhotoBackdrop extends Component {
    render() {
	return (
	    <Image
	      style={styles.backdrop}
	      source={require('./flowers.png')}
	      resizeMode='cover'>
	      {this.props.children}
	    </Image>
	);
    }
}

export default PhotoBackdrop;
