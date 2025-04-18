const Information = () => {
  return (
      <div className="w-screen bg-[var(--background-color)] text-gray-300 py-10">
          <div className="grid grid-cols-4 gap-8 w-[80vw] mx-auto p-4">
              {/* Product */}
              <div>
                  <h3 className="font-bold text-white">Product</h3>
                  <ul className="space-y-1 mt-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">Features</li>
                      <li className="hover:text-white cursor-pointer">Pricing</li>
                  </ul>
              </div>

              {/* Resources */}
              <div>
                  <h3 className="font-bold text-white">Resources</h3>
                  <ul className="space-y-1 mt-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">Blog</li>
                      <li className="hover:text-white cursor-pointer">User guides</li>
                      <li className="hover:text-white cursor-pointer">Webinars</li>
                  </ul>
              </div>

              {/* Company */}
              <div>
                  <h3 className="font-bold text-white">Company</h3>
                  <ul className="space-y-1 mt-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">About us</li>
                      <li className="hover:text-white cursor-pointer">Contact us</li>
                  </ul>
              </div>

              {/* Plans & Pricing */}
              <div>
                  <h3 className="font-bold text-white">Plans & Pricing</h3>
                  <ul className="space-y-1 mt-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">Personal</li>
                      <li className="hover:text-white cursor-pointer">Startup</li>
                      <li className="hover:text-white cursor-pointer">Organization</li>
                  </ul>
              </div>
          </div>
      </div>

  )
}

export default Information