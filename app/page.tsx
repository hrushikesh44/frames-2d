import Loading from "@/components/icons/loading";
import { LoadingThree, LoadingTwo } from "@/components/icons/loading-two";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className=" flex flex-col items-center justify-center">
    <main className="flex items-center justify-center h-[50vh] gap-5 ">
      <LoadingTwo />
      <LoadingThree />
    </main>
    <footer>

    </footer>
   </div>
  );
}
