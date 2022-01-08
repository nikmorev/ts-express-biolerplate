import express, { Request, Response } from 'express'

const app = express()

app.get("/", async (_req: Request, res: Response) => {
    res.send('Express with ts and nodemon!')
})


app.listen(3000, () => console.log('server on 3000'))