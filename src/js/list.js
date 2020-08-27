$(function(){
    //数据渲染
    $.ajax({
        url:'../../php/list.php',
        methods:"get",
        dataType:"json",
        success:function(data){
            // console.log(data);
            var html = "";
            $.each(data,function(index,item){
                // console.log(item.Id);
                html += `
                <div class="mB_1">
                    <a href="script:;"><img src="${item.src}" alt=""></a>
                    <div class="mB_1a">
                        <strong>${item.title1}</strong>
                        <h4>${item.title}</h4>
                        <span>${item.mingcheng}</span>
                        <p>${item.price}</p>
                        <a href="../pages/details.html?id=${item.Id}"><i>${item.title2}</i></a>
                    </div>
                </div>`
            })
            $('.mainB').html(html);
        }

    })
})