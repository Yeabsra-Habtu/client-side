

function App() {

  return (
    <div className="bg-gray-100">
      <header className='flex justify-between py-4'>
        <div>
          <div to='/' className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" class="w-8 h-8">
              <path strokelinecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>
            <span className='font-bold text-xl'>Betachen</span>
          </div>
        </div>
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <div className="hover:text-blue-500 cursor-pointer">Buy</div>
          <div className='border-l border-gray-300'></div>
          <div className="hover:text-blue-500 cursor-pointer">Rent</div>
          <div className='border-l border-gray-300'></div>
          <div className="hover:text-blue-500 cursor-pointer">Sell</div>
        </div>
        <div className=' items-center flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='bg-blue-500 text-white border border-gray-500 rounded-full overflow-hidden '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 relative top-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-lg text-gray-600 mb-8">Discover millions of homes for sale and rent.</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter a location"
            className="w-96 py-2 px-4 border border-gray-300 rounded-l"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
            Search
          </button>
        </div>
      </div>
      <div className="mt-12">
    <h2 className="text-2xl font-bold mb-4 ml-5">Featured Properties</h2>
    <div className="grid grid-cols-3 gap-4 py-4 px-4">
      {/* Featured property cards */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src="property1.jpg" alt="Property 1" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-bold mb-2">Beautiful Home</h3>
        <p className="text-gray-600">City, State</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src="property2.jpg" alt="Property 2" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-bold mb-2">Spacious Apartment</h3>
        <p className="text-gray-600">City, State</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src="property3.jpg" alt="Property 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-bold mb-2">Cozy Cottage</h3>
        <p className="text-gray-600">City, State</p>
      </div>
    </div>
  </div>
  <footer className="bg-gray-900 text-gray-200 py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-lg font-bold mb-4">About Us</h4>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec turpis ac dolor auctor iaculis.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Contact</h4>
        <p className="text-sm">123 Street, City, State, Country</p>
        <p className="text-sm">Phone: (123) 456-7890</p>
        <p className="text-sm">Email: info@example.com</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-sm">Home</a></li>
          <li><a href="#" className="text-sm">Buy</a></li>
          <li><a href="#" className="text-sm">Rent</a></li>
          <li><a href="#" className="text-sm">Sell</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-sm"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-sm"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-sm"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <hr className="border-gray-700 my-8" />
    <p className="text-sm text-center">© 2023 Betachen. All rights reserved.</p>
  </div>
</footer>

    </div>  )
}

export default App
