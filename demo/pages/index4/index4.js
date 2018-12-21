// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bedId: 0,
    items: [{
        name: '布艺床',
        value: 1,
        checked: false
      },
      {
        name: '皮床',
        value: 2,
        checked: false
      },
      {
        name: '实木床',
        value: 3,
        checked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: options.title
    // })
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
  next: function () {
    const bedId = this.data.bedId;
    if (bedId == 0) {
      wx.showToast({
        title: '请先选择问题项',
        duration: 1000,
        icon: "none"
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/index5/index5?bedId='+bedId
    })
  },
  radioChange: function (e) {
    const bedId = e.detail.value;
    this.setData({
      bedId: bedId
    });
    wx.navigateTo({
      url: '/pages/index5/index5?bedId='+bedId
    })
  }
})