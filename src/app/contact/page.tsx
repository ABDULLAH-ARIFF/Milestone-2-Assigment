import Link from "next/link";
import about from "../about/page";

export default function contact() {
    return (
        <div>
                   <header className="bg-gradient-to-r from-blue-300 via-green-100 to-green-300 p-4 text-black flex justify-between shadow-md">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/" target='_blank' className="hover:underline">Home</Link></li>
            <li><Link href="/about" target='_blank' className="hover:underline">About</Link></li>
            <li><Link href="/contact" target='_blank' className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">We would love to hear from you. Please fill out the form below.</p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Message" rows={5}></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">Or reach us at:</p>
          <p className="font-medium">contact@mywebsite.com</p>
          <p className="font-medium">+123 456 7890</p>
        </div>
       </div>
       <footer className="bg-blue-600 text-white p-4 text-center mt-6">&copy; 2025 My Website | <a href="#" className="underline">Privacy Policy</a></footer>
       
      </div>

    );
  }