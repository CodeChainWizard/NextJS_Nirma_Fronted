import React from "react";
import Link from "next/link";
import {
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@heroui/react";

export default function Headers() {
  return (
    <div className="header-layout bg-transparent shadow-md w-full z-50 top-0 left-0 mt-2">
      <div className="max-w-7xl bg-white/10 backdrop-blur-md rounded-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="/Logo.png" alt="Logo" width={60} height={40} />{" "}
            <h1 className="text-2xl font-bold text-red-700 ps-2">ShipyChain</h1>
            <nav className="hidden md:flex ml-10 space-x-4">
              <Link href="/" className="text-gray-200 hover:text-red-700">
                Home
              </Link>
              <Link href="/about" className="text-gray-200 hover:text-red-700">
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-200 hover:text-red-700"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-red-700"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-b-xl focus:ring-2 focus:ring-red-700 focus:outline-none"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-white" />
            </div>
            <BellIcon className="h-6 w-6 text-gray-200 cursor-pointer hover:text-red-700" />

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="bordered">
                  <UserCircleIcon className="h-8 w-8 text-gray-200 cursor-pointer hover:text-red-700" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="bg-white text-black rounded-lg shadow-md p-2"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="px-3 py-2 flex justify-center align-middle text-center gap-2 cursor-pointer  hover:bg-gray-100  ">
                    <UserCircleIcon className="h-6 w-6 text-black cursor-pointer " />
                    Profile
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-3 py-2 flex cursor-pointer hover:bg-gray-100">
                    <ArrowRightStartOnRectangleIcon className="w-7 h-5 gap-4" />
                    Log out
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
