export default function Contact() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Have questions? Reach out to us for more details about membership plans and services.
          </p>
  
          <div className="mt-6 w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  