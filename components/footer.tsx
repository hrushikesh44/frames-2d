import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";


export function Footer(){
    return(
        <div className="w-screen flex flex-col items-center justify-around border-t border-neutral-400/40 mt-20 p-10">
            <div className="bottom-0 w-6xl  flex justify-around mb-10">
                <div className="">
                    <p className="font-bold">Frames 2D</p>
                </div>
                <div className="flex flex-col gap-2">
                    <FooterHeader header="Help" />
                    <div className="flex flex-col gap-1">
                        <FooterItem href={'/'} item="Contact"/>
                        <FooterItem href={'/'} item="Terms"/>
                        <FooterItem href={'/'} item="Policy"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <FooterHeader header="Social" />
                    <FooterItem href={'https://github.com/hrushikesh44'} item="Github"/>
                    <FooterItem href={'https://x.com/hrushikesh_44'} item="Twitter"/>
                </div>
                <div className="flex flex-col gap-2">
                <FooterHeader header="Resources" />
                <FooterItem href="/" item="Feature Request" />
                </div>
                <div className="flex flex-col gap-2">
                    <FooterHeader header="Company" />
                    <FooterItem href="/" item="About"/>
                    <FooterItem href="/" item="Blog" />
                </div>
            </div>
            <div className="flex items-center justify-between w-5xl">
                <p className=" text-neutral-500 text-sm font-sans">Built by <Link href={'https://x.com/hrushikesh_44'} className="hover:text-neutral-900 font-medium">hrushikesh</Link></p>
                <Link href={'https://github.com/hrushikesh44'}><IconBrandGithub size={20}/></Link>
            </div>
    </div>
    )
}

function FooterItem({
    href,
    item
} : {
    href: string,
    item: string
}){
    return(
        <Link href={href} className="text-sm text-neutral-500 hover:text-neutral-700">{item}</Link>
    )
}

function FooterHeader({
    header
}: {
    header: string
}){
    return(
        <p className="font-medium">{header}</p>
    )
}