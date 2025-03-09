import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My tasks',
        href: '/tasks',
    },
    {
        title: 'Details',
        href: '/details',
    },
    
    
];

export default function ProjectDetails() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects Details" />
            <div className="flex h-full flex-1 flex-col gap-4  rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    Taks Details
                </div>
               
                
            </div>
        </AppLayout>
    );
}
