<?php

namespace App\Exceptions;

use App\Http\Controllers\Api\ApiResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    use ApiResponse;
    /**
     * A list of the exception types that are not reported.
     *
     * @var string[]
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var string[]
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (Throwable $exception, $request) {
            if($request->wantsJson()) { 
            
                if ($exception instanceof ModelNotFoundException) {

                    return $this->sendFailedResponse(
                        'Model not found.',
                        $this->statusNotFound
                    );
                }
        
                else if ($exception instanceof NotFoundHttpException) {
                    $url = request()->fullUrl();

                    return $this->sendFailedResponse(
                        "The requested URL [$url] was not found on this server.",
                        $this->statusNotFound
                    );
                }
        
                else if ($exception instanceof MethodNotAllowedHttpException) {
        
                    return $this->sendFailedResponse(
                        $exception->getMessage(),
                        $this->statusMethodNotAllowed
                    );
                }

                else if ($exception instanceof UnauthorizedException) {
                    
                    return $this->sendFailedResponse(
                        $exception->getMessage(),
                        $this->statusMethodNotAllowed
                    );
                }

                else if ($exception instanceof AuthenticationException) {
                    
                    return $this->sendFailedResponse(
                        $exception->getMessage(),
                        $this->statusUnauthorized
                    );
                }

                else if ($exception instanceof ValidationException) {
                    $error = '';
                    foreach ($exception->errors() as $key => $value) {
                        $error = $value[0];
                    }
                    return $this->sendFailedResponse(
                        $error,
                        $this->statusUnprocessableEntity
                    );
                }

                else if ($exception instanceof QueryException) {
                    
                    return $this->sendFailedResponse(
                        $exception->getMessage(),
                        $this->statusUnprocessableEntity
                    );
                }

                else if (!empty($exception->getMessage())) {
                   
                    return $this->sendFailedResponse(
                        $exception->getMessage(),
                        $this->statusInternalServerError
                    );
                }
    
            }
        });
    }
}
