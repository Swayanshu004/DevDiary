

export default function page({params}){
    return (
        <div className="flex flex-col items-center justify-center h-screen py-10">
            <iframe src={`https://steel-gouda-1a5.notion.site/ebd/${params.title}`} width="95%" height="100%" frameborder="0" allowfullscreen />
        </div>
    )
}   