"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { signUp } from "../../lib/auth/auth-client";
import { email } from "better-auth";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setLoading(true);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result.error) {
        console.log(result.error.message ?? "Failed to signUp");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("An unexpected error occurred", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-700">
            Create an account to start tracking your job applications.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="border-gray-300 focus:border-primary focus:ring-primary"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 italic">Name is required</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@email.com"
                className="border-gray-300 focus:border-primary focus:ring-primary"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 italic">Email is required</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="****"
                className="border-gray-300 focus:border-primary focus:ring-primary"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 italic">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 italic">
                  Password must be 8 digit.
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Try to signup...." : "Sign Up"}
            </Button>
            <p>
              Already have an account? Please{" "}
              <Link
                href={"/sign-in"}
                className="text-primary hover:text-primary/90 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
