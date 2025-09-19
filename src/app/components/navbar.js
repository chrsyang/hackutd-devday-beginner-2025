import React from "react";
import Link from "next/link";
import { User, Settings, GraduationCap } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 border-b border-gray-300">
            <Link href= "/settings">
                <Settings color="#F54927" className="cursor-pointer" />
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0"/>
            </Link>
            <Link href= "/">
                <GraduationCap color="#F54927" className="cursor-pointer"/>
            </Link>
            <Link href = "/">
                <User color="#F54927" className="cursor-pointer"/>
            </Link>
        </nav>
    );
}

export default Navbar;