import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { usePage, Link } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

interface Project {
    id: number;
    name: string;
    description: string;
    created_by: string;
    due_date: string;
    user: {
        name: string;
    }
    // Add other project properties here
}

export default function Projects() {
    const { projects = [] } = usePage().props; // Provide a default empty array

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created By
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Due Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {projects.length > 0 ? (
                                projects.map((project: Project) => (
                                    <tr key={project.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.name.length > 20 ? `${project.name.substring(0, 20)}...` : project.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.description.length > 50 ? `${project.description.substring(0, 50)}...` : project.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.user['name']}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.due_date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            
                                            <Link href={`/projects/${project.id}/edit`} className="text-blue-600 hover:text-blue-900">
                                                Edit
                                            </Link>
                                            <Link href={`/projects/${project.id}`} method="delete" as="button" className="ml-2 text-red-600 hover:text-red-900">
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                        No projects found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
