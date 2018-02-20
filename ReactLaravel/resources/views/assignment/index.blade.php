<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
    <div class="container">
        <div class="row">
            <div id="headercomponent"></div>        
            <div id="sidebarcomponent"></div>
            <div id="maincomponent"></div>       
            <div id="footercomponent"></div>
        </div>
    </div>
        <!-- <div id="example"></div> -->
        <script src="{{asset('js/assignment.js')}}" ></script>
    </body>
</html>