@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Top Hudson App Automation Testing Company | Hire expert Hudson developers';
    $metacontent = 'Hire Hudson Developers from a top DevOps services providing company, who have expertise in top automation tools for flawless web & mobile app development.';
    $metaname = 'Top Hudson App Automation Testing | Hire expert Hudson developers';
    $metaproperty = 'Webito Infotech - Top Hudson App Automation Testing Company ';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'Continuous Integration with Hudson App Testing';
    $desc = 'Hire expert Hudson developers from Webito Infotech to start defining and executing tests on-the-go, from development stages to production. In the agile software development environment, Continuous Integration (CI) enhances overall process and software quality. Our expert Hudson CI services will help to speed up the error-free development process while avoiding last-hour chaos.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern1.jpg';
    $image = 'assets/img/technologies/mobile/77.png';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Hudson Testers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top Hudson App Automation Testing Company';
    $slide1title = 'Hudson Testers Expertise';
    $slide1desc = 'Hire Azure developers from Webito Infotech who have experience to build, debug, deploy, diagnose, and manage apps that span IaaS and PaaS. Our Azure developers also have expertise in tools and technologies like Azure Stack, Azure SDK templates, Visual Studio, PowerShell, Storage Explorer, Azure CLI, etc. along with Java, Node, Python, Ruby, PHP, or .NET to build cloud apps.';
    $slide1alt = 'Hudson Testers Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Uncompromised Quality Checks';
    $slide2desc = 'To ensure quality deliverables, our QA ( Quality Analysts) perform dedicated and stringent quality checks at every level of Microsoft Azure development. Azure cloud computing & Azure development services at Webito Infotech include code review from Azure experts to ensure a complete, robust and flexible cloud platform to manage your business applications.';
    $slide2alt = 'Uncompromised Quality Checks';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Azure Cloud Solutions';
    $slide3desc = 'Hire our end-to-end Azure Cloud development services that include Azure consultation, strategic implementation, development, migration and management. We have years of experience in developing custom applications with Azure cloud integration for an array of industries like Education, eCommerce, Healthcare & Fitness, Media, Transportation & Logistics, etc.';
    $slide3alt = 'Azure Cloud Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Hire Azure Developers';
    $slide4desc = 'We at Webito Infotech offer flexible engagement models to hire Azure developers as per business needs leveraging full fledged Azure development services. Hire Microsoft Azure developers in India and USA to build high performing applications at the best rates. We implement best practices of Azure cloud implementation to help fulfil your strategic business objectives.';
    $slide4alt = 'Hire Azure Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Our Azure Cloud Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Cloud based Web Development';
    $slide1desc = 'We develop bespoke websites to a highly scalable cloud environment integrated with flexible Windows Azure services.';

    $slide2title = 'Azure Cloud Development';
    $slide2desc = 'Our Azure developers create infinitely scalable applications and services using the technology of your choice.';

    $slide3title = 'Azure Web App Development';
    $slide3desc = 'We offer successful deployment of web apps to cloud to enhance user experience and save infrastructure overhead costs.';

    $slide4title = 'Enterprise Mobility Solutions';
    $slide4desc = 'Azure experts help enterprises with our amazing mobile apps with MBaaS on Cloud to attain ‘Enterprise wide Mobility.';

    $slide5title = 'Azure Migration Solutions';
    $slide5desc = 'We help businesses to migrate any size of data to Azure cloud with optimum data security with no downtime.';

    $slide6title = 'Azure Cloud Consultation';
    $slide6desc = 'Hire Azure cloud consultants who provide innovative Cloud Solutions establishing a solid foundation for the cloud initiative.';
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
