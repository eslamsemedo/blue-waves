"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Facebook, Instagram, MapPin, Menu, Search, Send, X } from "lucide-react"
import Link from 'next/link'
import { Button } from './ui/button'
import { LiquidButton } from './liquid-glass-button'

const Logo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#Trips", label: "Trips" },
    { href: "#skills", label: "Skills" },
    { href: "#Testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <div className=''>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={` px-7 fixed bg-white/20 top-[0px] w-full z-50 transition-all duration-300  backdrop-blur-xs shadow-md`}
      >
        <div className="container-custom">


          <header className="bg-transparent  px-4 py-3">
            <div className="max-w-7xl h-12 mx-auto flex items-center justify-between ">
              {/* Logo */}
              <div className="flex items-center justify-center overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} className=" flex justify-center items-center cursor-pointer gap-5 bg-transparent rounded-full p-2">
                  <Image
                    src={"/logo/logo.png"}
                    alt="logo"
                    height={400}
                    width={400}
                    className="w-[100px]"
                  />
                </motion.div>
              </div>

              {/* Navigation Menu */}
              <nav className="hidden lg:flex items-center space-x-8">
                {
                  navItems.map((value, i) => {
                    return (
                      <a key={i} href={value.href} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        {value.label}
                      </a>
                    )
                  })
                }
              </nav>

              {/* Right Side Actions */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* <button
                  className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-4xl bg-blue-300/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-400/50 border border-white/20"
                >
                  <span className="text-lg">Book Now</span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </button> */}
                <Button className='bg-[#f08c2e] rounded-3xl p-5'>Book Now</Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-700"

              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                </div>
              </button>
            </div>
          </header>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0f4c7536]border-t"
            >
              <div className="container-custom py-4" >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = item.href;
                    }}
                    className="block py-3 text-dark-600 dark:text-dark-300 hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </motion.div>
                ))}
                <button
                  className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-4xl bg-blue-300/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-400/50 border border-white/20"
                >
                  <span className="text-lg">Book Now</span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </button>
              </div>


            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Logo
