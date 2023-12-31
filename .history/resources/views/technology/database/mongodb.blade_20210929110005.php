@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'MongoDB Database App Development';
    $desc = 'Expanding the horizons of client business by empowering scalability for years now, Webito Infotech stays at the forefront in delivering expert MongoDB development services. Hire experienced MongoDB developers from a top MongoDB database development company to develop scalable and next-gen web apps and mobile apps.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire MongoDB Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top MongoDB Development Company';
    $slide1title = 'Expertise of MongoDB Developers';
    $slide1desc = 'We are a leading MongoDB development company that is proficient in working with JavaScript-based web tools and technologies, that allow languages like Ruby, Node.JS, AngularJS, HTML, and Python to communicate with, write data to and read data from MongoDB along with Android and iOS IDEs.';
    $slide1alt = 'Expertise of MongoDB Developers';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of MongoDB development services. Hire MongoDB development services from Webito Infotech that include code review from MongoDB experts to ensure that the end product is fully functional, secure, flawless, and user-friendly.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Powerful MongoDB Solutions';
    $slide3desc = 'We have experience in delivering solutions that involve real-time analytics, product data management, CMS and eCommerce operations. With MongoDB Development, we create mobile apps at a faster rate with any feature, data, and any device which scales to a large number of users.';
    $slide3alt = 'Powerful MongoDB Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire MongoDB Developers';
    $slide4desc = 'We at Webito Infotech offer flexible engagement models to hire MongoDB developers as per business needs leveraging full-fledged MongoDB development services. Contact us now to hire MongoDB developers in India to build a high performing web and mobile applications at the best rates.';
    $slide4alt = 'Hire MongoDB Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our MongoDB Database Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'MongoDB Database Implementation';
    $slide1desc = 'We offer MongoDB implementation services for large scale document management, real-time processing, and transformation.';

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
