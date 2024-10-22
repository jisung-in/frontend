import type { Metadata } from "next";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import ReactQueryProvider from "./components/Provider/ReactQueryProvider/ReactQueryProvider";
import ReduxProvider from "./components/Provider/ReduxProvider/ReduxProvider";
import "./globals.css";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "지성인",
  description: "책과 관련된 주제로 자유로운 이야기를 나누는 곳.",
  icons: {
    icon: "/logo.png",
  },
  keywords: ["books", "reading", "지성인", "책"],
  metadataBase: new URL("https://www.jisunin.co.kr"),
  openGraph: {
    title: "지성인",
    description: "책과 관련된 주제로 자유로운 이야기를 나누는 곳.",
    url: "https://www.jisunin.co.kr",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 800,
        height: 600,
        alt: "지성인 배너",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@jisunin",
    title: "지성인",
    description: "책과 관련된 주제로 자유로운 이야기를 나누는 곳.",
    images: "/logo.png",
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
          href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="Hb_M2rA66odokgI60gfJLi6o4Us26vb6okC49Ekafe8"
        />
      </head>
      <body>
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
