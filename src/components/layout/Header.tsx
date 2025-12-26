'use client';

import Link from 'next/link';
import { Menu, Palmtree } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { COMPANY_NAME, NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Palmtree className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{COMPANY_NAME}</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex" variant="outline" size="sm">
                <Link href="/custom-itinerary">Plan Your Trip</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 pt-6">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <Palmtree className="h-6 w-6 text-primary" />
                            <span className="font-bold">{COMPANY_NAME}</span>
                        </Link>
                        <nav className="flex flex-col gap-4">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'text-lg font-medium transition-colors hover:text-primary',
                                    pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                                )}
                            >
                            {item.title}
                            </Link>
                        ))}
                        </nav>
                        <Button asChild>
                            <Link href="/custom-itinerary" onClick={() => setIsOpen(false)}>Plan Your Trip</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
