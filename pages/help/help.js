// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:[
      {
        name:"问题反馈",
        id_name:"feedback"
      },
      {
        name: "使用手册",
        id_name:"instruct"
      },
      {
        name: "关于我们",
        id_name:"aboutUs"
      },
    ]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onTap: function(e){
    
    if (e.target.id != 2){
      wx.showModal({
        title: '抱歉',
        content: '该功能暂未开放',
        showCancel: false,
      })
    }
  }
})