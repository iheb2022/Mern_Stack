import tvShows from "../modules/tvShows.module.js"

const tvShowsController={
    ReadAll:(req,res)=>{
        res.json(tvShows);
    },
    ReadYear:(req,res)=>{
        const result=tvShows.filter((tv)=>tv.yearCreated == req.params.year)
        res.json(result)
    },
    delete:(req,res)=>{
        const index=tvShows.findIndex(tv=>tv.tvShow==req.params.title)
        tvShows.splice(index,1)
        res.json(tvShows)
    },
    update:(req,res)=>{
        tvShows.forEach((tv,_i)=>{
            if(tv.tvShow==req.params.title){
                tv.starring=req.body.starring
            }
        })
        const updatedTV=tvShows.find(tv=>tv.tvShow==req.params.title)
        res.json(updatedTV)
    },
    create:(req,res)=>{
        tvShows.push(req.body)
        res.json(tvShows)
    }

}

export default tvShowsController