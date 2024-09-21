<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GiftController;
use App\Http\Controllers\CouponController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// gifts
// Route::get('create_gift', [GiftController::class, 'store']);
Route::resource('gift', GiftController::class);
Route::post('gifts/{id}', [GiftController::class, 'update']);
Route::post('bulk_gifts', [GiftController::class, 'bulkInsert']);

// coupons
Route::post('bulk_coupons', [CouponController::class, 'bulkInsert']);
Route::resource('coupon', CouponController::class);