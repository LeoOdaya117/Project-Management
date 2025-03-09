import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

// Define a Task type
type Task = {
    id: number;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'completed';
    date: Date;
};

// Sample tasks data
const tasks: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description of task 1',
        status: 'completed',
        date: new Date(),
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description of task 2',
        status: 'in-progress',
        date: new Date(),
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description of task 3',
        status: 'todo',
        date: new Date(),
    },
    ,
    {
        id: 4,
        title: 'Task 4',
        description: 'Description of task 4',
        status: 'todo',
        date: new Date(),
    },
];

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Tasks',
        href: '/tasks',
    },
];

export default function Tasks() {
    const todoTasks = tasks.filter(task => task.status === 'todo');
    const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
    const completedTasks = tasks.filter(task => task.status === 'completed');

    const renderTaskCard = (task: Task) => (
        <div key={task.id} className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between">
                <h5 className="font-semibold text-lg text-gray-700 dark:text-gray-200">{task.title}</h5>
                <span className="text-xs text-gray-400 dark:text-gray-500">{task.date.toLocaleDateString()}</span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
            
            <div className="mt-4 flex items-center justify-between">
                <Link href={`/details/${task.id}`} className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                    Details
                </Link>

                <select className="px-2 py-1 border rounded-md text-sm text-gray-600 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {task.status === 'todo' && (
                        <>
                            <option value="todo">Todo</option>
                            <option value="in-progress">In Progress</option>
                        </>
                    )}
                    {task.status === 'in-progress' && (
                        <>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </>
                    )}
                    {task.status === 'completed' && (
                        <option value="completed">Completed</option>
                    )}
                </select>
            </div>
        </div>
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tasks" />
            <div className="flex flex-1 flex-col gap-6 rounded-xl p-6 bg-gray-50 dark:bg-gray-900">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Tasks</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h4 className="font-semibold text-xl text-gray-700 dark:text-gray-200">TODO</h4>
                        <div className="mt-4 space-y-4">
                            {todoTasks.map(renderTaskCard)}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl text-gray-700 dark:text-gray-200">IN PROGRESS</h4>
                        <div className="mt-4 space-y-4">
                            {inProgressTasks.map(renderTaskCard)}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl text-gray-700 dark:text-gray-200">COMPLETED</h4>
                        <div className="mt-4 space-y-4">
                            {completedTasks.map(renderTaskCard)}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
