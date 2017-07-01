// 예제 5-2 스타일 속성에 자바스크립트 객체를 지정할 수 있다

var italic = {
    fontStyle: 'italic'
};
var bold = {
    fontWeight: 'bold'
};

...

render() {
    return (
	<Text>
	  The quick <Text style={italic}}>brown</Text> fox
	  jumped over the lazy <Text style={bold}}>dog</Text>.
	</Text>
    );
}
