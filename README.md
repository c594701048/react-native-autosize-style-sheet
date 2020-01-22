# react-native-auto-size

  react-native-auto-size

## `AutoSizeSheet` 使用
  1. 使用npm：`npm install react-native-auto-size --save`<br>
  使用yarn：`yarn add react-native-auto-size
  
### `效果图片 `
<img src="https://github.com/c594701048/react-native-autosize-style-sheet/blob/master/Screenshot_1579664623.png" alt="效果图片" title="效果图片" width="360" height="729">


### `设计图写法`
 eg1 : 设计图宽度为750px View A  width 50px height 100px
 A 的 style{ width:50, height:100} 出来的样子就是 设计图的设计比例显示
  ```
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
 
  ```
### `百分比写法` 
 eg2 :  designWidth=100  百分比布局  style{ width:50, height:100}
 这个是宽度占屏幕的50% 高度为一个屏幕的宽度的100%
  ```
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
  ```
### `正常写法` 
  ```
    /**
     * 支持正常StyleSheet 有提示编写style type的提示
     * 增加 android/ios平台 分别编写
     */
    const styles = AutoSizeSheet.create({
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
  ```

## Licensed
  MIT License
