import React from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#161616]">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-40">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ABOUT US
            </h1>
            <p className="text-md lg:text-xl text-gray-300">
              Building community through the beautiful game since 2020
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Our Story Section */}
            <section className="prose max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg text-center">
                Founded on a passion for the beautiful game, Winter Soccer
                League is a recreational league that takes place every winter
                break since December of 2020. As a non-profit organization,
                we're committed to providing an enjoyable and inclusive soccer
                experience for players of all skill levels. We pride ourselves
                on fostering community, and sportsmanship both on and off the
                field.
              </p>
              <p className="text-gray-300 leading-relaxed mt-6 text-lg text-center">
                All registration fees directly support our mission, with the
                funds going towards facility rentals and quality soccer
                equipment. Our trophies, generously sponsored by Westgate Halal
                Meat & Deli, are a testament to our close-knit community
                partnerships and our collective dedication to fair play and fun
                competition.
              </p>
              <p className="text-gray-300 leading-relaxed mt-6 text-lg text-center">
                Beyond just the competition, we aim to offer a supportive
                environment that relieves stress and anxiety. Stepping onto the
                pitch allows players to clear their minds and refocus, creating
                a positive outlet for mental well-being. Whether you're seeking
                a break from daily pressures or looking to meet new friends, our
                league provides a safe and welcoming space for all. Over the
                years, we've grown from a small group of enthusiasts into a
                vibrant community of soccer lovers who share a common goal: to
                enjoy the spirit of the game while supporting one another both
                on and off the field.
              </p>
            </section>

            {/* Values Section */}
            <section className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#212121] p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-gray-300">
                  Building lasting friendships and connections through soccer
                </p>
              </div>
              <div className="bg-[#212121] p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Inclusivity
                </h3>
                <p className="text-gray-300">
                  Welcoming players of all skill levels and backgrounds
                </p>
              </div>
              <div className="bg-[#212121] p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Well-being
                </h3>
                <p className="text-gray-300">
                  Promoting physical and mental health through sport
                </p>
              </div>
            </section>

            {/* Acknowledgments Section */}
            <section className="bg-[#212121] p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Acknowledgments
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-white text-xl">
                    Co-Founders & Commissioners
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Adnan El-Tawil, Sohaib Jomha, Rayyan Islam
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">
                    Website Creator
                  </h3>
                  <p className="text-gray-300 text-lg">Sami Elsayed</p>
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">
                    Videographer & Stats Keeper
                  </h3>
                  <p className="text-gray-300 text-lg">Youssef Harati</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
