import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px] text-center">
        <CardHeader>
          <div className="flex justify-center">
            <Mail className="h-12 w-12 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Check your email</h2>
            <p className="text-muted-foreground">
              We&apos;ve sent a verification link to your email address.
            </p>
          </div>

          <Alert variant="default">
            <div className="flex items-center justify-center gap-2 w-full">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Be sure to check your spam folder!
              </AlertDescription>
            </div>
          </Alert>

          <Link
            href="/"
            className={buttonVariants({
              className: "w-full",
              variant: "outline",
            })}
          >
            <ArrowLeft className="size-4 mr-2" /> Back to Homepage
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
