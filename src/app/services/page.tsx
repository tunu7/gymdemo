export default function Services() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
          <p className="mt-4 text-lg text-gray-700">
            We offer a range of fitness solutions designed to fit your needs:
          </p>
  
          <div className="mt-6 space-y-4 text-left">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-blue-600">🏋️ Personal Training</h2>
              <p className="text-gray-700">One-on-one coaching tailored to your fitness goals.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-blue-600">💪 Group Workouts</h2>
              <p className="text-gray-700">Dynamic and fun group sessions to keep you motivated.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-blue-600">🥗 Nutrition Plans</h2>
              <p className="text-gray-700">Personalized diet plans for a balanced and healthy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  