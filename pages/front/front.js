//front.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation:'',
    selectedTag:[],
    oneChecked:false,
    checkedNum: 0,
    interests_default: [
    {
      i_content: "人工智能",
      i_id: 8,
      flag: false
    },
      {
        i_content: "写作",
        i_id: 4,
        flag: false
      },
      {
        i_content: "化学",
        i_id: 10,
        flag: false
      },
      {
        i_content: "化学 生物",
        i_id: 14,
        flag: false
      }],
    interests:[],
    tags:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var ins=[];
    wx.request({
      url: app.globalData.server_ip +'/v1/locate/',
      header: {'content-type': 'application / json'},
      method: 'GET',
      success: function(res) {
        // console.log(res);
        ins = res.data.data.interests
        for(var i=0;i < ins.length; i++){
          ins[i]['flag']=false
        }
        that.setData({
          interests:res.data.data.interests,
        })
      },
      fail: function(res) {
        wx.showModal({
          title: '没有连接到后台',
          content: '很抱歉！因为没有连接到后台，数据都是测试用的测试数据',
          showCancel: false
        })
      },
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation=wx.createAnimation({
      duration:500,
      timingFunction:'ease',
      transformOrigin:'left top 0',
      success:function(res){
        console.log(res)
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      selectedTag: []
    })
    for (var i = 0; i < this.data.interests.length; i++) {
      this.setData({
        ['interests[' + i + '].flag']: false
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.translateX(0);
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
  onChange(event){
    
  },

  /*限定用户最多只能选择三个标签*/
  onTap:function(event) {
    var idx = event.target.id
    // console.log(event)
    var tid = this.data.interests[idx].i_id
    var list = this.data.selectedTag
    var inList = list.indexOf(tid)

    if (list.length < 3 && inList==-1){ //
      list.push(tid)
      this.setData({
        // interests:[],
        ["interests["+idx+"].flag"]:true,
        selectedTag:list
      })
    }
    else if(inList != -1){
      list.splice(inList,1)
      this.setData({
        selectedTag:list,
        ["interests["+idx+"].flag"]: false
      })
    }

    console.log(this.data.selectedTag)
    // console.log(this.data.interests)
    if (this.data.selectedTag.length> 0){
      this.translateX(-100);
    }
    else{
      this.translateX(0);
    }
  },

  translateX: function(x){
    this.animation.translateX(x).step();
    this.setData({
      animation: this.animation.export()
    })
  },

  toSearchPage: function(){
    var that = this
    wx.navigateTo({
      url: '/pages/search/search?tid=' + this.data.selectedTag,
      success: function(res) {
      },
      fail: function(res) {
        console.log('fail!')
      },
      complete: function(res) {},
    })
  },
  inList:function(event){
    console.log(this.data.selectedTag.indexOf(i) > -1)
    return this.data.selectedTag.indexOf(i) > -1
  }
})