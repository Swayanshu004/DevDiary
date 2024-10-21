import Card from "@/components/Card.jsx"
export default function Home() {
  return (
    <div>
      <div className="min-h-[90vh] p-10 flex gap-4 justify-center flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
