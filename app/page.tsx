import BookingPlatform from "@/components/booking-platform";
import Demo from "@/components/demo";
import FeaturedTrips from "@/components/featured-trips";
import Footer from "@/components/Footer";
import { Component } from "@/components/image-auto-slider";
import Logo from "@/components/Logo";
import LuxuryTravelHero from "@/components/luxury-travel-hero";
import Navigation from "@/components/Navigation";
import TestimonialSlider from "@/components/testimonial-slider";
import { TestimonialsSection } from "@/components/testimonials-with-marquee";

export default function Home() {

  const testimonials = [
    {
      author: {
        name: "Emma Thompson",
        handle: "@emmaai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
      href: "https://twitter.com/emmaai"
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "https://twitter.com/davidtech"
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
    }
  ]
  return (
    <>
      <Demo />
      {/* <Navigation /> */}
      <Logo />
      <FeaturedTrips />
      <Component />
      <LuxuryTravelHero />
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />
      <BookingPlatform />
      <Footer />
    </>
  );
}





