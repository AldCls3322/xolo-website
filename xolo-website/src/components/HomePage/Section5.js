import React from "react";
import "./Section5.css";
import EyeSVG from "../imgs/eye-private-retina-svgrepo-com.svg";
import { motion } from "framer-motion";

function Section5() {
  return (
    <div className="Container" id="sections5-container">
      <motion.div
        className="section5-2div-container"
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="section5-div-container" id="section5-left-div">
          <div className="section5-text-info-container">
            <div className="section5-text-info-header">KEY ASPECTS</div>
            <div class="section5-text-info-desc">
              {/* <div class="section5-text-info-img-container">
                <img
                  className="section5-text-info-img"
                  src="https://webdesign-studio-leipzig.de/wp-content/uploads/2024/01/SEO-in-Leipzig.webp"
                  alt=""
                  srcset="https://webdesign-studio-leipzig.de/wp-content/uploads/2024/01/SEO-in-Leipzig.webp 313w, https://webdesign-studio-leipzig.de/wp-content/uploads/2024/01/SEO-in-Leipzig-300x300.webp 300w, https://webdesign-studio-leipzig.de/wp-content/uploads/2024/01/SEO-in-Leipzig-150x150.webp 150w"
                />
              </div> */}
              <div class="section5-text-info-list-container">
                <ul class="section5-text-info-list">
                  <li class="section5-text-info-list-item">
                    <span class="section5-text-info-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-far-comments"
                        viewBox="0 0 576 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path>
                      </svg>
                    </span>
                    <span class="section5-text-info-list-text">
                      Constant Dialogue
                    </span>
                  </li>
                  <li class="section5-text-info-list-item">
                    <span class="section5-text-info-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-chart-line"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                      </svg>
                    </span>
                    <span class="section5-text-info-list-text">
                      Memory of what you like and topics you are interested in
                    </span>
                  </li>
                  <li class="section5-text-info-list-item">
                    <span class="section5-text-info-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-search-location"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                      </svg>
                    </span>
                    <span class="section5-text-info-list-text">
                      Improves chatting the longer you speak with Dory
                    </span>
                  </li>
                  <li class="section5-text-info-list-item">
                    <span class="section5-text-info-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-laptop-medical"
                        viewBox="0 0 640 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8zM576 48a48.14 48.14 0 0 0-48-48H112a48.14 48.14 0 0 0-48 48v336h512zm-64 272H128V64h384zm112 96H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 0 0-16 16v16a64.19 64.19 0 0 0 64 64h512a64.19 64.19 0 0 0 64-64v-16a16 16 0 0 0-16-16z"></path>
                      </svg>
                    </span>
                    <span class="section5-text-info-list-text">
                      Monthly subscription for as many messages as you want to have
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section5-div-container" id="section5-right-div">
          <img src={EyeSVG} className="section5-div-right-svg-img" />
        </div>
      </motion.div>
    </div>
  );
}

export default Section5;
