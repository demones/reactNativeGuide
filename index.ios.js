/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusBarExample from './ui-examples/StatusBarExample';
import DatePickerIOSExample from './ui-examples/DatePickerIOSExample';
import ImageExample from './ui-examples/ImageExample';
import ActivityIndicatorIOSExample from './ui-examples/ActivityIndicatorIOSExample';
import TabBarIOSExample from './ui-examples/TabBarIOSExample';
import NavigatorIOSExample from './ui-examples/NavigatorIOSExample';
import ScrollViewExample from './ui-examples/ScrollViewExample';
import LayoutExample from './ui-examples/LayoutExample';
import LayoutGridExample from './ui-examples/LayoutGridExample';
import ListViewSimpleExample from './ui-examples/ListViewSimpleExample';

class reactNativeGuide extends Component {
  render() {
    /*{
     ImageExample.map((item, index) => {
     return (
     <View key={index} style={{flex: 1, marginBottom: 10}}>
     <Text>{item.title}</Text>
     <Text>{item.description}</Text>
     <View style={{height: 30}}>
     {item.render()}
     </View>
     </View>
     );
     })
     }*/
    return (
      <View style={styles.container}>
        <ListViewSimpleExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30
  }
});

AppRegistry.registerComponent('reactNativeGuide', () => reactNativeGuide);
