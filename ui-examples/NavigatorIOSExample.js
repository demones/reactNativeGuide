'use strict';

import React, {
  Component,
  AlertIOS,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  NavigatorIOS
} from 'react-native';

class EmptyPage extends Component {
  render () {
    return (
      <View style={styles.emptyPage}>
        <Text style={styles.emptyPageText}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

class NavigatorIOSExample extends Component {
  render () {
    return (
      <ScrollView style={styles.list}>
        <View style={styles.line}/>
        <View style={styles.group}>
          <View style={styles.row}>
            <Text style={styles.rowNote}>
              See &lt;UIExplorerApp&gt; for top-level usage.
            </Text>
          </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.groupSpace}/>
        <View style={styles.line}/>
        <NavigatorIOS
          style={{flex: 1, height: 500}}
          initialRoute={{
            component: NavigatorIOSList,
            title: 'NavigatorIOS Example'
          }}
        />
        <View style={styles.line}/>
      </ScrollView>
    );
  }
}

/*eslint-disable global-require*/
class NavigatorIOSList extends Component {
  render () {
    let recurseTitle = 'Recurse Navigation';
    if (!this.props.topExampleRoute) {
      recurseTitle += ' - more examples here';
    }

    return (
      <View style={styles.group}>
        {this._renderRow(recurseTitle, () => {
          this.props.navigator.push({
            component: EmptyPage,
            backButtonTitle: 'Custom Back',
            passProps: {
              text: 'This page has a back button in the nav bar',
            },
          });
        })}

        {this._renderRow('Custom Right Button', () => {
          this.props.navigator.push({
            component: EmptyPage,
            rightButtonTitle: 'Cancel',
            onRightButtonPress: () => this.props.navigator.pop(),
            passProps: {
              text: 'This page has a right button in the nav bar',
            }
          });
        })}
        {this._renderRow('Custom Left & Right Icons', () => {
          this.props.navigator.push({
            component: EmptyPage,
            leftButtonTitle: 'Custom Left',
            onLeftButtonPress: () => this.props.navigator.pop(),
            rightButtonIcon: require('../images/NavBarButtonPlus.png'),
            onRightButtonPress: () => {
              AlertIOS.alert(
                'Bar Button Action',
                'Recognized a tap on the bar button icon',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Tapped OK'),
                  },
                ]
              );
            },
            passProps: {
              text: 'This page has an icon for the right button in the nav bar',
            }
          });
        })}
        {this._renderRow('Pop', () => {
          this.props.navigator.pop();
        })}
        {this._renderRow('Pop to top', () => {
          this.props.navigator.popToTop();
        })}
        {this._renderRow('Replace here', () => {
          const prevRoute = this.props.route;
          this.props.navigator.replace({
            title: 'New Navigation',
            component: EmptyPage,
            rightButtonTitle: 'Undo',
            onRightButtonPress: () => this.props.navigator.replace(prevRoute),
            passProps: {
              text: 'The component is replaced, but there is currently no ' +
              'way to change the right button or title of the current route',
            }
          });
        })}
      </View>
    );
  }

  _renderRow (title, onPress) {
    return (
      <View>
        <TouchableHighlight onPress={onPress.bind(this)}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {title}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customWrapperStyle: {
    backgroundColor: '#bbdddd',
  },
  emptyPage: {
    flex: 1,
    paddingTop: 64,
  },
  emptyPageText: {
    margin: 10,
  },
  list: {
    backgroundColor: '#eeeeee',
    marginTop: 10,
  },
  group: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  groupSpace: {
    height: 15,
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: StyleSheet.hairlineWidth,
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowNote: {
    fontSize: 17,
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default NavigatorIOSExample;
