const Image_overlay = () => {
  return (
      <div
          className="h-[80vh] w-screen bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
          style={{ backgroundImage: "url('../../public/rope-training.jpg')" }}
      >
          {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
          {/* Content Container */}
          <div className="relative z-10 text-center text-white px-6">
              <h1 className="text-4xl font-bold uppercase mb-4">
                  Get Your First Trial Visit
              </h1>
              <p className="text-lg text-gray-300 max-w-lg mx-auto mb-6">
                  It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
              </p>

              {/* Email Input Form */}
              <div className="flex justify-center items-center space-x-2 bg-gray-900 bg-opacity-50 p-2 rounded-lg w-[30rem] mx-auto">
                  <input
                      type="email"
                      placeholder="Your email here..."
                      className="px-4 py-3 w-full outline-none bg-transparent border border-gray-400 text-white placeholder-gray-300 rounded-md"
                  />
                  <button className="bg-[#d6fd51] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#c4e64b] transition">
                      Submit
                  </button>
              </div>
          </div>
      </div>
  )
}

export default Image_overlay