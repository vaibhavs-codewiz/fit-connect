const Information = () => {
  return (
      <div className="flex flex-col items-center bg-gray-50 py-12">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
          </div>

          {/* Newsletter Subscription */}
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Subscribe to our newsletter
          </h2>
          <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-lg">
              <input
                  type="email"
                  placeholder="Input your email"
                  className="px-4 py-2 outline-none bg-gray-200 text-gray-700"
              />
              <button className="bg-[#bcb293] text-white px-4 py-2 rounded-md">
                  Subscribe
              </button>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-4 gap-8 mt-8 text-gray-700">
              {/* Product */}
              <div>
                  <h3 className="font-bold">Product</h3>
                  <ul className="space-y-1 mt-2">
                      <li>Features</li>
                      <li>Pricing</li>
                  </ul>
              </div>

              {/* Resources */}
              <div>
                  <h3 className="font-bold">Resources</h3>
                  <ul className="space-y-1 mt-2">
                      <li>Blog</li>
                      <li>User guides</li>
                      <li>Webinars</li>
                  </ul>
              </div>

              {/* Company */}
              <div>
                  <h3 className="font-bold">Company</h3>
                  <ul className="space-y-1 mt-2">
                      <li>About us</li>
                      <li>Contact us</li>
                  </ul>
              </div>

              {/* Plans & Pricing */}
              <div>
                  <h3 className="font-bold">Plans & Pricing</h3>
                  <ul className="space-y-1 mt-2">
                      <li>Personal</li>
                      <li>Startup</li>
                      <li>Organization</li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Information