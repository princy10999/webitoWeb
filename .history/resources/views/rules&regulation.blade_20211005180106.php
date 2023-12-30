@extends('master')
@section('homepage-contain')
    <link rel="stylesheet" href="assets/css/design.css">
    <section class="main-page-header inner-page-header">
        <div class="container">
            <div class="page-header-content">
                <h1>Rules and Regulation</h1>
                <p>General Rules and Regulations and Guidelines</p>
            </div>
        </div>
    </section>

    <div class="color">

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

        <!-- Enterprise Solutions end -->

        <!-- Android App Development start -->

        <?php
        $id_pass = 'native-android-apps';
        $box1title = 'Android App Development';
        $desc1 = 'We are a leading Android app development company offering bespoke Android mobile app solutions for
                                                                                                                                                                                global brands, enterprises and startups. Covering the entire spectrum on the android platform, we can help you
                                                                                                                                                                                craft niche Android apps for Smartphones, Tablets, Android Wear and Android TV. Hire Android app developers from
                                                                                                                                                                                us having expertise to build custom Android apps that work on all Android devices with the latest Android OS
                                                                                                                                                                                version compatibility.';
        $image = 'assets/img/services/mobile/img-mobile-app-development-android-app.webp';
        $icon1 = 'https://img.icons8.com/android/40/4a90e2/android.png';
        $icon2 = 'https://img.icons8.com/metro/40/4a90e2/android-os.png';
        $icon3 = 'https://img.icons8.com/android/50/4a90e2/android-tablet.png';
        $icon4 = '';
        $detail1 = 'Android Smartphone Apps';
        $detail2 = 'Android TV Apps';
        $detail3 = 'Android Tablet Apps';
        $detail4 = 'Chromebook Apps';
        $detail5 = 'Android Wear Apps';
        $detail6 = 'Android Apps with Dialogflow';
        ?>

        @include('services.common.rightimgsection')

        <!-- Android App Development end -->

        <!-- Cross Platform Apps Start -->
        <?php
        $id_pass = 'cross-platform';
        $helptitle = 'Cross Platform Apps';
        $helpparagraph1 = 'Webito is a top cross-platform mobile app development company that empowers businesses with a
                                                                                                                                                                                wide array of mobile applications. Our cross-platform mobile apps empower clients with multiple benefits and
                                                                                                                                                                                also help to cover a wider audience using devices with different OS. Our cross-platform developers have proven
                                                                                                                                                                                expertise in building affordable, quality and versatile mobile apps with cross-platform technologies and
                                                                                                                                                                                frameworks like Xamarin, React Native, PhoneGap, Appcelerator’s Titanium and Xamarin.';
        $helpparagraph2 = '';
        $helpappsimg = '';
        $icon1 = 'https://img.icons8.com/ios-filled/40/4a90e2/react-native.png';
        $icon2 = 'https://img.icons8.com/windows/55/4a90e2/nodejs.png';
        $icon3 = '//img.icons8.com/ios-glyphs/40/4a90e2/magento.png';
        $icon4 = 'https://img.icons8.com/ios-filled/40/4a90e2/flutter.png';
        $icon5 = 'https://img.icons8.com/metro/40/4a90e2/python.png';
        $icon6 = 'https://img.icons8.com/ios/40/4a90e2/laravel.png';
        $image = 'assets/img/services/mobile/mobile-app-development-cross-platform-img.webp';
        ?>
        @include('services.common.howtohelp')

        <!-- Cross Platform Apps Start -->

        <!-- Mobile Apps Driven by Cloud start -->

        <?php
        $id_pass = 'mobile-driven-cloud';
        $box1title = 'Mobile Apps Driven by Cloud';
        $desc1 = 'Cloud Consultancy, led by our certified specialists – ensures maximum scalability, performance and
                                                                                                                                                                                concurrency for your Mobile Apps, Web Applications and APIs. Right from the beginning during or discovery phase,
                                                                                                                                                                                we’ll help you shape up the cloud strategy with expert cloud consultation to optimize information delivery
                                                                                                                                                                                across different channels with ZERO downtime. Our company works closely with leading providers as Amazon Web
                                                                                                                                                                                Services (AWS), Azure, Rackspace and DigitalOcean to deliver exceptional performance.';
        $image = 'assets/img/services/mobile/mobile-app-development-cloud-app-img.webp';
        $icon1 = 'https://img.icons8.com/ios-filled/40/4a90e2/mac-os.png';
        $icon2 = 'https://img.icons8.com/metro/40/4a90e2/android-os.png';
        $icon3 = '//img.icons8.com/ios-filled/50/4a90e2/amazon-s3.png';
        $icon4 = '//img.icons8.com/fluent-systems-filled/40/4a90e2/google-drive.png';
        $detail1 = 'Cloud Consulting';
        $detail2 = 'Migrate to Cloud';
        $detail3 = 'Content Delivery';
        $detail4 = 'Managed Cloud Services';
        $detail5 = 'AWS & Google Cloud Services';
        $detail6 = 'DevOps Service & Consultation';
        ?>

        @include('services.common.leftimgsection')

        <!-- Mobile Apps Driven by Cloud end -->

        <!-- Hybrid App Development start -->

        <?php
        $id_pass = 'hybrid-apps';
        $box1title = 'Hybrid App Development';
        $desc1 = 'Hybrid applications combine the best of both worlds, web and native applications. Apps built through
                                                                                                                                                                                our top hybrid mobile app development services reduce the development cost, provide easy access to device data,
                                                                                                                                                                                work offline and scale to a variety of platforms and OS. Hire hybrid app developers from Webito who combine the
                                                                                                                                                                                power of Javascript, HTML5 and CSS3 to develop Hybrid applications with the latest frameworks such as PhoneGap,
                                                                                                                                                                                Appcelerator.';
        $image = 'assets/img/services/mobile/img-mobile-app-development-hybrid-app.webp';
        $icon1 = '//img.icons8.com/ios-filled/40/4a90e2/stick-fighting.png';
        $icon2 = '//img.icons8.com/color/40/4a90e2/material-ui.png';
        $icon3 = '//img.icons8.com/wired/40/4a90e2/svetle.png';
        $icon4 = '//img.icons8.com/ios-filled/40/4a90e2/ionic.png';
        $detail1 = 'Hybrid Mobile App Development';
        $detail2 = 'Migration to Hybrid Frameworks';
        $detail3 = 'Support & Maintenance';
        $detail4 = 'Independent Testing';
        $detail5 = 'PhoneGap App Development';
        $detail6 = 'Xamarin App Development';
        ?>

        @include('services.common.rightimgsection')

        <!-- Hybrid App Development end -->

        <!-- Progressive Web App (PWA) Development start -->

        <?php
        $id_pass = 'pwa';
        $box1title = 'Progressive Web App (PWA) Development';
        $desc1 = 'We provide excellence in Progressive Web Applications (PWA) development services to create apps that
                                                                                                                                                                        ensure seamless performance, identical to that of any native mobile app. With an aim to maximize user
                                                                                                                                                                        engagement, Webito creates progressive web apps that run faster across all platforms with minimum effort. We
                                                                                                                                                                        integrate unique features such as offline browsing, push notification, data analysis, and easy distribution
                                                                                                                                                                        channels into web apps.';
        $image = 'assets/img/services/mobile/mobile-app-development-progressive-web-app-img.webp';
        $icon1 = 'https://img.icons8.com/ios-filled/40/4a90e2/react-native.png';
        $icon2 = '//img.icons8.com/windows/40/4a90e2/vuejs.png';
        $icon3 = '//img.icons8.com/wired/40/4a90e2/webpack.png';
        $icon4 = '//img.icons8.com/android/40/4a90e2/lighthouse.png';
        $detail1 = 'Custom PWA Development';
        $detail2 = 'Progressive Web App Design';
        $detail3 = 'Application Shell Architecture';
        $detail4 = 'Load Balancing Service';
        $detail5 = 'Expert PWA Consultation';
        $detail6 = 'PWA Upgrades & Support';
        ?>
        @include('services.common.leftimgsection')

        <!-- Progressive Web App (PWA) Development end -->
    </div>
@endsection
