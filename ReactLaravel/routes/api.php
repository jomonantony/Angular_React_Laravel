<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// get list of employees
Route::get('employees','EmployeeController@index');
// get specific employee
Route::get('employee/{id}','EmployeeController@show');
// delete a employee
Route::delete('employee/{id}','EmployeeController@destroy');
// update existing employee
Route::put('employee','EmployeeController@store');
// create new employee
Route::post('employee','EmployeeController@store');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
