import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pacsys - Soluções Tecnológicas",
  description: "Soluções inovadoras em tecnologia para o seu negócio",
  keywords: ["tecnologia", "soluções", "pacsys", "inovação"],
  authors: [{ name: "Pacsys" }],
  openGraph: {
    title: "Pacsys - Soluções Tecnológicas",
    description: "Soluções inovadoras em tecnologia para o seu negócio",
    type: "website",
  },
};

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}