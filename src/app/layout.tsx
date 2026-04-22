import type { Metadata } from "next";
import { MotionOrchestrator } from "@/components/motion-orchestrator";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Morrow Coffee",
    template: "%s | Morrow Coffee",
  },
  description:
    "A multi-page local coffee shop website based on generated design references.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionOrchestrator />
        {children}
      </body>
    </html>
  );
}
