@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Java Web Application Development';
    $desc = 'IndiaNIC is a top Java Web Application Development Company in India & USA, providing wide-ranging Java Web & Application Development Services. As a top Java software development company, we offer bespoke Java solutions using technological advancements in J2EE and J2ME frameworks.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/1.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Java Programmers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Java Web App Development Company';
    $slide1title = 'Expertise in Java Development';
    $slide1desc = 'As Java is one of the most reliable server-side scripting languages in the tech domain, our quality Java development services let you develop highly customizable and secure Java web applications for your complex business operations. Being a leading Java software development company, our experience with working in all major Java frameworks like Spring, JBoss, Hibernate Apache Tomcat has helped clients across the globe in meeting their business goals.';
    $slide1alt = 'Expertise in Java Development';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'IndiaNIC is a leading Java web app development company where our holistic approach and proven methodology in developing customized applications, enterprise-grade solutions and software using Java and J2EE technology has delivered remarkable solutions to our valuable clients. We put stringent quality checks at every level of our process. Especially during Java software development, we deploy a dedicated QA team on each project that ensures bug-free, quality Java development services.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Java Solutions';
    $slide3desc = 'Using our expert ASP.NET web app development services, we’ve developed many robust and customized enterprise web apps and made much of the code redundant. While increasing the scalability and viability of your project, you can develop cost-efficient solutions with the help of the various custom libraries that Asp.Net MVC technology has to offer.';
    $slide3alt = 'Practical Java Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Highly Skilled ASP.NET Developers';
    $slide4desc = 'Hire expert ASP.NET developers who have been building highly efficient web solutions for a very long time. They’ve tried and tested web app development practices that can assist you in leveraging all the benefits of the ASP.NET technology along with an active community of ASP.NET developers.';
    $slide4alt = 'Highly Skilled ASP.NET Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our ASP.NET Web Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'ASP.NET MVC Development';
    $slide1desc = 'Creating high impact, user-centered websites and applications in different frameworks like Sharepoint and ASP.NET MVC.';

    $slide2title = 'Enterprise ASP.NET Web Solutions';
    $slide2desc = 'Hire ASP.NET developers who will help you develop a top-notch solution for your big enterprise in the most secure and fastest way of using ASP.NET advantage.';

    $slide3title = 'Robust ASP.NET CRM Apps';
    $slide3desc = 'We offer ASP.NET powered CRM app development that boots business productivity, streamline processes, and build better customer relationships.';

    $slide4title = 'UI/UX Design';
    $slide4desc = 'Along with innovate UI get compelling and functional UX design to transform your ideas into meaningful user stories.';

    $slide5title = 'Version Migration';
    $slide5desc = 'Our expertise helps you integrate ASP.NET with other Microsoft technologies without compromising on data and security.';

    $slide6title = 'Support & Maintenance';
    $slide6desc = 'We provide useful ASP.NET consulting based on your personalised business requirements, wherever and whenever you want it.';
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
