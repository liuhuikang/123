/******************************轮播部分开始***************/

$(document).ready(function() { 
    var length, 
     currentIndex = 0, 
     interval, 
     hasStarted = false, //是否已经开始轮播 
     t = 3000; //轮播时间间隔 
    length = $('.slider-panel').length; 
    //将除了第一张图片隐藏 
    $('.slider-panel:not(:first)').hide(); 
    //将第一个slider-item设为激活状态 
    $('.slider-item:first').addClass('slider-item-selected'); 
    //隐藏向前、向后翻按钮 
    $('.slider-page').hide(); 
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
    $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
     stop(); 
     $('.slider-page').show(); 
    }, function() { 
     $('.slider-page').hide(); 
     start(); 
    }); 
    $('.slider-item').hover(function(e) { 
     stop(); 
     var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
     currentIndex = $(this).index(); 
     play(preIndex, currentIndex); 
    }, function() { 
     start(); 
    }); 
    $('.slider-pre').unbind('click'); 
    $('.slider-pre').bind('click', function() { 
     pre(); 
    }); 
    $('.slider-next').unbind('click'); 
    $('.slider-next').bind('click', function() { 
     next(); 
    }); 
    /** 
     * 向前翻页 
     */
    function pre() { 
     var preIndex = currentIndex; 
     currentIndex = (--currentIndex + length) % length; 
     play(preIndex, currentIndex); 
    } 
    /** 
     * 向后翻页 
     */
    function next() { 
     var preIndex = currentIndex; 
     currentIndex = ++currentIndex % length; 
     play(preIndex, currentIndex); 
    } 
    /** 
     * 从preIndex页翻到currentIndex页 
     * preIndex 整数，翻页的起始页 
     * currentIndex 整数，翻到的那页 
     */
    function play(preIndex, currentIndex) { 
     $('.slider-panel').eq(preIndex).fadeOut(500) 
     .parent().children().eq(currentIndex).fadeIn(1000); 
     $('.slider-item').removeClass('slider-item-selected'); 
     $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
    } 
    /** 
     * 开始轮播 
     */
    function start() { 
     if(!hasStarted) { 
     hasStarted = true; 
     interval = setInterval(next, t); 
     } 
    } 
    /** 
     * 停止轮播 
     */
    function stop() { 
     clearInterval(interval); 
     hasStarted = false; 
    } 
    //开始轮播 
    start(); 
    }); 
/******************************轮播部分结束***************/

var lou3_left=0;
var lou3_age=0;
 //楼1  list  滑动  控制
        $("#lou1_sc").click(function(){
            $("#list1").stop().animate({"left":"-5230px"});
            $(".lou1_ul>*").removeClass("first_li");
            $("#lou1_ce1").addClass("first_li");
        }),
        $("#lou1_hg").click(function(){
            $("#list1").stop().animate({"left":"-3110px"});
            $(".lou1_ul>*").removeClass("first_li");
            $("#lou1_ce2").addClass("first_li");
        }),
        $("#lou1_om").click(function(){
        $("#list1").stop().animate({"left":"-1555px"});
        $(".lou1_ul>*").removeClass("first_li");
            $("#lou1_ce3").addClass("first_li");
        }),
        $("#lou1_gy").click(function(){
        $("#list1").stop().animate({"left":"0px"});
        $(".lou1_ul>*").removeClass("first_li");
        $("#lou1_ce4").addClass("first_li");
        }),

        //楼2  list  滑动  控制
        $("#lou2_lxs").click(function(){
            $("#list2").stop().animate({"left":"-5230px"});
            $(".lou2_ul>*").removeClass("first_li");
            $("#lou2_ce1").addClass("first_li");
        }),
        $("#lou2_ys").click(function(){
            $("#list2").stop().animate({"left":"-3110px"});
            $(".lou2_ul>*").removeClass("first_li");
            $("#lou2_ce2").addClass("first_li");
        }),
        $("#lou2_mx").click(function(){
        $("#list2").stop().animate({"left":"-1555px"});
        $(".lou2_ul>*").removeClass("first_li");
            $("#lou2_ce3").addClass("first_li");
        }),
        $("#lou2_qb").click(function(){
        $("#list2").stop().animate({"left":"0px"});
        $(".lou2_ul>*").removeClass("first_li");
        $("#lou2_ce4").addClass("first_li");
        })
// 楼  3 滑动事件
        $(".lou3_btn").click(function(){
        lou3_left-=1550;
            
        if(lou3_age==3){
            lou3_left=0;
            lou3_age=0;
        }
        $("#lou3_table").stop().animate({"left":lou3_left+"px"});
        lou3_age+=1;
        })

//电梯楼层效果

        var oNav = $('#louceng_ul'); 
        var aNav = oNav.find('span'); 
        var aDiv = $('#louceng .louceng'); 
        $(window).scroll(function() {

        var winH = $(window).height();//屏幕显示高度
        var iTop = $(window).scrollTop();//垂直滚动条位置、


        if(iTop >= 250) {
            oNav.fadeIn();
            

            aDiv.each(function() {
        
            
                if(winH + iTop - $(this).offset().top > winH / 2) {
                    
                    aNav.css({"background-color":""});
                    aNav.eq($(this).index()).css({"background-color":"#58d696"});
                }
            })
        } else {
            oNav.fadeOut();
        
        }
        })

        aNav.click(function() {
        var t = aDiv.eq($(this).index()).offset().top;
        $('body,html').animate({
        "scrollTop": t
        }, 500);

        });

//电梯楼层效果结束


//测试  ajax
        
     
        $(".lou4_h4_twob").click(function(){
          
                $.ajax({
                            url:"http://www.weather.com.cn/data/sk/101010100.html",
                            type:"get",
                            dataType:"jsonp",
                            success:function(res){
                               
                            }
                              
                            }) 
                       
        })
//自制节目鼠标悬停出现图片
        $(".lou4_li_small div").mouseover(function(){
            $(this).parent().children("div").children("img").hide();
            $(this).parent().children("div").children("p").css("color","black");
            $(this).children("img").show();
            $(this).children("p").css("color","#58d696");
        })
    