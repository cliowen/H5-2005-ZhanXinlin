$(function(){
    $('#submit').click(function(){
        $.ajax({
            method:'post',
            url:'../../php/registered.php',
            data:{
                username:$('#un').val(),
                password:$('#pw').val()
            },
            success:function(data){
                // console.log(data);
                if(data.code==1){
                    //表示成功，跳到登录页面
                    location.href='../pages/login.html'
                }else{
                    //表示失败
                    alert(data.msg)
                }
            },
            dataType:'json'
        })
    })
})