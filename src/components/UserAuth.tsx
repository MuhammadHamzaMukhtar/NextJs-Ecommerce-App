"use client";
import React from "react";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import { usePathname } from "next/navigation";

const UserAuth = () => {
  const path = usePathname();
  const hostname = window.location.hostname;
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl={`${hostname}`} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" afterSignInUrl={`${path}#`}>
          <button className="rounded border border-gray-400 px-3 py-0.5">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default UserAuth;
