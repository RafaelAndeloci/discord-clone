import { Button } from "@/components/ui/button";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SignedOut>
        <Button asChild>
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <Button asChild>
          <SignOutButton />
        </Button>
      </SignedIn>
      {children}
    </main>
  );
};

export default MainLayout;

