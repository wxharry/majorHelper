//search.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideSearch:false,
    result:false,
    searchInput:'',
    selectedTag:"",
    majors:[],
    test: [
      { "m_id": 42, "m_name": "工业设计" },
      { "m_id": 51, "m_name": "计算机科学与技术" },
      ]
  },
  listenerSearchInput: function (e) {
    var searchIn = e.detail.value;
    this.setData({
      searchInput: searchIn
    })
  },

  toSearch: function (sub) {
    var that = this
    if (that.data.searchInput) {
      // console.log(that.data.searchInput)
      that.setData({
        majors:[]
      })
      wx.request({
        url: app.globalData.server_ip + '/v1/locate/search/',
        // url:"http://192.168.43.182:8080/v1/locate/search/",
        method:"POST",
        header:{"content-type":"application/x-www-form-urlencoded"},
        data: {
          content:that.data.searchInput
        },
        success: function (res) {
          console.log(res)
          if(res.data.code=='2000'){
            that.setData({
              majors: res.data.data,
              result: true
            })
          }
          else if(res.data.code=='4001'){
            wx.showModal({
              title: '提示',
              content: '很抱歉！找不到您想搜的专业',
              showCancel: false
            })
          }
          else{
            console.log(res.data.code)
            wx.showModal({
              title: '提示',
              content: '很抱歉！没连服务器',
              showCancel: false
            })

          }
        },
        fail: function () {
          console.log('failed')
          wx.showModal({
            title: '提示',
            content: '未连服务器，只显示测试数据',
            showCancel: false
          })
          that.setData({
            majors: that.data.test,
            result: true
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请输入搜索内容',
        showCancel: false
      })
      return
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if(options.tid != undefined){
      this.setData({
        selectedTag: options.tid,
        hideSearch: true
      })
      wx.request({
        
        url: app.globalData.server_ip + '/v1/locate/search/',
        // url: "http://192.168.43.182:8080/v1/locate/search",
        data: {
          tags: "[" + this.data.selectedTag + "]"
        },
        header: { "content-type": "application/json" },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          that.setData({
            majors:res.data.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

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
  onTap(e){
    var that=this
    var id = e.target.id
    // console.log(e)
    wx.navigateTo({
      url:'/pages/detail/detail?id=' + id,
    })
  }
})