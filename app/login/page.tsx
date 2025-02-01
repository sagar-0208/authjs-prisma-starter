import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auth, signIn } from "@/app/utils/auth";
import { SubmitButton } from "@/components/SubmitButton";
import { redirect } from "next/navigation";

export default async function LoginCard() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action={async (formData) => {
                "use server";
                await signIn("nodemailer", formData);
              }}
              className="flex flex-col gap-4"
            >
              <p>Enter your email below</p>
              <Input
                name="email"
                type="email"
                placeholder="abc@gmail.com"
                required
              />
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
