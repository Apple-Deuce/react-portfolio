//single_page_branch

import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
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

{/* main container */}

      <main className="bg-solid dark:bg-gray-900 px-5 text-black font-oswald" >
        
        

{/* nav */}

<nav class="bg-solid px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://dustinlong.tech/" class="flex items-center text-2xl">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span class="text-accent-2">DUSTIN</span><span class="text-secondary">LONG</span><span class="text-accent-1">.TECH</span></span>
  </a>
  <div class="flex md:order-2 items-center justify-between">
  <button type="button" class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-accent-2 font-light rounded-lg text-md px-3 py-2.5 text-center mr-3 dark:bg-secondary dark:hover:bg-primary dark:focus:ring-acccent-1"><BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} className="text-2xl dark:fill-white "/></button>
      <a href="https://storage.googleapis.com/dustinlong-tech.appspot.com/DL%20Resume%202023.pdf"><button type="button" class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-accent-2 font-light rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-secondary dark:hover:bg-primary dark:focus:ring-acccent-1">Resume</button></a>
  </div>
  </div>
</nav>

{/* Container div for page scroll effect */}
<div class="container mx-auto">

{/* title section (initial view) */}
<section class="one" className="min-h-full mb-10 dark:bg-gray-900">
            <div className="text-center pt-56 lg:pt-36 pb-10">
              <h2 className="font-oswald text-6xl py-2 text-primary dark:text-secondary">Dustin Long</h2>
              <h3 className="font-oswald text-lg font-semibold py-2 text-accent-1 dark:text-accent-2">Fullstack Engineer</h3>
              <p className="font-oswald text-lg py-5 leading-8 text-gray-800 md:text-4xl md:leading-relaxed 2xl:m-10 dark:text-slate-200">
                Using a business-minded approach to empower new levels of growth and efficiency. 4+ years experience successfully leading cross-functional projects and teams in innovative, business-driven
environments. 
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-secondary">
              <a href="https://www.linkedin.com/in/dustinolong" class="hover:text-accent-1 dark:hover:text-accent-2"><AiFillLinkedin /></a>
              <a href="https://github.com/Apple-Deuce"class="hover:text-accent-1 dark:hover:text-accent-2"><AiFillGithub /></a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-emerald-700 to-white rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96"
            style={{objectFit:"contain"}}>
               <Image src={avatar} alt=""/>
            </div>
        </section>

{/*About Me*/}
<section  class="two" id="about">
<div className="pt-56 md:pt-20 min-h-screen">
                <h3 className="text-2xl py-5 leading-8 text-accent-1 md:text-4xl dark:text-secondary m-5">Let me tell you a little more about myself.</h3>
                <p className="text-lg py-5 leading-8 text-gray-800 md:text-2xl dark:text-slate-200 m-5">
                    I guess we should start from the beginning...
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    As long as I can remember, I've loved technology. My grandmother worked at Southern Bell (which through time transformed into what we know as AT&T) and loved adopting new technology and learning in general. I guess I have her to thank for my inquisitive nature. She taught me how to how to use a computer before I could tie my shoes (that's not an exaggeration) and from there it was history. From explaining to my parents as a nine year old that we needed a new graphics card for vertex shaders or installing Windows 7 with 1GB of RAM, I was probably a bit of a nuisance. Nonetheless, I think it's paid off in the long run.
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    For the longest time I was the extended family's tech support agent, with anything from data transfers and OS installations to replacing routers and virus removal. Over time, my "clientele" grew and before I knew it I was performing break-fix work for a large group of family friends, acquantances and even our neighbor. I taught myself a bit of graphic design and then taught my high school "Intro to modern computing" classmates how to use <span className="text-primary dark:text-accent-2">Photoshop</span>, <span className="text-primary dark:text-accent-2">Illustrator</span> and <span className="text-primary dark:text-accent-2">Premiere Pro.</span>
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    Fast forward to present day, I've been able to use my interest in how things work to my advantage. I've developed my skills both professionaly and personally in a wide array of environments with some truly remarkable friends and colleagues. I've worked anywhere from small, family-owned business to medium-sized MSP's and even a Fortune 500 company. All along the way I've been polishing my skills and working to become a well-rounded engineer.
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    I am extremely passionate about creating robust and scalable web applications, scripting processes, documenting technology and it's capabilities, and so much more. I enjoy having to adapt to meet new requirements or expectations, or having to learn a new technology in order to solve a problem. In my opinion, the key to success in this field is to stay curious and learn something new every chance you get, which is something I am dedicated to doing every day. I love to explore new tools and frameworks to enhance my skills and take my capabilities to the next level.
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    I can't wait to share my journey with you. Thank you for taking the time to visit my website, and I look forward to connecting with you soon!
                </p>
            </div>
            </section>

