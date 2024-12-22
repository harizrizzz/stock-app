"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Table, PackagePlus, ListOrdered } from "lucide-react";

const Sidebar = ({ role = "admin" }) => {
  const pathname = usePathname();

  // Konfigurasi navigasi berdasarkan peran
  const navItems = {
    admin: [
      { href: "/dashboard/admin", icon: <Table size={20} /> },
      { href: "/dashboard/admin/create", icon: <PackagePlus size={20} /> },
    ],
    user: [{ href: "/dashboard/user", icon: <ListOrdered size={20} /> }],
  };

  // Pilih menu berdasarkan peran
  const selectedNavItems = navItems[role] || [];

  return (
    <nav className="flex flex-col items-center w-[54px] justify-between py-[10px] border-r">
      <div className="flex flex-col items-center space-y-[15px]">
        <Link href={"/"} className="p-[5px] rounded-[5px] bg-primary">
          <div className="h-[20px] w-[20px] rounded-full bg-white" />
        </Link>

        {selectedNavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={` hover:opacity-100 ${
              pathname === item.href ? "opacity-100" : "opacity-30"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
