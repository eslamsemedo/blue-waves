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
      title: "California Sunset/Twilight Boat Cruise",
      duration: "2 days 3 nights",
      guests: "4-6 guest",
      price: 48.25,
    },
    {
      id: 2,
      image: "https://placehold.co/600x400.svg",
      badge: { text: "Best Sale", variant: "secondary" as const },
      rating: 4.96,
      reviews: 672,
      title: "NYC: Food Tastings and Culture Tour",
      duration: "3 days 3 nights",
      guests: "4-6 guest",
      price: 17.32,
    },
    {
      id: 3,
      image: "https://placehold.co/600x400.svg",
      badge: { text: "25% Off", variant: "destructive" as const },
      rating: 4.96,
      reviews: 672,
      title: "Grand Canyon Horseshoe Bend 2 days",
      duration: "7 days 6 nights",
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

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-3">
            <FilterDropdown label="Categories" options={["Adventure", "Cultural", "Relaxation", "Wildlife"]} />
            <FilterDropdown label="Duration" options={["1-2 days", "3-5 days", "6-10 days", "10+ days"]} />
            <FilterDropdown
              label="Review / Rating"
              options={["4.5+ stars", "4.0+ stars", "3.5+ stars", "All ratings"]}
            />
            <FilterDropdown label="Price range" options={["Under $25", "$25-$50", "$50-$100", "$100+"]} />
          </div>
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <Card
              key={trip.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={trip.image || "/placeholder.svg"}
                  alt={trip.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant={trip.badge.variant} className="px-3 py-1 text-sm font-medium">
                    {trip.badge.text}
                  </Badge>
                </div>

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">
                      {trip.rating} ({trip.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-900 line-clamp-2">{trip.title}</h3>

                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{trip.guests}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${trip.price}</span>
                    <span className="text-gray-600 ml-1">/ person</span>
                  </div>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
