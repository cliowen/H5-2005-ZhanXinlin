$(function(){
    $('.mB a').click(function(){
        location.href='../pages/list.html'
    })
    $.ajax({
        url:'../../php/shopping.php',
        methods:'post',
        dataType:'json',
        success:function(data){
            // console.log(data);
            var html = "";
            $.each(data,function(index,item){
                // console.log();
                // console.log(item.product_img);
                html += `
                    <div class="gwc clearfix">
                        <div class="gwc_l">
                            <img src="${item.product_img}" alt="">
                        </div>
                        <div class="gwc_r">
                            <h2>${item.product_name}</h2>
                            <p>${item.product_id}</p>
                            <ul>
                                <li>
                                    <span>数量</span><br>
                                    <select class="sel">
                                        <option disabled selected>0</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </li>
                                <li>
                                    <span>表带尺寸(厘米)</span><br>
                                    <b>17.5</b>
                                </li>
                                <li>
                                    <span>价格</span><br>
                                    <b class="price">${item.product_price}</b>
                                </li>
                                <li>
                                    <span>小计</span><br>
                                    <b class="gwc_r_txt">￥16,700.00</b>
                                </li>
                            </ul>
                            <a class="del">X &nbsp;&nbsp;移除</a>
                        </div>
                    </div>`
            })
            $('.box').html(html);

        }
    })
    
    $('.mC_a_l').on('click','.del',function(){
        
        var id = $('.gwc_r p').html();
        // console.log(id);
        // $.ajax({
        //     url:'../../php/shopping.php',
        //     methods:'post',
        //     dataType:'json',
        //     success:function(data){
        //         // console.log(data);
        //         $.each(data,function(index,item){
        //             // console.log(item.product_id);
        //             if(id==item.product_id){
        //                 // console.log($('.gwc'));
        //                 $('.gwc').remove()
        //             }
        //         })
        //     }
        // })

        $.ajax({
            url:'../../php/interface/delwq.php',
            methods:'post',
            dataType:'json',
            data:{
                id:id
            },
            success:function(data){
                // var arr = [];
                // arr.push(data);
                // console.log(data);
                // $.each(arr,function(index,item){
                //     console.log(item);
                // })
                if(data.code){
                    // console.log(1);
                    // alert('移除成功')
                    location.href=location.href;
                }
            }
        })
        $(this).parent().parent().remove();
    })

    /* $('.gwc').on('click','.del',function(){
        var id = $('.gwc_r p').html();
        // console.log(id);
        $.ajax({
            url:'../../php/interface/delwq.php',
            methods:'post',
            data:{
                id:id
            },
            // dataType:'json',
            success:function(data){
                console.log(data);
                if(data.code){
                    alert('移除成功')
                    location.href=location.href;
                }
            }
        })
    }) */
    
})