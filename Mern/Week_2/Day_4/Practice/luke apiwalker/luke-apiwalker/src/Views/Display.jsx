import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const Display = () => {

    const{wantedlist,id}=useParams()
    const [obj,setObj]=useState(null)
    const [objj,setObjj]=useState(null)
    useEffect(()=>{
            axios
            .get("https://swapi.dev/api/"+wantedlist+"/"+id)
            .then(res=>setObj(res.data))
            .catch(err=>console.log(err))
            if(wantedlist==="people"){
                axios
                .get(obj.homeworld)
                .then(res=>setObjj(res.data))
                .catch(err=>console.log(err))
            }
    },[id])


return (
    <div>
            {objj?
                <>
                <h2>{obj.name}</h2>

                { wantedlist==="planets" ?
                    <>
                    <p>Climate : {obj.climate}</p>
                    <p>Terrain : {obj.terrain}</p>
                    <p>Surface Water : {obj.surface_water}</p>
                    <p>Population : {obj.population}</p>
                    </>
                :wantedlist==="people"?
                        <>
                            <p>Height : {obj.height}</p>
                            <p>Hair Color : {obj.hair_color}</p>
                            <p>Eye Color : {obj.eye_color}</p>
                            <p>Skin Color : {obj.skin_color}</p>
                            <p>Home World : {objj.name}</p>
                        </>
                :
                        <>
                        <p>Name : {obj.name}</p>
                            <p>Model  : {obj.model}</p>
                            <p>Manufacturer : {obj.manufacturer}</p>
                            <p>Passengers : {obj.passengers}</p>
                        </> 
                }

                    </>


            :
            <h1>Loading ...</h1>
}

    </div>
        )
}

export default Display