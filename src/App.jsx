function App() {
  return (
    <>
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
              <div className="hidden lg:block max-w-md lg:flex-auto">
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
              <div className="relative mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto items-center max-w-[40rem] gap-x-8 gap-y-16 lg:max-w-none">
                  <div className="flex flex-col items-start lg:col-span-2">
                    <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                      Protocol
                    </h1>
                    <p className="mt-6 text-base leading-7 text-slate-700">
                      It doesn`t matter if you have an API if nobody knows how
                      to use it. Teach people the ins and outs of OAuth 2.0 and
                      JWTs in style with Protocol, a beautiful API documentation
                      template.
                    </p>
                    <button className="mt-10 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
