import Hero from "@/components/main";
import Sidebar from "@/components/sidebar";

export default async function Home(){
    return(
        <div>
            <div className="flex">
                <Sidebar />
                <div className="flex items-center justify-center w-full">
                     <Hero />
                </div>
            </div>
        </div>
    )
}
