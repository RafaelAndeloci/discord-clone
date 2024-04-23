import { SignIn } from "@clerk/nextjs";

function Page() {
  return <SignIn routing="hash" />;
}

export default Page;