{/* Skills and Credentials Grid section */}

        <section  class="three" className="font-oswald text-gray-600 min-h-full">
          
          <div className="xl:flex gap-10" style={{justifyContent: "center"}}>
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-800">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={cloud} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-secondary py-10">
                Software & Technology
              </h3>
              <div className="grid grid-cols-2 text-gray-800 dark:text-slate-200">
              <p className="py-1">GCP</p>
              <p className="py-1">Azure</p>
              <p className="py-1">AWS</p>
              <p className="py-1">Docker</p>
              <p className="py-1">Kubernetes</p>
              <p className="py-1">RESTful APIs</p>
              <p className="py-1">GraphQL APIs</p>
              <p className="py-1">NoSQL</p>
              <p className="py-1">MSSQL</p>
              <p className="py-1">CI/CD</p>
              <p className="py-1">Linux</p>
              <p className="py-1">MacOS</p>
              <p className="py-1">Windows</p>
              <p className="py-1">SDLC</p>
              <p className="py-1">MDM Solutions</p>
              <p className="py-1">ServiceNow</p>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-800">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={code} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-secondary py-10">
                Languages/Frameworks/Libraries
              </h3>
              <div className="grid grid-cols-2 text-gray-800 dark:text-slate-200">
              <p className="py-1">Python</p>
              <p className="py-1">Javascript</p>
              <p className="py-1">SQL</p>
              <p className="py-1">CSS</p>
              <p className="py-1">Go</p>
              <p className="py-1">Gorilla/Mux</p>
              <p className="py-1">React.js</p>
              <p className="py-1">Node.js</p>
              <p className="py-1">Next.js</p>
              <p className="py-1">Colly</p>
              <p className="py-1">Scrapy</p>
              <p className="py-1">Fernet</p>
              <p className="py-1">C#</p>
              <p className="py-1">Tailwind</p>
              <p className="py-1">Bash/Shell</p>
              <p className="py-1">Powershell</p>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-800">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={blocks} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-secondary py-10">
                Technical & Soft Skills
              </h3>
              <div className="grid text-gray-800 py-1 dark:text-slate-200">
              <p className="py-1">Adaptable</p>
              <p className="py-1">Personable</p>
              <p className="py-1">Emotial Awareness</p>
              <p className="py-1">Technical Documentation</p>
              <p className="py-1">Knowledge Transfer</p>
              <p className="py-1">Object-Oriented Analysis/Design</p>
              <p className="py-1">Business & Tech Communication</p>
              <p className="py-1">Project Management</p>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-800">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={learning} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-secondary py-10">
                Certifications
              </h3>
              <div className="grid text-gray-800 py-1 dark:text-slate-200">
              <a href="https://www.cloudskillsboost.google/public_profiles/8b0e2669-bd4e-4746-9421-1720dce5afd6/badges/2405390?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
              <p className="py-1 hover:text-accent-1 dark:hover:text-accent-2">Perform Foundational Infrastructure Tasks in Google Cloud - Google Cloud Skills Boost</p>
              </a>
              <a href="https://www.cloudskillsboost.google/public_profiles/8b0e2669-bd4e-4746-9421-1720dce5afd6/badges/2365223?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
              <p className="py-1 hover:text-accent-1 dark:hover:text-accent-2">Create and Manage Cloud Resources - Google Cloud Skills Boost</p>
              </a>
              <a href="https://courses.edx.org/certificates/e1bc642064304e199a552de95ebe6f8e">
              <p className="py-1 hover:text-accent-1 dark:hover:text-accent-2">MITx 6.00.1x: Introduction to Computer Science and Programming Using Python - MIT</p>
              </a>
              <a href="https://verify.skilljar.com/c/wzvspbdfxg6z">
              <p className="py-1 hover:text-accent-1 dark:hover:text-accent-2">Jamf Certified Associate - Jamf</p>
              </a>
              <p className="py-1">Google Cloud Certified - GSuite - Google</p>
              </div>
            </div>
          </div>
        </section>

{/* Contact Me */}

        <section class=" h-2/3 pt-56 md:pt-20 shadow-2xl p-10 rounded-xl my-10 dark:bg-slate-800">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl md:text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-accent-2 font-oswald">Let's Talk!</h2>
                    <p class="pt-10 mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-2xl font-oswald">Interested to know more about me? Think I could help on your project? Want to talk about video games? Let me know.</p>
                <a href="mailto:info@dustinlong.tech"><h3 className="text-3xl md:text-5xl tracking-tight pt-10 font-extrabold text-center text-secondary dark:text-secondary font-oswald hover:text-primary dark:hover:text-accent-1">info@dustinlong.tech</h3></a>
                </div>
            </section>
            </div>
      </main>
    </div>
    
  )
}
