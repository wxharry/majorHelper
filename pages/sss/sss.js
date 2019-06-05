// pages/sss/sss.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  ontap:function(){
    wx.request({
      url: 'http://192.168.43.182:8080/v1/locate/search/',
      data: {
        f_id:1,
        s_id:2,
        t_id:3,
        // data:"hello"
      },
      header: { 'content-type': 'application / json'},
      // header: { 'content-type': 'application / x-www-form-urlencoded' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getdoc:function(){
    console.log(123)
    wx.downloadFile({
      url: 'http://example.com/somefile.pdf',
      success(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: 'http://example.com/somefile.pdf',
          success(res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  }
})