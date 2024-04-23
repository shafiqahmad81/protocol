export default function Protocol() {
  return (
    <div className="h-full lg:ml-72 xl:ml-80">
      {/* Header with sidebar */}
      <header className="fixed inset-y-0 left-0 z-50 contents border-r border-zinc-900/10 lg:block w-72 xl:w-80 overflow-y-auto px-6 pt-4 pb-8 ">
        {/* Logo start */}
        <div className="lg:flex hidden">
          <a aria-label="Home" href="#">
            <img
              src="../src/assets/icons/logo.svg"
              alt="Logo"
              className="h-6 w-auto"
            />
          </a>
        </div>
        {/* Logo end */}
        {/* Header  */}
        <div className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] backdrop-blur-sm transition px-4 sm:px-6 lg:left-72 xl:left-80">
          <div className="flex h-14 items-center justify-between gap-12">
            <div className=" absolute inset-x-0 top-full h-px bg-zinc-900/10 transition"></div>
            <div className="hidden relative lg:block max-w-md lg:flex-auto">
              <button className="lg:flex hidden h-8 rounded-full pl-2 pr-3 items-center w-full gap-2 bg-white text-zinc-500 ring-1 ring-zinc-900/10 transition">
                <img
                  src="../src/assets/icons/search.svg"
                  alt="search icon"
                  className=" h-6 w-6"
                />
                <input
                  type="text"
                  placeholder="search"
                  className="flex-1 focus:outline-none focus:border-none"
                />
                <kbd className="ml-auto w-auto text-2xs text-zinc-400">
                  <kbd>ctrl</kbd>
                  <kbd>k</kbd>
                </kbd>
              </button>
              {/* result card */}
              <div className="absolute top-12 left-03 bg-white rounded-md w-full p-4 shadow">
                <p className="text-lg">
                  Showing results for{" "}
                  <span className="font-semibold">
                    &#x275D; keyword &#x275E;:
                  </span>
                </p>
                <ul className=" divide-y divide-gray-100 [&>*]:py-2">
                  <li>
                    <a
                      className="transition-all hover:text-emerald-600"
                      href="#"
                    >
                      How to create a new component in Vue.js
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all hover:text-emerald-600"
                      href="#"
                    >
                      How to create a new component in React.js
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all hover:text-emerald-600"
                      href="#"
                    >
                      Next.js Routing
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all hover:text-emerald-600"
                      href="#"
                    >
                      SSR - What is it?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Mobile responsive header start */}
            <div className="flex flex-grow items-center gap-5 lg:hidden">
              <button className="flex rounded-md justify-center items-center gap-2 hover:bg-zinc-900 transition">
                <img
                  src="../src/assets/icons/hamburger.svg"
                  alt="search icon"
                  className=" h-6 w-6"
                />
              </button>
              <a aria-label="Home" href="#">
                <img
                  src="../src/assets/icons/logo.svg"
                  alt="Logo"
                  className="h-6 w-auto"
                />
              </a>
            </div>
            {/* Mobile responsive header end */}
            <figure className="lg:hidden">
              <img
                className="w-6 h-6"
                src="../src/assets/icons/search.svg"
                alt="search icon"
              />
            </figure>
            <figure>
              <img
                src="../src/assets/icons/light-icon.svg"
                alt="Light icon"
                className=" w-6 h-6"
              />
            </figure>
          </div>
        </div>

        {/* Header end */}
        {/* Sidebar start */}
        <nav className=" hidden mt-10 lg:block">
          <ul className=" border-l border-transparent">
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>Interduction</span>
              </a>
              <ul>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                    href="#"
                  >
                    Test
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>Quickstart</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>SDKs</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>Authentication</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>Pagination</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>Errors</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                href="#"
              >
                <span>Webhooks</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile responsive nav start */}
        <div className="relative hidden">
          <nav className="p-10 w-full h-screen bg-gray-100 fixed z-60">
            <img
              className=" absolute top-10 right-10 w-6 h-6"
              src="../src/assets/icons/close.svg"
              alt="close icon"
            />
            <ul>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Interduction</span>
                </a>
                <ul>
                  <li>
                    <a
                      className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                      href="#"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-between gap-2 pl-8 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                      href="#"
                    >
                      Test
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Quickstart</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>SDKs</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Authentication</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Pagination</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Errors</span>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-between gap-2 pl-4 py-1 pr-3 text-sm text-zinc-600 hover:text-zinc-900"
                  href="#"
                >
                  <span>Webhooks</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile responsive nav end */}
        {/* Sidebar end */}
      </header>
      <div className="relative pt-14 px-4 sm:px-6 lg:px-8">
        <main className="flex-auto py-12">
          {/* Green to Overlay */}
          <div className=" absolute inset-0 -z-10 mx-0 max-w-none w-full overflow-hidden">
            <div className=" absolute inset-0 w-[80rem] h-[25rem] ml-[-38rem] top-0 left-1/2 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40"></div>
          </div>
          {/* Green to Overlay end */}
          <article>
            <div className="relative mx-auto lg:px-4">
              <div className=" mx-auto max-w-screen-md gap-x-8 gap-y-16 lg:max-w-none">
                <div className=" w-full max-w-screen-md mx-auto ">
                  {/* <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                      Protocol
                    </h1>
                    <p className="mt-6 text-base leading-7 text-slate-700">
                      It doesn`t matter if you have an API if nobody knows how
                      to use it. Teach people the ins and outs of OAuth 2.0 and
                      JWTs in style with Protocol, a beautiful API documentation
                      template.It doesn`t matter if you have an API if nobody
                      knows how to use it. Teach people the ins and outs of
                      OAuth 2.0 and JWTs in style with Protocol, a beautiful API
                      documentation template.
                    </p> */}
                  <h1 className="text-2xl font-bold leading-8 mb-2 text-slate-900 sm:leading-[3.5rem]">
                    API Documentation
                  </h1>
                  <p className="lead">
                    Use the Protocol API to access contacts, conversations,
                    group messages, and more and seamlessly integrate your
                    product into the workflows of dozens of devoted Protocol
                    users.
                  </p>
                  <div className="flex items-center my-16 gap-3">
                    <button className=" inline-flex justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold border border-hero-button text-white hover:bg-slate-700">
                      Quickstart
                    </button>
                    <button className=" inline-flex justify-center rounded-full bg-transparent px-4 py-2 text-sm font-semibold border border-[#e5e7eb] text-hero-button hover:bg-slate-700">
                      Explore SDKs
                    </button>
                  </div>
                  <h2 className=" font-semibold text-lg mt-4 mb-2 leading-7">
                    Getting started
                  </h2>
                  <p className="lead">
                    To get started, create a new application in your{" "}
                    <a className=" text-green-1 font-medium" href="#">
                      developer settings
                    </a>{" "}
                    , then read about how to make requests for the resources you
                    need to access using our HTTP APIs or dedicated client SDKs.
                    When your integration is ready to go live, publish it to our{" "}
                    <a className=" text-green-1 font-medium" href="#">
                      integrations directory
                    </a>{" "}
                    to reach the Protocol community.
                  </p>
                  <div className="my-16">
                    <a className=" font-medium text-sm text-green-1" href="#">
                      Get your API key
                    </a>
                  </div>
                  <div className="my-16">
                    <h2 className=" font-semibold text-lg leading-7">
                      <a href="#">Guides</a>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-4 border-t border-zinc-900/5 gap-8 pt-10">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-900">
                          Authentication
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          Learn how to authenticate your API requests.
                        </p>
                        <p className="mt-4">
                          <a className="flex items-center">
                            <span className=" text-green-1">Read more</span>
                            <img
                              src="../src/assets/icons/rightArrow.svg"
                              className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                            />
                          </a>
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-900">
                          Authentication
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          Learn how to authenticate your API requests.
                        </p>
                        <p className="mt-4">
                          <a className="flex items-center">
                            <span className=" text-green-1">Read more</span>
                            <img
                              src="../src/assets/icons/rightArrow.svg"
                              className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                            />
                          </a>
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-900">
                          Authentication
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          Learn how to authenticate your API requests.
                        </p>
                        <p className="mt-4">
                          <a className="flex items-center">
                            <span className=" text-green-1">Read more</span>
                            <img
                              src="../src/assets/icons/rightArrow.svg"
                              className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                            />
                          </a>
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-900">
                          Authentication
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          Learn how to authenticate your API requests.
                        </p>
                        <p className="mt-4">
                          <a className="flex items-center">
                            <span className=" text-green-1">Read more</span>
                            <img
                              src="../src/assets/icons/rightArrow.svg"
                              className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resources Section Starts */}

                  <div className="my-16">
                    <h2 className=" font-semibold text-lg leading-7">
                      <a href="#">Resources</a>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-4 border-t border-zinc-900/5 gap-8 pt-10">
                      <div className=" bg-zinc-50 rounded-2xl transition-shadow px-4 pb-4 pt-16 hover:shadow-md hover:shadow-zinc-900/5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25">
                          <img
                            className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900"
                            src="../src/assets/icons/contact.svg"
                            alt="contact icon"
                          />
                        </div>
                        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900">
                          Contacts
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600">
                          Learn about the contact model and how to create,
                          retrieve, update, delete, and list contacts.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Test section start */}

                  <div className="my-16">
                    <h2 className=" font-semibold text-lg leading-7 mb-2">
                      Test
                    </h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempore pariatur repellendus vero doloremque sint, quod
                      aliquid possimus esse labore maxime quaerat error enim!
                      Velit incidunt soluta pariatur doloribus hic! Distinctio
                      earum ea enim repudiandae repellat vero dignissimos sequi
                      optio nulla explicabo provident ipsum eaque incidunt,
                      ducimus dolore dolor accusamus. Exercitationem?
                    </p>
                    <p className=" my-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas neque quibusdam vel temporibus tempore eum, odio odit
                      adipisci similique dolor a illo iusto deserunt voluptate
                      perspiciatis aliquid ad id sed?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <footer className="mx-auto max-w-screen-md space-y-10 pb-16">
          <div className="relative h-8">
            <form className=" absolute inset-0 flex items-center justify-center md:justify-start gap-6">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Was this page helpful?
              </p>
              <div className="group h-8 overflow-hidden grid grid-cols-[1fr,1px,1fr] rounded-full border border-zinc-900/10">
                <button className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/25 hover:text-zinc-900">
                  yes
                </button>
                <div className=" bg-zinc-900/20"></div>
                <button className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/25 hover:text-zinc-900">
                  no
                </button>
              </div>
            </form>
          </div>
          <div className="border-t border-zinc-900/5 flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
            <p className="text-xs text-zinc-600">
              &#169; Copyright 2023. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
