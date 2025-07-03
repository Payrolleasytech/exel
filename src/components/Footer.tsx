import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import FooterDivider from "./FooterDivider";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#274F67] text-white px-4 md:px-8 xl:px-14 2xl:px-20 py-4 pt-10">
      <div className=" grid  items-center w-full gap-4">
        <div className="flex flex-col md:flex-row  md:justify-between gap-4 w-full ">
          <Link href="/">
            <Image
              src="/whitelogo.png"
              alt="My Website Logo"
              width={154}
              height={88}
              className="h-10 w-auto"
            />
          </Link>
          <div className="">
            <NewsletterForm />
          </div>
        </div>
        <FooterDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly py-4">
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold mb-2">Contact info</h6>
            <div className="font-sans text-base leading-relaxed">
              <p> 650 Princess Street IP1 1RJ </p>
              <p> 020 3514 9225  </p>
              <a href="mailto:info@exelconsultancy.co.uk" className=" hover:underline">
                info@exelconsultancy.co.uk
              </a>

            </div>

          </div>
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold mb-2"> Menu</h6>
            <li className=" list-none"> <Link href={'/services'}> Services</Link> </li>
            <li className="list-none"> <Link href={'/about'}> About</Link> </li>
            <li className="list-none"> <Link href={'/contact'}> Contact</Link> </li>

          </div>
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold mb-2"> Resources</h6>
            <li className=" list-none"> <Link href={'/services'}> Blog</Link> </li>
            <li className="list-none"> <Link href={'/about'}> FAQ</Link> </li>

          </div>
          <div className="flex flex-col">
            <h6 className="text-lg font-semibold mb-2"> Join Us</h6>
            <ul className="flex gap-4">
              <li className=" list-none"> <Link href={'https://www.linkedin.com/'}
                target="_blank"
                rel="noopener noreferrer"
              > <FaLinkedinIn className="text-white" />
              </Link> </li>
              <li className="list-none">
                <Link href={'https://x.com/home'}
                  target="_blank"
                > <FaTwitter className="text-white" />
                </Link> </li>
              <li className="list-none"> 
                <Link href={'https://web.facebook.com/?_rdc=1&_rdr#'}
                target="_blank"
                rel="noopener noreopener"
                > <FaFacebookF className="text-white" />

              </Link> </li>
              <li className="list-none"> <Link href={'https://www.instagram.com/'}
              target="_blank"
              rel="noopener noreopener"
              > <FaInstagram className="text-white" />


              </Link> </li>
            </ul>

          </div>

        </div>

        <FooterDivider />
        <div className="flex flex-col-reverse justify-normal md:flex-row gap-6 md:gap-0 md:justify-between md:items-center w-full">
          <p>&copy; {new Date().getFullYear()} Excel Consultancy. All rights reserved.</p>


          <div className="flex font-display flex-col md:flex-row md:items-center gap-2 justify-normal md:justify-end md:gap-4">

            <a href="https://twitter.com" className=" hover:underline">
              Modern Slavery Statement
            </a>{' '}
            <a href="https://github.com" className=" hover:underline">
              Terms of Service
            </a>
            <a href="https://github.com" className=" hover:underline">
              Privacy Policy
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;