// 예제 5-4 스타일 객체와 인라인 스타일도 합칠 수 있다

class AccentButton extends Component {
    render() {
	return (
	    <Text style={[styles.button, styles.accentText, {color: '#FFFFFF'}]}>
	      {this.props.children}
	    </Text>
	);
    }
}
