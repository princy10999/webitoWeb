@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Joomla Web Development Company India | Joomla CMS Development';
    $metacontent = 'Experts in various CMS frameworks to deliver smooth software functionality with automation, collaboration, tools integration, and business processes.';
    $metaname = 'Joomla Web Development Company India | Joomla CMS Development - Webito Infotech';
    $metaproperty = 'Webito Infotech - Joomla Web Development Company India';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'Enhancing Web Functionality with Joomla CMS';
    $desc = 'As a Leading Joomla Web Development Company, IndiaNIC helps you benefit from this open-source content management system along with custom Joomla component development to get a highly scalable Joomla website for your business.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern3.jpg';
    $image = 'assets/img/technologies/mobile/AaravStar.webp';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire Joomla Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Leading Joomla Web Development Company';
    $slide1title = 'Skilful Joomla Expertise';
    $slide1desc = 'Joomla’s impeccable CMS  can offer you highly customized web solutions to stay connected with a vast customer base and we help you do just that. Our experience in designing  and developing numerous Joomla websites with user friendly features , latest extensions and components makes us a renowned Joomla web development company across the globe.';
    $slide1alt = 'Skilful Joomla Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every level of our Joomla web development process. Specially during development, we deploy a dedicated QA team on each project that ensures bug-free, quality Joomla development. We boast an excellent track record of completing Joomla projects within a dedicated budget and deadline.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical Joomla solutions';
    $slide3desc = 'We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget focused strategy for any customised Joomla web application whether you’re a startup, a business or an enterprise takes you one step at a time. Rest assured you can  the best Joomla industry expertise with our standardised process.';
    $slide3alt = 'Practical Joomla solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Skilled Joomla Developers';
    $slide4desc = 'Our Joomla developers are well-versed with all necessary updates and trends in technologies. Together we ensure top-notch Joomla web application development with all its benefits like custom components, easily extendable plugins, efficient testing methods & clear coding to build a feature rich and platform and help you take your business forward.';
    $slide4alt = 'Skilled Joomla Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Customised Joomla Web Development Services at Competitive Rates';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'Joomla Website Design';
    $slide1desc = 'Contemporary website design and redesign that compliments your business and increases brand likeability.';

    $slide2title = 'Joomla Components Development';
    $slide2desc = 'Benefit from various Joomla components development to transform your business website.';

    $slide3title = 'Joomla Custom Modules';
    $slide3desc = 'Highly robust and scalable Joomla website to expand your business reach and get a competitive advantage.';

    $slide4title = 'API Integration';
    $slide4desc = 'We offer powerful API integration that enables website or app to use every aspect of Umbraco CMS for superior user experience.';

    $slide5title = 'Umbraco Support & Maintenance';
    $slide5desc = 'Our Umbraco development ecosystem offers round the clock Umbraco support & maintenance to our esteemed clients.';

    $slide6title = 'Enterprise-Grade Solutions';
    $slide6desc = 'We develop highly functional, robust and scalable enterprise level CMS solutions which are bespoke to meet exact business requirements.';
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
