@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'ReactJS Web Application Development';
    $desc = 'IndiaNIC is a top ReactJS web app development company, crafting stunning and compostable web user Interfaces (UI) for enterprise-grade apps and consumer-facing projects with optimum security. Hire dedicated ReactJS developers from IndiaNIC, whose technology expertise includes all the versions of ReactJS, from 0.3.0 to 16.6.3 as our mainstream front-end technology.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire AngularJS Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top AngularJS App Development Company';
    $slide1title = 'AngularJS Development Expertise';
    $slide1desc = 'Being a top AngularJS development company, we strive to offer complete web and mobile app solutions within this modern framework of Javascript, ranging from eCommerce to interactive social apps or enterprise solutions. Having  worked on over 200+ web and mobile app development projects using the AngularJS framework, we help you benefit from this highly reliable and flexible  platform to cater to all your personalised needs.';
    $slide1alt = 'AngularJS Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'To continue our trusted AngularJS development services as we have over the years, we put stringent quality checks at every level of our web or mobile app development projects. Especially during the development, we deploy a dedicated QA team on each project that ensures bug-free, quality development supported by pre-release system check that keeps control over your dedicated timeline.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Strategic AngularJS Solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our end-to-end AngularJS app development services also include a budget-focused plan for any idea whether you’re a startup, a business or an enterprise takes you one step at a time.';
    $slide3alt = 'Strategic AngularJS Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Expert AngularJS Developers';
    $slide4desc = 'Our AngularJS development team is well-versed with all necessary updates and trends in technologies. Together we  ensure top-notch web application development to meet your business requirements when you get a customised solution with our AngularJS experts.';
    $slide4alt = 'Expert AngularJS Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our AngularJS Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Custom AngularJS Development';
    $slide1desc = 'Creating high impact, user-centered applications in different open source development frameworks like Ionic, React, Mean Stack, Protractor & Radian.';

    $slide2title = 'Hybrid AngularJS Apps';
    $slide2desc = 'Create a multiplatform app for your innovative ideas with integrated elements of AngularJS native and web applications.';

    $slide3title = 'API/ Backend Development';
    $slide3desc = 'Effortless database-driven Angular apps with tightly integrated backend systems through APIs.';

    $slide4title = 'UI/UX Design';
    $slide4desc = 'Along with innovative UI, get compelling and functional UX design to transform your business ideas into meaningful user stories.';

    $slide5title = 'AngularJS Version Migration';
    $slide5desc = 'Our expertise helps you easily upgrade your current AngularJS application to an advanced version to make sure the app is running flawlessly.';

    $slide6title = 'Hire AngularJS Developers';
    $slide6desc = 'We provide useful AngularJS consulting based on your personalised business requirements, wherever and whenever you want it.';
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
    $slide1desc = 'Developing iOS and Android apps for smartphones and tablets with great attention to design.';

    $slide2img = 'assets/img/technologies/mobile/custom-web-development.svg';
    $slide2alt = 'Custom Web Development';
    $slide2title = 'Custom Web Development';
    $slide2desc = 'Developing responsive websites with complete content control and scalability.';

    $slide3img = 'assets/img/technologies/mobile/mobile-game-development.svg';
    $slide3alt = 'Mobile Games Development';
    $slide3title = 'Mobile Games Development';
    $slide3desc = 'Developing engaging 2D and 3D games on iOS and Android platforms that generate revenue.';

    $slide4img = 'assets/img/technologies/mobile/digital-marketing-service.svg';
    $slide4alt = 'Digital Marketing Services';
    $slide4title = 'Digital Marketing Services';
    $slide4desc = 'Entire online marketing stack with focus on content, creative, social media and digital.';

    $slide5img = 'assets/img/technologies/mobile/ui-design-creative-services.svg';
    $slide5alt = 'UI Design / Creative Services';
    $slide5title = 'UI Design / Creative Services';
    $slide5desc = 'Designing stunning user interfaces and designs that gives unique identity and experience.';

    $slide6img = 'assets/img/technologies/mobile/cloud-infrastructure-management.svg';
    $slide6alt = 'Cloud Infrastructure Management';
    $slide6title = 'Cloud Infrastructure Management';
    $slide6desc = 'AWS certified cloud architects who can set up and manage entire cloud infrastructure.';
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
