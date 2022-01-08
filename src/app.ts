import express, { Request, Response } from 'express'

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send('Express with ts.')
})


app.listen(3000, () => console.log('server on 3000'))