
import { useState } from "react";
import { motion } from "framer-motion";
import { Microscope, Beaker, HeartPulse, ChevronRight, ArrowRight } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">PharmaCare</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-text hover:text-primary transition-colors">Products</a>
              <a href="#" className="text-text hover:text-primary transition-colors">Research</a>
              <a href="#" className="text-text hover:text-primary transition-colors">About</a>
              <a href="#" className="text-text hover:text-primary transition-colors">Contact</a>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
              Healthcare Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold">Advancing Healthcare</span>
              <h1 className="mt-4 text-5xl font-bold text-text leading-tight">
                Innovative Solutions for a Healthier Tomorrow
              </h1>
              <p className="mt-6 text-text-light text-lg">
                Dedicated to improving lives through groundbreaking pharmaceutical research and development. Our commitment brings hope to millions worldwide.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors flex items-center">
                  Explore Solutions <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/lovable-uploads/41735d43-da25-4f33-bd1f-97974f057789.png"
                alt="Medical professionals collaborating"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text">Our Solutions</h2>
            <p className="mt-4 text-text-light">
              Discover our comprehensive range of pharmaceutical solutions designed to improve patient outcomes
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="h-8 w-8" />,
                title: "Research & Development",
                description: "Advancing medical science through innovative research",
              },
              {
                icon: <Beaker className="h-8 w-8" />,
                title: "Clinical Solutions",
                description: "State-of-the-art treatments for better patient care",
              },
              {
                icon: <HeartPulse className="h-8 w-8" />,
                title: "Patient Care",
                description: "Comprehensive support for healthcare providers",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-2">{solution.title}</h3>
                <p className="text-text-light">{solution.description}</p>
                <button className="mt-4 text-primary flex items-center hover:text-primary-dark transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/ce2d23c4-8f33-4198-aed1-ee3cb4cca502.png"
                alt="Research facility"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold">Innovation Hub</span>
              <h2 className="mt-4 text-3xl font-bold text-text">
                Leading the Future of Healthcare
              </h2>
              <p className="mt-6 text-text-light">
                Our state-of-the-art research facilities and dedicated team of scientists work tirelessly to develop breakthrough treatments and innovative healthcare solutions.
              </p>
              <div className="mt-8">
                <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors flex items-center">
                  View Research <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
