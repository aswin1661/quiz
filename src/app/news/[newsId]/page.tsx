import { list } from "@/components/details";
import {Section} from "@/components/sections"
export default async function details({params}:{
    params:Promise<{newsId:number}>
}) 
{
    const newsId =(await params).newsId
    const pdid ={newsId};
    return (
        <div className="grid align-center justify-center"  >

                  {list.filter((list)=>{
                     return newsId.toString() ===  list.id.toString()

                  }).map((list)=>(
                    <Section key={list.id} id={list.id} datas={list.datas} head={list.head} >
                        </Section>
                    
                  ))
                  }

        </div>
    )
}