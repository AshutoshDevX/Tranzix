import React from "react";
import { FaCreditCard, FaLock, FaChartLine } from "react-icons/fa";
import { Link } from "react-router";
import { Feature } from "../Components/Feature";

export const Home = () => {
    return (
        <div className="font-sans bg-white text-gray-900 min-h-screen">
            <header className="bg-stone-950 w-full h-18 flex">
                <div className="flex justify-between items-center px-4 md:px-18 lg:px-26 mx-auto w-full">
                    <div className="text-white text-3xl font-semibold">
                        <Link to="/"><h1>Tranzix</h1></Link>
                    </div>
                    <nav className="space-x-6 flex">
                        <a href="#features" className="text-gray-300 hover:text-white">Features</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
                        <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                        <Link to="/Signin"><div className="bg-green-400 hover:bg-green-500 text-black px-4 py-1 rounded-full">Sign In</div></Link>
                    </nav>
                </div>
            </header>

            <div className="px-4 md:px-18 lg:px-26">
                <section className="text-center py-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Welcome to Tranzix</h2>
                    <p className="text-lg mb-6">The future of banking, simplified. Manage your finances with ease, anywhere, anytime.</p>
                    <Link to="/signup" className="bg-green-400 text-gray-900 px-6 py-3 rounded-full text-lg hover:bg-green-500 transition duration-300">Get Started</Link>
                </section>

                <section id="features" className="py-12 px-10 bg-gray-50">
                    <h3 className="text-center text-3xl font-semibold text-gray-900 mb-14">Our Features</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <Feature h4={"Easy Payments"}
                            feature={<FaCreditCard className="text-gray-800 text-5xl" />}
                            p={"Make payments securely and quickly using our app from anywhere in the world."}
                        />
                        <Feature h4={"Secure Banking"}
                            feature={<FaLock className="text-gray-800 text-5xl" />}
                            p={"Your privacy is our priority. We use advanced encryption for your safety."}
                        />
                        <Feature h4={"Financial Insights"}
                            feature={<FaChartLine className="text-gray-800 text-5xl" />}
                            p={"Track your expenses and get valuable insights into your financial habits."}
                        />
                    </div>
                </section>


                <section id="pricing" className="py-24 bg-white">
                    <h3 className="text-center text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h3>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-semibold text-gray-900">Basic</h4>
                            <p className="text-gray-800 mt-2">Free</p>
                            <ul className="mt-4 text-gray-800">
                                <li>Basic Features</li>
                                <li>Account Balance</li>
                                <li>Email Support</li>
                            </ul>
                            <Link to="/signup" className="bg-black text-white px-6 py-2 rounded-full mt-6 inline-block hover:bg-gray-800">Start Free</Link>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-semibold text-gray-900">Premium</h4>
                            <p className="text-gray-800 mt-2">$9.99/month</p>
                            <ul className="mt-4 text-gray-800">
                                <li>All Features</li>
                                <li>Unlimited Transfers</li>
                                <li>Priority Support</li>
                            </ul>
                            <Link to="/signup" className="bg-black text-white px-6 py-2 rounded-full mt-6 inline-block hover:bg-gray-800">Try Premium</Link>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h4 className="text-2xl font-semibold text-gray-900">Enterprise</h4>
                            <p className="text-gray-800 mt-2">Contact Us</p>
                            <ul className="mt-4 text-gray-800">
                                <li>Customized Solutions</li>
                                <li>Dedicated Support</li>
                                <li>Advanced Security</li>
                            </ul>
                            <a href="#" className="bg-black text-white px-6 py-2 rounded-full mt-6 inline-block hover:bg-gray-800">Contact Us</a>
                        </div>
                    </div>
                </section>


                <section id="contact" className="bg-gray-50 text-gray-900 py-24 flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
                    <p className="text-lg text-gray-600 mb-6">Have any questions? Reach out to us, and we’ll be happy to help.</p>
                    <a href="mailto:tranzixsupport@gmail.com" className="bg-black text-white w-fit px-6 py-3 rounded-full hover:bg-gray-800">Email Us</a>
                </section>
            </div>

            <footer className="bg-gray-800 text-gray-400 py-6 px-4 sm:px-8 lg:px-16">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Tranzix</h4>
                        <p>Your trusted partner in banking and finance management. Secure, fast, and user-friendly services at your fingertips.</p>
                        <div className="space-x-4">
                            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Contact</h4>
                        <p>123 Bank St., Suite 100, Financial City</p>
                        <p>Email: <a href="mailto:support@tranzix.com" className="hover:text-white">support@tranzix.com</a></p>
                        <p>Phone: <a href="tel:+123456789" className="hover:text-white">+1 234 567 89</a></p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p>&copy; 2025 Tranzix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};


