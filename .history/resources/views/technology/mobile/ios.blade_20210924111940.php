@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'iOS App Development for iPhone, iPad & Apple Watch';
    $desc = 'As a leading iOS Mobile Application Development Company in India & USA, IndiaNIC offers iOS app development services tailored-made to your business needs. We bring a range of iOS app solutions to various business verticals with our result-driven iOS apps for iPhones, iPads, and Apple watches.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/03/tech-mobile-flutter-app.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire iOS App Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br>
                                                                If not, the first 7 days are on us. <br>';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'WHY WE ARE RENOWNED AS A';
    $subtitle = 'Top iOS App Development Company    ';
    $slide1title = 'Flutter App Development Expertise';
    $slide1desc = 'Using a single code using Google’s Flutter SDK,
                                                                                                                                                our developers build hybrid mobile applications using Google Fuchsia.
                                                                                                                                                         Hire Flutter developers who can help sketch you the smartest yet
                                                                                                                                                          quickest solution for your cross-platform development project and bring
                                                                                                                                                           to life the expectations you aspire for them.';
    $slide1alt = 'Flutter App Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'Being a premium Flutter app development company,
                                                                                                                                                                                                                                                                                    to ensure quality deliverables,
                                                                                                                                                                                                                                                                                    our Quality Analysts (QA) perform dedicated and stringent quality checks
                                                                                                                                                                                                                                                                                    at every level of hybrid app development. Our QA team uses automated and
                                                                                                                                                                                                                                                                                    manual testing techniques to ensure flawless and functional end product.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Flutter App Solutions';
    $slide3desc = 'With the Flutter framework,
                                                                                                                                                                                                                                                            it is easier for our Android/ iOS developers to bring their own
                                                                                                                                                                                                                                                            creativity using APIs for 2D and other animations. Leveraging Flutter
                                                                                                                                                                                                                                                            SDK,
                                                                                                                                                                                                                                                            We develop hybrid app solutions for diverse industries like Ecommerce,
                                                                                                                                                                                                                                                            Education and E-learning,
                                                                                                                                                                                                                                                            Media,
                                                                                                                                                                                                                                                            Banking,
                                                                                                                                                                                                                                                            Travel and more.';
    $slide3alt = 'Flutter App Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Flutter Developers';
    $slide4desc = 'Our client-oriented approach helps us to know diverse
                                                                                                                                                                                                                                            business needs over the years. Hire dedicated Flutter developers from
                                                                                                                                                                                                                                            Webito Infotech using our flexible engagement models and gain control
                                                                                                                                                                                                                                            over your cross-platform mobile app development project. Gain a
                                                                                                                                                                                                                                            competitive advantage instantly via our Flutter app development
                                                                                                                                                                                                                                            services,
                                                                                                                                                                                                                                            from precise consultation to quality development,
                                                                                                                                                                                                                                            deployment and beyond. ';
    $slide4alt = 'Hire Flutter Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Quality Flutter App Development Services';
    $subtitle = 'WHAT WE OFFER';

    $slide1title = 'Custom Flutter App Development';
    $slide1desc = 'From PoCs to full-fledged enterprise-grade app, we offer Flutter app development services for iOS, Android applications.';

    $slide2title = 'UI/UX Design for Flutter Apps';
    $slide2desc = 'With Cupertino (iOS) and Material Design (Android), we build responsive Android/ iOS apps with expressive UI and fast loading.';

    $slide3title = 'AI & ML Integration to Flutter Apps';
    $slide3desc = 'We infuse power of AI and ML to Flutter development to add intelligence to apps for simplifying human to machine interactions.';

    $slide4title = 'Third-Party APIs Integration';
    $slide4desc = 'We develop and integrate server-side APIs for cross-platform mobile applications as per custom business requirements.';

    $slide5title = 'Application Testing & Debugging';
    $slide5desc = 'Comprehensive check & record is performed regularly to ensure that coding is efficient and bug-free that meets client expectations.';

    $slide6title = 'App Maintenance & Support';
    $slide6desc = 'We provide contract system and support services to make Flutter apps up and running at all times with full responsiveness.';
    ?>
    @include('technology.mobile.common.what-we-offer')
    {{-- Offer-Section End --}}

    {{-- Services-Section Start --}}
    <?php
    $title = 'Looking at a wider Spectrum';
    $subtitle = 'WEBITO INFOTECH SERVICES';
    $slide1img = 'assets/img/technologies/mobile/mobile-application-development.svg';
    $slide1alt = 'Mobile Application Development';
    $slide1title = 'Mobile Application Development';
    $slide1desc = 'Developing iOS and Android apps for smartphones and tablets
                                                                                                                                                        with great attention
                                                                                                                                                        to design.';
    $slide2img = 'assets/img/technologies/mobile/custom-web-development.svg';
    $slide2alt = 'Custom Web Development';
    $slide2title = 'Custom Web Development';
    $slide2desc = 'Developing responsive websites with complete content control
                                                                                                                                                            and scalability.';
    $slide3img = 'assets/img/technologies/mobile/mobile-game-development.svg';
    $slide3alt = 'Mobile Games Development';
    $slide3title = 'Mobile Games Development';
    $slide3desc = 'Developing engaging 2D and 3D games on iOS and Android
                                                                                                                                                            platforms that generate
                                                                                                                                                            revenue.';
    $slide4img = 'assets/img/technologies/mobile/digital-marketing-service.svg';
    $slide4alt = 'Digital Marketing Services';
    $slide4title = 'Digital Marketing Services';
    $slide4desc = 'Entire online marketing stack with focus on content,
                                                                                                                                                            creative, social media
                                                                                                                                                            and
                                                                                                                                                            digital.';
    $slide5img = 'assets/img/technologies/mobile/ui-design-creative-services.svg';
    $slide5alt = 'UI Design / Creative Services';
    $slide5title = 'UI Design / Creative Services';
    $slide5desc = 'Designing stunning user interfaces and designs that gives
                                                                                                                                                            unique identity and
                                                                                                                                                            experience.';
    $slide6img = 'assets/img/technologies/mobile/cloud-infrastructure-management.svg';
    $slide6alt = 'Cloud Infrastructure Management';
    $slide6title = 'Cloud Infrastructure Management';
    $slide6desc = 'AWS certified cloud architects who can set up and manage
                                                                                                                                                                entire cloud
                                                                                                                                                                infrastructure.';
    ?>
    @include('technology.mobile.common.services')

    {{-- Services-Section End --}}

    {{-- Solution-Section Start --}}

    @include('technology.mobile.common.solution')
    {{-- Solution-Section End --}}

    {{-- Trusted-Section Start --}}

    {{-- @include('technology.mobile.common.trusted-by') --}}

    {{-- Trusted-Section End --}}

    {{-- Ourwork-Section Start --}}

    {{-- @include('technology.mobile.common.ourwork') --}}

    {{-- Ourwork-Section End --}}

    {{-- Stories-Section Start --}}

    {{-- @include('technology.mobile.common.stories') --}}

    {{-- Stories-Section End --}}

    {{-- Request-Section Start --}}

    @include('technology.mobile.common.request')

    {{-- Request-Section End --}}

@endsection
