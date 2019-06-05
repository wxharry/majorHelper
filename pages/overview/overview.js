//overview.js

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    unfolded: false,
    animationbg: '',
    animation:'',
    currentTab: 0,
    navScrollLeft: 0,
    pageNum:3,
    height:0,
    touchS: [0, 0],
    touchE: [0, 0],
    category:[{},{},{}],
    defaultCategory: [  // list
      {
        "cat_name": "理工",
        "colleges": [        // list
          {
            "col_name": "计算机工程与科学学院",
            "majors": [    // list
              {
                "m_id": 5,
                "m_name": "计算机科学与技术"
              },
              {
                "m_id": 42,
                "m_name": "智能科学与技术"
              },
              {
                "m_id": 42,
                "m_name": "智能科学与技术"
              },]
          },                  //一个字典为列表中的一个元素
          {
            "col_name": "环境科学与工程学院",
            "majors": [    // list
              {
                "m_id": 5,
                "m_name": "环境工程"
              },
              {
                "m_id": 42,
                "m_name": "化学工程与工艺"
              },]
          },
          {
            "col_name": "环境科学与工程学院",
            "majors": [    // list
              {
                "m_id": 5,
                "m_name": "环境工程"
              },
              {
                "m_id": 42,
                "m_name": "化学工程与工艺"
              },]
          },
          {
            "col_name": "环境科学与工程学院",
            "majors": [    // list
              {
                "m_id": 5,
                "m_name": "环境工程"
              },
              {
                "m_id": 42,
                "m_name": "化学工程与工艺"
              },]
          },]
      },
      {
        "cat_name": "人文",
        "colleges": [
          {
            "col_name": "xxx",
            "majors": [
              {
                "m_id": 20,
                "m_name": "汉语言文学"
              }
            ]
          }
        ]
      },
      {
        "cat_name": "经管",
        "colleges": []
      }
    ],
    rankList:[{},{},{}],
    disList:{},
    defaultlist:[
      {
      'm_name':'xxxx',
      "f_rank":32.1,
      "s_rank":34.1,
      "t_rank":30.1
    }
    ]
    
  },
  //事件处理函数
  onLoad: function (option) {
    var that = this;


    wx.showLoading({
      title: '加载中',
      mask:true
    }),
    wx.request({
      url: app.globalData.server_ip +'/v1/general/',
      header: {'content-type': 'application / json'},
      method: 'GET',
      success: function(res){
        console.log(res)
        that.setData({
          'category[0]':res.data.data.category[0],
          'category[1]': res.data.data.category[2],
          'category[2]': res.data.data.category[1],
        })
      },
      fail: function(res) {
        
        that.setData({
          category: that.data.defaultCategory
        })
      },
      complete: function(res) {
        // setTimeout(function () {
          
        // }, 2000)
        wx.hideLoading()
      },
    })

    var list="";
    for(var i=0; i < 3; i++){
      that.req(i)
    }

  },
  req(i){
    var that=this;
    var list=''
    list = "rankList[" + i + "]",
    wx.request({
      url: app.globalData.server_ip + "/v1/general/rank/" + (i + 1),
      header: { 'content-type': 'application / json' },
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data)
        that.setData({
          [list]: res.data.data
        })
        // console.log(list)
      },
      fail: function (res) { }
    })
  },

  onReady:function(){
    /*动画效果*/
    
    this.animation = wx.createAnimation({
      duration: 700,
      timingFunction: 'ease',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
    this.animationbg = wx.createAnimation({
      duration: 700,
      timingFunction: 'ease',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res)
      }
    })
    
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
  switchCollege(event){

  },
  switchList(event){

  },
  unfold(){
    var that=this
    // console.log(that.data)
    // wx.setNavigationBarTitle({
    //   title: that.data.category[that.data.currentTab].cat_name + '大类分流排行',
    // })
    this.animationbg.opacity(0.71).step();
    this.animation.translateY(-0.95 * wx.getSystemInfoSync().windowHeight).step();
    this.setData({
      animationbg: this.animationbg.export(),
      animation: this.animation.export(),
      unfolded:true,
    })
    // console.log(that.data.rankList)
    var listNum = that.data.currentTab
    that.setData({
      disList:that.data.rankList[listNum]
    })

    // console.log(that.data.rankList[0])
  },
  fold(){
    this.animationbg.opacity(0).step();
    this.animation.translateY(0).step();
    // wx.setNavigationBarTitle({
    //   title:'专业一览',
    // })
    this.setData({
      animationbg: this.animationbg.export(),
      animation: this.animation.export(),
      unfolded: false,
    })
  },
  touchStart: function (e) {
    // console.log(e.touches[0].pageX)
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.data.touchS = [sx, sy]
  },
  touchMove: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.data.touchE = [sx, sy]
  },
  touchEnd1: function (e) {
    let start = this.data.touchS
    let end = this.data.touchE
    // console.log(start)
    // console.log(end)
    console.log(start[1] - end[1])
    if (start[1] < end[1] - 30) {
      console.log('下滑')
      this.fold()
    } else if (start[1] > end[1] + 1) {
      console.log('上滑')
      this.unfold()
    }else {
      console.log('静止')
    }
  },
  touchEnd5: function (e) {
    let start = this.data.touchS
    let end = this.data.touchE
    // console.log(start)
    // console.log(end)
    console.log(start[1] - end[1])
    if (start[1] < end[1] - 200) {
      console.log('下滑')
      this.fold()
    } else if (start[1] > end[1] + 200) {
      console.log('上滑')
      this.unfold()
    } else {
      console.log('静止')
    }
  },


})