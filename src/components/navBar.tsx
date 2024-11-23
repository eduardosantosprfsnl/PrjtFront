/**  @format */

import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";
import gerencDespesas from "../pages/Financa"


function NavBar() {

   const [isSideMenuOpen, setMenu] = useState(false);

   const navLinks = [
      {
         label: "FINANÇAS",
         link: "/Financa"
      },
      {
         label: "GASTOS",
         link: "/CadDespesas"
      },
      {
         label: "INVESTIMENTO",
         link: "#"
      },
   ];

   return (
      <main>
         <nav className="flex justify-between px-8 items-center py-6">
            <div className=" flex items-center gap-8 ">
               <section className="flex items-center gap-4">
                  {/* menu */}
                  <IoMenuOutline onClick={() => setMenu(true)}
                     className=" text-3xl cursor-pointer lg:hidden " />
                  {/* logo */}
                  <Link href={"/"} className=" text-4xl font-mono ">logo</Link>
               </section>

               {navLinks.map((d, i) => (

                  <Link key={i} className=" hidden lg:block text-gray-400 hover:text-black " href={d.link}>
                     {d.label}
                  </Link>

               ))}

            </div>

            {/* sidebar mobile menu */}

            <div className={clsx(
               "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ",
               isSideMenuOpen && 'translate-x-0'
            )}>

               <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                  <IoClose
                     onClick={() => setMenu(false)}
                     className="mt-0 mb-8 text-3xl cursor-pointer "
                  />

                  {navLinks.map((d, i) => (

                     <Link key={i} className="font-bold " href={d.link}>
                        {d.label}
                     </Link>

                  ))}

               </section>
            </div>
            {/* last section */}
            <section className="flex items-center gap-4">
               {/* cardt icon */}
               <Link  href="/Financa">
               <FaMoneyCheckAlt className="text-3xl" />
               </Link>
               {/* avatar img */}
               <Image
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-full"
                  src="https://i.pravatar.cc/150?img=57" alt="avatar-img" />
            </section>
         </nav>
         <hr className=" lg:mx-24 " />
      </main>
   );
}

export default NavBar;