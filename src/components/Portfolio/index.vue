<template>
      <div class="flex flex-col gap-2 w-full mt-16 max-sm:mt-10">
        <div class="flex flex-row backgound-cover"  id="home">
          <div class="flex w-full  bg-gradient-to-r from-gray-900">
            <div class="flex w-1/2 rounded-2x px-14 max-sm:px-5 items-center max-sm:justify-center">
              <div class="w-auto max-sm:mt-10 max-sm:pl-10 max-md:mt-12 max-md:mr-12 max-sm:mr-0 max-sm:mt-15 items-end justify-items-end justify-end">
                <h1 class="flex text-7xl text-white max-sm:text-5xl" >HELLO, I AM</h1>
                <h1 class="flex text-7xl text-white max-sm:text-5xl">ROTH SOKKIM</h1>
                <p class="text-sm pt-2 text-white noto-serif-900">
                  I am a Full-stack Web Developer.
                </p>
<!--                <div class="py-3">-->
<!--                  <button class="inline-flex items-center rounded-md px-4 py-2 text-md bg-blue-600 noto-serif-400 text-white" size="md">Download CV</button>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row pt-10 px-14 max-sm:px-5" id="about">
          <div class="flex flex-col w-full">
            <h1 class="flex flex-row w-full justify-center text-white text-xl text-bold py-2 my-3">About Me</h1>
            <div class="flex flex-row max-sm:flex-col w-full">

              <div class="flex flex-1">
                <article class="text-wrap noto-sans-300">
                  <p class="pt-5 mr-5 ">
                    Hi, I am Sokkim. I'm {{myAge}} years old and living in Phnom Penh, Cambodia.
                    I am a Full-stack Web Developer.
                    <br><br>Currently, I'm working at the National Payment Certification Agency, which is under the Ministry of Economy and Finance in Cambodia.
                    <br><br>I have been working there since November, 2022, for over {{getPeriodJob}} now.
                    <br><br>I am responsible for developing web applications for the institution and maintaining existing systems.
                    <br><br>I am also a graduate with a bachelor's degree in Computer Science from the Royal University of Phnom Penh.
                  </p>
                </article>
              </div>

              <div class="flex flex-1 max-sm:mt-12">
                <div class="border-l-2 border-gray-700 w-full">
                  <div class="flex flex-row pt-5 ">
                    <div class="flex absolute -ml-1.5 bg-green-800 w-3 h-3 rounded-full"></div>
                    <div class="flex justify-between w-full -mt-1 ml-5">
                      <div class="text-white flex w-44 underline">
                        <p class="noto-sans-300">Online Courses</p>
                      </div>
                      <div class="w-full justify-start items-center noto-sans-300">
                        <p>W3 School, Udemy, freeCodeCamp</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-row pt-5 ">
                    <div class="flex absolute -ml-1.5 bg-green-800 w-3 h-3 rounded-full"></div>
                    <div class="flex justify-between w-full -mt-1 ml-5">
                      <div class="text-white flex w-44 underline">
                        <p class="noto-sans-300">August 2020</p>
                      </div>
                      <div class="w-full justify-start items-center noto-sans-300">
                        <p>Graduated a bachelor's degree in Computer Science from the Royal University of Phnom Penh </p>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-row pt-5 ">
                    <div class="flex absolute -ml-1.5 bg-green-800 w-3 h-3 rounded-full"></div>
                    <div class="flex justify-between w-full -mt-1 ml-5">
                      <div class="text-white flex w-44 underline">
                        <p class="noto-sans-300">September 2016</p>
                      </div>
                      <div class="w-full justify-start items-center noto-sans-300">
                        <p>Passed the high school diploma exam.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row py-3 pt-10 px-14 max-sm:px-5" id="experience">
          <div class="flex flex-col w-full ">
            <h1 class="flex flex-row w-full justify-center text-white text-xl text-bold py-2 my-3">Works Experiences</h1>
            <div class="flex flex-row w-full">
              <div class="flex flex-1">
                <div class="border-l-2 border-gray-700 ">

                  <div class="flex flex-col">

                    <div class="flex flex-row pt-2 ">
                      <div class="flex absolute -ml-1.5 bg-green-800 w-3 h-3 rounded-full"></div>
                      <div class="flex -mt-1 ml-5">
                        <div class="flex flex-none w-96 max-lg:w-48 max-md:w-36 max-sm:w-24">
                          <div class="flex flex-col">
                            <div class="flex noto-serif-900 underline">November,&nbsp;&nbsp; 2022 - Present</div>
                            <div class="flex noto-serif-500 text-sm text-gray-500">Full-stack Web developer | Full-time | National Payment Certification Agency</div>
                          </div>
                        </div>

                        <div class="flex flex-initial px-5">
                          <article class="text-wrap">
                            <div class="noto-sans-300">

                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Building Single Page Applications daily using Vue.js and the Nuxt3</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Design and implement RESTful APIs and back-end services with Laravel</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Collaborate with cross-functional teams to define, design, and ship new features</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Participate in code reviews, ensuring high code quality and best practices</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Utilize Vue.js for front-end development, creating responsive, interactive user interfaces</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Leverage Laravel for back-end development, including database management, authentication, and API integration</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Troubleshoot and debug application issues, optimizing performance and scalability</p>
                              </div>
                              <div class="flex ">
                                <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                <p class="ml-4">Implement efficient code to enhance user experience and improve application performance.</p>
                              </div>

                            </div>
                          </article>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-row pt-10 ">
                        <div class="flex absolute -ml-1.5 bg-green-800 w-3 h-3 rounded-full"></div>
                        <div class="flex -mt-1 ml-5">
                          <div class="flex flex-none w-96 max-lg:w-48 max-md:w-36 max-sm:w-24">
                            <div class="flex flex-col">
                              <div class="flex noto-serif-900 underline">April,&nbsp;&nbsp;2020 - October,&nbsp;&nbsp;2022 </div>
                              <div class="flex noto-serif-500 text-sm text-gray-500">Web developer | Full-time | Turbotech Co.,Ltd</div>
                            </div>
                          </div>

                          <div class="flex flex-initial px-5">
                            <article class="text-wrap">
                              <div class="noto-sans-300">
                                <div class="flex ">
                                  <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                  <p class="ml-4">Coded websites using HTML, CSS, JavaScript and jQuery languages</p>
                                </div>
                                <div class="flex ">
                                  <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                  <p class="ml-4">Doing on back-end development using Laravel Framework to maintain website integrity</p>
                                </div>
                                <div class="flex ">
                                  <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                  <p class="ml-4">Used MySQL, PostgreSQL to work with database</p>
                                </div>
                                <div class="flex ">
                                  <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                  <p class="ml-4">Used google map API to produce application related mapping</p>
                                </div>
                                <div class="flex ">
                                  <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                  <p class="ml-4">Discussed site and app requirements with clients to produce actionable development plans</p>
                                </div>
                                <div class="flex ">
                                  <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                                  <p class="ml-4">Used Bootstrap and Tailwind for CSS framework.</p>
                                </div>

                              </div>
                            </article>
                          </div>
                        </div>
                      </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row py-3 pt-10 px-14 max-sm:px-5" id="skill">
          <div class="flex flex-col w-full ">
            <h1 class="flex flex-row w-full justify-center text-white text-xl text-bold  py-2 my-3" >Skills</h1>
            <div class="flex flex-col w-full ">

              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center text-md noto-serif-900 py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Frontend Development</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">JavaScript: Have an experiences with ES6+ features, and asynchronous programming (promises, async/await).</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">CSS Preprocessors: Friendly use CSS preprocessors like SASS or LESS.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Frontend Frameworks: Master a modern frontend framework such as Vue.js, and React.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Responsive Design: Create responsive layouts using frameworks like Bootstrap or Tailwind CSS.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>


              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center noto-serif-900 text-md text-bold py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Backend Development</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Server-side Languages: Using backend languages such as PHP, Node.Js, Go, or Python.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Frameworks: Comfortable with backend frameworks like Laravel (PHP), and Django (Python).</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">APIs: Create and consume RESTful APIs and GraphQL.</p>
                        </div>

                      </div>
                    </article>
                  </div>
                </div>
              </div>



              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center noto-serif-900 text-md text-bold py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Databases</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">SQL Databases:  Experience with relational databases like MySQL, PostgreSQL, or SQLite.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">NoSQL Databases: Understand non-relational databases like MongoDB or Firebase.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>


              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center noto-serif-900 text-md text-bold py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Version Control</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Git: Daily Git usage for version control, including common commands and workflows (cloning, branching, merging, pull requests).</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>


              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center noto-serif-900 text-md text-bold py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Development Tools</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Package Managers: Get familiar with package managers like npm or Yarn.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Text Editors/IDEs: Text editor or IDE such as Visual Studio Code, or PHPStorm.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center noto-serif-900 text-md text-bold py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Development and DevOps</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Servers: Understand basic server management and deployment processes.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Containers: Knowledge how to build a container with Docker.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">CI/CD: Knowledge with deployment (CI/CD) pipelines using tools like Jenkins, GitHub Actions, or GitLab CI.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              <div class="flex flex-col">
                <div class="flex flex-col w-full">
                  <h1 class="flex flex-row w-full items-center noto-serif-900 text-md text-bold py-2"><font-awesome-icon :icon="['fas', 'hand-point-right']" /> &nbsp;&nbsp; Soft Skills</h1>
                  <div class="flex flex-row w-full pl-10 py-3">
                    <article class="text-wrap">
                      <div class="noto-sans-300">
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Problem-Solving: Strong problem-solving skills and logical thinking.</p>
                        </div>
                        <div class="flex  ">
                          <div class="mt-2 bg-gray-600 w-2 h-2 absolute rounded-full"></div>&nbsp;
                          <p class="ml-4">Collaboration: Work well in a team, communicate effectively, and understand the principles of agile development.</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="flex flex-row py-3 pt-10 px-14 max-sm:px-5" id="contact">
          <div class="flex flex-col w-full ">
            <h1 class="flex flex-row w-full justify-center text-white text-xl text-bold py-2 my-3">Contact Me</h1>
            <div class="flex flex-nowrap py-5">
              <div class="flex px-5 gap-5 w-full max-sm:flex-col">

                <div class="flex w-full justify-start items-center   noto-sans-300">
                  <div class="flex"><font-awesome-icon class="fa-xl" :icon="['fas', 'map-location-dot']" />&nbsp;&nbsp;&nbsp;<p>#No.26A, St.2011, Krang Thnong commune, SenSok district, Phnom Penh capital, Cambodia</p></div>
                </div>

                <div class="flex w-full items-center justify-center max-sm:justify-start noto-sans-300">
                  <div class="flex-col">
                    <div class="flex flex-row items-center gap-2">
                      <font-awesome-icon class="fa-lg" :icon="['fas', 'phone']" />
                      <p class="text-lg">+855 98 429 694</p>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                      <font-awesome-icon class="fa-lg" :icon="['fas', 'envelope']" />
                      <p class="text-lg">mrkimsokss7@gmail.com</p>
                    </div>
                    </div>
                </div>

                <div class="flex w-full justify-end items-center max-sm:justify-center gap-4 noto-sans-300">
                  <a class="flex flex-col" target="_blank" href="//www.linkedin.com/in/sokkim-roth-466795218">
                    <font-awesome-icon class="fa-xl" title="LinkedIn" :icon="['fab', 'linkedin']" />
                    <p class="text-2xs py-2">LinkedIn</p>
                  </a>
                  <a class="flex flex-col" target="_blank" href="//www.linkedin.com/in/sokkim-roth-466795218">
                    <font-awesome-icon class="fa-xl" title="WhatApp" :icon="['fab', 'square-whatsapp']" />
                    <p class="text-2xs py-2">WhatApp</p>
                  </a>
                  <a class="flex flex-col" target="_blank" href="//https://x.com/SokkimRoth">
                    <font-awesome-icon class="fa-xl" title="X" :icon="['fab', 'x-twitter']" />
                    <p class="text-2xs py-2 text-center">X</p>
                  </a>
                </div>


              </div>
            </div>

          </div>
        </div>

      </div>
</template>

<script setup lang="ts">
  var getYear = new Date().getFullYear();
  var getCurrentTime = new Date();
  var workStart = new Date('11-01-2022');
  const myAge = (getYear - 2000);

  const calculatePeriod = (startDate :any, endDate :any) : string => {
    const seconds = Math.floor((endDate - startDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if(years>1){
      return 'two years';
    }else{
      return 'a year';
    }
  };
  var getPeriodJob = calculatePeriod(workStart, getCurrentTime)


</script>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.backgound-cover {
  height: 400px;
  background: url("/public/IMG_4489.HEIC") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
