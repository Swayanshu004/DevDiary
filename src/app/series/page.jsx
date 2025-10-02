import Card from "@/components/Card"
import series from "@/app/series"

export default function page(){
    return (
        <div>
            <div className="min-h-[70vh] p-10 flex gap-4 justify-center flex-wrap">
                {
                series.map((blog, i)=>(
                    <Card 
                    key={i}
                    title={blog.title} 
                    creator={blog.creatorName} 
                    url={blog.url}
                    imageUrl={blog.imageUrl}/>
                ))
                }
            </div>
        </div>
    )
}
