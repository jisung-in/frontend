import type { Metadata } from "next";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header";
import ReactQueryProvider from "./components/Provider/ReactQueryProvider/ReactQueryProvider";
import ReduxProvider from "./components/Provider/ReduxProvider/ReduxProvider";
import { GurmukhiMN, Inter, Kalufo, Pretendard, SpoqaHanSansNeo } from "./font";
import "./globals.css";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "지성인",
  description: "책의 모든 것",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${Pretendard.variable} ${SpoqaHanSansNeo.variable} ${Inter.variable} ${GurmukhiMN.variable} ${Kalufo.variable}`}
      >
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
