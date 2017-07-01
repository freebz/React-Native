// 예제 5-3 style 속성은 객체의 배열로도 지정할 수 있다

class AccentButton extends Component {
    render() {
	return (
	    <Text style={[styles.button, styles.accentText]}>
	      {this.props.children}
	    </Text>
	);
    }
}
