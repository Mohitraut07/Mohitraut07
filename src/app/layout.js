import "./globals.css";


export const metadata = {
  title: "3D Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
