// 예제 4-5 PanResponder를 만들려면 많은 콜백 함수를 지정해야 한다

this._panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanREsponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanREsponderMove: this._handlePanResponderMove,
    onPanRespnderRelease: this._handlePanResponderEnd,
    onPanResponderTerminate: this._handlePanRespnderEnd,
});
