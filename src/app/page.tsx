import Image from "next/image";
import  {News}  from '../components/news'
import Space from "@/components/spacing";
import { resolve } from "path";
import { list } from "@/components/details";

export default async function Home() {
  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("intentional delay")
    },2000 )
  })
  return (
    <div className="grid justify-center" >
      <Space/>
            <h1 className=" text-yellow-800  animate-pulse -z-1 fixed mt-[25vh] inset-0 text-[20vw] m-0 font-black text-center pointer-events-none cal-sans blur-md">
        !
      </h1>
      {list.map((list)=>(
        <News key={list.id} head={list.head} datas={list.datas} sub={list.sub} image={list.image} id={list.id}  >
        </News>
      ))
      }
      
    </div>
  );
}
