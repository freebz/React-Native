// 예제 4-1 텍스트의 스타일 적용을 위해 재사용할 수 있는 컴포넌트 만들기

const styles = StyleSheet.create({
    bold: {
	fontWeight: "bold"
    },
    italic: {
	fontStyle: "italic"
    }
});

class Strong extends Component {
    render() {
	return (
	    <Text style={styles.bold}>
	      {this.props.children}
	    </Text>
	);
    }
}

class Em extends Component {
    render() {
	return (
	    <Text style={styles.italic}>
	      {this.props.children}
	    </Text>
	);
    }
}
