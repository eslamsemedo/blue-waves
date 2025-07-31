"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Testimonial {
  id: number
  title: string
  content: string
  author: {
    name: string
    location: string
    avatar: string
  }
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "The best booking system",
    content:
      "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    author: {
      name: "Sara Mohamed",
      location: "Jakarta",
      avatar: "https://placehold.co/600x400.svg",
    },
    rating: 5,
  },
  {
    id: 2,
    title: "The best booking system",
    content:
      "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    author: {
      name: "Atend John",
      location: "California",
      avatar: "https://placehold.co/600x400.svg",
    },
    rating: 5,
  },
  {
    id: 3,
    title: "The best booking system",
    content:
      "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    author: {
      name: "Maria Garcia",
      location: "Madrid",
      avatar: "https://placehold.co/600x400.svg",
    },
    rating: 5,
  },
  {
    id: 4,
    title: "The best booking system",
    content:
      "Outstanding service and reliability. The booking process is seamless and I love how easy it is to find exactly what I'm looking for. Customer support is also top-notch whenever I need assistance.",
    author: {
      name: "David Chen",
      location: "Singapore",
      avatar: "https://placehold.co/600x400.svg",
    },
    rating: 5,
  },
  {
    id: 5,
    title: "The best booking system",
    content:
      "This platform has revolutionized how I book accommodations. The search filters are comprehensive and the booking confirmation process is quick and reliable. Highly recommended!",
    author: {
      name: "Emma Wilson",
      location: "London",
      avatar: "https://placehold.co/600x400.svg",
    },
    rating: 5,
  },
  {
    id: 6,
    title: "The best booking system",
    content:
      "Exceptional user experience from start to finish. The mobile app works flawlessly and I can manage all my bookings in one place. It's become an essential tool for my business travels.",
    author: {
      name: "Alex Thompson",
      location: "Toronto",
      avatar: "https://placehold.co/600x400.svg",
    },
    rating: 5,
  },
]

const avatarImages = [...testimonials.map((value) => value.author.avatar).slice(0, 4), ("https://placehold.co/600x400.svg")]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerView = 3
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* Overlapping Avatars */}
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-2">
            {avatarImages.map((avatar, index) => (
              <img
                key={index}
                src={avatar || "/placeholder.svg"}
                alt={`Avatar ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full">Testimonials</Badge>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{"Don't take our word for it"}</h2>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)`,
              width: `${(testimonials.length / testimonialsPerView) * 100}%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{testimonial.title}</h3>

                  {/* Content */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.author.avatar || "/placeholder.svg"}
                        alt={testimonial.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.author.location}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Responsive - Stack on small screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-shrink-0 {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
