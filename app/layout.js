import "./globals.css";

export const metadata = {
  title: "SPIKE (aka SpikeyTheHedge) | Solana",
  description: "SPIKE is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
