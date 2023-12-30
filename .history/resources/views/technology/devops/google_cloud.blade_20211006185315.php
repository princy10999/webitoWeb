@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Google Cloud Solutions to build Scalable Apps';
    $desc = 'Hire Google Cloud developers from Webito Infotech to develop, integrate and manage highly scalable, robust applications on Google Cloud. Webito Infotech is a leading Google Cloud development company offering end-to-end Google Cloud development services from Google Cloud Platform (GCP) consultation, system integration and implementation to Google Cloud development for all businesses.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern2.jpg';
    $image = 'assets/img/technologies/mobile/78.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Google Cloud Architects';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'WHY WE ARE RENOWNED AS A';
    $subtitle = 'Top Google Cloud Development Company';
    $slide1title = 'Google Cloud Development Expertise';
    $slide1desc = 'Our expert Google Cloud development team has in-depth experience and required proficiency in working with Java, PHP, and Python along with Google Cloud technologies like Compute Engine, App Engine, Container Engine, Cloud SQL, bIG query, etc. to deliver comprehensive Google Cloud Development Services to empower businesses to unlock new possibilities. ';
    $slide1alt = 'Google Cloud Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'Our key monitoring policies include keeping an eye on both, pre-production and production environment along with Application Monitoring Tools (APM) that covers Web, API and Infrastructure monitoring. Our team mainly focus on scaling, performance, quality of a product to give maximum user satisfaction.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Google Cloud Solutions';
    $slide3desc = 'Hire our end-to-end Google Cloud development services that include GCP consultation, strategic implementation, development, migration and management. We have years of experience in developing custom applications with GCP integration for an array of industries like Education, eCommerce, Healthcare & Fitness, Media, Transportation & Logistics, etc.';
    $slide3alt = 'Google Cloud Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Google Cloud Developers';
    $slide4desc = 'We at Webito Infotech offer flexible engagement models to hire Google Cloud developers as per business needs leveraging full fledged Google Cloud development services. Hire Google Cloud developers in India and USA to build high performing applications at the best rates. We implement best practices of Google Cloud implementation to help fulfil your strategic business objectives.';
    $slide4alt = 'Hire Google Cloud Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Trusted Google Cloud Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Google Cloud Development';
    $slide1desc = 'We adhere to state-of-the-art methodologies and industry standards to develop scalable and bespoke Google Cloud solutions.';

    $slide2title = 'Google Cloud IoT';
    $slide2desc = 'We provide fully managed Google Cloud integration with IoT and ML based apps with speed, security and scalability.';

    $slide3title = 'AWS Migration';
    $slide3desc = 'We help businesses to migrate any size of data to AWS cloud based server with optimum data security with no downtime.';

    $slide4title = 'AWS Consultation';
    $slide4desc = 'Hire AWS consultants who provide innovative AWS Cloud Solutions establishing a solid foundation for the cloud initiative.';

    $slide5title = 'Maintenance & Support';
    $slide5desc = 'Our AWS experts provide ongoing support to offer strategic solutions for enhanced ROI through AWS professional services.';

    $slide6title = 'AWS Managed Services';
    $slide6desc = 'We are a leading AWS services providers with end-to-end AWS cloud solutions to build, scale, optimize and manage cloud apps.';
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
