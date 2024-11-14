'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb'; // Adjust import as per your structure
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  // Find the links matching the current path segments for breadcrumbs display
  const breadcrumbs = pathSegments
    .map((_, index) => {
      const fullPath = '/' + pathSegments.slice(0, index + 1).join('/');
      return links.find((link: BreadcrumbLinkType) => link.route === fullPath);
    })
    .filter(Boolean) as BreadcrumbLinkType[]; // Type assertion to ensure type safety

  return (
    <Breadcrumb>
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem key={breadcrumb.route}>
          <BreadcrumbLink as={Link} href={breadcrumb.route} iscurrentpage={index === breadcrumbs.length - 1}>
            {breadcrumb.label}
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
