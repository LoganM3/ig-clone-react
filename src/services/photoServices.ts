import { Photo } from "../models/Photo";

const photoApiUrl = "http://localhost:5001/photos/"


export async function updateLike(photoId:string): Promise<number> {

    // patch/photos/{photo_id}  with a body of {likes: 1}
    const fetchPhotos = await fetch(photoApiUrl+photoId,{
        method:"PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({likes: 1})

    })
    const photo: Photo = await fetchPhotos.json()
    const newLikes: number = photo.likes || 0
    return newLikes + 1
    
}

export async function getPhotos(): Promise<Photo[]>{
   try{
    const fetchPhotos = await fetch(photoApiUrl)
    const photoList: Photo[] = await fetchPhotos.json()
    
  return photoList
   } catch(error){
    console.error(error)
    return []
   }
  
  
    // .then(res => res.json())
    // .then((data: Photo[]) => {
    //     console.log(data)
    //     setPhotos(data)
    // })
}

export default getPhotos