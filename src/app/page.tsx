import Card from "@/components/Card.jsx"
export default function Home() {
  return (
    <div>
      <div className="min-h-[90vh] p-10 flex gap-4 justify-center flex-wrap">
        <Card 
        title="Git - Github" 
        creator="swayanshu" 
        Url=""/>
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
