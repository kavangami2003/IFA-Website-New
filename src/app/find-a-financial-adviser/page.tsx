import { Suspense } from "react";
import type { Metadata } from "next";
import { Quiz } from "@/components/site/Quiz";

export const metadata: Metadata = {
  title: "Find your independent financial adviser",
  description: "Answer a few questions and a real person will call you, usually within the hour, to introduce you to a hand-picked independent adviser.",
};

export default function FindAdviserPage() {
  return (
    <section className="min-h-[100svh] bg-cream">
      <div className="container-page pb-16 pt-24 lg:pb-24 lg:pt-28">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <span className="mb-4 block text-[14px] font-bold uppercase tracking-[0.2em] text-stone">Find an Adviser</span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl">
            Answer a few questions and a real person will call you.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            It takes under two minutes. We&apos;ll then introduce you to a hand-picked, FCA-regulated independent adviser — free, with no obligation.
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-[28px] border border-line bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-10">
          <Suspense fallback={<div className="mx-auto max-w-xl text-center text-body">Loading…</div>}>
            <Quiz />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
