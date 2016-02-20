'use strict';

import React, {
  Component,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import UIExplorerTitle from './UIExplorerTitle';

class UIExplorerPage extends Component {

  static propTypes = {
    keyboardShouldPersistTaps: React.PropTypes.bool,
    noScroll: React.PropTypes.bool,
    noSpacer: React.PropTypes.bool,
  };

  render() {
    let ContentWrapper;
    let wrapperProps = {};
    if (this.props.noScroll) {
      ContentWrapper = (View: ReactClass<any, any, any>);
    } else {
      ContentWrapper = (ScrollView: ReactClass<any, any, any>);
      wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
      wrapperProps.keyboardShouldPersistTaps = true;
      wrapperProps.keyboardDismissMode = 'interactive';
    }
    let title = this.props.title ?
      <UIExplorerTitle title={this.props.title}/> :
      null;
    let spacer = this.props.noSpacer ? null : <View style={styles.spacer}/>;
    return (
      <View style={styles.container}>
        {title}
        <ContentWrapper
          style={styles.wrapper}
          {...wrapperProps}>
          {this.props.children}
          {spacer}
        </ContentWrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1,
  },
  spacer: {
    height: 270,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
  },
});

export default UIExplorerPage;
