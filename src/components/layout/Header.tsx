import Image from "next/image";
import React from "react";
import logo from "/public/Logo.webp";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { NavItems } from "@/utils/mock";
import CartIcon from "../CartIcon";
import UserAuth from "../UserAuth";

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <ul className="flex gap-10">
        {NavItems.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="border pl-10 relative">
        <div className="absolute left-[7px] top-[4px]">
          <Search size={15} />
        </div>
        <div>
          <input type="text" placeholder="What are you looking for?" />
        </div>
      </div>
      <Link href={"/cart"}>
        <CartIcon />
      </Link>
      <UserAuth />
    </nav>
  );
}
