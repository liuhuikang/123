$(function(){
    $(`<link rel="stylesheet" href="../css/header.css">`+`
    <link rel="stylesheet" href="../css/font-awesome-4.7.0/css/font-awesome.min.css">`).appendTo("head");
        $.ajax({
        url:"header.html",
        type:"get",
            success:function(res){
                $(res).replaceAll("#header");
                



                  //菜单栏悬停小三角
                  $("#span1,#ce").hover(function(){
                    $("#span1 i").addClass("rotate_180");
                    $("#ce").stop().animate({"height":"180px"});
                           
                },function(){
                    $("#span1 i").removeClass("rotate_180");
                    $("#ce").stop().animate({"height":"0px"});
                })
                

               

                //登录注册页面跳转
                $(".login_dl").click(function(){
                $("#login_background_black").fadeIn();
                $(".login_window").css({"display":"block"});
                $(".insert_window").stop().animate({"top":"-500px"});                                  
                $(".login_window").stop().animate({"top":"300px"});
                })    
              //注册框
              $(".login_zc").click(function(){
                $("#login_background_black").fadeIn();
                $(".insert_window").css({"display":"block"});
                $(".login_window").stop().animate({"top":"-500px"});                                  
                $(".insert_window").stop().animate({"top":"300px"});
                })    

      








            }
        })
        
        
              

  })

