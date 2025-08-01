import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image src={"/logo/logo.png"}
                width={100}
                height={100}
                alt="Blue Waves" className="" />
            </div>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>📍 4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p>🕒 Hours: 8:00 - 17:00, Mon - Sat</p>
              <p>✉️ support@Blue Waves.com</p>
              <div className="pt-4">
                <p className="text-gray-300 mb-2">Need help? Call us</p>
                <p className="text-orange-500 text-xl font-bold">1-800-222-8888</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Forum support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Live chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Charges logs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jobs and Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Awards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agencies
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tour Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tour Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hotel Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ticket Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rental Services
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Processing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Blue Waves. All rights reserved.</p>
            <div className="text-gray-400 text-sm flex gap-2">
              {/* <span className="font-semibold text-white">Follow us</span> */}
              <Facebook className='h-4 w-4'/>
              <Instagram className='h-4 w-4'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
