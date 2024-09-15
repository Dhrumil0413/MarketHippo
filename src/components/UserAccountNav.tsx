"use client"

import { User } from "@/payload-types";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

const UserAccountNav = ({ user }: { user: User }) => {

    const { signOut } = useAuth();

    return (
        <DropdownMenu>
        <DropdownMenuTrigger
            asChild
            className='overflow-visible'>
            <Button
            variant='ghost'
            size='sm'
            className='relative'>
            My account
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-white w-60' align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="cursor-pointer focus:outline-none hover:bg-gray-100">
            <DropdownMenuLabel><Link href='/sell'>Seller Dashboard</Link></DropdownMenuLabel>
            
            </DropdownMenuItem>

            <DropdownMenuItem
            onClick={signOut}
            className='cursor-pointer focus:outline-none hover:bg-gray-100'>
            <DropdownMenuLabel>Log Out</DropdownMenuLabel>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserAccountNav;


