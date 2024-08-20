import type { Metadata } from "next";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import ReactQueryProvider from "./components/Provider/ReactQueryProvider/ReactQueryProvider";
import ReduxProvider from "./components/Provider/ReduxProvider/ReduxProvider";
import { Kalufo } from "./font";
import "./globals.css";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "지성인",
  description: "책의 모든 것",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={`${Kalufo.variable}`}>
        <div className="flex flex-col min-h-screen">
          <ReactQueryProvider>
            <ReduxProvider>
              <Providers>
                <Header />
                <div className="flex flex-grow flex-col w-[100%]">
                  {children}
                </div>
                <Footer />
              </Providers>
            </ReduxProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
