import AddNote from "@/components/AddNote";
import MainCard from "@/components/MainCard";

export default function Home() {
  const colors = [{
    name: "blue",
    color: "bg-blue-500"
  }]
  return (
    <main className="w-full flex relative pt-10">
      <div className="h-10 w-full fixed top-0 left-0"></div>
      <div className="p-4 w-20 flex flex-col gap-3 items-center">
        <AddNote />
        <div className="flex flex-col gap-3 items-center justify-center w-full mt-4">
          <div className="size-4 bg-yellow-500 rounded-full"></div>
          <div className="size-4 bg-blue-500 rounded-full"></div>
          <div className="size-4 bg-green-500 rounded-full"></div>
          <div className="size-4 bg-red-500 rounded-full"></div>
          <div className="size-4 bg-orange-500 rounded-full"></div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-3xl">Notes</h1>
        <div className="mt-8">
          <MainCard number={1} />
        </div>
      </div>
    </main>
  );
}
