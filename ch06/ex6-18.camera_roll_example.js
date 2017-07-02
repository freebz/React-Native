// 예제 6-18 camera_roll_example.js는 작성한 코드에 따라 카메라롤에서 하나를 선택한다

import React, {
    Component,
} from 'react';

import {
    Image,
    CameraRoll
} from 'react-native';

import styles from './style';

class PhotoBackdrop extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    photoSource: {}
	}
    }

    componentDidMount() {
	CameraRoll.getPhotos(
	    {first: 5},
	    (data) => {
		this.setState({
		    photoSource: {uri: data.edges[3].node.image.uri}
		})},
	    (error) => {
		console.warn(error);
	    });
    }

    render() {
	return (
	    <Image
	      style={styles.backdrop}
	      source={this.state.photoSource}
	      resizeMode='cover'>
	      {this.props.children}
	    </Image>
	);
    }
}

export default PhotoBackdrop;
