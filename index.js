require('dotenv').config()
const express=require('express')
const app=express()
const port =3000
app.get('/',(req,res)=> {
    res.send('Hello World ....')
})

app.get('/insta',(req,res) =>{
    res.send('shrutiab')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login at Break and Gossips </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> Break and Gossips</h2>')
}
)
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})