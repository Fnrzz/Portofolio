import ScrollWrapper from "@/components/ScrollWrapper";
import "./globals.css";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Farid Nur Raidananda | Front-End Web Developer",
  description:
    "Official portfolio of Farid Nur Raidananda, a Front-End Web Developer specializing in building modern, responsive, and user-centric web interfaces. Discover projects, skills, and contact information.",
  keywords: [
    "Farid Nur Raidananda",
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "JavaScript Developer",
    "UI Developer",
    "Responsive Web Design",
    "Frontend Portfolio",
    "Next.js Developer",
  ],
  authors: [
    {
      name: "Farid Nur Raidananda",
      url: "https://faridnurraidananda.vercel.app",
    },
  ],
  creator: "Farid Nur Raidananda",
  publisher: "Farid Nur Raidananda",
  metadataBase: new URL("https://faridnurraidananda.vercel.app"),
  openGraph: {
    title: "Farid Nur Raidananda | Front-End Web Developer",
    description:
      "Explore the portfolio of Farid Nur Raidananda, a creative Front-End Developer crafting elegant and efficient web experiences.",
    url: "https://faridnurraidananda.vercel.app",
    siteName: "Farid Nur Raidananda Portfolio",
    images: [
      {
        url: "/images/avatar1.png",
        width: 1200,
        height: 630,
        alt: "Farid Nur Raidananda Portfolio Preview",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        <SpeedInsights />
        <ScrollWrapper>{children}</ScrollWrapper>
      </body>
    </html>
  );
}
