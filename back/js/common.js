
// 进度条
$(document).ajaxStart(function () {
    NProgress.start();
  });
  $(document).ajaxStop(function () {
    setTimeout(function() {
        // 关闭进度条
        NProgress.done();
      }, 2000);
  });






$(function(){

    $(".lt_aside .category").click(function(){
        $(".lt_aside .child").stop().slideToggle();
    })

    $(".icon_menu").on("click",function(){
       
            $(".lt_aside").toggleClass("hidemenu");
            $(".lt_main").toggleClass("hidemenu");
            $(".lt_topbar").toggleClass("hidemenu");
       
        
    })
    
    $(".icon_logout").click(function(){
        $('#myModal').modal("show");
    })
    $("#logoutBtn").click(function(){
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            dataType:"json",
            success:function(info){
                if(info.success){
                    location.href = "login.html";
                }
            }
        })
    })
})