let express=require('express');

let app=express();

let ejs=require('ejs');

let date=new Date();

app.enginer(html,ejs.renderFile);

app.set('view engine','html',);

app.set('views','public');

 

app.use(express.static('public'));

 

app.get('/getdate',function(req,res){

   let dateString=date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()

    res.render('date.html',{

          date:dateString

    })

})

 

app.get('/gettime',function(req,res){

     let timeString=date.getHours()+":"+date.getMinutes()

     res.render('time.html',{

          time:date.getHours()

    })

})

app.listen(8080);