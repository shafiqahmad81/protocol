function App() {
  return (
    <>
      <div className="h-full ml-72 bg-slate-300">
        {/* Header with sidebar */}
        <header className="fixed inset-y-0 left-0 z-0 contents border-r border-zinc-900/10 lg:block w-72 xl:w-80 overflow-y-auto px-6 pt-4 pb-8 ">
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
          <div className="fixed inset-x-0 top-0 z-50 bg-white px-4 sm:px-6 lg:left-72 xl:left-80">
            <div className="flex h-14 items-center justify-between gap-12">
              <div className=" absolute inset-x-0 top-full h-px bg-zinc-900/10 transition"></div>
              <div className="hidden lg:block max-w-md lg:flex-auto">
                <button className="lg:flex hidden h-8 rounded-full pl-2 pr-3 items-center w-full gap-2 text-zinc-500 ring-1 ring-zinc-900/10 transition">
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
              <div className="flex items-center gap-5 lg:hidden">
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
              <div className="">
                <img
                  src="../src/assets/icons/light-icon.svg"
                  alt="Light icon"
                  className=" w-6 h-6"
                />
              </div>
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
          {/* Sidebar end */}
        </header>
      </div>
    </>
  );
}

export default App;
