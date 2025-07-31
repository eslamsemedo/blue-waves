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
      image: "https://placehold.co/600x400.svg",
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
      image: "https://placehold.co/600x400.svg",
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
      image: "https://placehold.co/600x400.svg",
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
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Featured Trips</h2>
            <p className="text-gray-600 text-lg">Favorite Trip based on customer reviews</p>
          </div>

          
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div className="max-w-sm mx-auto h-[500px] bg-white rounded-3xl shadow-lg overflow-clip">
              {/* Image Section */}
              <div className="relative h-[60%] ">
                <Image src={trip.image} alt="California Sunset Boat Cruise" fill className="object-cover" />

                {/* Top Rated Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white rounded-full px-4 py-2 shadow-md">
                    <span className="text-orange-500 font-semibold text-sm">Top Rated</span>
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 z-50 right-4 ">
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-sm">4.96</span>
                    <span className="text-gray-500 text-sm">{"(672 reviews)"}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 rounded-4xl bg-white h-[50%] -translate-y-[35px]">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">California Sunset/Twilight Boat Cruise</h2>

                {/* Duration and Guest Info */}
                <div className="flex items-center gap-6 mb-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">2 days 3 nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">4-6 guest</span>
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">$48.25</span>
                    <span className="text-gray-500">/ person</span>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-6 py-3 rounded-full font-semibold text-gray-800">
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
