import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-base to-base/50 p-4">
      <div className="w-full max-w-2xl space-y-10 bg-white p-12 rounded-3xl shadow-sm">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral">
            Create Account
          </h1>
          <p className="text-base text-neutral/60">
            Already have an account?{" "}
            <Link
              className="font-medium text-primary hover:text-primary/80 transition-colors"
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>
        </div>

        <form className="space-y-8" action={signUpAction}>
          <div className="space-y-6">
            <div className="space-y-3">
              <Label
                htmlFor="email"
                className="text-base font-medium text-neutral/80"
              >
                Email
              </Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-6 py-3 text-lg border border-neutral/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="password"
                className="text-base font-medium text-neutral/80"
              >
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                minLength={6}
                required
                className="w-full px-6 py-3 text-lg border border-neutral/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            <SubmitButton
              formAction={signUpAction}
              pendingText="Creating account..."
              className="w-full py-3.5 text-lg bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium"
            >
              Create Account
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </div>
  );
}
