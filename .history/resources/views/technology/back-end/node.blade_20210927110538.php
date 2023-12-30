@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Node.js Development Company';
    $desc = 'Consistency in delivering innovative, robust, secure and scalable web and mobile app solutions leveraging node.js development services has made IndiaNIC a leading Node.js development company. Hire Node.js developers from us to build load-bearing infrastructure to develop heavy loaded applications.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Node.js Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Node.js Development Company';
    $slide1title = 'Node.js Development Expertise';
    $slide1desc = 'IndiaNIC, a leading Node.js development company, is a one-stop solution for end-to-end Node.js development services and also to hire dedicated Node.js developers who possess top-notch expertise in languages like node.js, JS; frameworks and libraries like Express.js, Passport, Babel; front-end technologies like HTML5, CSS3, ReactJS; Server technologies like AWS, Jenkins, etc. ';
    $slide1alt = 'Node.js Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of development using automated and manual testing techniques. This is done to ensure that the end product using Node.js technology is fully functional, compatible, flawless, bug-free and user friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = ' Practical Node.js Solutions';
    $slide3desc = 'Node.js is a powerful technology that is suitable for front-end and back-end which allows building fast and scalable web and mobile apps. We offer full-fledged Node.js development services to build engaging and real-time solutions such as e-commerce portal, custom CRM software, Social networking apps, etc.';
    $slide3alt = ' Practical Node.js Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Node.js Developers';
    $slide4desc = 'Hire skilled Node.js developers on a full time or part-time basis with complete transparency and control over the team. Our Node.js developers offer solutions based on AWS Node.js microservices, custom Node.js programming, handling of data analysis tool, back-end data management system, AJAX based web development and more.';
    $slide4alt = 'Hire Node.js Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Node.js Development Services';
    $subtitle = 'WHAT WE DO';

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
