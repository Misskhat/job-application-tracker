import Image from "next/image";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

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
                <Button size={"lg"} className="h-12 px-8 text-lg font-medium">
                  Start For Free <ArrowRight className="ml-2" />
                </Button>
              </div>
              <p className="text-sm text-gray-700">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
