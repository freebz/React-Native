// 예제 4-6 전개 문법을 이용하여 PanResponder를 붙이기

render: function() {
    return (
	<View
	  {...this._panResponder.panHandlers}>
	  { /* View 내용은 여기에 */ }
	</View>
    );
}
