import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

class BookList extends Component {
    constructor(props) {
	super(props);
	var ds = new ListView.DataSource({
	    rowHasChanged: (r1, r2) => r1 !== r2
	});
	this.state = {
	    dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e'])
	}
    }

    _renderRow(rowData) {
	return <Text style={styles.row}>{rowData}</Text>;
    }

    render() {
	return (
	    <ListView
	      dataSource={this.state.dataSource}
	      renderRow={this._renderRow}
	    />
	);
    }
}

const styles = StyleSheet.create({
    row: {
	flex: 1,
	fontSize: 24,
	padding: 42,
	borderWidth: 1,
	borderColor: '#DDDDDD'
    }
});

export default BookList;
