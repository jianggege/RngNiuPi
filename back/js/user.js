

$(function(){
var currentPage=1;
var pageSize=5;
render();
function render(){
    $.ajax({
        url:"/user/queryUser",
        type:"get",
        data:{
            page:currentPage,
            pageSize:pageSize
        },
        dataType:"json",
        success:function(info){
            console.log(info);
            
               var str=template("tmp",info);
               $(".lt_content tbody").html(str);
                
        }
    })
}

    
})