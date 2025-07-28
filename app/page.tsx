import Hero from "@/components/hero";
import ThemeToggle from "@/components/toggle-theme";
import { IconSun } from "@tabler/icons-react";

export default function Home(){
    return(
        <div>
            {/* <div className="flex items-end justify-end">
            <ThemeToggle />
            </div> */}
            <div className="flex items-center justify-center">
                <Hero />
            </div>
        </div>
    )
}