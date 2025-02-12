import Link from "next/link";


export default function About() {
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
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-blue-600">About Us</h1>
        <p className="text-gray-700 mt-4 text-center">
          Welcome to our website! We are dedicated to bringing you the latest in
          technology, innovations, and high-quality products. Our mission is to
          provide reliable and cutting-edge solutions for our customers.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mt-6">Our Mission</h2>
        <p className="text-gray-700 mt-2">
          Our goal is to create a seamless shopping experience while ensuring
          top-notch customer satisfaction. We strive to stay ahead in the
          ever-evolving tech industry by offering only the best products.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>High-quality products curated for you.</li>
          <li>Trusted by thousands of satisfied customers.</li>
          <li>Innovative and up-to-date technology solutions.</li>
          <li>Exceptional customer service and support.</li>
        </ul>
      </div>
      <footer className="bg-blue-500 text-white h-[100px] p-4 text-center mt-6 pt-[40px]">&copy; 2025 My Website | <a href="#" className="underline">Privacy Policy</a></footer>
    </div>
  );
}
