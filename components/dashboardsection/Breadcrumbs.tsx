'use client';

import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'; // Adjust import as per your structure
import { usePathname } from 'next/navigation';


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
    <nav aria-label="breadcrumb">
      <Breadcrumb>
        <BreadcrumbList>
          {/* Use React.Fragment to wrap each breadcrumb item and separator */}
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.route}>
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.route}>
                  {breadcrumb.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* Render the separator only if it's not the last item */}
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbs;
