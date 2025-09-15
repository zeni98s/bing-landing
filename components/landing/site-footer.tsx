import Link from "next/link";
import React from "react";
import { CONFIG } from "../ui/config";

function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        Copyright &copy; 2025 BingOnBonk. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href={CONFIG.urls.twitter}
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          X
        </Link>
        <Link
          href={CONFIG.urls.telegram}
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Telegram
        </Link>
      </nav>
    </footer>
  );
}

export default SiteFooter;