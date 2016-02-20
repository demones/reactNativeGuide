'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

/**
 * 表格布局
 */
class LayoutGridExample extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View>
        <View style={[styles.row, styles.borderBottom]}>
          <View style={styles.leftContainer}>
            <Text style={[styles.font14, styles.green, styles.alignCenter]}>我们约会吧</Text>
            <Text style={[styles.font10, styles.mt20, styles.alignCenter]}>恋爱家人好朋友</Text>
            <Image style={[styles.mt10, {height: 88}]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
          </View>
          <View style={styles.rightContainer}>
            <View style={[styles.row, {borderBottomWidth: 0.5, borderColor: '#DCD7CD', paddingBottom: 5}]}>
              <View style={{flex: 1}}>
                <Text style={[styles.red, styles.font14, styles.alignCenter]}>低价超值</Text>
                <Text style={[styles.font10, styles.mt20, styles.alignCenter]}>十元惠生活</Text>
              </View>
              <View style={{flex: 1}}>
                <Image style={[{height: 55}]}
                       source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>

              </View>
            </View>
            <View style={[styles.row]}>
              <View style={[styles.alignItemsCenter, {flex: 1, borderRightWidth: 0.5, borderRightColor: '#DCD7CD'}]}>
                <Text style={[styles.mt10, styles.font14, {color: '#F742AB', fontWeight: 'bold'}]}>聚餐宴请</Text>
                <Text style={[styles.mt10]}>朋友家人常聚聚</Text>
                <Image style={{height: 25, width: 25}}
                       source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
              </View>
              <View style={[styles.alignItemsCenter, {flex: 1}]}>
                <Text style={[styles.font14, {color: '#FF8601'}]}>名店抢购</Text>
                <Text style={[styles.mt10]}>还有</Text>
                <Text style={[styles.mt10]}>12:06:12分</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingTop: 20
  },
  leftContainer: {
    flex: 1,
    borderColor: '#DCD7CD',
    borderRightWidth: 0.5,
    padding: 5
  },
  rightContainer: {
    flex: 2,
    padding: 5
  },
  borderBottom: {
    borderColor: '#DCD7CD',
    borderBottomWidth: 1,
  },
  alignCenter: {
    alignSelf: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  mt20: {
    marginTop: 20,
  },
  mt10: {
    marginTop: 10,
  },
  font14: {
    fontSize: 14,
  },
  font10: {
    fontSize: 12,
  },
  green: {
    color: '#55A44B',
    fontWeight: '900'
  },
  red: {
    color: '#FF3F0D',
    fontWeight: '900'
  }
});

export default LayoutGridExample;
