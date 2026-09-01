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
      <div className="container-page pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-28">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8 md:mb-10">
          <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.2em] text-stone sm:mb-4 sm:text-[14px]">Find an Adviser</span>
          <h1 className="txt-section text-ink">Answer a few questions and a real person will call you.</h1>
          <p className="mt-4 txt-body text-body sm:mt-5">
            It takes under two minutes. We&apos;ll then introduce you to a hand-picked, FCA-regulated independent adviser — free, with no obligation.
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-[20px] border border-line bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-8 md:p-10">
          <Suspense fallback={<div className="mx-auto max-w-xl text-center text-body">Loading…</div>}>
            <Quiz />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
