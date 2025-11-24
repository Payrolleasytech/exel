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
import { RxCaretRight } from "react-icons/rx";
import { getServices } from "@/services/getService";

// Server component for the services dropdown
async function MobileServicesDropdown() {
    const servicesData = await getServices();
    const services = servicesData?.data || [];

    return (
        <div className="border-b border-gray-200">
            <SheetClose asChild>
                <Link 
                    href=""
                    className="flex items-center justify-between w-full py-3 text-sm font-medium hover:text-primary"
                >
                    <span>Services</span>
                    <RxCaretRight className="transform rotate-90" />
                </Link>
            </SheetClose>
            
            <div className="pl-4 pb-2 space-y-2">
                {services.map((service: any) => (
                    <SheetClose key={service.slug} asChild>
                        <Link
                            href={`/services/${service.slug}`}
                            className="block py-2 text-sm text-gray-600 hover:text-primary border-l-2 border-transparent hover:border-primary pl-2 transition-all duration-200"
                        >
                            {service.title}
                        </Link>
                    </SheetClose>
                ))}
            </div>
        </div>
    );
}

export const MenuItems = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" }
];

// Client wrapper for the sheet functionality
function MobileMenuClient({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <button 
                        aria-label="Open navigation menu" 
                        className="p-2 hover:text-primary cursor-pointer hover:border rounded-sm border-primary"
                    >
                        <IoMenuSharp />
                    </button>
                </SheetTrigger>
                <SheetContent className="[&>button:first-of-type]:hidden w-full max-w-sm md:max-w-lg p-4 flex flex-col gap-0 overflow-y-auto">
                    {children}
                </SheetContent>
            </Sheet>
        </div>
    );
}

// Main server component
export default async function ToggleModal() {
    return (
        <MobileMenuClient>
            <h2 className="sr-only">Main navigation menu</h2>
            
            {/* Header */}
            <div className="flex items-center justify-between w-full mb-6 sticky top-0 bg-white pb-4 border-b">
                <Link href="/" className="hover:text-gray-400">
                    <Image
                        src="/exportedlogo.png"
                        alt="Exel Consultancy homepage"
                        width={100}
                        height={40}
                    />
                </Link>
                <SheetClose>
                    <button 
                        aria-label="Close navigation menu" 
                        className="p-2 hover:text-primary cursor-pointer hover:border rounded-sm border-primary"
                    >
                        <IoCloseSharp />
                    </button>
                </SheetClose>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 space-y-0">
                {/* Services Dropdown - Server Component */}
                <MobileServicesDropdown />
                
                {/* Other Menu Items */}
                {MenuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-200">
                        <SheetClose asChild>
                            <Link
                                href={item.href}
                                className="block py-3 text-sm font-medium hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        </SheetClose>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
                <SheetClose asChild>
                    <Link
                        href="/contact"
                        className="transition-transform duration-100 hover:text-primary text-center block w-full py-2 text-sm font-medium"
                    >
                        Contact Us
                    </Link>
                </SheetClose>

                <div className="space-y-2">
                    <SheetClose asChild>
                        <Link 
                            href="https://candidateportal.zcrmportals.eu/portal/CandidatePortal/crm/login.sas" 
                            className="block w-full"
                            target="_blank"
                            rel="noopener"
                        >
                            <ButtonExel
                                text="Log in"
                                variant="outline"
                                aria-label="Log in to your account"
                                className="w-full"
                            />
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link 
                            href="https://booking-link.zohobookings.eu/#/exelconsultancy"
                            className="block w-full"
                            target="_blank"
                            rel="noopener"
                        >
                            <ButtonExel
                                text="Get a Free Consultation"
                                variant="default"
                                aria-label="Get a Free Consultation"
                                className="w-full"
                            />
                        </Link>
                    </SheetClose>
                </div>
            </div>
        </MobileMenuClient>
    );
}