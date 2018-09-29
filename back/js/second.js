$(function () {
    var currentPage = 1;
    var pageSize = 5;
    render();
// 1. 一进入页面发送ajax请求, 获取数据, 渲染页面
    function render() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "get",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                $("tbody").html(template("secondTpl", info));



                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: info.page, //当前页
                    totalPages: Math.ceil(info.total / info.size), //总页数

                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        // 重新根据 render
                        render();
                    }
                });
            }
        })

    }

// 2. 点击添加分类按钮, 显示模态框
    $("#addBtn").click(function () {
        $('#addModal').modal("show");
    });
// 点击一级按钮显示
$(".dropdown-toggle").click(function(){
    $.ajax({
        url:'/category/queryTopCategoryPaging',
        data:{
            page: 1,
            pageSize: 100
        },
        type:'get',
        dataType:'json',
        success:function(info){
            console.log(info);
      $(".dropdown-menu").html(template("firstTpl",info));   
        }
    })


})

 // 3. 给下拉列表中的 a 添加点击事件(通过事件委托注册), 获取 a 的文本, 设置给按钮
$(".dropdown-menu").on("click","a",function(){
    var txt=$(this).text();
    $("#dropdownTxt").text(txt);

    var id=$(this).data("id");
    $('[name="categoryId"]').val( id );
    $('#form').data("bootstrapValidator").updateStatus("categoryId", "VALID");
})













})