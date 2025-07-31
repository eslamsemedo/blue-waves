import { ArrowRight, Shield, User, Award, FileText } from "lucide-react"
import { BrandScroller } from "./brand-scoller"

export default function BookingPlatform() {
  return (
    <div className="min-h-screen bg-white">
      {/* Why Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Us?</h2>
          <p className="text-gray-600 text-lg mb-12">The best booking platform you can trust</p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Card 1 - Light Blue */}
            <div className="bg-cyan-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Assurance</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Demonstrates commitment to user data security through encryption and secure payment practices
              </p>
              
            </div>

            {/* Card 2 - Light Pink */}
            <div className="bg-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Assurance</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Demonstrates commitment to user data security through encryption and secure payment practices
              </p>
              
            </div>

            {/* Card 3 - Light Blue */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Assurance</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Demonstrates commitment to user data security through encryption and secure payment practices
              </p>
              
            </div>

            {/* Card 4 - Light Purple */}
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Assurance</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Demonstrates commitment to user data security through encryption and secure payment practices
              </p>
              
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <BrandScroller />
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}
