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

      <main className="bg-lime-50 dark:bg-gray-900 px-5 text-black font-oswald" >
        <section className="min-h-full mb-10 dark:bg-gray-900">

{/* nav */}

<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 from-black to-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://dustinlong.tech/" class="flex items-center text-2xl">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span class="text-emerald-500">DUSTIN</span><span class="text-emerald-700">LONG</span><span class="text-emerald-900">.TECH</span></span>
  </a>
  <div class="flex md:order-2 items-center justify-between">
  <button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-light rounded-lg text-md px-3 py-2.5 text-center mr-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} className="text-2xl dark:fill-white "/></button>
      <a href="https://storage.cloud.google.com/dustinlong-tech.appspot.com/Dustin%20Long%20Resume%202023.pdf"><button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-light rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Resume</button></a>
  </div>
  </div>
</nav>

{/* title section (initial view) */}

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

{/*About Me*/}
<section id="about">
<div className="bg-lime-50 dark:bg-gray-900 pt-56 md:pt-20 min-h-screen">
                <h3 className="text-2xl py-5 leading-8 text-gray-800 md:text-4xl dark:text-emerald-900 m-5">Let me tell you a little more about myself.</h3>
                <p className="text-lg py-5 leading-8 text-gray-800 md:text-2xl dark:text-emerald-900 m-5">
                    I guess we should start from the beginning...
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    As long as I can remember, I've loved technology. My grandmother worked at Southern Bell (which through time transformed into what we know as AT&T) and loved adopting new technology and learning in general. I guess I have her to thank for my inquisitive nature. She taught me how to how to use a computer before I could tie my shoes (that's not an exaggeration) and from there it was history. From explaining to my parents as a nine year old that we needed a new graphics card for vertex shaders or installing Windows 7 with 1GB of RAM, I was probably a bit of a nuisance. Nonetheless, I think it's paid off in the long run.
                </p>
                <p className="text-lg py-2 m-5 leading-loose text-gray-800 md:text-2xl md:leading-relaxed dark:text-slate-200">
                    For the longest time I was the extended family's tech support agent, with anything from data transfers and OS installations to replacing routers and virus removal. Over time, my "clientele" grew and before I knew it I was performing break-fix work for a large group of family friends, acquantances and even our neighbor. I taught myself a bit of graphic design and then taught my high school "Intro to modern computing" classmates how to use <span className="text-emerald-700">Photoshop</span>, <span className="text-emerald-700">Illustrator</span> and <span className="text-emerald-700">Premiere Pro.</span>
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
            <div className="text-center shadow-2xl p-10 rounded-xl my-10">
              <div style={{
                display:"flex",
                justifyContent: "center",
              }}><Image src={blocks} width={100} alt=""/></div>
              <h3 className="text-2xl font-medium text-emerald-700 py-10">
                Technical & Soft Skills
              </h3>
              <div className="grid">
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

{/* Contact Me */}

        <section class="bg-lime-50 dark:bg-gray-900 h-screen pt-56 md:pt-20">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white font-oswald">Let's Talk!</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl font-oswald">Interested to know more about me? Think I could help on your project? Want to talk about video games? Let me know.</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="user@domain.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-emerald-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
      </main>
    </div>
    
  )
}
