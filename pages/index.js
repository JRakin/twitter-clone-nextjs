import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex max-w-[1500px] min-h-screen mx-auto">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}
