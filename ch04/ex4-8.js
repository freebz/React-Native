// 예제 4-8 _renderRow는 관련된 데이터를 <BookItem>으로 바꿔서 전달한다

_renderRow(rowData) {
    return <BookItem coverURL={rowData.book_image}
        title={rowData.title}
        author={rowData.author}/>;
}
