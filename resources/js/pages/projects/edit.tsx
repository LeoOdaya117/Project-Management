import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'Edit Project',
        href: '',
    },
    
    
];

interface Project {
    id: number;
    name: string;
    description?: string;
    due_date?: string;
    status: string;
}

export default function ProjectDetails() {

    const { project } = usePage().props as unknown as { project: Project };



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects Details" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    Taks Details
                </div>
                
                
                
            </div>
        </AppLayout>
    );
}
