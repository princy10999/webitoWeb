@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'HTML5 App Development for Web & Mobile';
    $desc = 'Develop appealing and engaging websites with IndiaNIC’s leading HTML5 web development services in India & USA. Get our HTML5 language services with advantages of CSS3 and jQuery combined. Being a top HTML5 app development company, we boast years of experience to offer quality yet affordable web and mobile app development services leveraging HTML5 technology.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire HTML5 Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Vue.js App Development Company';
    $slide1title = 'HTML5 Development Expertise';
    $slide1desc = 'In the world of dynamic websites, we help you develop cross-platform apps and websites using the advancements of HTML5 development. You can get feature-rich websites and web portals with frontend solutions designed in HTML5 using tools and frameworks like SproutCore, Ember.JS, AngularJS, and PhoneGap. Get the perfect blend of functionality, performance, and accessibility for your website.';
    $slide1alt = 'HTML5 Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every level of our HTML5 development services. Being a top HTML5 app development company, we deploy a dedicated QA team on each HTML5 web or mobile app development project that ensures bug-free, quality development supported by pre-release system check. We are also intent on leveraging the benefits of code portability and limited coding supported by HTML5.We put stringent quality checks at every level of our HTML5 development services. Being a top HTML5 app development company, we deploy a dedicated QA team on each HTML5 web or mobile app development project that ensures bug-free, quality development supported by pre-release system check. We are also intent on leveraging the benefits of code portability and limited coding supported by HTML5.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical HTML5 Solutions';
    $slide3desc = 'Leveraging our IT industry experience, we help you scale your idea in a way that you can achieve your goals with custom HTML5 powered web apps or mobile apps. Instead of big investments into a directionless plan, our budget-focused plan for any idea whether you’re a startup, a business or an enterprise takes you one step at a time. Now you can get et a highly responsive, unique and appealing website or application developed in HTML5.';
    $slide3alt = 'Practical HTML5 Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Skilled HTML5 Developers';
    $slide4desc = 'Our HTML5 app development team is well-versed with all necessary updates and trends in HTML5 technology. Our experienced HTML5 developers ensure top-notch delivery of HTML5 application development services to meet your business requirements by creating highly dynamic websites using CSS3, jQuery & Kendo. Our HTML5 development team also specializes in providing HTML5 consulting and migration services.';
    $slide4alt = 'Skilled HTML5 Developers';
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
    $slide3desc = 'Vue.js developers at Webito Infotech possess skills and experience which are required in third-party integration of Vue.js.';

    $slide4title = 'UI Development with Vue.js';
    $slide4desc = 'We build interactive and scalable UI which will enhance your user experience and enhances business growth.';

    $slide5title = 'Portal Development Solutions';
    $slide5desc = 'Hire Vue.js developers who can build online portals with custom product development to meet diverse business needs.';

    $slide6title = 'Vue.js Migration Services';
    $slide6desc = 'We empower businesses to easily migrate from the existing framework to Vue.js t with a pragmatic approach with no risk.';
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
