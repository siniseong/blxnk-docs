import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHideTitlePage = router.pathname === "/commit-guide";

  return (
    <div className={isHideTitlePage ? "hide-title" : ""}>
      <Component {...pageProps} />
    </div>
  );
}
