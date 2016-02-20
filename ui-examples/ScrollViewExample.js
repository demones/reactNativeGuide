'use strict';

import React, {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
  } from 'react-native';

/*eslint-disable brace-style*/
export default [
  {
    title: '<ScrollView>',
    description: 'To make content scrollable, wrap it within a <ScrollView> component',
    render () {
      let _scrollView;
      return (
        <View>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            {THUMBS.map(createThumbRow)}
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { _scrollView.scrollTo({y: 0}); }}>
            <Text>Scroll to top</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }, {
    title: '<ScrollView> (horizontal = true)',
    description: 'You can display <ScrollView>\'s child components horizontally rather than vertically',
    render () {
      let _scrollView;
      return (
        <View>
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            horizontal={true}
            style={[styles.scrollView, styles.horizontalScrollView]}>
            {THUMBS.map(createThumbRow)}
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { _scrollView.scrollTo({x: 0}); }}>
            <Text>Scroll to start</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }];

class Thumb extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return false;
  }

  render () {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri: this.props.uri}} />
      </View>
    );
  }
}

let THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
const createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 200,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});
