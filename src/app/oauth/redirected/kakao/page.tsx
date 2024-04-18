import { Suspense } from "react";
import LoginComponent from "./_component/LoginComponent";

const OAuthTokenPage = () => {
  return (
    <Suspense>
      <LoginComponent />
    </Suspense>
  );
};

export default OAuthTokenPage;
