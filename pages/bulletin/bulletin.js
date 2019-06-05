// pages/bulletin/bulletin.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    spinShow: true,
    switch: false,
    card:[
      {
        name:"专业辅修",
        img_name: "minor",
        b_id:0
      },
      {
        name: "转专业",
        img_name: "trans",
        b_id: 1
      },
      {
        name: '海外实习',
        img_name: 'globe',
        b_id: 2
      },
      {
        name: '学院活动',
        img_name: 'activity',
        b_id: 3
      }
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

  ontap:function(event){
    console.log(event.target.id)
    const id = this.data.card[event.target.id].b_id
    wx.navigateTo({
      url: '/pages/info/info?id='+ id,
    })

    // wx.showModal({
    //   title: '',
    //   content: '',
    //   showCancel: false
    // })
  }
})