import Navbar from '@/components/villa/Navbar';
import HeroSection from '@/components/villa/HeroSection';
import OverviewSection from '@/components/villa/OverviewSection';
import GallerySection from '@/components/villa/GallerySection';
import AmenitiesSection from '@/components/villa/AmenitiesSection';
import NearbySection from '@/components/villa/NearbySection';
import TestimonialsSection from '@/components/villa/TestimonialsSection';
import InquireSection from '@/components/villa/InquireSection';
import Footer from '@/components/villa/Footer';

export default function VillaLanding() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <GallerySection />
      <AmenitiesSection />
      <NearbySection />
      <TestimonialsSection />
      <InquireSection />
      <Footer />
    </div>
  );
}
