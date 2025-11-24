

import Image from 'next/image';
import Link from 'next/link';
import { ButtonExel } from './ButtonExel';
import ToggleModal from './ToggleModal';
// import { ServicesMenu } from './Services';
import { getServices } from '@/services/getService';
import { MenuItems } from './Services';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { RxCaretDown } from "react-icons/rx";
import { ActiveLink } from './ActiveLink';


const Nav = async () => {

  const menu = await getServices()

  return (
    <nav className="border-b font-montserrat 
    px-4 md:px-8 xl:px-14 2xl:px-20 py-4 bg-white shadow fixed top-0 left-0 right-0 z-50
    "
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center w-full">
        <ul className='flex gap-8 items-center '>
          <li className="list-none mr-4">
            <div className="sr-only">Exel Consultancy Home</div>
            <Link href="/" className="hover:text-gray-400">
              <Image
                src="/exportedlogo.png"
                alt="Exel Consultancy Logo"
                width={154}
                height={88}
                className="h-10 w-auto"
              />
            </Link>
          </li>

          <li className="list-none hidden lg:flex transform transition-transform duration-100 ">
            <ActiveLink href={'/services'}>
              
              <DropdownMenu>
                <DropdownMenuTrigger className=" hover:text-primary flex items-center gap-2 focus:border-none ">
                  Services <span > <RxCaretDown />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>


                  {menu?.data?.map((item: MenuItems) => (
                    <DropdownMenuItem key={item.slug} asChild>
                      <Link href={`/services/${item.slug}`}>{item.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </ActiveLink>
           
          </li>
          <li className="list-none hidden lg:flex transform transition-transform duration-100 ">
            <ActiveLink href='/about' exact>
             About Us
            </ActiveLink>
          </li>
          <li className="list-none hidden lg:flex transform transition-transform duration-100 ">
            <ActiveLink href="/blog" >
              Blog
            </ActiveLink>
          </li>
          <li className="list-none hidden lg:flex transition-transform duration-100 ">
            <ActiveLink href="/faq">
              FAQ
            </ActiveLink>
          </li>
        </ul>
        <ul className="flex space-x-4 items-center">
          <li className='hidden lg:inline-block transition-transform duration-100 hover:text-primary'>
            <ActiveLink
              href="/contact"
            >
              Contact Us
            </ActiveLink>
          </li>

          <li className="hidden lg:flex">
            <Link href="https://candidateportal.zcrmportals.eu/portal/CandidatePortal/crm/login.sas"
              className=" hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >

              <ButtonExel
                text="Log in"
                variant={"outline"}
                aria-label="Log in to your account"
              />
            </Link>
          </li>
          <li className="hidden lg:flex">
            <Link href="/" className=" hover:text-gray-400">
              <ButtonExel
                text="Get a Free Consultation "
                variant={"default"}
                aria-label="Get a Free Consultation"
              />
            </Link>

          </li>
        </ul>
        <ToggleModal />



      </div>
    </nav>
  );
}

export default Nav;