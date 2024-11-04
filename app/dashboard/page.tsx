import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, DollarSign, Users, Clock } from 'lucide-react';
import { Overview } from '@/components/dashboard/overview';
import { RecentBookings } from '@/components/dashboard/recent-bookings';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <Button>
          Book New Service
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <CalendarDays className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Upcoming Bookings
              </p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Spent
              </p>
              <h3 className="text-2xl font-bold">$420</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Providers
              </p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Service Hours
              </p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <div className="p-6">
            <h3 className="text-xl font-semibold">Overview</h3>
          </div>
          <Overview />
        </Card>
        <Card className="col-span-3">
          <div className="p-6">
            <h3 className="text-xl font-semibold">Recent Bookings</h3>
          </div>
          <RecentBookings />
        </Card>
      </div>
    </div>
  );
}