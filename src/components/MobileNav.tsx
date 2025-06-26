

import Image from 'next/image';
import Link from 'next/link';
import { ButtonExel } from './ButtonExel';

const MobileNav = () => {
  return (
    <nav className="border-b font-montserrat 
    px-8 md:px-10 xl:px-14 2xl:px-20 py-4 bg-white shadow fixed top-0 left-0 right-0 z-50
    hidden lg:flex"
    aria-label="Main navigation"
    >
      <div className="container flex justify-between items-center">
        <ul className='flex gap-8 items-center'>
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
          <li className="list-none transform transition-transform duration-100 hover:scale-115">
            <Link href="/" className=" hover:text-primary ">
              Services
            </Link>
          </li>
          <li className="list-none transform transition-transform duration-100 hover:scale-115">
            <Link href="/" className=" hover:text-primary">
              About Us
            </Link>
          </li>
          <li className="list-none transform transition-transform duration-100 hover:scale-115">
            <Link href="/" className=" hover:text-primary">
              Blog
            </Link>
          </li>
          <li className="list-none transition-transform duration-100 hover:scale-115">
            <Link href="/" className=" hover:text-primary">
              FAQ
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              href="/about"
              className="inline-block transition-transform duration-100 hover:text-primary hover:scale-115"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link href="/" className=" hover:text-gray-400">
              <ButtonExel
                text="Log in"
                variant={"outline"}
                aria-label="Log in to your account"
              />
            </Link>
          </li>
          <li>
            <Link href="/" className=" hover:text-gray-400">
              <ButtonExel
                text="Get a Free Consultation "
                variant={"default"}
                aria-label="Get a Free Consultation"
              />
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;