import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Patel Yesha</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a Front-end Web developer. All coding projects
            are built from the ground up, from planning and designing all the way
            to solving real-life problems with code.
            <br />
            All projects are uploaded on my Github account
            {' '}
            <a
               href="https://github.com/patelyesha"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               patelyesha
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;