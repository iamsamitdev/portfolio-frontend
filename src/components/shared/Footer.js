const Footer = () => {
    return (
        <footer className="text-white bg-gray-900">
            <div className="container pt-20 mx-auto">
                <div className="flex flex-wrap">
                <div className="w-full p-4 xl:mr-auto xl:w-4/12">
                    <img src="images/logo-main.png" className="w-48 mb-6" />
                    <p className="mb-4 text-sm">Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.</p>
                    <div className="mb-4">
                    <a href="#" className="hover:text-indigo-200">+1 234 567-890</a>
                    <br />
                    <a href="#" className="hover:text-indigo-200">hello@demo.com</a>
                    </div>
                    <div>
                    <a href="#" className="mr-2 text-xl hover:text-indigo-200"><i className="fa-facebook-square fab" /></a>
                    <a href="#" className="mr-2 text-xl hover:text-indigo-200"><i className="fa-twitter-square fab" /></a>
                    <a href="#" className="mr-2 text-xl hover:text-indigo-200"><i className="fa-linkedin fab" /></a>
                    </div>
                </div>
                <div className="w-full p-4 xl:w-2/12 sm:w-4/12">
                    <h4 className="mb-8 text-lg font-medium text-gray-400 uppercase">About</h4>
                    <ul>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Get Quote</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Enterprise Plan</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Become an Affiliate</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Our Portfolio</a>
                    </li>
                    </ul>
                </div>
                <div className="w-full p-4 xl:w-2/12 sm:w-4/12">
                    <h4 className="mb-8 text-lg font-medium text-gray-400 uppercase">Services</h4>
                    <ul>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Web Design</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Web Development</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">WordPress</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Digital Marketing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Content Writing</a>
                    </li>
                    </ul>
                </div>
                <div className="w-full p-4 xl:w-2/12 sm:w-4/12">
                    <h4 className="mb-8 text-lg font-medium text-gray-400 uppercase">Other</h4>
                    <ul>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Business Stories</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Learning</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Licence</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Refund Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:text-indigo-200">Terms of Service</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="p-4 text-center">
                <hr className="mb-4 opacity-25" />
                <p className="text-sm">Copyright © 2020 Demo Inc.</p>
                </div>
            </div> 
        </footer>

    )
}

export default Footer
