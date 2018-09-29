$(function () {
    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            url: "/category/queryTopCategoryPaging",
            type: "get",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                $("tbody").html(template("tpl", info));



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


    $("#addBtn").click(function () {
        $('#addModal').modal("show");
    });

console.log($("#form"));




  // 3. 通过表单校验插件, 实现表单校验功能
  $('#form').bootstrapValidator({
    // 配置图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',      // 校验成功
      invalid: 'glyphicon glyphicon-remove',   // 校验失败
      validating: 'glyphicon glyphicon-refresh'  // 校验中
    },

    // 配置校验字段
    fields: {
      categoryName: {
        // 配置校验规则
        validators: {
          // 非空校验
          notEmpty: {
            message: "请输入一级分类名称"
          }
        }
      }
    }
  });




   // 4. 注册表单校验成功事件, 阻止校验成功时的默认提交, 通过ajax提交
  $('#form').on("success.form.bv", function( e ) {
    // 阻止默认行为
    e.preventDefault();

    // 通过 ajax 提交
    $.ajax({
      type: "post",
      url: "/category/addTopCategory",
      data: $('#form').serialize(),
      dataType: "json",
      success: function( info ) {
        console.log( info );
        if ( info.success ) {
          // 关闭模态框
          $('#addModal').modal("hide");
          // 重新渲染第一页面
          currentPage = 1;
          render();
          // 表单内容和校验状态都要重置, resetForm传 true 才将内容和状态都重置
          $('#form').data("bootstrapValidator").resetForm(true);
        }
      }
    })

  });














})