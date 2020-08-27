/* window.onload = function(){
    var zc = document.getElementById('zhuce');
    console.log(zc);
    zc.onclick = function(){
        location.href = '../pages/registered.html'
    }
} */
$(function(){
    $('#submit').click(function(){
        $.ajax({
            method:'post',
            url:'../../php/login.php',
            data:{
                username:$('#un').val(),
                password:$('#pw').val()
            },
            success:function(data){
                // console.log(data);
                if(data.code==1){
                    localStorage.setItem('un',data.data.username)
                    location.href = '../pages/index.html'
                }else{
                    alert(data.msg)
                }
            },
            dataType:'json'
        })
    })
    $('#zhuce').click(function(){
        location.href = '../pages/registered.html'
    })
})