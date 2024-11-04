import { Button } from '@/components/ui/button';
import { PawPrint, Shield, Calendar, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80"
            alt="Happy dogs playing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Pet Care at Your Fingertips
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Connect with trusted pet sitters, walkers, and groomers in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Find a Pet Sitter
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Become a Provider
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose PawCare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Verified Providers"
              description="All our pet care providers undergo thorough background checks"
            />
            <FeatureCard
              icon={<Calendar className="w-10 h-10" />}
              title="Easy Booking"
              description="Book and manage appointments with just a few clicks"
            />
            <FeatureCard
              icon={<MessageSquare className="w-10 h-10" />}
              title="Direct Communication"
              description="Chat directly with your pet care provider"
            />
            <FeatureCard
              icon={<PawPrint className="w-10 h-10" />}
              title="Pet Insurance"
              description="Your pets are protected during every service"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              image="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80"
              title="Pet Sitting"
              description="In-home pet sitting services tailored to your pet's needs"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80"
              title="Dog Walking"
              description="Regular walks and exercise for your furry friend"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80"
              title="Pet Grooming"
              description="Professional grooming services to keep your pet looking their best"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function ServiceCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="rounded-lg overflow-hidden bg-card">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild>
          <Link href={`/services/${title.toLowerCase().replace(' ', '-')}`}>
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
}