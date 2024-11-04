'use client';

import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';

export function DashboardHeader() {
  const { data: session } = useSession();
  const initials = session?.user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex-1">
          <form className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="search"
              placeholder="Search..."
              className="h-9 md:w-[300px]"
            />
            <Button type="submit" variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full"
              >
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" alt={session?.user?.name || ''} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}