<?php namespace App\Transformer;
 
use League\Fractal\TransformerAbstract;
 
class EmployeeTransformer extends TransformerAbstract {
 
    public function transform($employee) {
        return [
            'id' => $employee->id,
            'FirstName' => $employee->FirstName,
            'LastName' => $employee->LastName,
            'EmpCode' => $employee->EmpCode,
            'Position' => $employee->Position,
            'Office' => $employee->Office
        ];
    }
 }
