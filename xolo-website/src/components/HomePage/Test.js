import React from 'react'
import './Test.css'
import Logo from "../imgs/xoloblack.png";
import { FaUser } from "react-icons/fa";

function Test() {
  return (
    <div className="background-blobs-container">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="blob1-upper-left"
      >
        <linearGradient id="blob1-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="blob1-gradient1" offset="0%"></stop>
          <stop id="blob1-gradient2" offset="100%"></stop>
        </linearGradient>
        <path
          fill="url(#blob1-gradient)"
          d="M31,-40C38.5,-37.2,41.7,-25.9,45.8,-14.6C49.9,-3.2,54.9,8.1,48.2,11.6C41.5,15.2,23.2,10.9,13.2,23C3.2,35.1,1.6,63.7,-8.4,75.2C-18.3,86.7,-36.7,81.2,-45.6,68.7C-54.5,56.2,-53.9,36.8,-51.5,22C-49,7.2,-44.5,-2.9,-40.7,-12.7C-36.8,-22.6,-33.5,-32.1,-26.9,-35.1C-20.2,-38.1,-10.1,-34.6,0.8,-35.8C11.8,-36.9,23.5,-42.7,31,-40Z"
          transform="translate(-100 10)"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="blob2-middle"
      >
        <defs>
          <linearGradient id="blob2-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="blob2-gradient1" offset="0%"></stop>
            <stop id="blob2-gradient2" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#blob2-gradient)"
          d="M42.2,-54C45,-39.3,31.1,-19.7,31.1,0C31.1,19.7,45.2,39.5,42.3,49.3C39.5,59.2,19.7,59.2,8,51.2C-3.7,43.2,-7.5,27.2,-9.9,17.4C-12.3,7.5,-13.3,3.7,-22.2,-8.9C-31.2,-21.6,-48.1,-43.3,-45.7,-57.9C-43.3,-72.5,-21.6,-80.2,-1,-79.2C19.7,-78.2,39.3,-68.6,42.2,-54Z"
          transform="translate(260 90)"
        />
      </svg>

      <svg
        class="w-10 h-10"
        viewBox="0 0 165 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arc-svg"
      >
        <path
          d="M34.5499 158.023C0.467756 123.941 0.467756 68.1256 34.5499 34.0435C68.632 -0.0385913 124.448 -0.0385913 158.53 34.0435"
          stroke="currentColor"
          stroke-width="16.1298"
          stroke-miterlimit="10"
        />
        <path
          d="M34.5499 158.023C0.467756 123.941 0.467756 68.1256 34.5499 34.0435C68.632 -0.0385913 124.448 -0.0385913 158.53 34.0435"
          stroke="currentColor"
          stroke-opacity="0.2"
          stroke-width="16.1298"
          stroke-miterlimit="10"
        />
        <path
          d="M33.5616 156.542C-0.520525 122.459 -0.520525 66.6437 33.5616 32.5616C67.6437 -1.52053 123.459 -1.52053 157.541 32.5616"
          stroke="var(--color-contrast)"
          stroke-width="5.37659"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(210 80)"
        />
      </svg>

      <svg
        id="blob3-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="blob3-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="blob3-gradient1" offset="0%"></stop>
            <stop id="blob3-gradient2" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#blob3-gradient)"
          d="M11.7,5.2C9.4,10.7,-2.1,9.3,-5.6,3.1C-9.1,-3,-4.6,-14,1.2,-13.3C7,-12.6,14,-0.2,11.7,5.2Z"
          width="100%"
          height="100%"
          transform="translate(70 20)"
          stroke-width="0"
        ></path>
      </svg>

      <svg
        id="blob4-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="blob4-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="blob4-gradient1" offset="0%"></stop>
            <stop id="blob4-gradient2" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#blob4-gradient)"
          d="M2.7,-1.9C5,0.7,9.4,1.9,10.3,4.3C11.3,6.6,8.9,10.1,3.1,16.9C-2.7,23.7,-11.9,33.8,-18.6,32.8C-25.3,31.8,-29.4,19.7,-29,9.9C-28.6,0.2,-23.6,-7.3,-18,-10.7C-12.4,-14,-6.2,-13.2,-3,-10.8C0.2,-8.4,0.4,-4.5,2.7,-1.9Z"
          width="100%"
          height="100%"
          transform="translate(10 70)"
          stroke-width="0"
        ></path>
      </svg>

      <svg
        id="blob5-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="blob5-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="blob5-gradient1" offset="0%"></stop>
            <stop id="blob5-gradient2" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#blob5-gradient)"
          d="M18.9,-16.3C19.3,-14.6,10.8,-7,9.1,2.6C7.3,12.3,12.3,24,9.1,29.7C5.9,35.4,-5.4,35.1,-10.3,29.6C-15.2,24.1,-13.7,13.4,-16.5,3.1C-19.4,-7.1,-26.6,-17,-24.5,-19.1C-22.5,-21.2,-11.3,-15.4,-1,-14.6C9.3,-13.8,18.5,-18,18.9,-16.3Z"
          width="100%"
          height="100%"
          transform="translate(110 90)"
          stroke-width="0"
        ></path>
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="blob6-svg"
      >
        <defs>
          <linearGradient id="blob6-gradient">
            <stop offset="5%" id="blob6-gradient1" />
            <stop offset="95%" id="blob6-gradient2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob6-gradient)"
          d="M42.9,-45.9C56.2,-29.6,68,-14.8,63.2,-4.8C58.5,5.3,37.2,10.6,23.9,22.6C10.6,34.7,5.3,53.6,2,51.5C-1.2,49.5,-2.4,26.5,-4.7,14.5C-7,2.4,-10.4,1.2,-16,-5.6C-21.6,-12.5,-29.5,-24.9,-27.2,-41.3C-24.9,-57.6,-12.5,-77.8,1.2,-79C14.8,-80.2,29.6,-62.3,42.9,-45.9Z"
          transform="translate(10 150)"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="blob7-svg"
      >
        <defs>
          <linearGradient id="blob7-gradient">
            <stop offset="5%" id="blob7-gradient1" />
            <stop offset="95%" id="blob7-gradient2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob7-gradient)"
          d="M47.6,-39.1C56.2,-39.1,53.7,-19.5,46.9,-6.8C40.2,6,29.1,12,20.5,15.9C12,19.9,6,21.8,-3,24.8C-12,27.8,-24,31.9,-35.2,28C-46.4,24,-56.8,12,-54.6,2.2C-52.3,-7.5,-37.5,-15.1,-26.3,-15.1C-15.1,-15.2,-7.5,-7.7,6,-13.7C19.5,-19.7,39.1,-39.2,47.6,-39.1Z"
          transform="translate(100 280)"
        />
      </svg>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        id="blob8-svg"
      >
        <defs>
          <linearGradient id="blob8-gradient">
            <stop offset="5%" id="blob8-gradient1" />
            <stop offset="95%" id="blob8-gradient2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob8-gradient)"
          d="M45.3,-59.6C47.6,-43.1,30.4,-21.6,29.9,-0.5C29.4,20.6,45.6,41.2,43.4,49C41.2,56.9,20.6,52,10.1,41.9C-0.4,31.8,-0.8,16.5,-16.8,8.7C-32.8,0.8,-64.3,0.4,-70.1,-5.8C-76,-12.1,-56.1,-24.1,-40.1,-40.6C-24.1,-57,-12.1,-77.9,4.8,-82.6C21.6,-87.4,43.1,-76,45.3,-59.6Z"
          transform="translate(100 -60)"
        />
      </svg>
      <div className='background-blur-effect'/>
    </div>
  );
}

export default Test

// <body>
//   <div></div>
// </body>


// body {
//   display:flex;
//   height:100vh;
//   align-items:center;
//   justify-content: center;
//   background-color: #e7d39f;
// }
// div {
//   width: 200px;
//   height: 80px;
//   background-color: #522d5b;
// }

// div:after {
//   content: "";
//   position:absolute;
//   margin:-20px;
//   width:40px;
//   height:40px;
//   border-radius: 50%; /* NEW */
//   box-shadow: 0 0 0 250px #522d5b;
// }