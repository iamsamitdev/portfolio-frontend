import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();

    return (
        <header className="fixed w-full py-0 bg-white shadow-md">
            <nav className="container flex flex-wrap items-center px-4 mx-auto">
                <Link href="/">
                    <a><img src="images/logo-main.png" alt="logo" className="w-40" /></a>
                </Link>
                <button className="px-3 py-2 ml-auto text-indigo-900 border-2 border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white lg:hidden">
                <span className="block w-6 my-1 border-b-2 border-current" />
                <span className="block w-6 my-1 border-b-2 border-current" />
                <span className="block w-6 my-1 border-b-2 border-current" />
                </button>
                <div className="hidden w-full ml-auto lg:block lg:w-auto">

                <Link href="/">
                    <a className="block px-4 py-2 font-medium hover:text-indigo-900 lg:inline-block">ผลงานทั้งหมด</a>
                </Link>

                <Link href="/about">
                    <a className="block px-4 py-2 font-medium hover:text-indigo-900 lg:inline-block">เกี่ยวกับฉัน</a>
                </Link>
                
                <Link href="/contact">
                    <a className="block px-4 py-2 font-medium hover:text-indigo-900 lg:inline-block">ติดต่อฉัน</a>
                </Link>

                <div className="inline-block px-4 py-2">
                    <Link href="/job">
                        <a className="inline-block px-6 py-2 text-white bg-indigo-600 border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-100">ร่วมงานกับเรา</a>
                    </Link>
                </div>
                </div>
            </nav>

            {/* Mobile Menu */}

            <div className="hidden absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden">
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                    <img className="w-auto h-8" src="images/logo-main.png" alt="Achieve your life dream" />
                    </div>
                    <div className="-mr-2">
                    <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        {/* Heroicon name: outline/x */}
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div className="pt-5 pb-6" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">ผลงานทั้งหมด</a>
                        <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">เกี่ยวกับฉัน</a>
                        <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">ติดต่อฉัน</a>
                    <div className="block w-full px-4 py-2">
                        <a href="#" className="px-6 py-2 text-white bg-indigo-600 border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-100">ร่วมงานกับเรา</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        </header>

    )
}

export default Navbar
