import Head from "next/head"
import Footer from "~/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Challenge by Frontend Mentor built with Create T3 App"
        />
        <link rel="icon" href="/favicon.png" />
        <title>Frontend Mentor | Expenses chart component</title>
      </Head>
      <main className="">
        <body>
          My balance $921.48 Spending - Last 7 days mon tue wed thu fri sat sun
          Total this month $478.33 +2.4% from last month
        </body>
        <Footer />
      </main>
    </>
  )
}
