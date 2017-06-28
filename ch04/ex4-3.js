// 예제 4-3 <TouchableHighlight> 컴포넌트의 사용법

<TouchableHighlight
    onPressIn={this._onPressIn}
    onPressOut={this._onPressOut}
    style={styles.touchable}>
        <View style={styles.button}>
			<Text style={styles.welcome}>
				{this.state.pressing ? 'EEK!' : 'PUSH ME'}
			</Text>
		</View>
</TouchableHighlight>
