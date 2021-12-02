<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginUserRequest;
use App\Http\Requests\Api\RefreshTokenRequest;
use App\Http\Requests\Api\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register(RegisterUserRequest $request)
    {
        try {
            User::create($request->all());
            return $this->sendSuccessResponse(true);
        } catch (\Exception $e) {
            return $this->sendErrorResponse($e->getMessage(), $this->statusInternalServerError);
        }
    }

    public function login(LoginUserRequest $request)
    {
        if (auth()->attempt($request->only('email', 'password'))) {
            $passport = $this->getTokenAndRefreshToken($request->email, $request->password);

            return $this->sendSuccessResponse($passport);
        }

        return $this->sendFailedResponse('Unauthorized', $this->statusUnauthorized);
    }

    public function getTokenAndRefreshToken($email, $password)
    {
        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $email,
            'password' => $password,
            'scope' => '*'
        ];
        $request = Request::create('/oauth/token', 'POST', $data);
        return json_decode(app()->handle($request)->getContent());
    }

    public function refreshToken (RefreshTokenRequest $request) {
		try {
			$client = DB::table('oauth_clients')->where('password_client', true)->first();
			$data = [
				'grant_type' => 'refresh_token',
				'refresh_token' => $request->refresh_token,
				'client_id' => $client->id,
				'client_secret' => $client->secret,
				'scope' => '*'
			];
			$request = Request::create('/oauth/token', 'POST', $data);
            $passport= json_decode(app()->handle($request)->getContent());

			return $this->sendSuccessResponse($passport);
		} catch (\Exception $e) {
            return $this->sendErrorResponse($e->getMessage(), $this->statusInternalServerError);

		}
	}
}
