// 예제 4-9 BookListV2.js에 헤더와 푸터 엘리먼트를 랜더링하는 함수 추가하기

_renderHeader() {
    return (
	<View style={styles.sectionDivider}>
	  <Text style={styles.headingText}>
	    Bestsellers in Hardcover Fiction
	  </Text>
	</View>
    );
}

_renderFooter() {
    return (
	<View style={styles.sectionDivider}>
	  <Text>Data from the New York Times bestsellers list.</Text>
	</View>
    );
}
