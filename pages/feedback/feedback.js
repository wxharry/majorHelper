// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    len:0,
    value:'',
    heightflag:true,
    touch:[289,384]
  },
  input:function(e){
    console.log(e.detail)
    this.setData({
      len: e.detail.value.length,
      value: e.detail.value
    })
    // if (e.detail.value.length > 48){
    //   this.setData({
    //     heightflag:true
    //   })
    // }
  },
  submit:function(){
    var value = this.data.value
    console.log("submit "+ value)
    // wx.request({
    //   url: '',
    // })
  },
  touchMove: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    console.log(sx, sy);
    this.data.touch = [sx, sy]
    this.setData({
      touch: e.touch[0]
    })
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

  }
})