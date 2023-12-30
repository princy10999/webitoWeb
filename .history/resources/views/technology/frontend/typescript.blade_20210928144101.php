@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'TypeScript Development Company';
    $desc = 'We are early adopters of Microsoft TypeScript (TS) to use with a range of JS based frameworks to implement flawless coding environments. This results in faster and quality delivery of websites and applications. Being a leading web development company, IndiaNIC has expert TypeScript developers to hire who explore, innovate and master the latest technologies to develop and deliver large scale applications.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Typescript Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Trusted TypeScript Development Company';
    $slide1title = 'TypeScript Development Expertise';
    $slide1desc = 'Hire expert TypeScript (TS) developers from IndiaNIC, a top TypeScript development company, who have proficiency in JavaScript and all the basics of TypeScript to run using different JS-based frameworks like AngularJS, ReactJS, Vue.js, Visual Studio, Node.js, MSBuild. They are experts in debugging errors and implement interfaces along with full-fledged development services.';
    $slide1alt = 'TypeScript Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'Being a leading TypeScript (TS) development company, to ensure quality deliverables, our QAs (Quality Analysts) perform dedicated and stringent quality checks at every level of the TypeScript development process using automated and manual testing techniques. Our TS experts also perform code review to ensure that the end product is fully functional, compatible, flawless, bug-free and user-friendly web & mobile applications.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'TS based Industry Solutions';
    $slide3desc = 'Hire full stack Vue.js developers from a trusted Vue.js web app development company to get fast, cost-effective and quality web solutions. Our Vue.js app development team has rich experience in delivering digital web solutions into various industry domains like fintech, healthcare, retail and eCommerce and more.';
    $slide3alt = ' TS based Industry Solutions';
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
