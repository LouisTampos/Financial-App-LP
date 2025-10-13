import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Diagram from "../assets/logos/diagram.png";

function Nav() {
  return (
    <Disclosure as={"nav"}>
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8">
            <div className="flex">
              <a href="#">
                <img src={Diagram} alt="Diagram Logo" className="h-auto w-12" />
              </a>
              <div className="ml-4 flex items-center space-x-4">
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#partners"
                >
                  Partners
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#reviews"
                >
                  Reviews
                </a>
              </div>
            </div>
            <a
              href="https://play.google.com"
              target="_blank"
              className="rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600"
            >
              Install Finance Me
            </a>
            <DisclosureButton className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </DisclosureButton>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
