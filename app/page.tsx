import Hero from "@/components/hero";
import { ThemeToggle} from "@/components/toggle-theme";

export default async function Home(){
    return(
        <div>
            <div className="flex items-end justify-end">
                <ThemeToggle />
            </div>
            <div className="flex items-center justify-center">
                <Hero />
            </div>
    </div>
    )
}