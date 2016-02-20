'use strict';

import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

/**
 * 骰子的布局方式，掌握了该布局后，可以熟练的处理表格布局
 * 对于表格布局，我习惯先把容器设为 row 布局，即 flexDirection 为 row
 */
class LayoutExample extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.item}/>
        </View>
        <View style={[styles.box, {justifyContent: 'space-between'}]}>
          <View style= {styles.item}/>
          <View style= {styles.item}/>
        </View>
        <View style={styles.box}>
          <View style={[styles.item, {alignSelf: 'flex-start'}]}/>
          <View style={styles.item}/>
          <View style={[styles.item, {alignSelf: 'flex-end'}]}/>
        </View>

        <View style={[styles.box, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}]}>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
        </View>
        <View style={[styles.box, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}]}>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
          <View style={[styles.boxSub, {justifyContent: 'center'}]}>
            <View style= {styles.item}/>
          </View>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
        </View>
        <View style={[styles.box, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}]}>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
          <View style={styles.boxSub}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
        </View>

        <View style={[styles.box, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}]}>
          <View style={[styles.boxSub, {justifyContent: 'space-around'}]}>
            <View style= {[styles.item, {backgroundColor: 'red'}]}/>
            <View style= {[styles.item, {backgroundColor: 'red'}]}/>
          </View>
          <View style={[styles.boxSub, {justifyContent: 'space-around'}]}>
            <View style= {[styles.item, {backgroundColor: 'blue'}]}/>
            <View style= {[styles.item, {backgroundColor: 'blue'}]}/>
          </View>
          <View style={[styles.boxSub, {justifyContent: 'space-around'}]}>
            <View style= {[styles.item, {backgroundColor: 'orange'}]}/>
            <View style= {[styles.item, {backgroundColor: 'orange'}]}/>
          </View>
        </View>

        <View style={[styles.box, {flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch'}]}>
          <View style={[styles.boxSub, {justifyContent: 'space-around'}]}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
          <View style={[styles.boxSub, {justifyContent: 'space-around'}]}>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
            <View style= {styles.item}/>
          </View>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0'
  },
  box: {
    padding: 5,
    height: 65,
    width: 65,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  boxSub: {
    justifyContent: 'space-between',
  },
  item: {
    borderRadius: 7.5,
    height: 15,
    width: 15,
    backgroundColor: '#333333'
  },
});

export default LayoutExample;
