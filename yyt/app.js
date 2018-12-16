        const express=require('express');

        const bodyParser=require('body-parser');
        const querystring=require('querystring');
        const pool=require('./pool.js');
        //1.构建web服务器
        var app=express();
        app.listen(3001);
        //2.托管静态资源




//登录
          app.post('/login',(req,res)=>{
            //获取浏览器请求的数据
                req.on('data',(buf)=>{
                  var str=buf.toString();
                  var obj=querystring.parse(str);
                  var $uname=obj.uname;
                  var $upwd=obj.upwd;
                //执行判断是否登录成功——用户名和密码同时正确
                //查询数据，查询的结果中，要有对应的记录
                var sql='SELECT * FROM yyt_user WHERE uname=? AND upwd=?';
                  pool.query(sql,[$uname,$upwd],(err,result)=>{
                    if(err) throw err;
                  //console.log(result);
                  //返回一个数组
                    if(result.length>0){
                    res.send("登陆成功")
                    }else{
                      res.send("密码不正确");
                    }
                  });
              });
          });

//注册开始
        
            app.post('/insert_login',(req,res)=>{
              //获取浏览器请求的数据
              req.on('data',(buf)=>{
               
                var str=buf.toString();
              
                var obj=querystring.parse(str);
                
                
              var $uname=obj.uname;
              
              var $upwd=obj.upwd;
            
              //执行判断是否登录成功——用户名和密码同时正确
              //查询数据，查询的结果中，要有对应的记录
              var sql=' INSERT INTO yyt_user VALUES (null,?,?) ';
              pool.query(sql,[$uname,$upwd],(err,result)=>{
                if(err) throw err;
             
              //返回一个数组
              
              res.send("注册成功")
             
              });
            });
            });

//查询
          app.post('/select',(req,res)=>{
            //获取浏览器请求的数据
                req.on('data',(buf)=>{
                  var str=buf.toString();
                  var obj=querystring.parse(str);
                  var $uname=obj.uname;
                //执行判断是否登录成功——用户名和密码同时正确
                //查询数据，查询的结果中，要有对应的记录
                var sql='SELECT * FROM yyt_user WHERE uname=?';
                  pool.query(sql,[$uname],(err,result)=>{
                    if(err) throw err;
                  //返回一个数组
                    if(result.length>0){
                    res.send("1")
                    }else{
                      res.send("0");
                    }
                  });
              });
          }); 








app.post('/sb_list',(req,res)=>{
  //获取浏览器请求的数据
 
  //执行判断是否登录成功——用户名和密码同时正确
  //查询数据，查询的结果中，要有对应的记录
  var sql='SELECT * FROM yyt_sb_list';
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
	//console.log(result);
	//返回一个数组
	if(result.length>0){
    console.log(result);
   res.send(result)
	}else{
    console.log(result);
	  res.send({code:301,msg:'login error'});
	}
  });

});



app.use(express.static('./public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false
}));
//使用路由器
//把用户路由器挂载到 /user下
// /user/register
