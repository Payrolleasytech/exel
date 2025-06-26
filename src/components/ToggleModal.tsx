"use client";

import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import Link from 'next/link';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import { ButtonExel } from "./ButtonExel";

export const MenuItems = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" }
];

export default function ToggleModal() {

    return (
        <>
            <div className="lg:hidden ">

                <Sheet>
                    <SheetTrigger asChild>
                        <button aria-label="Open navigation menu" className="p-2 hover:text-primary cursor-pointer hover:border rounded-sm border-primary">
                            <IoMenuSharp />
                        </button>
                    </SheetTrigger>
                    <SheetContent className="[&>button:first-of-type]:hidden w-full max-w-sm md:max-w-lg p-4 flex flex-col gap-4">
                        <h2 className="sr-only">Main navigation menu</h2>
                        <div className="flex items-center justify-between w-full mb-4">

                            <Link href="/" className="hover:text-gray-400">
                                <Image
                                    src="/exportedlogo.png"
                                    alt="Exel Consultancy homepage"
                                    width={100}
                                    height={40}
                                />
                            </Link>
                            <SheetClose>
                                <button aria-label="Close navigation menu" className="p-2 hover:text-primary cursor-pointer hover:border rounded-sm border-primary">
                                    <IoCloseSharp />
                                </button>
                            </SheetClose>
                        </div>

                        <ul className="flex flex-col gap-4">
                            {MenuItems.map((item) => (
                                <li key={item.name} className="list-none border-b border-gray-200">
                                    <Link
                                        href={item.href}
                                        className=" text-sm font-medium hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>

                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-col-reverse md:flex-row items-center justify-center gap-2 w-full">
                            <li className="flex justify-center whitespace-nowrap">
                                <Link
                                    href="/about"
                                    className="transition-transform duration-100 hover:text-primary text-center"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link href="/" className="block w-full hover:text-gray-400">
                                    <ButtonExel
                                        text="Log in"
                                        variant="outline"
                                        aria-label="Log in to your account"
                                        className="w-full"
                                    />
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link href="/" className="block w-full hover:text-gray-400">
                                    <ButtonExel
                                        text="Get a Free Consultation"
                                        variant="default"
                                        aria-label="Get a Free Consultation"
                                        className="w-full"
                                    />
                                </Link>
                            </li>
                        </ul>


                    </SheetContent>

                </Sheet>
            </div>


        </>
    );
}
