<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['FirstName', 'LastName', 'EmpCode', 'Position', 'Office'];
}
