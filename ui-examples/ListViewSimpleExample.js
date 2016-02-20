'use strict';

import React, {
  Component,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
} from 'react-native';

import UIExplorerPage from './UIExplorerPage';

/*eslint-disable prefer-template*/
/*eslint-disable global-require*/
class ListViewSimpleExample extends Component {
  constructor(props, context) {
    super(props, context);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  }

  componentWillMount() {
    this._pressData = {};
  }

  render() {
    return (
      <UIExplorerPage
        title={this.props.navigator ? null : '<ListView>'}
        noSpacer={true}
        noScroll={true}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      </UIExplorerPage>
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    let rowHash = Math.abs(hashCode(rowData));
    let imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource}/>
            <Text style={styles.text}>
              {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _genRows(pressData) {
    let dataBlob = [];
    for (let ii = 0; ii < 100; ii++) {
      let pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  }

  _pressRow(rowID) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(
        this._genRows(this._pressData)
      )
    });
  }
}

const THUMB_URLS = [
  require('../images/Thumbnails/like.png'),
  require('../images/Thumbnails/dislike.png'),
  require('../images/Thumbnails/call.png'),
  require('../images/Thumbnails/fist.png'),
  require('../images/Thumbnails/bandaged.png'),
  require('../images/Thumbnails/flowers.png'),
  require('../images/Thumbnails/heart.png'),
  require('../images/Thumbnails/liking.png'),
  require('../images/Thumbnails/party.png'),
  require('../images/Thumbnails/poke.png'),
  require('../images/Thumbnails/superlike.png'),
  require('../images/Thumbnails/victory.png'),
];
const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
let hashCode = function (str) {
  let hash = 15;
  for (let ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

export default ListViewSimpleExample;
