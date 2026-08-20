import { Suspense } from "react";
import type { Metadata } from "next";
import { Quiz } from "@/components/site/Quiz";

export const metadata: Metadata = {
  title: "Find your independent financial adviser",
  description: "Answer a few questions and a real person will call you, usually within the hour, to introduce you to a hand-picked independent adviser.",
};

export default function FindAdviserPage() {
  return (
    <section className="min-h-[100svh] bg-charcoal">
      <div className="container-page pb-16 pt-28 lg:pb-24 lg:pt-32">
        <div className="rounded-[10px] border border-white/10 bg-charcoal-card p-6 shadow-[0_14px_36px_rgba(0,0,0,0.44)] sm:p-10">
          <Suspense fallback={<div className="mx-auto max-w-xl text-center text-on-charcoal">Loading…</div>}>
            <Quiz />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
