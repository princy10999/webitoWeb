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
    $title = 'Hire Python Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Python Web Development Company';
    $slide1title = 'Python Web Development Expertise';
    $slide1desc = 'We are the best Python web development company having expertise in popular Python web app development frameworks like Django, Turbogears, Web2Py, Flask, Pyramid, etc. to develop business intelligence software, data analytic systems, dynamic websites and applications. Our Python programmers also are masters in delivering Raspberry Pi solutions and integration with software and IoT applications to deliver best-in-class automated solutions.';
    $slide1alt = 'Python Web Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
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
    $title = 'Top Python Web Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Prototype Development';
    $slide1desc = 'We build dynamic and scalable prototypes leveraging expert Python development services using Django & other frameworks.';

    $slide2title = 'Python Web Development';
    $slide2desc = 'Hire dedicated Python developers to get a product with dynamic front-end and stunning UI/UX that will take your business to the next level.';

    $slide3title = 'IoT Application Development';
    $slide3desc = 'Our industrial experience & tech expertise in Raspberry Pi / Arduino help in transforming client ideas into automated solutions.';

    $slide4title = 'Back-end System Development';
    $slide4desc = 'We simplify complex back-end systems that integrate perfectly with front-end applications for day-to-day business needs.';

    $slide5title = 'Software/ Version Migration';
    $slide5desc = 'Migration of older Python version to the latest 3.7.2 along with Python to Jython, PHP, ASP.NET, Java to Python and vice versa.';

    $slide6title = 'Maintenance & Support';
    $slide6desc = 'We value clients. By hiring Python development services, get maintenance and support with quick turnaround time.';
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
