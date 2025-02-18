import HomeSpline from "../components/pages/index/HomeSpline";
import Head from "next/head";
import Logo from "public/assets/img/layout/logo.svg";

Screen.getLayout = (page: React.ReactElement) => page;

export default function Screen() {
  return (
    <>
      <Head>
        <title>Screen Saver</title>
      </Head>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          zIndex: 1000,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo style={{ width: "400px" }} />
      </div>
      <HomeSpline />
    </>
  );
}
