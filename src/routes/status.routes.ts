import { Request, Response, Router } from "express";

const statusRoute = Router();

statusRoute.get('/', (req: Request, res: Response) => {
    res.json({message: "API Dio Ecommerce"});
})

export default statusRoute;