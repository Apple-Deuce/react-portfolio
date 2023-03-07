import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react";

export default function About (){
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
        <><nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 font-oswald">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://dustinlong.tech/" class="flex items-center text-2xl">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span class="text-emerald-500">DUSTIN</span><span class="text-emerald-700">LONG</span><span class="text-emerald-900">.TECH</span></span>
                </a>
                <div class="flex md:order-2 items-center justify-between">
                    <button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-light rounded-lg text-md px-3 py-2.5 text-center mr-3 md:mr-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-2xl dark:fill-white " /></button>
                    <a href="https://storage.cloud.google.com/dustinlong-tech.appspot.com/Dustin%20Long%20Resume%202023.pdf"><button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-light rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Resume</button></a>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        
                    </button>
                </div>
                <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">Home</a>
                        </li>
                        <li>
                        <a href="about" class="block py-2 pl-3 pr-4 text-white bg-emerald-700 rounded md:bg-transparent md:text-emerald-700 md:p-0 dark:text-white lg:text-lg" aria-current="page">About</a>
                        </li>

                        <li>
                            <a href="contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 lg:text-lg">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav><div className="bg-lime-50 dark:bg-gray-900 pt-56 md:pt-20 min-h-screen">
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
            </div></>
            </div>
    )
}