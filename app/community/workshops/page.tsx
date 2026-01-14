import { GraduationCap, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshops & Training - Universe Coworks Community',
  description: 'Skill-focused workshops and training programs led by industry experts and mentors at Universe Coworks.',
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Workshops & Training
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Practical knowledge designed for real-world success
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Learn from Experts
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Skill-focused workshops led by industry experts and mentors. Learn, upskill, and stay ahead in a fast-changing business world. Practical knowledge designed for real-world success.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Hands-on training sessions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Industry expert mentors</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Practical, actionable insights</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#1a9ba8] mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Networking opportunities</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
                alt="Workshops and Training"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="bg-[#1a9ba8] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Business Skills
              </h3>
              <p className="text-gray-600">
                Marketing, sales, finance, and operations training for startups and entrepreneurs
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="bg-[#1a9ba8] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Growth Strategies
              </h3>
              <p className="text-gray-600">
                Learn proven strategies to scale your business and achieve sustainable growth
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="bg-[#1a9ba8] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tech & Innovation
              </h3>
              <p className="text-gray-600">
                Stay updated with latest technology trends and innovation practices
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a9ba8] to-[#20b5c4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Learning Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community and get access to exclusive workshops and training programs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a9ba8] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}
