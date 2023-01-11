import Image from "next/image";
import logo from "../public/logohse.jpg";

export default function Navbar() {
  return (
    <>
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-200 dark:border-gray-700">
        <nav
          class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <Image
              src={logo}
              alt="Picture of the author"
              width={150}
              height={150}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            {/* <a
              class="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              LOGO
            </a> */}
            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-800 dark:hover:text-gray-500"
                href="#"
              >
                Quem somos
              </a>
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-800 dark:hover:text-gray-500"
                href="#"
              >
                Soluções
              </a>
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-800 dark:hover:text-gray-500"
                href="#"
              >
                Clientes
              </a>
              <a
                class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-800 dark:hover:text-gray-500"
                href="#"
              >
                Contato
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
