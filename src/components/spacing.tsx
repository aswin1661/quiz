import image from '../assests/mediacon.png'
import Image from 'next/image'
import "../app/globals.css"
export default function Space() {
    return(
        <div className="space">
            <Image src={image} alt='mediacon'  className=" m-auto mb-[5vh] t-0  img-sty image-media object-fit" />
        </div>
    )
}