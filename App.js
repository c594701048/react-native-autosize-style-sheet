/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,Dimensions, SafeAreaView, ScrollView, StatusBar, View, } from 'react-native';
import AutoSizeSheet from 'react-native-autosize-style-sheet';

export default class App extends Component {
    fillW = Math.round(Dimensions.get('window').width);

    render() {
      return (
        <>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView style={styles.flex}>
            <ScrollView style={styles.flex}>
              <Text>正常style 增加android/ios平台分别编写</Text>
              <View style={styles.hor}>
                <View style={styles.styles1View1}/>
                <View style={styles.styles1View2}/>
                <View style={styles.styles1View3}/>
              </View>
              <Text>设计图为宽度750px 写法增加android/ios平台分别编写</Text>
              <View style={styles.ver}>
                <View style={this.styles2.styles2View1}/>
                <View style={this.styles2.styles2View2}/>
                <View style={this.styles2.styles2View3}/>
              </View>
              <Text style={styles.text}>百分比写法 写法增加android/ios平台分别编写</Text>
              <View style={styles.ver}>
                <View style={this.styles3.styles3View1}/>
                <View style={this.styles3.styles3View2}/>
                <View style={this.styles3.styles3View3}/>
              </View>


            </ScrollView>
          </SafeAreaView>
        </>
      );
    }

    /**
     * 参数 :
     * styles: S, 需要编写的style
     *
     * screenWidth: number = 0, 动态获取 设备的屏幕的的宽度  设置为0
     * 则默认不进行适配 走默认的正常StyleSheet的规则 增
     * 加了 增加 android/ios平台 分别编写
     *
     * designWidth: number = 750 设计图纸的宽度 不用自己计算大小 直接写设计图的尺寸
     *
     * eg1 : 设计图宽度为750px View A  width 50px height 100px
     * A 的 style{ width:50, height:100} 出来的样子就是 设计图的设计比例显示
     *
     * eg2 :  designWidth=100  百分比布局  style{ width:50, height:100}
     * 这个是宽度占屏幕的50% 高度为一个屏幕的宽度的100%
     *
     */
    styles2 = AutoSizeSheet.create({
      styles2View1: {
        width: 60,
        height: 80,
        android: {
          backgroundColor: 'red'
        },
        ios: {
          backgroundColor: 'green'
        }
      },
      styles2View2: {
        width: 300,
        height: 80,
        backgroundColor: 'green'
      },
      styles2View3: {
        width: 750,
        height: 80,
        backgroundColor: 'red'
      },
    }, this.fillW, 750)


    styles3 = AutoSizeSheet.create({
      styles3View1: {
        width: 30,
        height: 20,
        android: {
          backgroundColor: 'red'
        },
        ios: {
          backgroundColor: 'green'
        }
      },
      styles3View2: {
        width: 50,
        height: 20,
        backgroundColor: 'green'
      },
      styles3View3: {
        width: 100,
        height: 20,
        backgroundColor: 'red'
      },
    }, this.fillW, 100);

}
/**
 * 支持正常StyleSheet 有提示编写style type的提示
 * 增加 android/ios平台 分别编写
 */
const styles = AutoSizeSheet.create({
  fill: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  text:{
    marginTop: 20,
  },
  hor: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  ver: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  styles1View1: {
    margin: 5,
    width: 60,
    height: 60,
    android: {
      backgroundColor: 'red'
    },
    ios: {
      backgroundColor: 'green'
    }
  },
  styles1View2: {
    margin: 5,
    width: 80,
    height: 80,
    backgroundColor: 'green'
  },
  styles1View3: {
    margin: 5,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },

});
