import { requireUser } from "@/app/utils/hooks";
import { signOut } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const session = await requireUser();
  return (
    <>
    <div className="p-6 flex justify-between">
      <p>Hello from dashboard page</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button variant="destructive" type="submit">Sign Out</Button>
      </form>
      </div>
    </>
  );
}
