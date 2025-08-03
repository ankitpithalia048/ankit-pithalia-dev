import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-16 h-16 bg-primary-light/30 rounded-full blur-lg float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Content Container */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Ankit Kumar <span className="text-yellow-400">Pithalia</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90"
            >
              Sr. Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify">
                I'm a senior software engineer with 4+ years of experience
                building scalable applications using Java, AWS, and modern web
                technologies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                My Projects
              </Button>
            </motion.div>
          </div>
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center w-full px-4 sm:px-6 lg:px-0"
          >
            <div className="relative  w-full max-w-md sm:max-w-lg flex justify-center items-center">
              {/* Centered Yellow Circle */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-yellow-400 rounded-full" />

              {/* Floating Profile Image - Head Outside Circle */}
              {/* <div className="relative  w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96  rounded-full overflow-visible flex justify-center "> */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-visible flex justify-center">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/hero3.png"
                    alt="Profile picture of Ankit Kumar Pithalia"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>

              {/* Floating Badge - Top Left */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 shadow-md"
              >
                <span className="text-gray-800 text-xs sm:text-sm font-medium whitespace-nowrap">
                  4+ yrs exp
                </span>
              </motion.div>

              {/* Floating Badge - Bottom Right */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 right-4 bg-yellow-300 backdrop-blur-sm rounded-xl px-3 py-1 shadow-md"
              >
                <span className="text-gray-900 text-xs sm:text-sm font-medium whitespace-nowrap">
                  Backend Specialist
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
