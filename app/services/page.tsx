import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PawPrint, Clock, DollarSign, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'pet-sitting',
    title: 'Pet Sitting',
    description: 'Professional in-home pet sitting services tailored to your pet\'s needs.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
    price: 'From $30/visit',
    duration: '30-60 minutes',
    features: [
      'Feeding and water refreshment',
      'Medication administration',
      'Playtime and exercise',
      'Updates and photos',
      'Home security check'
    ]
  },
  {
    id: 'dog-walking',
    title: 'Dog Walking',
    description: 'Regular walks and exercise to keep your dog healthy and happy.',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80',
    price: 'From $25/walk',
    duration: '30 minutes',
    features: [
      'Individual or group walks',
      'Flexible scheduling',
      'GPS tracking',
      'Exercise and socialization',
      'Waste cleanup'
    ]
  },
  {
    id: 'pet-grooming',
    title: 'Pet Grooming',
    description: 'Complete grooming services to keep your pet clean and healthy.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80',
    price: 'From $45/session',
    duration: '1-2 hours',
    features: [
      'Bath and brush out',
      'Nail trimming',
      'Ear cleaning',
      'Hair trimming',
      'Teeth brushing'
    ]
  },
  {
    id: 'pet-boarding',
    title: 'Pet Boarding',
    description: 'Safe and comfortable overnight care for your pets.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    price: 'From $50/night',
    duration: '24/7 care',
    features: [
      'Climate-controlled facilities',
      'Regular exercise',
      'Constant supervision',
      'Comfortable bedding',
      'Meal schedule maintenance'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Pet Care Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional and reliable pet care services tailored to your pet's needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  <span>{service.price}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">What's included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <PawPrint className="w-4 h-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href={`/book/${service.id}`}>Book Now</Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link href={`/services/${service.id}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us to discuss custom pet care solutions tailored to your needs
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}