import "./globals.css";

export const metadata = {
  title: "Produtos",
  description: "Exemplo de aplicação Next.js consumindo produtos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
