import Link from "next/link";
import "../globals.css";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import { UserPlus } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="mx-auto max-w-sm -mt-10">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <hr className="border-neutral-600 rounded-full" />
          <CardDescription>
            Enter your details to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  className="focus-visible:ring-offset-0"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  required
                  className="focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="focus-visible:ring-offset-0"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Aadhar Number</Label>
              <Input
                id="email"
                type="email"
                placeholder="9246 6789 9999"
                required
                className="focus-visible:ring-offset-0"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="focus-visible:ring-offset-0"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                id="password"
                type="password"
                className="focus-visible:ring-offset-0"
              />
            </div>
            <Button type="submit" className="w-full">
              <UserPlus className="mr-2 h-5 w-5" />
              <span>Create account</span>
            </Button>
            <Button variant="outline" className="w-full">
              <SiGoogle size={16} className="mr-2" />
              <span>Continue with Google</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
