$(function(){
    $(`<link rel="stylesheet" href="../css/login.css">`).appendTo("head");
        $.ajax({
        url:"login.html",
        type:"get",
            success:function(res){
                $(res).replaceAll("#login_body_all");
                
//登陆框姓名验证
              $("#uname").blur(function(){
                  var c =  /^[a-zA-Z0-9\u4e00-\u9fa5]{3,12}$/;
                    var $uname=$("#uname").val();
                    if($uname.match(c)){





                            $("#input_uname_true").show();
                            $("#input_uname_false").hide();



                        }else{ 
                            $("#input_uname_false").show();
                            $("#input_uname_true").hide();
                }
              });
//登陆框密码验证              
              $("#upwd").blur(function(){
                var c =  /^[a-zA-Z0-9]{6,8}$/;
                var $upwd=$("#upwd").val();
                if($upwd.match(c)){
                        $("#input_upwd_true").show();
                        $("#input_upwd_false").hide();
                    }else   if($("#upwd").val()==""){ 
                        $("#input_upwd_false").show();
                        $("#input_upwd_true").hide();
            }
            });
          
        //登陆模态框关闭按钮
                $(".close_btn").click(function(){
                    $("#login_background_black").fadeOut();                                    
                    $(".login_window").stop().animate({"top":"-500px"});
                    $(".insert_window").stop().animate({"top":"-500px"});   
                })
                $("#login_background_black").click(function(){
                    $("#login_background_black").fadeOut();                                    
                    $(".login_window").stop().animate({"top":"-500px"});
                    $(".insert_window").stop().animate({"top":"-500px"});  
                })
        
        //点击登陆触发login事件    
        $(".submit").click(function(){
            
            var xhr=createXhr();
                        xhr.onreadystatechange=function(){
                            if(xhr.readyState==4&&xhr.status==200){
            
                                var res=xhr.responseText;
                                alert(res);
                             //关闭登录框
                             var evt = document.createEvent("MouseEvents");   
                             evt.initEvent("click", true, true);   
                             document.getElementById("login_background_black").dispatchEvent(evt);   
                            }
                        }
            
                        xhr.open("post","/login",true);
                        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                        function $(id){
                            return document.getElementById(id);
                        }
                        var u_name=$("uname").value;
                        var u_pwd=$("upwd").value;
                        var msg="uname="+u_name+"&upwd="+u_pwd;
                    
                        xhr.send(msg);
        })  ;  
//登录结束             
        
                          
                    

  //注册开始
                      $("#insert_uname").blur(function(){
                var c =  /^[a-zA-Z0-9\u4e00-\u9fa5]{3,12}$/;
                var $insert_uname=$("#insert_uname").val();
                if($insert_uname.match(c)){
//鼠标离开异步查询数据库是否重名
                
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
		 xhr=new XMLHttpRequest();
	}else{
		 xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
                   
                        var xhr=createXhr();
                            xhr.onreadystatechange=function(){
                                if(xhr.readyState==4&&xhr.status==200){

                                    var res=xhr.responseText;
                                    console.log(res)
                                    if(res==1){//判断回复的结果是0或者1   继续执行语句
                                        $("#insert_input_uname_true").hide();
                                        $("#insert_input_uname_false").hide();
                                        $("#insert_input_uname_have").show();
                                    }else{
                                        $("#insert_input_uname_true").show();
                                       $("#insert_input_uname_false").hide();
                                        $("#insert_input_uname_have").hide();
                                    }
                                    
                                   
                                }
                            }

                            xhr.open("post","/select",true);
                            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                            function set(id){
                                return document.getElementById(id);
                            }
                            var u_name=set("insert_uname").value;
                            var msg="uname="+u_name;
                        
                            xhr.send(msg);
                            }else{ 
                                        $("#insert_input_uname_have").hide();
                                        $("#insert_input_uname_false").show();
                                        $("#insert_input_uname_true").hide();
                            }
                            });



            $("#insert_upwd").blur(function(){
            var c =  /^[a-zA-Z0-9]{6,8}$/;
            var $insert_upwd=$("#insert_upwd").val();
            if($insert_upwd.match(c)){
                    $("#insert_input_upwd_true").show();
                    $("#insert_input_upwd_false").hide();
                }else   if($("#upwd").val()==""){ 
                    $("#insert_input_upwd_false").show();
                    $("#insert_input_upwd_true").hide();
            }
            });

            //登陆模态框关闭按钮   登录界面已经有了

          
            //点击注册触发login事件    
            $(".insert_submit").click(function(){
                // function createXhr(){
                // }
            //   var xhr=window.createXhr();
            
            var xhr=null;
            if(window.XMLHttpRequest){
                 xhr=new XMLHttpRequest();
            }else{
                 xhr=new ActiveXObject("Microsoft.XMLHttp");
            }
            debugger
            // return xhr;
                    xhr.onreadystatechange=function(){
                        if(xhr.readyState==4&&xhr.status==200){

                            debugger
                            var res=xhr.responseText;
                            alert(res);
                            //关闭登录框  登录已经成功
                            var evt = document.createEvent("MouseEvents");   
                            evt.initEvent("click", true, true);   
                            document.getElementById("login_background_black").dispatchEvent(evt);   
                        }
                    }

                    xhr.open("post","/insert_login",true);
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    function $(id){
                        return document.getElementById(id);
                    }
                    var u_name=$("insert_uname").value;
                    var u_pwd=$("insert_upwd").value;
                    console.log(666)
                    var msg="uname="+u_name+"&upwd="+u_pwd;
                
                    xhr.send(msg);
            })  ;  
            
            





       
            }
        })
        
        
              

  })
