const express = require('express')
const app=express()
const cors = require('cors')
const port =3003
const cookieParser = require('cookie-parser')
// const { createProxyMiddleware } = require('http-proxy-middleware');
const {userrouter}=require('./routers/userrouter')
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200

}))
app.use(cookieParser())
app.use(express.json());
// app.use(
//     '/',
//     createProxyMiddleware({
//       target: 'http://localhost:3000',
//       changeOrigin: false,
//     })
//   );
  app.use('/',userrouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
