import { Content } from "@/src/components/services/content";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Content />
      {children}
    </>
  );
}
