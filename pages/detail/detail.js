//detail.js

const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animation:'',
    detail_default: {
      "m_name": "专业名",
      "intro": "内容为很长的文段",
      "course": "内容为字符串",
      "salary": "文段",  //null
      "rank_precent": "30.12",  //字符串
      "enroll_num":"23",
    },
    detail:{},
    img_path: "",
    id:0,
    navData: [
      {
        text: '介绍',
      },
      {
        text: '主要课程',
      },
      {
        text: '薪资',
      },
    ],
    currentTab: 0,
    navScrollLeft: 0
  },
  onPageScroll(top) {
    if(top.scrollTop>60){
      wx.setNavigationBarTitle({
        title: this.data.detail.m_name,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    else{
      wx.setNavigationBarTitle({
        title: "专业分流助手",
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      // mask: true
    })
    var that = this
    
    wx.request({
      url: app.globalData.server_ip +'/v1/detail/'+options.id,
      header: {'content-type': 'application / json'},
      method: 'GET',
      success: function(res){
        // console.log(res)
        that.setData({
          detail:res.data.data,
          img_path: "https://www.coyoo.xyz/images/majorhelper/"+res.data.data.m_name+".jpg"
        })
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideLoading()        
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
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

  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/3
    var singleNavWidth = this.data.windowWidth / 3;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 3;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },
  switchCollege(event) {

  },
  switchList(event) {

  }
})