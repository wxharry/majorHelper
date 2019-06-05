// pages/infoDetail/infoDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      "title": "xxxx",
      "pub_time": "yyyy-mm-dd", 
      "author": "xxxxx",
      "img_link": ['/images/123.jpg'],   // 图片前缀:/images/majorhelper/<a_id>/img_name(12312.png)
      "file_link": ['file_name1', 'file_name2'],  // 图片前缀:/files/majorhelper/<a_id>/file_name(dsdf.pdf)   注意 没有连接的时候 前端会接受到null
      "content": "文段"
    },
    img_path:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const id = options.id
    this.setData({
      img_path: "/images/" + id + ".jpg"
    })

    // wx.request({
    //   url: 'https://www.coyoo.xyz/v1/bulletin/article_list/'+ id,
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
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

  }
})