import Image, { StaticImageData } from "next/image"
import image from "../assests/news.jpg"
import { list } from "@/components/details";

export const Section = ({head,id,image,datas}:{
  head:string,datas:string,id:number,image:StaticImageData,
}) => {
    return(    
<div  className="notification mt-8 mb-8 ">
    <div className="notiglow"></div>
    <div className="notiborderglow"></div>
    <div className="notiimage"> 
    <Image src={image} alt='news' className=" notipic  image-media object-fit" />
</div>
    <div className="notititle">{head}</div>
    <div className="notibody">{datas}</div>
  </div>
    )
}