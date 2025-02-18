import "./globals.scss";
import '@fontsource-variable/montserrat';


export const metadata = {
  title: "Phone Status Bot by HeadMade",
  description: "Phone Status Bot помогает быстро и удобно проверять телефонные номера на наличие проблем",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
