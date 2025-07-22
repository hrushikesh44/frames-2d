import Loading from "@/icons/loading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className=" flex flex-col items-center justify-center">
    <main className="flex items-center justify-center h-[50vh] ">
      <Loading />
    </main>
    <footer>

    </footer>
   </div>
  );
}
