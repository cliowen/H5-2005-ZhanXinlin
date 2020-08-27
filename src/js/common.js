window.onload = function(){
        //header_b点击X关闭
        var header_b = document.querySelector('.header_b');
        var header_b_a = header_b.children[1];

        header_b_a.onclick = function(){
            header_b.style.display = "none";
        }

        //header_c动画
        var hc_aS = document.querySelectorAll('.hcli_a');
        var wanbiao = document.querySelector('.wanbiao');

        for(var i=0;i<hc_aS.length;i++){
            hc_aS[i].onmouseover=function(){
                for(var i=0;i<hc_aS.length;i++){
                    hc_aS[i].style.borderBottom = "";
                }
                this.style.borderBottom = "1px solid #003150";
                
            }
            
            hc_aS[i].onmouseout=function(){
                for(var i=0;i<hc_aS.length;i++){
                    hc_aS[i].style.borderBottom = "";
                }
            }
        }

        //foot_b动画
        var foot_b = document.querySelector('.foot_b');
        var fb_aS = foot_b.querySelectorAll('a');

        for(var i=0;i<fb_aS.length;i++){
            // console.log(fb_aS[i]);
            fb_aS[i].onmouseover=function(){
                for(var i=0;i<fb_aS.length;i++){
                    fb_aS[i].style.color='';
                }
                this.style.color = "#003150";
            }
            fb_aS[i].onmouseout=function(){
                for(var i=0;i<fb_aS.length;i++){
                    fb_aS[i].style.color='';
                }
            }
        }

        //foot_c1动画
        var foot_c1 = document.querySelector('.foot_c1');
        var fc_aS = foot_c1.querySelectorAll('a');
        var fc_liS = foot_c1.querySelectorAll('li');
        var wh = document.querySelector('.wechat-hover');
        var wh_c = document.querySelector('.wechat-hover-cs');
        // console.log(wh);
        // console.log(wh_c);

        for(var i=0;i<fc_aS.length;i++){
            fc_aS[i].onmouseover=function(){
                for(var i=0;i<fc_aS.length;i++){
                    fc_aS[i].style.color='';
                }
                this.style.color='#003150';
            }
            fc_aS[i].onmouseout=function(){
                for(var i=0;i<fc_aS.length;i++){
                    fc_aS[i].style.color='';
                }
            }
        }

            // console.log(fc_liS[0]);
            fc_aS[0].onmouseover=function(){
                wh.style.opacity='1';
            }
            fc_aS[0].onmouseout=function(){
                wh.style.opacity='0';
            }
            fc_aS[3].onmouseover=function(){
                wh_c.style.opacity='1';
            }
            fc_aS[3].onmouseout=function(){
                wh_c.style.opacity='0';
            }

        
        


        for(var i=0;i<fc_liS.length;i++){
            fc_liS[i].onmouseover=function(){
                for(var i=0;i<fc_liS.length;i++){
                    fc_liS[i].style.transform='';
                }
                this.style.transform="scale(1.1)";
            }
        }
        for(var i=0;i<fc_liS.length;i++){
            fc_liS[i].onmouseout=function(){
                for(var i=0;i<fc_liS.length;i++){
                    fc_liS[i].style.transform='';
                }
            }
        }
        //foot_c2动画
        var foot_c2 = document.querySelector(".foot_c2");
        var fc2_aS = foot_c2.querySelectorAll('a');

        for(var i=0;i<fc2_aS.length;i++){
            fc2_aS[i].onmouseover=function(){
                for(var i=0;i<fc2_aS.length;i++){
                    fc2_aS[i].style.color='';
                }
                this.style.color='#003150';
            }
        }
        for(var i=0;i<fc2_aS.length;i++){
            fc2_aS[i].onmouseout=function(){
                for(var i=0;i<fc2_aS.length;i++){
                    fc2_aS[i].style.color='';
                }
            }
        }
}


$(function(){
    $('.ul_l li').eq(1).mouseover(function(){
        $('.wanbiao').stop().fadeIn();
    })
    $('.ul_l li').eq(1).mouseout(function(){
        $('.wanbiao').stop().fadeOut();
    })
    $('.ul_l li').eq(2).mouseover(function(){
        $('.shijie').stop().fadeIn();
    })
    $('.ul_l li').eq(2).mouseout(function(){
        $('.shijie').stop().fadeOut();
    })
    $('.ul_r li').eq(1).mouseover(function(){
        $('.fuwu').stop().fadeIn();
    })
    $('.ul_r li').eq(1).mouseout(function(){
        $('.fuwu').stop().fadeOut();
    })
    // $('.ul_l li').eq(1).bind('mouseout',(function(){
    //     $('.wanbiao').stop().slideup();
    // }))

    // 点击X关闭当前页面
    $('.xg_top').children().click(function(){
        $('.wanbiao').stop().hide()
    })
    
    // wanbiao里面tag栏切换
    $('.xg_bottom_1 a').click(function(){
        $(this)
        .addClass('xg_b_current')
        .parent()
        .siblings()
        .children()
        .removeClass('xg_b_current')
    })
    // $('.xg_bottom_1 a').eq(0).cilck(function(){
    //     console.log(1);
    //     $('.xg_bottom').show()
    // })
    // $('.xg_bottom_1 a').eq(1).cilck(function(){
    //     $('.jy').show()
    // })
    $('.xg_bottom_1 a').eq(0).click(function(){
        $('.xg_bottom').show().slideDown(1000)
        $('.jy').hide()
    })
    $('.xg_bottom_1 a').eq(1).click(function(){
        $('.xg_bottom').hide()
        $('.jy').show().slideDown(1000)
    })
})