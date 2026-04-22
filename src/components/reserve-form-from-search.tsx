"use client";

import { useSearchParams } from "next/navigation";
import { ReserveForm } from "@/components/reserve-form";

export function ReserveFormFromSearch() {
  const searchParams = useSearchParams();
  const initialEvent = searchParams.get("event") ?? "";

  return <ReserveForm initialEvent={initialEvent} />;
}
