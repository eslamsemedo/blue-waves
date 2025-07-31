"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
// import { useTheme } from "./theme-provider"

const Navigation = () => {
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
    { href: "#whyus", label: "Why us" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={` px-7 fixed top-[0px] w-full z-50 transition-all duration-300 bg-transparent  backdrop-blur-xs shadow-xl`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl flex justify-center items-center font-bold text-primary cursor-pointer gap-5">
            <Image
              src={"/logo/logo.png"}
              alt="logo"
              height={400}
              width={400}
              className="w-[90px]"
            />
            {/* <div className="text-center m-auto">
              Blue <span className="text-[#16277936]">Waves</span>
            </div> */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-dark-600 dark:text-dark-300 hover:text-primary  transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f4c7536]border-t"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
