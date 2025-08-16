import Image from "next/image"
import { Heart, Star, Clock, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function FeaturedTrips() {
  const trips = [
    {
      id: 1,
      image: "/img/orange.jpg",
      badge: { text: "Top Rated", variant: "default" as const },
      rating: 4.96,
      reviews: 672,
      title: "Orange bay",
      desc: " A stunning shallow beach with crystal-clear waters and relaxing swings on Giftun Island",
      guests: "4-6 guest",
      price: 48.25,
    },
    {
      id: 2,
      image: "/img/paradis.jpg",
      badge: { text: "Best Sale", variant: "secondary" as const },
      rating: 4.96,
      reviews: 672,
      title: "Paradis island",
      desc: "A serene island escape with golden sands and turquoise waters, perfect for beach lovers.",
      guests: "4-6 guest",
      price: 17.32,
    },
    {
      id: 3,
      image: "/img/dolphin.jpg",
      badge: { text: "25% Off", variant: "destructive" as const },
      rating: 4.96,
      reviews: 672,
      title: "Dolphin House",
      desc: "A vibrant reef where you can snorkel and swim with wild dolphins in their natural habitat",
      guests: "4-6 guest",
      price: 15.63,
    },
  ]

  const FilterDropdown = ({ label, options }: { label: string; options: string[] }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 bg-gray-100 border-gray-200 hover:bg-gray-200">
          {label}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((option) => (
          <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <section className="w-full py-8 sm:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Featured Trips</h2>
            <p className="text-gray-600 text-base sm:text-lg">Favorite Trip based on customer reviews</p>
          </div>
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trips.map((trip,i) => (
            <div key={i} className="max-w-sm mx-auto h-[450px] sm:h-[500px] bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-clip">
              {/* Image Section */}
              <div className="relative h-[55%] sm:h-[60%]">
                <Image src={trip.image} alt="California Sunset Boat Cruise" fill className="object-cover" />

                {/* Top Rated Badge */}
                {/* <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-md">
                    <span className="text-orange-500 font-semibold text-xs sm:text-sm">Top Rated</span>
                  </div>
                </div> */}

                {/* Heart Icon */}
                {/* <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="bg-white rounded-full p-1.5 sm:p-2 shadow-md">
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                  </div>
                </div> */}

                {/* Rating Badge */}
                <div className="absolute bottom-3 sm:bottom-4 z-50 right-3 sm:right-4">
                  <div className="bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-md flex items-center gap-1">
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-xs sm:text-sm">4.96</span>
                    <span className="text-gray-500 text-xs sm:text-sm hidden sm:inline">{"(672 reviews)"}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-4xl bg-white h-[45%] sm:h-[50%] -translate-y-[25px] sm:-translate-y-[35px] flex flex-col">
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{trip.title}</h2>

                  {/* Duration and Guest Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4 sm:mb-6 text-gray-500">
                    <div className="flex items-center gap-2">
                      {trip.desc}
                    </div>
                    
                  </div>
                </div>

                {/* Price and Book Button - Always at bottom */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mt-auto mb-[14px]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">${trip.price}</span>
                    <span className="text-gray-500 text-sm">/ person</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-gray-800 text-sm sm:text-base">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
