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
      <main className="pre m-auto flex h-[100dvh] w-[375px] flex-col justify-center space-y-4 p-4 md:w-[500px] ">
        <section className="flex h-24 items-center justify-between rounded-xl bg-PrimarySoftRed p-6 text-VeryPaleOrange">
          <div>
            <h1 className="">My balance</h1>
            <p className="text-2xl font-bold">$921.48</p>
          </div>
          <div className="relative h-10 w-10">
            <div className=" absolute right-5 h-10 w-10 translate-x-5 rounded-full bg-DarkBrown" />
            <div className=" absolute right-5 h-10 w-10 rounded-full border-2 border-VeryPaleOrange" />
          </div>
        </section>
        <section className="flex flex-col  items-stretch justify-between rounded-xl bg-VeryPaleOrange p-6 text-MediumBrown">
          <h1 className="text-left text-2xl font-bold text-DarkBrown">
            Spending - Last 7 days{" "}
          </h1>
          <div className="h-[250px] w-full">chart</div>
          <ul className="flex justify-between text-sm">
            <li>mon</li>
            <li>tue</li>
            <li>wed</li>
            <li>thu</li>
            <li>fri</li>
            <li>sat</li>
            <li>sun</li>
          </ul>
          <div className="my-4 border-[1px]" />

          <div className="flex w-full justify-between ">
            <div>
              <h1 className="">Total this month</h1>
              <p className="text-left text-2xl font-bold text-DarkBrown">
                $478.33
              </p>
            </div>
            <div className="text-right">
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
