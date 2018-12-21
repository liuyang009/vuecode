// pages/index5/index5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '复合板式', value: '1' },
      { name: '实木', value: '2'},
      { name: '软体', value: '3' },
      { name: '竹藤', value: '4' },
      { name: '金属', value: '5' },
      { name: '玻璃', value: '6' },
      { name: '钢木', value: '7' },
      { name: '理石/石材', value: '8' },{ name: '塑料', value: '9' },{ name: '其他', value: '10' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("index5:" + options.bedId);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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
  
  },
  goHistory: function(){
    wx.navigateBack({
      delta: 1
    })
  }
})