import { redirect } from "next/navigation";

// Keyword-led slug from the landing-page spec. One canonical page per
// situation, so this resolves to the live /investments/ page.
export default function Redirect() {
  redirect("/investments/");
}
