import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function LuxuryTravelHero() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-100 rounded-3xl p-8 md:p-12 lg:p-16 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <Badge
              variant="secondary"
              className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium w-fit"
            >
              Easy payment
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Luxury Travel Redefined: Your Passport to Global Glamour
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
              Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives
              practiced by our operators worldwide.
            </p>
          </div>

          {/* Right Column - Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-3 gap-4 h-[500px] md:h-[600px]">
              {/* Large vertical image - spans 2 rows */}
              <div className="col-span-1 row-span-2">
                <Image
                  src="https://placehold.co/600x400.svg"
                  alt="Woman relaxing on luxury boat"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Top right image */}
              <div className="col-span-2 row-span-1">
                <Image
                  src={"https://placehold.co/600x400.svg"}
                  alt="Couple enjoying mountain lake view"
                  width={400}
                  height={290}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Bottom left small image */}
              <div className="col-span-1 row-span-1">
                <Image
                  src={"https://placehold.co/600x400.svg"}
                  alt="Friends celebrating on boat"
                  width={190}
                  height={290}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Bottom right small image */}
              <div className="col-span-1 row-span-1">
                <Image
                  src={"https://placehold.co/600x400.svg"}
                  alt="Woman taking selfie in nature"
                  width={190}
                  height={290}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
