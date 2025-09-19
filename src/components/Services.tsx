"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const services = [
    { name: "Umbrella Services", href: "/services/umbrella-services" },
    { name: "Accountancy Services", href: "/services/accountancy-services" },
    { name: "Payroll Services", href: "/services/payroll-services" },
    { name: "Bookkeeping Services", href: "/services/bookkeeping-services" },
    { name: "Tax Advisory", href: "/services/tax-advisory" },
    { name: "VAT Services", href: "/services/vat-services" },
]

export function ServicesMenu() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
                className="flex items-center gap-1 cursor-pointer hover:text-primary transition-transform duration-200 
             focus:outline-none focus:ring-0 focus:border-0 active:outline-none active:ring-0 active:border-0"
            >
                Services
                <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </DropdownMenuTrigger>


            <DropdownMenuContent
                className="p-2 bg-white shadow-lg rounded-md border border-gray-200 mt-2"
            >
                {services.map((service) => (
                    <DropdownMenuItem
                        key={service.name}
                        asChild
                        className="p-2 rounded-sm cursor-pointer hover:bg-primary hover:text-white focus:bg-gray-100 focus:text-gray-900"
                    >
                        <Link href={service.href}>{service.name}</Link>
                    </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
