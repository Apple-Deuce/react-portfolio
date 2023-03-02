import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dustin Long Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-tl from-stone-900 to-slate-900 px-10 ">
        <section className="h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-4xl font-oswald font-normal bg-gradient-to-t from-black to-white text-transparent bg-clip-text">DUSTINLONG.TECH</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li><a className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white  font-oswald px-4 py-2 rounded-md ml-8 font-light" href="#">Resume</a></li>
            </ul>
            </nav>
            <div>
              <h2 className="font-oswald text-xl">Dustin Long</h2>
              <h3 className="font-oswald font-thin">Fullstack/DevOps Engineer</h3>
              <p className="font-oswald text-xl">
                Using a business-minded approach to empower and enable your team to usher in a new era of innovation. The time is now.
              </p>
            </div>
            <div>
              <AiFillLinkedin />
            </div>
        </section>
        
      </main>
    </>
  )
}