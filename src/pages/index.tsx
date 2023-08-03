import Head from "next/head"
import { useEffect, useState } from "react"
import Footer from "~/components/Footer"
import data from "~/data.json"

const BAR_HEIGHT = 200
const DAY_OF_THE_WEEK = new Date().getDay()

export default function Home() {
  const [chartHeights, setChartHeights] = useState<Array<number>>([])
  const [balance, setBalance] = useState<string>("0.00")

  useEffect(() => {
    let maxAmount = 0
    data.forEach((item) => (maxAmount = Math.max(maxAmount, item.amount)))
    setChartHeights(
      data.map((item) => Math.ceil((item.amount / maxAmount) * BAR_HEIGHT))
    )
    setBalance((Math.random() * 1200).toFixed(2))
  }, [])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Challenge by Frontend Mentor built with Create T3 App"
        />
        <link rel="icon" href="/assets/favicon.png" />
        <title>Frontend Mentor | Expenses chart component</title>
      </Head>
      <main className="m-auto flex h-[100dvh] min-h-[700px] w-[375px] flex-col justify-center space-y-4 p-4 transition-all md:w-[500px] ">
        <section className="flex h-24 items-center justify-between rounded-xl bg-PrimarySoftRed p-6 text-VeryPaleOrange">
          <div>
            <h1 className="">My balance</h1>
            <p className="text-2xl font-bold">${balance}</p>
          </div>
          <div className="relative h-10 w-10">
            <div className=" absolute right-5 h-10 w-10 translate-x-5 rounded-full bg-DarkBrown" />
            <div className=" absolute right-5 h-10 w-10 rounded-full border-2 border-VeryPaleOrange" />
          </div>
        </section>
        <section className="flex flex-col items-stretch justify-between rounded-xl bg-VeryPaleOrange p-6 text-MediumBrown transition-all md:p-8">
          <h1 className="text-left text-2xl font-bold text-DarkBrown">
            Spending - Last 7 days
          </h1>

          {/* bar chart */}
          {/* Use the max value as the height, and other values are the percentage to the max value
            and then use the percentage to calculate height, 0% is 0px 100% is 250px */}
          <ul className=" flex h-[250px] w-full items-end justify-between text-sm">
            {chartHeights.map((height, idx) => (
              <li
                key={height}
                className="group relative w-10 transition-all md:w-14"
              >
                <div
                  className={`mx-auto w-8 rounded-md transition-all hover:cursor-pointer  hover:opacity-75 md:w-10  ${
                    idx + 1 === DAY_OF_THE_WEEK
                      ? "bg-PrimaryCyan"
                      : "bg-PrimarySoftRed "
                  }`}
                  style={{ height }}
                />
                <div className="absolute left-[50%] top-[-37.5px] z-10 w-16 translate-x-[-50%] rounded-md bg-DarkBrown opacity-0 transition-all group-hover:opacity-100">
                  <p className="text-center leading-8 text-VeryPaleOrange">
                    ${data[idx]?.amount}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {/* day label */}
          <ul className="flex justify-between ">
            {data.map((item) => (
              <li
                key={item.day}
                className="w-10 text-center text-sm transition-all md:w-14"
              >
                {item.day}
              </li>
            ))}
          </ul>

          <div className="my-4 border-[1px]" />
          <div className="flex w-full items-end justify-between">
            <div>
              <h1 className="">Total this week</h1>
              <p className="text-left text-2xl font-bold text-DarkBrown">
                $
                {data.reduce(
                  (accumulator, item) => accumulator + item.amount,
                  0
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-DarkBrown">+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
