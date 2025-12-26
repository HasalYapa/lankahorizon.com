import Link from 'next/link';
import { Palmtree, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_NAME, NAV_ITEMS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants';

const socialLinks = [
  // Add social links here if available in the future
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Palmtree className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting unforgettable journeys through the paradise island of Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+{WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{COMPANY_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{COMPANY_LOCATION}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          {/* Add social media icons here if needed */}
        </div>
      </div>
    </footer>
  );
}
