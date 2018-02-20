<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use EllipseSynergie\ApiResponse\Contracts\Response;
use App\Employee;
use App\Transformer\EmployeeTransformer;

class EmployeeController extends Controller
{
    protected $respose;
    
    public function __construct(Response $response)
    {
        $this->response = $response;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $employees = Employee::paginate(15);
        // Return a collection of $task with pagination
        //return $this->response->withPaginator($emloyees, new  EmployeeTransformer());
        $employees = Employee::all()->toArray();
        return $employees;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->isMethod('put')) {
            $employee = Employee::find($request->id);
            if (!$employee) {
                return $this->response->errorNotFound('Employee Not Found');
            }
        } else {
            $employee = new Employee;
        }
 
        $employee->id = $request->input('id');
        $employee->FirstName = $request->input('FirstName');
        $employee->LastName = $request->input('LastName');
        $employee->Position = $request->input('Position');
        $employee->EmpCode = $request->input('EmpCode');
        $employee->Office = $request->input('Office');
 
        if($employee->save()) {
            return $this->response->withItem($employee, new  EmployeeTransformer());
        } else {
             return $this->response->errorInternalError('Could not updated/created a task');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::find($id)->toArray();
        if (!$employee) {
            return $this->response->errorNotFound('Employee Not Found');
        }
        return $employee;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return $this->response->errorNotFound('Employee Not Found');
        }
 
        if($employee->delete()) {
             return $this->response->withItem($employee, new  EmployeeTransformer());
        } else {
            return $this->response->errorInternalError('Could not delete a employee');
        }
    }
}
