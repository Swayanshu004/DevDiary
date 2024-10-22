import Card from "@/components/Card.jsx"
export default function Home() {
  return (
    <div>
      <div className="min-h-[90vh] p-10 flex gap-4 justify-center flex-wrap">
        <Card 
        title="Git - Github" 
        creator="swayanshu" 
        Url="https://steel-gouda-1a5.notion.site/Git-GitHub-127946f3add0803b83e4c59ad263ead1?pvs=4"/>
        <Card 
        title="Docker" 
        creator="swayanshu" 
        Url=""/>
        <Card 
        title="Why JavaScript ?" 
        creator="swayanshu" 
        Url=""/>
        <Card 
        title="AI as API" 
        creator="swayanshu" 
        Url=""/>
      </div>
    </div>
  );
}
