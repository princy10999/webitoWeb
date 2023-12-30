@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Amazon AWS Cloud Computing & Development';
    $desc = 'Webito Infotech is a leading DevOps consultation and AWS cloud solutions development company that offers affordable, reliable, flexible and scalable cloud solutions. Hire AWS developers who have years of experience to provide AWS cloud application development, system implementation, integration and consultation services surrounding AWS cloud ecosystem for enhanced business solutions.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/77.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire AWS Architects';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Trusted AWS Cloud Solutions Development Company';
    $slide1title = 'AWS Cloud Services Expertise';
    $slide1desc = 'Our AWS developers use cutting-edge technologies to provide innovative Amazon cloud solutions. Our expert AWS cloud solutions development team has in-depth experience and required proficiency in working with AWS tools and technologies like Amazon S3, Amazon EC2, AWS Lambda, AWS Cloud9, Amazon Glacier, Amazon SQS, Amazon RDS, Amazon CloudFront, etc. to deliver end-to-end AWS development services.';
    $slide1alt = 'AWS Cloud Services Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'Being a trusted AWS cloud solutions development company in India & USA, our key monitoring policies include keeping an eye on both, pre-production and production environment along with Application Monitoring Tools (APM) that covers Web, API and Infrastructure monitoring. Our team mainly focuses on scaling, performance, quality of a product to give maximum user satisfaction.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'AWS Cloud Solutions';
    $slide3desc = 'Hire our end-to-end AWS cloud application development services that include custom AWS migration, AWS management and AWS consultation. We have years of experience in developing bespoke web and mobile apps with AWS cloud services integration for an array of industries like Education, eCommerce, Healthcare & Fitness, Media, Transportation & Logistics, etc.';
    $slide3alt = 'AWS Cloud Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire AWS Architects';
    $slide4desc = 'We at IndiaNIC offer flexible engagement models to hire AWS developers as per business needs leveraging full fledged AWS cloud development services. Hire AWS engineers in India and USA to build high performing applications at the best rates. We implement best practices of AWS implementation to help fulfil your strategic business objectives.';
    $slide4alt = 'Hire AWS Architects';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our AWS Cloud App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Hybrid apps with HTML5';
    $slide1desc = 'Create a multiplatform web app using HTML5 with integrated elements of native and web applications to support cross platform functionality.';

    $slide2title = 'jQuery & CSS3 Development';
    $slide2desc = 'Simple implementation of dynamic components and animations for your business website to make them look futuristic.';

    $slide3title = 'HTML5 Plugin Development';
    $slide3desc = 'Extend the functionality of your site as per your business requirements with custom HTML5 plugins and modules installation.';

    $slide4title = 'HTML5 Migration';
    $slide4desc = 'Switch your existing website without compromising your data and security using our HTML5 migration and consultation services.';

    $slide5title = 'PSD to HTML5';
    $slide5desc = 'Convert your PSD files into HTML5 web pages with attractive and appealing themes and web design.';

    $slide6title = 'Support and Maintenance';
    $slide6desc = 'Extended support and maintenance along with upgradation of your HTML5 website, wherever and whenever you want it.';
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
