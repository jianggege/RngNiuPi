

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

               
               $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                currentPage:info.page,//当前页
                totalPages:Math.ceil( info.total / info.size ),//总页数
                size:"small",//设置控件的大小，mini, small, normal,large
                onPageClicked:function(event, originalEvent, type,page){
                  //为按钮绑定点击事件 page:当前点击的按钮值
                  currentPage = page;
                  // 重新根据 render
                  render();
                }
              });
        }
    })
   
}
$("tbody").on('click',".btn",function(){
    $("#userModal").modal("show");
    currentId = $(this).parent().data("id");

    // 点击禁用按钮, 将用户改成禁用状态, 改成 0, isDelete传 0
    isDelete = $(this).hasClass("btn-danger") ? 0 : 1;
});
$('#submitBtn').on("click",function(){
    console.log( currentId, isDelete );
    $.ajax({
        type:"post",
        url:"/user/updateUser",
        data:{
            id:currentId,
            isDelete:isDelete
        },
        dataType:'json',
        success:function(info){
                console.log(info);
                 if ( info.success ) {
          // 关闭模态框
          $('#userModal').modal("hide");
          // 重新渲染
          render();
                 }
        }
    })
})



})