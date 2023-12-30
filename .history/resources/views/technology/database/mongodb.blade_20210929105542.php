@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'MongoDB Database App Development';
    $desc = 'Expanding the horizons of client business by empowering scalability for years now, IndiaNIC stays at the forefront in delivering expert MongoDB development services. Hire experienced MongoDB developers from a top MongoDB database development company to develop scalable and next-gen web apps and mobile apps.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Oracle DB Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Oracle Database Development Company';
    $slide1title = 'Oracle Development Expertise';
    $slide1desc = 'Hire Oracle database development team from Webito Infotech that has experts in SQL, Java/JavaScript, object-oriented programming, Oracle application express (APEX) tool, AIX, Solaris, Linux, HP/HX based database (DB) support systems. We provide complete and custom Oracle software development services for cloud, mobile, database, middleware and more.';
    $slide1alt = 'Oracle Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of Oracle development. Hire Oracle development services from Webito Infotech that include code review from Oracle experts to ensure that the end product is fully functional, secure, flawless, and user-friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Oracle Powered Solutions';
    $slide3desc = 'Being a leading Oracle database development company, Webito Infotech offers all-in-one Oracle solutions related to cloud services and solutions, onsite or remote database development, and management. We have delivered Oracle-based solutions such as Blockchain-based Cloud integration, fusion middleware, ERP and CRM apps for varied industry domains.';
    $slide3alt = 'Oracle Powered Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Oracle Developers';
    $slide4desc = 'Hire dedicated Oracle developers from Webito Infotech, a leading Oracle database development company, who offer Oracle-based database coding and support. Our talented pool of Oracle database developers can install, implement, manage and tune existing and new oracle database applications. Contact us now to hire the best Oracle application developers for full-fledged smart business solutions.';
    $slide4alt = 'Hire Oracle Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Oracle Database Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Oracle Implementation';
    $slide1desc = 'We deliver business-driven implementation leveraging Oracle that connects, automate and energizes business operations.';

    $slide2title = 'Oracle Application Development';
    $slide2desc = 'We develop powerful and scalable Oracle applications with a pragmatic approach that helps in fluid movement across multiple architectures.';

    $slide3title = 'Oracle E-business Suite';
    $slide3desc = 'Leveraging Oracle EBS, we empower enterprises with robust, powerful and scalable solutions as per diverse business requirements.';

    $slide4title = 'Oracle Cloud Solutions';
    $slide4desc = 'Our solutions include Data as a Service (DaaS), Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS).';

    $slide5title = 'Oracle Database Migration';
    $slide5desc = 'Our Oracle engineers help businesses to migrate existing database applications to newer versions with low cost and risk involved.';

    $slide6title = 'Expert Oracle Consultation';
    $slide6desc = 'Hire Oracle developers who provide end-to-end oracle based consulting with efficiency and rapid response for quick fixing existing problems.';
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
