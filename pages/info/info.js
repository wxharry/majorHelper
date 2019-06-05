// pages/infoDetail/info.js

const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    card: [
      {
        name: "专业辅修",
        img_name: "minor",
        b_id: 0
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
    ],
    content_test:[
      {
        "a_id": 5,
        "title": "2019转专业实施办法",
        "pub_time": "2018-09-02",        //发布日期 格式 yyyy-mm-dd
      },
      {
        "a_id": 2,
        "title": "计算机工程与科学学院",
        "pub_time": "2018-09-02",        //发布日期 格式 yyyy-mm-dd
      },
      {
        "a_id": 4,
        "title": "机电工程与自动化学院",
        "pub_time": "2018-09-02",        //发布日期 格式 yyyy-mm-dd
      }
    ],
    content_display:[
      {
        title:"理学院"
      },
      {
        title: "文学院"
      },
      {
        title: "外国语学院"
      },
      {
        title: "经济学院"
      },
      {
        title: "管理学院"
      },
      {
        title: "图书情报档案系"
      },
      {
        title: "法学院"
      },
      {
        title: "通信与信息工程学院"
      },
      {
        title: "计算机工程与科学学院"
      },
      {
        title: "机电工程与自动化学院"
      },
      {
        title: "材料科学与工程学院"
      },
      {
        title: "环境与化学工程学院"
      },
      {
        title: "生命科学学院"
      },
      {
        title: "新闻传播学院"
      },
      {
        title: "上海电影学院"
      },
      {
        title: "悉尼工商学院"
      },
      {
        title: "社会科学学部"
      },
      {
        title: "土木工程系"
      },
      {
        title: "钱伟长学院"
      },
      {
        title: "中欧工程技术学院"
      },
      {
        title: "社会学院"
      },
    ],
    name:"",
    content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
    if(options.id != undefined){
      this.setData({
        id: options.id,
        name:that.data.card[options.id].name
      })
    }
    if (that.data.id == 0 || that.data.id == 2 || that.data.id == 3) {
      // wx.showModal({
      //   title: '抱歉',
      //   content: '暂未开放',
      //   showCancel: false,
      // })
      wx.showModal({
        title: '抱歉',
        content: '该功能暂未开放',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000',
        confirmText: '好的',
        confirmColor: '#000',
        success: function (res) {
          wx.navigateBack({
            delta: 1,
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    // console.log(that.data.id)
    else{
      wx.showLoading({
        title: '加载中',
        mask: true
      }),
      wx.request({
        url: app.globalData.server_ip + '/v1/bulletin/article_list/',
        data: { b_name: that.data.name },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res)
          if (res.data.code == '2000') {
            that.setData({
              // content: res.data.data
              content: that.data.content_display
            })
          }
          else {
            wx.showModal({
              title: '错误',
              content: res.data.msg,
              showCancel: false,
            })
          }
        },
        fail: function (res) {
          wx.showModal({
            title: '未连接服务器',
            content: '很抱歉！因为没有连接到后台，数据都是测试用的测试数据',
            showCancel: false,
          })
          that.setData({
            content: that.data.content_display
          })
        },
        complete: function (res) {
          
        },
      })

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
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
  toDetail(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/infoDetail/infoDetail?id='+ e.target.id,
    })
  },
    onTap: function () {
    wx.showModal({
      title: '抱歉',
      content: '该功能暂未开放',
      showCancel: false,
    })
  }
})