import { redirect } from "next/navigation";

// The retirement landing now lives at /retirement/ (editorial light theme).
export default function RetirementAdviceRedirect() {
  redirect("/retirement/");
}
