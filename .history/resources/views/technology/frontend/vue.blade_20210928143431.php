@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Vue.js Application Development';
    $desc = 'We are at the forefront in providing expert Vue.js app development services to build single-page apps (SPAs), complex and progressive web apps (PWAs). Hire Vue.js developers from Webito Infotech, a top Vue.js development company in India & USA, to grow your business with best-in-class Vue.js solutions with intuitive and appealing UI for web apps.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Vue.js Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Vue.js App Development Company';
    $slide1title = 'Vue.js App Development Expertise';
    $slide1desc = 'Hire expert Vue.js developers from Webito Infotech, a top Vue.js app development company, who have required proficiency in working with the latest Vue.js version 2.6.10, libraries (vue-test-utils, Jest), backend libraries (nuxtjs, vue-sync), UX frameworks (vue-material, bootstrap-vue) along with other tools and technologies like Vuex, Vuelm, Movue, etc. ';
    $slide1alt = 'Vue.js App Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of Vue.js development using automated and manual testing techniques. This is done to ensure that the Vue.js application we will develop is fully functional, compatible, flawless, bug-free and user-friendly SPA or PWA.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Vue.js Solutions';
    $slide3desc = 'Hire full stack Vue.js developers from a trusted Vue.js web app development company to get fast, cost-effective and quality web solutions. Our Vue.js app development team has rich experience in delivering digital web solutions into various industry domains like fintech, healthcare, retail and eCommerce and more.';
    $slide3alt = ' Practical Vue.js Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Skilled Vue.js Developers';
    $slide4desc = 'We are a leading Vue.js web app development company that understands diverse business needs. Hire Vue.js full-stack development team with flexible engagement models that will meet your business needs and we guarantee to deliver cost-effective web applications using trending and robust technologies in record time.';
    $slide4alt = 'Hire Skilled Vue.js Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Top-notch Vue.js Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Vue.js Application Development';
    $slide1desc = 'Hire Vue.js developers to build feature-rich web apps from small scale to large scale to deliver powerful presence online.';

    $slide2title = 'Single Page App Development';
    $slide2desc = 'Vue is our preferred choice due to its supporting libraries, frameworks, and tools for building simple or complex SPAs.';

    $slide3title = '3rd Party Integration';
    $slide3desc = 'Vue.js developers at IndiaNIC possess skills and experience which are required in third-party integration of Vue.js.';

    $slide4title = 'UI Development with Vue.js';
    $slide4desc = 'We build interactive and scalable UI which will enhance your user experience and enhances business growth.';

    $slide5title = 'Portal Development Solutions';
    $slide5desc = 'Our ReactJS programmers can migrate/ integrate your existing web applications to the ReactJS framework without any loss of data with security.';

    $slide6title = 'ReactJS Plugin Development & APIs';
    $slide6desc = 'We empower clients with highly functional ReactJS based plugins development & work on API-driven ReactJS projects to explore 3rd party solutions.';
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
