export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mt-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-600">
          Elevate Your Fitness Journey
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Train with top professionals, achieve your fitness goals, and transform your body with state-of-the-art facilities and expert guidance.
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Join Now
        </button>
      </div>

      {/* Gym Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Personal Training</h2>
          <p className="mt-2 text-gray-700">
            Work 1-on-1 with expert trainers to customize your fitness plan and reach your goals faster.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Group Workouts</h2>
          <p className="mt-2 text-gray-700">
            Stay motivated in a fun, energetic environment with high-intensity classes and bootcamps.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Nutrition Plans</h2>
          <p className="mt-2 text-gray-700">
            Get personalized diet plans from certified nutritionists to complement your workouts.
          </p>
        </div>
      </div>

    </section>
  );
}
