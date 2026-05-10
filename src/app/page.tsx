import AddNote from "@/components/AddNote";

export default function Home() {
  return (
    <main className="w-full flex">
      <div className="p-4 w-20">
        <AddNote />
      </div>
      <div className="p-4">
        <h1 className="text-3xl">Notes</h1>
      </div>
    </main>
  );
}
