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

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/main', (req, res) => {
    res.render('main');
});

export default router;