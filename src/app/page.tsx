import React from "react";
import Image from "next/image"; // 1. Import Next.js Image component

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="p-6 bg-white shadow-md rounded-lg text-center">
    <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

interface Trainer {
  name: string;
  specialty: string;
  photo: string;
}

const trainers: Trainer[] = [
  { name: "Alex Johnson", specialty: "Strength & Conditioning", photo: "https://via.placeholder.com/150" },
  { name: "Maria Lopez", specialty: "Yoga & Flexibility", photo: "https://via.placeholder.com/150" },
  { name: "James Smith", specialty: "Cardio & Endurance", photo: "https://via.placeholder.com/150" },
];

const TrainerSection: React.FC = () => (
  <div className="mt-16 text-center max-w-4xl">
    <h2 className="text-4xl font-bold text-blue-600">Meet Our Trainers</h2>
    <p className="mt-4 text-lg text-gray-700">Our experienced trainers are here to guide you every step of the way.</p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {trainers.map((trainer, index) => (
        <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
          {/* 2. Replaced img with Image component */}
          <Image 
            src={trainer.photo} 
            alt={trainer.name} 
            width={128} 
            height={128}
            className="w-32 h-32 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-2xl font-semibold text-blue-600">{trainer.name}</h3>
          <p className="mt-2 text-gray-700">{trainer.specialty}</p>
        </div>
      ))}
    </div>
  </div>
);

const galleryImages: string[] = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300"
];

const GallerySection: React.FC = () => (
  <div className="mt-16 text-center max-w-4xl">
    <h2 className="text-4xl font-bold text-blue-600">Before & After Transformations</h2>
    <p className="mt-4 text-lg text-gray-700">See the incredible progress our clients have made.</p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        // 3. Replaced img with Image component
        <Image 
          key={index} 
          src={image} 
          alt="Transformation" 
          width={300}
          height={300}
          className="w-full rounded-lg shadow-md"
        />
      ))}
    </div>
  </div>
);

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  { name: "John Doe", text: "This gym completely changed my life. The trainers are top-notch!" },
  { name: "Sarah Williams", text: "Amazing environment and support. I achieved my fitness goals faster than expected!" }
];

const ReviewSection: React.FC = () => (
  <div className="mt-16 text-center max-w-4xl">
    <h2 className="text-4xl font-bold text-blue-600">What Our Clients Say</h2>
    <p className="mt-4 text-lg text-gray-700">Read real testimonials from our happy clients.</p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {reviews.map((review, index) => (
        <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
          {/* 4. Fixed unescaped quotes */}
          <p className="text-gray-700 italic">&quot;{review.text}&quot;</p>
          <h3 className="mt-4 text-xl font-semibold text-blue-600">- {review.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mt-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-600">
          Elevate Your Fitness Journey
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Train with top professionals, achieve your fitness goals, and transform your body with state of the art facilities and expert guidance.
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Join Now
        </button>
      </div>

      {/* Gym Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <FeatureCard title="Personal Training" description="Work 1 on 1 with expert trainers to customize your fitness plan and reach your goals faster." />
        <FeatureCard title="Group Workouts" description="Stay motivated in a fun, energetic environment with high-intensity classes and bootcamps." />
        <FeatureCard title="Nutrition Plans" description="Get personalized diet plans from certified nutritionists to complement your workouts." />
      </div>

      {/* Meet Our Trainers Section */}
      <TrainerSection />

      {/* Before & After Gallery */}
      <GallerySection />

      {/* Reviews Section */}
      <ReviewSection />
    </section>
  );
}