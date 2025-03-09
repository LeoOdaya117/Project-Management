<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/tasks', function () {
        return Inertia::render('tasks/index');
    })->name('tasks');
    Route::get('/tasks/details/{id}', function () {
        return Inertia::render('tasks/details');
    })->name('details');

    Route::resource('/projects', ProjectController::class);

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
