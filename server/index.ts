
import path from "path";
import express from 'express';
import cors from 'cors';

import type { ResultResponse, User, ResultData, CheckName } from '../shared/types';
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve("index.html"));
})

app.get("/api/user/:id", (req: express.Request<{ id: string }>, res: express.Response) => {
    const id = req.params.id;
    const user: User = {
        id: id,
        name: '张三',
        age: 12
    }
    const body: ResultResponse<User> = {
        data: user,
        message: '成功',
        success: true,
    }
    res.json(body);
});

app.post("/api/course", (req: express.Request<{ version: string }>, res: express.Response) => {
    const version = req.body.version;
    const data = {
        version: version,
        name: 'angular'
    }
    const body: ResultResponse<ResultData> = {
        data,
        message: '成功',
        success: true,
    }
    res.json(body);
});


app.get("/api/timeout", (req: express.Request, res: express.Response) => {
    const data = {
        version: '22222',
        name: 'angular'
    }
    const body: ResultResponse<ResultData> = {
        data,
        message: '成功',
        success: true,
    }
    setTimeout(() =>{
        res.json(body);
    },3000)
})

app.get("/api/auth/:id", (req: express.Request<{ id: string }>, res: express.Response) => {
    const id = req.params.id;
    if (id === '99') {
        res.status(404).json({
            success: false,
            message: '用户不存在',
            data: null
        })
    }
    const user: User = {
        id,
        name: '李四',
        age: 90
    }
    const body: ResultResponse<User> = {
        data: user,
        message: '成功',
        success: true,
    }

    res.json(body);
});

app.post("/api/auth", (req: express.Request, res: express.Response) => {
    const id = req.body.id;
    console.log(id,'===di==');
    console.log(id==='99','===di==');
    if (id === 99) {
        res.status(404).json({
            success: false,
            message: '用户不存在',
            data: null
        })
    }
    const user: User = {
        id,
        name: '李四',
        age: 90
    }
    const body: ResultResponse<User> = {
        data: user,
        message: '成功',
        success: true,
    }

    res.json(body);
});


app.get("/api/check-username", (req: express.Request, res: express.Response) => {
    const data = {
        available: false
    }
    const body: ResultResponse<CheckName> = {
        data,
        message: '成功',
        success: true,
    }
    setTimeout(() =>{
        res.json(body);
    },3000)
})

app.listen(8080,() =>{
    console.log("Server started on port 8080");
})