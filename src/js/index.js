(function () {
  function Slider(option) {
    this.wrap = option.wrap;
    this.imgList = option.imgList;
    this.imgNum = this.imgList.length;
    this.width = option.width || $(this.wrap).width();
    this.height = option.height || $(this.wrap).height();
    this.isAuto = option.isAuto || true;
    this.moveTime = option.moveTime;
    this.direction = option.direction || "right";
    this.btnWidth = option.btnWidth;
    this.btnHeight = option.btnHeight;
    this.spanWidth = option.spanWidth;
    this.spanHeight = option.spanHeight;
    this.spanColor = option.spanColor;
    this.activeSpanColor = option.activeSpanColor;
    this.btnBackgroundColor = option.btnBackgroundColor;
    this.spanRadius = option.spanRadius;
    this.spanMargin = option.spanMargin;
    this.flag = false;
    this.nowIndex = 0;
    this.createDom();
    this.initStyle();
    this.bindEvent();
    if (this.isAuto) {
      this.autoMove();
    }
  }
  Slider.prototype.createDom = function () {
    var oUl = $('<ul class="imgList"></ul>');
    var Spot = $('<div class="spot"></div>');
    this.imgList.forEach(function (item) {
      var oLi =
        '<li><a href=" ' +
        item.a +
        ' "><img src=" ' +
        item.img +
        ' "></a></li>';
      oUl.append(oLi);
      var span = "<span></span>";
      Spot.append(span);
    });
    var leftBtn = $('<div class="left-btn">&lt</div>');
    var rightBtn = $('<div class="right-btn">&gt</div>');
    this.wrap.append(oUl).append(leftBtn).append(rightBtn).append(Spot);
  };
  Slider.prototype.initStyle = function () {
    $("*", this.wrap).css({ margin: 0, padding: 0, listStyle: "none" });
    $(this.wrap).css({ overflow: "hidden", position: "relative" });
    $(".imgList", this.wrap).css({
      width: this.width,
      height: this.height,
      position: "relative",
    });
    $(".imgList li", this.wrap)
      .css({
        width: this.width,
        height: this.height,
        position: "absolute",
        left: 0,
        top: 0,
        display: "none",
      })
      .eq(this.nowIndex)
      .css({ display: "block" });
    $(".imgList li a, .imgList li a img", this.wrap).css({
      display: "inline-block",
      width: this.width,
      height: this.height,
    });
    $(".left-btn, .right-btn", this.wrap).css({
      width: this.btnWidth,
      height: this.btnHeight,
      backgroundColor: this.btnBackgroundColor,
      color: "#fff",
      textAlign: "center",
      lineHeight: this.btnHeight + "px",
      position: "absolute",
      top: "50%",
    //   left: 20 + 'px',
      marginTop: -this.btnHeight / 2,
      cursor: "pointer",
    });
    $(".right-btn", this.wrap).css({ right: 0 });
    $(".spot", this.wrap).css({
      height: this.spanHeight + this.spanMargin * 2,
      position: "absolute",
      left: "50%",
      marginLeft: (-this.imgNum * (this.spanWidth + this.spanMargin * 2)) / 2,
      bottom: 10,
    });
    $(".spot span", this.wrap)
      .css({
        display: "inline-block",
        width: this.spanWidth,
        height: this.spanHeight,
        margin: this.spanMargin,
        backgroundColor: this.spanColor,
        borderRadius: this.spanRadius,
        cursor: "pointer",
      })
      .eq(this.nowIndex)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.bindEvent = function () {
    var self = this;
    $(".left-btn", this.wrap).click(function () {
      self.move("prev");
    });
    $(".right-btn", this.wrap).click(function () {
      self.move("next");
    });
    $(".spot span").click(function (e) {
      self.move($(this).index());
    });
    $(this.wrap)
      .mouseenter(function () {
        clearInterval(self.time);
      })
      .mouseleave(function () {
        self.autoMove();
      });
  };
  Slider.prototype.move = function (dir) {
    if (this.flag) {
      return false;
    }
    this.flag = true;
    switch (dir) {
      case "prev":
        if (this.nowIndex === 0) {
          this.nowIndex = this.imgNum - 1;
        } else {
          this.nowIndex--;
        }
        break;
      case "next":
        if (this.nowIndex === this.imgNum - 1) {
          this.nowIndex = 0;
        } else {
          this.nowIndex++;
        }
        break;
      default:
        this.nowIndex = dir;
        break;
    }
    var self = this;
    $(".imgList li", this.wrap)
      .fadeOut()
      .eq(this.nowIndex)
      .fadeIn(function () {
        self.flag = false;
      });
    $(".spot  span", this.wrap)
      .css({ backgroundColor: this.spanColor })
      .eq(this.nowIndex % this.imgNum)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.autoMove = function () {
    var self = this;
    this.time = setInterval(function () {
      if (this.direction == "left") {
        $(".left-btn", this.wrap).trigger("click");
      } else {
        $(".right-btn", this.wrap).trigger("click");
      }
    }, self.moveTime);
  };
  $.fn.extend({
    slider: function (option) {
      option.wrap = this;
      new Slider(option);
    },
  });
})();

$(function(){
  $('#mainA>ul li').click(function(){
    $(this).addClass('current').siblings().removeClass('current')
    // console.log(this);
    var index = $(this).index();
    // console.log(index);

    $('#mainA .item').eq(index).show().siblings().hide();
    // $('a').parents('ul').siblings('item').eq(index);
    // $('.item').eq(index);
  })

  //轮播图
    $('.demo').slider({
      imgList: [
          {
              img: '../images/lb1.jpg',
              a:'../pages/list.html',
          },
          {
              img: '../images/lb2.jpg',
              a: '#',
          },
          {
              img: '../images/lb3.jpg',
              a: '#',
          },
          {
              img: '../images/lb4.jpg',
              a: '#',
          }
      ],
      //图片的列表
      width: '100%', //图片的宽
      height: 568, //图片的高
      isAuto: true, //是否自动轮播
      moveTime: 4000, //运动时间
      direction: 'right', //轮播的方向
      btnWidth: 30, //按钮的宽
      btnHeight: 30, //按钮的高
      spanWidth: 30, //span按钮的宽
      spanHeight: 2, //span按钮的高
      spanColor: '#003150', //span按钮的颜色
      activeSpanColor: '#fff', //选中的span颜色
      btnBackgroundColor: 'rgba(0, 0, 0, 0.5)', //两侧按钮的颜色
      // spanRadius: '50%', //span按钮的圆角程度
      spanMargin: 6, //span之间的距离
    })
  

    // 秒杀

    //mianB_1动画
    $('#mainB_1 img').mouseover(function(){
        $(this).css('opacity', 0.8)
    })
    $('#mainB_1 img').mouseout(function(){
      $(this).css('opacity', 1)
    })

    //mainH动画
    $('.guanzhu').mouseover(function(){
      $('.mH_a_1').css('display','block')
    })
    $('.guanzhu').mouseout(function(){
      $('.mH_a_1').css('display','none')
    })
    $('.mH_a_2').mouseover(function(){
      $('.mH_a_1').css('display','block')
    })
    $('.mH_a_2').mouseout(function(){
      $('.mH_a_1').css('display','none')
    })
})

// 秒杀
$(document).ready(function () {
  var oDate = new Date();
  var nowTime = oDate.getTime(); //现在的毫秒数
  oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
  var targetDate = new Date(oDate.toLocaleDateString());
  run(targetDate);
});

function run(enddate) {
  getDate(enddate);
  setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
  var oDate = new Date(); //获取日期对象

  var nowTime = oDate.getTime(); //现在的毫秒数
  var enddate = new Date(enddate);
  var targetTime = enddate.getTime(); // 截止时间的毫秒数
  var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

  var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
  second = second % 86400; //余数代表剩下的秒数；
  var hour = Math.floor(second / 3600); //整数部分代表小时；
  second %= 3600; //余数代表 剩下的秒数；
  var minute = Math.floor(second / 60);
  second %= 60;
  var spanH = $('.se-txt')[0];
  var spanM = $('.se-txt')[1];
  var spanS = $('.se-txt')[2];

  spanH.innerHTML = tow(hour);
  spanM.innerHTML = tow(minute);
  spanS.innerHTML = tow(second);
}

function tow(n) {
  return n >= 0 && n < 10 ? '0' + n : '' + n;
}