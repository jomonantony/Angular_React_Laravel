<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::resource('products','ProductController');
//Route::resource('assignment','AssignmentController');
//Route::resource('employees','EmployeeController');
Route::get('/', function () {
    return view('welcome');
});
Route::get('/add-item', function () {
    return view('welcome');
});
Route::get('/display-item', function () {
    return view('welcome');
});
Route::get('/edit/:id', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
