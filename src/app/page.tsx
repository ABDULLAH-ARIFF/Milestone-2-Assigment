import Link from 'next/link';
import about from './about/page';
import contact from './contact/page';
import Image from 'next/image';
import HeadingAnimation from './heading/page';
import { Autour_One } from 'next/font/google';
import { px } from 'framer-motion';

export default function home() {
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
        <HeadingAnimation/>
        <p className="text-center text-gray-600 pb-[12px]">Discover the latest in technology, innovations, and our featured products.</p>
        
        {/* Featured Products Section */}
        <section className="mt-10">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
              <Image className='border rounded-[10px] ' height={10} width={300} src={"/hq720.jpg"} alt="High Quality Tech Products"></Image>
              <h4 className="text-xl font-semibold mt-[20px]">Product 1</h4>
              <p className="text-gray-700 mt-[7px]">High-quality and durable.</p>
              <Link href="https://www.thetimes.com/life-style/luxury/article/best-luxury-tech-gadgets-all-time-technology-men-women-times-luxury-92b569bq6" target='_blank'><button className=" mt-[12px] border rounded-[12px] bg-gradient-to-r from-blue-700  via-blue-400 to-blue-300 hover:bg-black w-[140px] h-[40px] text-white">Learn More</button></Link>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
            <Image className='border rounded-[10px]' width={300} height={10} src={"/maxresdefault (1).jpg"} alt="Innovative design Products"></Image>
              <h4 className="text-xl font-semibold mt-[20px]">Product 2</h4>
              <p className="text-gray-700 mt-[7px]">Innovative design.</p>
              <div className='mt-[12px]'><Link href="https://innovativetecdesign.com/" target='_blank'><button className=" border rounded-[12px] bg-gradient-to-r from-blue-700  via-blue-400 to-blue-300 hover:bg-blue-600 w-[140px] h-[40px] text-white">Learn More</button></Link></div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
            <Image className='border rounded-[10px]' width={300} height={10} src={"/images-2023-07-02T113436.297.jpeg"} alt="Top Rated Products"></Image>
              <h4 className="text-xl font-semibold mt-[5px]">Product 3</h4>
              <p className="text-gray-700 mt-[3px]">Top-rated performance.</p>
              <div className='mt-[10px]'><Link href="https://www.practitest.com/resource-center/blog/top-performance-testing-tools/" target='_blank'><button className=" border rounded-[12px] bg-gradient-to-r from-blue-700  via-blue-400 to-blue-300 hover:bg-blue-600 w-[140px] h-[40px] text-white">Learn More</button></Link></div>
            </div>
          </div>
        </section>



        <section className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
              <Image className='border rounded-[10px] w-[auto] h-[auto]' width={130} height={10} src={"/maxresdefault.jpg"} alt="Sustainability and eco-friendly img"></Image>
              <h4 className="text-xl font-semibold mt-[20px]">Product 4</h4>
              <p className="text-gray-700 mt-[7px]">Sustainability & Eco-friendly</p>
              <Link href="https://www.forbes.com/sites/technology/article/sustainable-technology/" target='_blank'><button className=" mt-[12px] border rounded-[12px] bg-gradient-to-r from-blue-700  via-blue-400 to-blue-300 hover:bg-black w-[140px] h-[40px] text-white">Learn More</button></Link>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
            <Image className='border rounded-[10px]' width={300} height={10} src={"/The-most-futuristic-tech-gadgets-you-will-want-to-buy-someday-blog-featured.jpeg"} alt="Health and Wellness Products"></Image>
              <h4 className="text-xl font-semibold mt-[18px]">Product 5</h4>
              <p className="text-gray-700 mt-[7px]">Health & Wellness Products</p>
              <div className='mt-[12px]'><Link href="https://www.myvitaminstore.pk/collections/health-wellness?srsltid=AfmBOopHbDoS9-Mdjkw5Z1wlQHFkRrBnFxtKRQMUQF6QEO3iX2hylOBm" target='_blank'><button className=" border rounded-[12px] bg-gradient-to-r from-blue-700  via-blue-400 to-blue-300 hover:bg-blue-600 w-[140px] h-[40px] text-white">Learn More</button></Link></div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
            <Image className='border rounded-[10px]' width={400} height={10} src={"/images.jpeg"} alt="Educational and productivity Products"></Image>
              <h4 className=" mt-[17px] text-xl font-semibold">Product 6</h4>
              <p className="text-gray-700 mt-[9px]">Educational & productivity Tools</p>
              <div className='mt-[12px]'><Link href="https://www.edutopia.org/article/productivity-tools-more-teachers-should-know-about/" target='_blank'><button className=" border rounded-[12px] bg-gradient-to-r from-blue-700  via-blue-400 to-blue-300 hover:bg-blue-600 w-[140px] h-[40px] text-white">Learn More</button></Link></div>
            </div>
          </div>
        </section>
        
        <Image className='h-[8px] mt-[80px]' width={900} height={10} src={"/Line 3.png"} alt="horizental line" ></Image>
       
        
        {/* Latest Tech Innovations */}
        <section className="mt-[40px]">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Some Latest Technology Innovations</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className='flex'>
              <div>
              <h4 className="text-xl font-semibold">AI Revolution</h4>
              <p className="text-gray-700">AI transforms ideas into reality</p>
              <p className="text-gray-700">Revolutionizing today, shaping tomorrow.</p>
              <p className="text-gray-700">AI learns, evolves, transforms.</p>
              <p className="text-gray-700">Smart machines, smarter world.</p>
              <p className="text-gray-700">Redefining the world, one algorithm at a time.</p>
              <p className="text-gray-700">Future-ready with AI power.</p>
              </div>
              <Image className=' ml-[210px]' width={260} height={10} src={"/ai-technology-microchip-background-digital-transformation-concept.jpg"} alt="ai img"></Image>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className=' flex'>        
              <div>
              <h4 className="text-xl font-semibold">Quantum Computing </h4>
              <p className="text-gray-700">Breakthroughs in computing power.</p>
              <p className="text-gray-700">A quantum bit can be 0 and 1 at same time.</p>
              <p className="text-gray-700"> Solves some problems much faster than classical computers.</p>
              <p className="text-gray-700">Quantum states cant be copied exactly.</p>
              <p className="text-gray-700">Breaks RSA encryption by factoring number fast.</p>
              </div>
              <Image className='w-[250px] h-[160px] ml-[100px]' height={10} width={300} src="/DALL·E 2025-02-11 13.59.12 - A conceptual illustration of Quantum Computing, featuring a futuristic quantum chip with glowing qubits, interconnected by quantum circuits. The image.webp" alt="Quantum computing img"/>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className='flex'>
                <div>
              <h4 className="text-xl font-semibold">5G Connectivity </h4>
              <p className="text-gray-700">5G is much faster than 4G.</p>   
              <p className="text-gray-700">Faster speeds and improved connectivity worldwide.</p>
              <p className="text-gray-700">Powers smart cities and connected devices.</p>  
              <p className="text-gray-700"> Optimized for lower power consumption.</p>  
              <p className="text-gray-700">Ensures stable and strong connections.</p>  
              </div>
              <Image className=' ml-[164px]' width={250} height={10} src={"/Free Vector _ Communication towers 5g composition with radio waves lasers background and text with images of cellular towers vector illustration.jpeg"} alt="5G Connectivity img"></Image>
              </div>
            </div>
          </div>
      </section>
      </div>
      <footer className="bg-blue-500 text-white h-[100px] p-4 text-center mt-6 pt-[40px]">&copy; 2025 My Website | <a href="#" className="underline">Privacy Policy</a></footer>
  </div>
  );
}