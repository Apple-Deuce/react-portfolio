import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import avatar from "../public/cartoonavatar.png";
import code from "../public/code.png";
import cloud from "../public/cloud.png";
import blocks from "../public/buildingblocks.png";
import learning from "../public/learning.png";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dustin Long Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-lime-50 dark:bg-gray-900 px-5 text-black font-oswald" >
        <section className="min-h-full mb-10 dark:bg-gray-900">
          
<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://dustinlong.tech/" class="flex items-center text-2xl">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span class="text-emerald-500">DUSTIN</span><span class="text-emerald-700">LONG</span><span class="text-emerald-900">.TECH</span></span>
  </a>
  <div class="flex md:order-2 items-center justify-between">
  <button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-light rounded-lg text-md px-3 py-2.5 text-center mr-3 md:mr-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} className="text-2xl dark:fill-white "/></button>
      <a href="https://storage.cloud.google.com/dustinlong-tech.appspot.com/Dustin%20Long%20Resume%202023.pdf"><button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-light rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Resume</button></a>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    </button>
  </div>
  <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" class="block py-2 pl-3 pr-4  bg-emerald-700 rounded md:bg-transparent md:text-emerald-700 md:p-0 dark:text-white lg:text-lg" aria-current="page">Home</a>
      </li>
      <li>
        <a href="about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">About</a>
      </li>
      
      <li>
        <a href="contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

            <div className="text-center pt-56 lg:pt-36 pb-10">
              <h2 className="font-oswald text-6xl py-2 text-emerald-900">Dustin Long</h2>
              <h3 className="font-oswald text-lg font-semibold py-2 dark:text-slate-100">Fullstack Engineer</h3>
              <p className="font-oswald text-lg py-5 leading-8 text-gray-800 md:text-4xl md:leading-relaxed 2xl:m-10 dark:text-slate-200">
                Using a business-minded approach to empower new levels of growth and efficiency. 4+ years experience successfully leading cross-functional projects and teams in innovative, business-driven
environments. 
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a href="https://www.linkedin.com/in/dustinolong"><AiFillLinkedin /></a>
              <a href="https://github.com/Apple-Deuce"><AiFillGithub /></a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-emerald-700 to-white rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96"
            style={{objectFit:"contain"}}>
               <Image src={avatar} alt=""/>
            </div>
        </section>
        <section className="font-oswald text-gray-600 min-h-full">
          
          <div className="lg:flex gap-10" style={{justifyContent: "center"}}>
          <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={cloud} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-emerald-700 py-10">
                Software & Technology
              </h3>
              <div className="grid grid-cols-2">
              <p className="text-gray-800 py-1 dark:text-slate-200">GCP</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Azure</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">AWS</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Docker</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Kubernetes</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">RESTful APIs</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">GraphQL APIs</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">NoSQL</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">MSSQL</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">CI/CD</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Linux</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">MacOS</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Windows</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">SDLC</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">MDM Solutions</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">ServiceNow</p>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={code} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-emerald-700 py-10">
                Languages/Frameworks/Libraries
              </h3>
              <div className="grid grid-cols-2">
              <p className="text-gray-800 py-1 dark:text-slate-200">Python</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">SQL</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">CSS</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Go</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Gorilla/Mux</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">React.js</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Node.js</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Next.js</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Colly</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Scrapy</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Fernet</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">C#</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Bash/Shell</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Powershell</p>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={blocks} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-emerald-700 py-10">
                Technical & Soft Skills
              </h3>
              <div className="grid">
              <p className="text-gray-800 py-1 dark:text-slate-200">Adaptable</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Personable</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Emotial Awareness</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Technical Documentation</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Knowledge Transfer</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Object-Oriented Analysis/Design</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Business & Tech Communication</p>
              <p className="text-gray-800 py-1 dark:text-slate-200">Project Management</p>
              
              </div>
            </div>
          </div>
        </section>
        <section className="font-oswald text-gray-600">
          <div className=" gap-10" style={{justifyContent: "center"}}>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={learning} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-emerald-700 py-10">
                Certifications
              </h3>
              <div className="grid-cols-1">
                <a href="https://www.cloudskillsboost.google/public_profiles/8b0e2669-bd4e-4746-9421-1720dce5afd6/badges/2405390?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
              <p className="text-gray-800 py-1 dark:text-slate-200">Perform Foundational Infrastructure Tasks in Google Cloud - Google Cloud Skills Boost</p>
              </a>
              <a href="https://www.cloudskillsboost.google/public_profiles/8b0e2669-bd4e-4746-9421-1720dce5afd6/badges/2365223?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
              <p className="text-gray-800 py-1 dark:text-slate-200">Create and Manage Cloud Resources - Google Cloud Skills Boost</p>
              </a>
              <a href="https://courses.edx.org/certificates/e1bc642064304e199a552de95ebe6f8e">
              <p className="text-gray-800 py-1 dark:text-slate-200">MITx 6.00.1x: Introduction to Computer Science and Programming Using Python - MIT</p>
              </a>
              <a href="https://verify.skilljar.com/c/wzvspbdfxg6z">
              <p className="text-gray-800 py-1 dark:text-slate-200">Jamf Certified Associate - Jamf</p>
              </a>
              <p className="text-gray-800 py-1 dark:text-slate-200">Google Cloud Certified - GSuite - Google</p>
              
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  )
}
