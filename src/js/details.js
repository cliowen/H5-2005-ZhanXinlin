// window.onload = function(){
    
//     // console.log(arr);
// }
$(function(){
    var str = location.href;
    var arr = str.split('=')[1];
    // console.log(location.href);
    $.ajax({
        url:'../../php/list.php',
        methods:'post',
        dataType:'json',
        success:function(data){
            // console.log(data);
            var html = "";
            $.each(data,function(index,item){
                if(arr==item.Id){
                    html += `<div class="mB_l">
                    <img src="${item.src}" alt="">
                </div>
                <div class="mB_r">
                    <p>${item.title1}</p>
                    <h2>∅ 40.00 mm ${item.title}</h2>
                    <ul>
                        <li>${item.mingcheng}</li>
                        <li>表壳材质:精钢</li>
                        <li>表带材质:鳄鱼皮表带</li>
                        <li>表盘指针:蓝钢指针</li>
                        <li>表盘刻度:漆绘阿拉伯数字</li>
                        <li>表盘颜色:银色"麦粒"饰纹</li>
                        <li>机芯类型: L687自动上链机械机芯，每小时振动28,800次， 提供54小时动力储存。导柱轮计时码表</li>
                    </ul>
                    <h3>${item.price}</h3>
                    <a href="javascript:;" class="addToCart">加入购物车</a>
                    <a href="javascript:;">现在购买</a>
                    <ol class="clearfix">
                        <li>
                            <a href="script:;"></a>
                            <span>加入心愿单</span>
                        </li>
                        <li>
                            <a href="script:;"></a>
                            <span>机型比较</span>
                        </li>
                        <li>
                            <a href="script:;"></a>
                            <span>表盘尺寸参考</span>
                        </li>
                    </ol>
                    <b>我们可以通过电话帮您找到想要的商品，请拨打400-821-3270</b>
                </div>`
                }
            })
            $('.mB').html(html);

            $('.addToCart').click(function(){
                // console.log(1);
                // console.log($(this).siblings('h3').html());
                // console.log($(this).parent().siblings('.mB_l').children().attr('src'));
                $.ajax({
                    url:'../../php/interface/addwq.php',
                    dataType:'json',
                    methods:'post',
                    data:{
                        id:$(this).siblings().children().eq(0).html(),
                        name:$(this).siblings('p').html(),
                        img:$(this).parent().siblings('.mB_l').children().attr('src'),
                        price:$(this).siblings('h3').html(),
                    },
                    success:function(res){
                        console.log(res);
                        if(res.code){
                            location.href='../pages/shopping.html'
                        }else{
                            alert('商品加入失败')
                        }
                    }
                })
            })
        }
    })

    





})