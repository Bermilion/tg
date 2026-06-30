<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'site.pages.dev')->name('dev');
Route::view('/welcome', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::view('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
