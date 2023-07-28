import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section>
      <div>
        Landing Page
      </div>
      <div className="flex gap-2">
        <div>
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link></div>
        <div>
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link></div>
      </div>
    </section>
  )
}
