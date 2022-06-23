import type { NextPage } from 'next'
import Homepage from "../components/index/homepage";

const Home: NextPage = () => {
  return (
      <main id={"main"} className="flex flex-col items-center w-full text-4xl">
          <Homepage/>
      </main>
  )
}

export default Home
