import "../styles/globals.css";

export const metadata = {
  title: "OdontoStyle",
  description: "Clínica Odontológica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
