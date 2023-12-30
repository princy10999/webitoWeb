@extends('master')
@section('mobile-contain')
    <link rel="stylesheet" href="assets/css/flutter.css">
    {{-- <link rel="stylesheet" href="assets/css/flutter2.css"> --}}

    {{-- Title-Section Start --}}

    <?php
    $title = 'Python Web Application Development';
    $desc = 'We are the best fit to build innovative web applications leveraging Python - a powerful, flexible and dynamic scripting language. Webito Infotech, a prominent Python web development company, has a pool of experienced and certified Python developers. Hire Python developers from Webito Infotech who are well versed in all the trending front-end and back-end technologies, Python development frameworks, Machine Learning (ML) algorithms to develop and integrate robust automation solutions.';
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
    $slide2desc = 'Webito Infotech is a leading Java web app development company where our holistic approach and proven methodology in developing customized applications, enterprise-grade solutions and software using Java and J2EE technology has delivered remarkable solutions to our valuable clients. We put stringent quality checks at every level of our process. Especially during Java software development, we deploy a dedicated QA team on each project that ensures bug-free, quality Java development services.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Java Solutions';
    $slide3desc = 'We’ve developed many robust and customized web apps using Java Framework that increase scalability and viability making developing practices cost-efficient. Using our Java software appl development experience, we also help you scale your idea in a way that you can achieve your goals. Instead of big investments into a directionless plan, our budget-focused plan for any idea whether you’re a startup or an enterprise takes you one step at a time.';
    $slide3alt = 'Practical Java Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Java Developers';
    $slide4desc = 'Our expert Java developers have been building highly efficient Java solutions for a very long time. They are well versed with all necessary updates and trends in technologies to ensure delivery of top-notch Java application development services in various verticals of Java and J2EE. They are adept and their experience in successfully building desirable Java platforms will take your business to the next level.';
    $slide4alt = 'Hire Java Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Java Web App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Custom Java Development';
    $slide1desc = 'Advanced Java/J2EE programming services deployed for collaborative and integrated customization of Java applications.';

    $slide2title = 'Java Web Development';
    $slide2desc = 'Build futuristic websites for several industry verticals like healthcare, automobile, finance, retail and many more.';

    $slide3title = 'Java Software Development';
    $slide3desc = 'Impeccable software solutions to automate tedious workflow processes and management related tasks.';

    $slide4title = 'Java CMS Development';
    $slide4desc = 'Powerful Java CMS for content creators and developers to create multi channel websites for various business.';

    $slide5title = 'Spring MVC Development';
    $slide5desc = 'Model-View-Controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.';

    $slide6title = 'Java Migration Services';
    $slide6desc = 'Switch your existing web application to Java framework without compromising on data and security.';
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
