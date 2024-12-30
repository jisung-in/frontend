import { Layout } from "../Layout";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center text-white font-[700] gap-[20px] py-[50px] w-[100%] min-h-[200px] bg-brown-50 sm:text-[11px]">
      <Layout>
        <div className="mx-[5%]">
          <p>서비스 이용약관 | 개인정보 처리 방침 | 회사 안내</p>
          <p className="flex flex-col">
            <span>고객센터 |</span>
            <span>제휴 및 대외 협력 | https://jisungin.co.kr</span>
          </p>
          <span>지성인 JISUNGIN 2024 by JISUNGIN All rights reserved</span>
        </div>
      </Layout>
    </div>
  );
};
