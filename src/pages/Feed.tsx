import React, { useEffect, useState } from "react";
import { Photo } from "../models/Photo";
import "./Feed.css"
import PhotoView from "../component/PhotoView";

function Feed(){
    //keeping track of an array of type "Photo" from model above
    const [photos,setPhotos] = useState <Photo[]>  ([])
    // pull the ig-clone-backend from localhost:5001
    useEffect(()=>{
        fetch("http://localhost:5001/photos")
        .then(res => res.json())
        .then((data: Photo[]) => {
            console.log(data)
            setPhotos(data)
        })
        }
        ,[]
    ) 
    return(
        <>
        <h1>The feed </h1>
        <div>
            {photos.map((photo: Photo)=>{
                return <PhotoView key = {photo._id} photo={photo} setPhotos={setPhotos}/>
                // return <div>img src={photo.photoUrl}</div>
            })}
        </div>
        
        </>
    )
}

export default Feed;