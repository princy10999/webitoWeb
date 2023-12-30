@extends('master')
@section('homepage-contain')
    <link rel="stylesheet" href="assets/css/rules.css">
    <section class="main-page-header inner-page-header">
        <div class="container">
            <div class="page-header-content">
                <h1>Rules and Regulation</h1>
                <p>General Rules and Regulations and Guidelines</p>
            </div>
        </div>
    </section>

    <?php
    $id_pass = 'native-ios-apps';
    $box1title = 'iOS Apps Development';
    $desc1 = 'Webito is a top iOS/ iPhone app development company that boasts a talented pool of expert iOS
                                                                                                                                                                        developers. We help our clients with custom applications that work perfectly on the entire iOS platform
                                                                                                                                                                        including the latest and the most recent iOS versions and iOS devices like iPhones, iPads, Apple Watches, Apple
                                                                                                                                                                        TV, etc. Hire iOS app developers with years of experience with the latest iOS app development technologies to
                                                                                                                                                                        build mobile apps with delightful UX.';
    $image = 'assets/img/services/mobile/mobile-app-development-ios-app-img.webp';
    $icon1 = 'https://img.icons8.com/windows/50/4a90e2/ios-logo.png';
    $icon2 = 'https://img.icons8.com/ios-filled/40/4a90e2/mac-os.png';
    $icon3 = 'https://img.icons8.com/ios/40/4a90e2/apple-watch-apps.png';
    $icon4 = 'https://img.icons8.com/android/40/4a90e2/mac-client.png';
    $detail1 = 'iPhone App Development';
    $detail2 = 'iPad App Development';
    $detail3 = 'Apple Watch Development';
    $detail4 = 'Apple TV Apps';
    $detail5 = 'iOS app with MLkit & app Testing';
    $detail6 = 'iOS App with SiriKit & ARkit';
    ?>

    @include('services.common.leftimgsection')
@endsection
