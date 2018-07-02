const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
app.get('/',(req,res,next)=>{
res.send({name:'ashu'});
})
app.get('/user',(req,res)=>{
res.status(200).send(['ashu','goku'
    ]
)
})
app.listen(port,()=>{
    console.log('listening to port',port);
});

module.exports={app};