import React from 'react';
import './Section4.css';
import Img from "../imgs/white02.jpg";

function Section4() {
  return (
    <section class="Container" id="section4-container">
      <div class="page-padding">
        <div className="section4-wrapper">
          <div class="container-1280">
            <div class="expect-wrapper">
              <div class="expect-text-wrapper">
                <div class="expect-heading-wrapper">
                  <h3 class="heading-48">What Dory is capable of</h3>
                </div>
                <div class="expect-subheading-wrapper">
                  <p class="text-size-20">
                    Dory is an AI that can chat with people through Whatsapp. As
                    you start chatting with Dory, first you'll need to configure
                    her: setting Dory a name and gender. <br />
                    <br />
                    Dory will text you back once you start talking with her. She
                    will answer your questions, give you advices, and tell you
                    jokes!
                  </p>
                </div>
                <div class="expect-img-wrapper">
                  <img
                    src={Img}
                    loading="lazy"
                    alt="dory chat"
                    class="img-full-width img-radius-64"
                  />
                </div>
              </div>
              <div class="expect-card-list">
                <div class="expect-card-item">
                  <div class="expect-card-item-wrapper">
                    <div className="expected-card-item-header">
                      <div class="expect-card-icon">
                        <div aria-hidden="true" class="embed-icon-24 w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="section4-svg-shield"
                          >
                            <g clip-path="url(#verified-user-black-24dp-2-1_clip0-307-1557)">
                              <path
                                d="M11.19 1.36L4.19 4.47C3.47 4.79 3 5.51 3 6.3V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6.3C21 5.51 20.53 4.79 19.81 4.47L12.81 1.36C12.3 1.13 11.7 1.13 11.19 1.36ZM9.29 16.29L6.7 13.7C6.31 13.31 6.31 12.68 6.7 12.29C7.09 11.9 7.72 11.9 8.11 12.29L10 14.17L15.88 8.29C16.27 7.9 16.9 7.9 17.29 8.29C17.68 8.68 17.68 9.31 17.29 9.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"
                                fill="#664C43"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="verified-user-black-24dp-2-1_clip0-307-1557">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="expect-card-title">
                        <h4 class="heading-24 mobile-text-20">
                          Secured Privacy
                        </h4>
                      </div>
                    </div>
                    <p class="text-size-25">
                      The chats are encrypted and private.
                    </p>
                  </div>
                </div>
                <div class="expect-card-item">
                  <div
                    class="expect-card-item-wrapper background-brown"
                    id="expect-card-item-wrapper-card2"
                  >
                    <div className="expected-card-item-header">
                      <div class="expect-card-icon">
                        <div aria-hidden="true" class="embed-icon-24 w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#chair-black-24dp-1-1_clip0-307-1565)">
                              <path
                                d="M21 9C19.9 9 19 9.9 19 11V15H5V11C5 9.9 4.1 9 3 9C1.9 9 1 9.9 1 11V16C1 17.65 2.35 19 4 19V20C4 20.55 4.45 21 5 21C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V19C21.65 19 23 17.65 23 16V11C23 9.9 22.1 9 21 9Z"
                                fill="#664C43"
                              ></path>
                              <path
                                d="M7 11V13H17V11C17 9.14 18.28 7.59 20 7.14V6C20 4.35 18.65 3 17 3H7C5.35 3 4 4.35 4 6V7.14C5.72 7.59 7 9.14 7 11Z"
                                fill="#664C43"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="chair-black-24dp-1-1_clip0-307-1565">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="expect-card-title">
                        <h4 class="heading-24 mobile-text-20">Chatting</h4>
                      </div>
                    </div>
                    <p class="text-size-25">
                      The engagement of Dory depends on how engaging you are
                      with her.
                    </p>
                  </div>
                </div>
                <div class="expect-card-item">
                  <div
                    class="expect-card-item-wrapper"
                    id="expect-card-item-wrapper-card3"
                  >
                    <div className="expected-card-item-header">
                      <div class="expect-card-icon">
                        <div aria-hidden="true" class="embed-icon-24 w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#waving-hand-black-24dp1_clip0-307-1582)">
                              <path
                                d="M6.07002 9.7998C5.87002 9.9998 5.87002 10.3098 6.07002 10.5098C7.14002 11.5798 7.23002 13.2598 6.35002 14.4298C6.20002 14.6298 6.23002 14.8998 6.40002 15.0798C6.62002 15.2998 6.97002 15.2698 7.16002 15.0298C8.23002 13.5998 8.22002 11.5998 7.12002 10.1798L14.74 2.5598C15.23 2.0698 16.02 2.0698 16.51 2.5598C17 3.0498 17 3.8398 16.51 4.3298L11.38 9.4598C11.18 9.6598 11.18 9.9698 11.38 10.1698C11.58 10.3698 11.89 10.3698 12.09 10.1698L18.63 3.6298C19.12 3.1398 19.91 3.1398 20.4 3.6298C20.89 4.1198 20.89 4.90981 20.4 5.39981L13.86 11.9398C13.66 12.1398 13.66 12.4498 13.86 12.6498C14.06 12.8498 14.37 12.8498 14.57 12.6498L20.05 7.1698C20.54 6.6798 21.33 6.6798 21.82 7.1698C22.31 7.6598 22.31 8.4498 21.82 8.9398L15.63 15.1298C15.43 15.3298 15.43 15.6398 15.63 15.8398C15.83 16.0398 16.14 16.0398 16.34 15.8398L20.41 11.7698C20.9 11.2798 21.69 11.2798 22.18 11.7698C22.67 12.2598 22.67 13.0498 22.18 13.5398L15.11 20.6098C11.89 23.8298 6.66002 23.8298 3.44002 20.6098C0.220024 17.3898 0.220024 12.1598 3.44002 8.9398L8.04002 4.3398C8.53002 3.8498 9.32003 3.8498 9.81003 4.3398C10.3 4.8298 10.3 5.61981 9.81003 6.10981L6.07002 9.7998ZM7.00002 1.7998C7.00002 1.3898 6.66002 1.0498 6.25002 1.0498C6.21002 1.0498 6.18002 1.0498 6.14002 1.0598C3.51002 1.4398 1.44002 3.5198 1.06002 6.1398C1.06002 6.16981 1.05002 6.2098 1.05002 6.2498C1.05002 6.6598 1.39002 6.9998 1.80002 6.9998C2.18002 6.9998 2.49002 6.71981 2.54002 6.35981C2.82002 4.38981 4.38002 2.8298 6.35002 2.5498C6.72002 2.4898 7.00002 2.1798 7.00002 1.7998ZM17 22.1998C17 22.6098 17.34 22.9498 17.75 22.9498C17.79 22.9498 17.82 22.9498 17.86 22.9398C20.49 22.5598 22.56 20.4798 22.94 17.8598C22.94 17.8298 22.95 17.7898 22.95 17.7498C22.95 17.3398 22.61 16.9998 22.2 16.9998C21.82 16.9998 21.51 17.2798 21.46 17.6398C21.18 19.6098 19.62 21.1698 17.65 21.4498C17.28 21.5098 17 21.8198 17 22.1998Z"
                                fill="#664C43"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="waving-hand-black-24dp1_clip0-307-1582">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div class="expect-card-title">
                        <h4 class="heading-24 mobile-text-20">
                          Learns according to the user
                        </h4>
                      </div>
                    </div>
                    <p class="text-size-25">
                      Dory has memory and she will change as you talk to her for
                      better suitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4