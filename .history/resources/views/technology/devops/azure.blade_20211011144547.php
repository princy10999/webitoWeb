@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Azure Cloud Services & Solutions Company | Hire Azure Developers India';
    $metacontent = 'Webito Infotech is the best Microsoft Azure Cloud services & solutions company in USA to hire expert Azure developers to build web apps via a cloud-based platform.';
    $metaname = 'Microsoft Azure Development Company';
    $metaproperty = 'Webito Infotech - Microsoft Azure Development Company';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'Microsoft Azure Cloud Services & Solutions';
    $desc = 'Leveraging Microsoft Azure cloud computing platform, we build multi platform, scalable and powerful enterprise-grade solutions. We are a leading Microsoft Azure development company to hire expert Azure developers to build feature-rich web applications using a complete cloud based platform using Windows Azure. Get in touch with us to know about our end-to-end Microsoft Azure development and consultation services.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/77.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Azure Cloud Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Azure Cloud Development Company';
    $slide1title = 'Azure Cloud Development Expertise';
    $slide1desc = 'Hire Azure developers from Webito Infotech who have experience to build, debug, deploy, diagnose, and manage apps that span IaaS and PaaS. Our Azure developers also have expertise in tools and technologies like Azure Stack, Azure SDK templates, Visual Studio, PowerShell, Storage Explorer, Azure CLI, etc. along with Java, Node, Python, Ruby, PHP, or .NET to build cloud apps.';
    $slide1alt = 'Azure Cloud Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of Microsoft Azure development. Azure cloud computing & Azure development services at Webito Infotech include code review from Azure experts to ensure a complete, robust and flexible cloud platform to manage your business applications.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'AWS Cloud Solutions';
    $slide3desc = 'Hire our end-to-end AWS cloud application development services that include custom AWS migration, AWS management and AWS consultation. We have years of experience in developing bespoke web and mobile apps with AWS cloud services integration for an array of industries like Education, eCommerce, Healthcare & Fitness, Media, Transportation & Logistics, etc.';
    $slide3alt = 'AWS Cloud Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire AWS Architects';
    $slide4desc = 'We at Webito Infotech offer flexible engagement models to hire AWS developers as per business needs leveraging full fledged AWS cloud development services. Hire AWS engineers in India and USA to build high performing applications at the best rates. We implement best practices of AWS implementation to help fulfil your strategic business objectives.';
    $slide4alt = 'Hire AWS Architects';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our AWS Cloud App Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'AWS Cloud Development';
    $slide1desc = 'We adhere to state-of-the-art methodologies and industry standards to develop scalable and bespoke AWS cloud solutions.';

    $slide2title = 'AWS IoT Development';
    $slide2desc = 'Using AWS IoT SDK, we develop IoT apps for real-time data sharing with AWS cloud via MQTT, HTTP, WebSockets protocols.';

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
