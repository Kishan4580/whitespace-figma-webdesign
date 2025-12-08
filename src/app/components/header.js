import Image from "next/image";
import logo from "../../../public/Logo.svg";
import curves from "../../../public/curves.png";
import Element from "../../../public/Element.svg";
import mark from "../../../public/mark.png";
import curves1 from "../../../public/curves1.svg";
import eclipse from '../../../public/eclipse.svg'
import styles from "./components.module.css";
import { Button } from "../ui/button";
import { Card } from "../ui/card";


export default function Header() {
    return (

        <>
            <div className="bg-[#043873]  text-white" >
                <nav className="   ">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={logo} className="h-12 w-48" alt="whitespace Logo" width={112} height={18} />
                        </a>
                        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-10 h-10" width={17} height={14} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" width={24} height={24} />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li aria-labelledby="dropdownNavbarLink">
                                                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-16 h-16 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg></button>
                                                <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="" >
                    <picture>
                        <source media="(min-width: 768px)" srcSet={Element.src} />
                        <source media="(max-width: 649px)" srcSet={curves.src} />
                        <Image src={curves} className="h-[840px] w-full sm:[1168]" alt="curves shape" width={112} height={264} />

                    </picture>
                    <div className={`${styles["header-main-container"]} md:flex-row w-full px-4 sm:px-20 md:px-10 lg:14 h-full`}>
                        <div className="flex flex-col items-center gap-6">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl">
                                Get More Done with whitespace
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl">
                                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                            </p>
                            <Button className="py-8 px-12">Try Taskey Free</Button>
                        </div>
                        <div className="bg-[#a7cefc] w-full h-1/3 md:h-[64%] "></div>

                    </div>

                </div>

            </div>
            <main className="w-full  relative">
                <div className="px-4">
                    <div className="h-44 w-44 absolute left-0 top-14 " style={{ background: `url(${curves1.src})left no-repeat` }}></div>
                    <SecondContent heading="Project Management" content="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note." btnContent="Click Me" />
                    <div className="bg-[#a7cefc] h-[24%] w-96 "></div>
                    <SecondContent heading="Work Together" content="With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
" btnContent="Learn More" />
                    <div className="">
                        <Image src={eclipse} className=" w-full object-cover" alt="curves shape" />
                    </div >
                </div>
                <div className="bg-[#043873] text-white py-12 my-12 px-4 ">
                    <SecondContent heading="Use As Extenstion" content="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API." btnContent="Click Me" isContrast={true} />
                    <div className="bg-[#a7cefc] w-1/2 h-1/2 "></div>

                </div>
                <div className="bg-[#a7cefc]  py-12 px-4 ">
                    <SecondContent heading="Customise it
to your needs" content="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API." btnContent="Click Me" isContrast={true} />
                    <div className="bg-[#a7cefc] w-1/2 h-1/2 "></div>

                </div>
                <div>
                    <div className="flex md:flex-row flex-col gap-3">
                        <div className="bg-[#a7cefc] h-[24%] w-96 "></div>
                        <SecondContent heading={"Customize it to your needs"} btnContent={"Let's Go"} content={"Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."}>
                        </SecondContent>
                    </div>
                    <Button>Let&apos;s Go</Button>
                    <div className="flex flex-col items-center justify-center"> <SecondContent btnContent={"Let's Go"} heading={"Choose Your Plan"} content={"Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you."}></SecondContent>
                    <Card plan={{title: "Free", price : 0, caption : "Capture ideas and find them quickly", features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size." ,"Customize Home dashboard and acsess extra widgets", "Connect primary Goole Calendar account", "Add due dates, reminders, and notifications to your tasks"]}} styles={{backgroundColor: "" }}/>
                    <Card plan={{title: "Personnal", price : 299, caption : "Capture ideas and find them quickly", features: ["Sync unlimited devices", "30 GB monthly uploads", "500 GB max. note size." ,"Customize Home dashboard and acsess extra widgets", "Connect primary Goole Calendar account", "Add due dates, reminders, and notifications to your tasks"]}} styles={{backgroundColor: "blue" }}/>
                    <Card plan={{title: "Organization", price : 499, caption : "Capture ideas and find them quickly", features: ["Sync unlimited devices", "100 GB monthly uploads", "200 GB max. note size." ,"Customize Home dashboard and acsess extra widgets", "Connect primary Goole Calendar account", "Add due dates, reminders, and notifications to your tasks"]}} styles={{backgroundColor: "green"}}/>

                </div>
                </div>

                
            </main>
        </>
    );

}


function SecondContent({ heading, content, btnContent, isContrast }) {
    return (
        <div className="py-20 px-6 flex flex-col gap-4  items-center " >
            <div className="text-3xl font-bold flex items-center"   ><div ><h2 className="text-4xl font-semibold pb-2 relative">{heading}<span className={`absolute -bottom-5 right-0 ${!isContrast ? "-z-1" : "z-0"}`}><Image src={mark} alt="mark under heading"></Image></span></h2></div> </div>
            <p>{content}</p>
            <Button className="py-4 px-10 sm:w-40 sm:px-4">{btnContent}</Button>
        </div>
    )
}


