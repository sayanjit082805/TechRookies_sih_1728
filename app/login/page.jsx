import Link from "next/link";
import "../globals.css";
import { MoveRight } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";

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

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="mx-auto max-w-sm -mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <hr className="border-neutral-600 rounded-full" />
          <CardDescription>
            Enter your details below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
                id="anumber"
                type="text"
                placeholder="9246 6789 9999"
                required
                className="focus-visible:ring-offset-0"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="focus-visible:ring-offset-0"
              />
            </div>
            <Button type="submit" className="w-full">
              Login{" "}
              <span>
                {" "}
                <MoveRight className="ml-2 h-5 w-5" />{" "}
              </span>
            </Button>
            <Button variant="outline" className="w-full">
              <SiGoogle size={16} className="mr-2"/>
              <span>Login with Google</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
