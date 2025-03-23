import "@/components/details"
import Image, { StaticImageData } from "next/image"
import image from "../assests/news.jpg"

export const News = ({head,sub,image,id}:{
  head:string,sub:string,image:StaticImageData,id:number,datas:string,
}) => {
    return(
    <a  href={`/news/${id}`}>     
<div  className="notification mt-8 mb-8 ">
    <div className="notiglow"></div>
    <div className="notiborderglow"></div>
    <div className="notiimage">
    <Image src={image} alt='news' className=" notipic  image-media object-fit" />
    </div>
    <div className="notititle">{head}</div>
    <div className="notibody">{sub}</div>
  </div>
  </a> 
    )
}