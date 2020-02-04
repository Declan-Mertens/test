import os from "os";
const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 3000;

// 이게 없으면 서버 실행이 안되네?
app.listen(port, ()=>{
    console.log("========== WELCOME TO LWCMS ! ==========");
    console.log(`=          serverInformation           =`);
    console.log(`=       hostname: ${os.hostname}     =`);
    console.log(`=          serverInformation           =`);
    console.log(`=          serverInformation           =`);
    console.log("========================================");
});

app.get("/", (req, res) => {

    res.send(req.hostname);

});
