import { Router } from "express";
import getFootballTeamsPositions from "../scraping/footballTeamsPositions";

const router: Router = Router();

router.get("/fbpositions",async (req,res)=>{

    const data = await getFootballTeamsPositions()
    res.send({
        count:data.length,
        data
    })
    
})

router.get('/', (req, res) => {
    res.render('home');
});

export default router;