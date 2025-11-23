/**
 * ServiceList - Grid of service cards
 * Responsive grid layout for services overview
 */

import { Service } from '@/lib/types';
import { ServiceCard } from './ServiceCard';

interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
