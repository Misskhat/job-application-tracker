import { Button } from "../components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import ImageTabs from "../components/ImageTabs/ImageTabs";

export default function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-bold mb-2">
              A better way to track your job application
            </h1>
            <p className="text-gray-700 text-xl mb-4">
              Capture, organize and manage your job search in one place.
            </p>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <Link href={"/sign-up"}>
                  <Button size={"lg"} className="h-12 px-8 text-lg font-medium">
                    Start For Free <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-700">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>
        {/* Hero Images section with tabs */}
        <ImageTabs></ImageTabs>

        {/* Features section */}
        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center">
                  <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Organized Application
                </h3>
                <p className="text-gray-700">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center">
                  <TrendingUp className="h-6 w-6 text-primary"></TrendingUp>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-gray-700">
                  Monitor your application status from applied to interview
                  offer with visual kanban boards.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center">
                  <CheckCircle2 className="h-6 w-6 text-primary"></CheckCircle2>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-gray-700">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
