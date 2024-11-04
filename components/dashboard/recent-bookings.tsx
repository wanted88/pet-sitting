import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const recentBookings = [
  {
    id: '1',
    service: 'Dog Walking',
    provider: {
      name: 'Sarah Johnson',
      image: '/placeholder-avatar.jpg',
    },
    date: '2024-03-20',
    status: 'upcoming',
    amount: 30,
  },
  {
    id: '2',
    service: 'Pet Sitting',
    provider: {
      name: 'Mike Wilson',
      image: '/placeholder-avatar.jpg',
    },
    date: '2024-03-18',
    status: 'completed',
    amount: 45,
  },
  {
    id: '3',
    service: 'Grooming',
    provider: {
      name: 'Emma Davis',
      image: '/placeholder-avatar.jpg',
    },
    date: '2024-03-15',
    status: 'completed',
    amount: 60,
  },
];

export function RecentBookings() {
  return (
    <div className="space-y-4">
      {recentBookings.map((booking) => (
        <div
          key={booking.id}
          className="flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={booking.provider.image} />
              <AvatarFallback>
                {booking.provider.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">
                {booking.service}
              </p>
              <p className="text-sm text-muted-foreground">
                {booking.provider.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              variant={booking.status === 'upcoming' ? 'default' : 'secondary'}
            >
              {booking.status}
            </Badge>
            <div className="text-sm font-medium">${booking.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}