import BookingPlatform from "@/components/booking-platform";
import Demo from "@/components/demo";
import FeaturedTrips from "@/components/featured-trips";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import LuxuryTravelHero from "@/components/luxury-travel-hero";
import Navigation from "@/components/Navigation";
import TestimonialSlider from "@/components/testimonial-slider";

export default function Home() {
  return (
    <>
      <Demo />
      {/* <Navigation /> */}
      <Logo />
      <FeaturedTrips />
      <LuxuryTravelHero />
      <TestimonialSlider />
      <BookingPlatform />
      <Footer/>
    </>
  );
}
