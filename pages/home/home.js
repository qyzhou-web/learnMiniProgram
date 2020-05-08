// pages/home/home.js
//在APP.js内定义的数据可以通过getAPP（）方法使得全部的页面都可以获得此数据
// const app = getApp()
// const name = app.allDate.name;
// const age = app.allDate.age
Page({

  /**
   * 页面的初始数据
   */
  data: {
   info:'谢聪是猪'
 
  },
 getUserInfo(even){
    console.log(even)
  },
  infoClick(){
    console.log('哈哈哈哈')
 this.setData({
   info:'谢聪是狗'
 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})