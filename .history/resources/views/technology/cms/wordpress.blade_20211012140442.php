@extends('master')
@section('mobile-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Wordpress Development Company | Website Services Providers';
    $metacontent = 'We are a leading WordPress development services company in India offering expert WordPress developers to hire for WordPress plugin & theme development services.';
    $metaname = 'Wordpress Web Development Company - Webito Infotech';
    $metaproperty = 'Webito Infotech - Wordpress Web Development Company';
    ?>
    <link rel="stylesheet" href="assets/css/flutter.css">

    {{-- Title-Section Start --}}

    <?php
    $title = 'WordPress Website Development Company';
    $desc = 'Give your business the ultimate content management system advantage by hiring India’s leading WordPress Website Development Company. Get custom WordPress Web development services including plugin & theme development with our team of Expert WordPress Developers available for hire.';
    $bgimage = 'assets/img/technologies/mobile/landing-pattern3.jpg';
    $image = 'assets/img/technologies/mobile/Tiifa.webp';
    ?>
    @include('technology.mobile.common.first-section')

    {{-- Title-section End --}}

    {{-- Hire-Section Start --}}

    <?php
    $title = 'Hire WordPress Developers';
    $subtitle = 'Create your own development team now';
    $desc = 'Everything starts with a ‘Hello’!! With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts. <br> If not, the first 7 days are on us.';
    ?>
    @include('technology.mobile.common.hire')

    {{-- Hire-Section End --}}

    {{-- Slider-Section Start --}}
    <?php
    $title = 'APPROACH';
    $subtitle = 'Top WordPress Website Development Company';
    $slide1title = 'WordPress Web Development Expertise';
    $slide1desc = 'We hold huge experience in WordPress web development services. We are a top WordPress web development company that has successfully delivered over 5000+ WordPress themes, plugins, and websites. As a result of our agile thinking and intrinsic tactics, we help you get custom and scalable WordPress solutions with responsive design, easy interface, quick navigation and enhanced flexibility for your business.';
    $slide1alt = 'WordPress Web Development Expertise';
    $slide1img = 'assets/img/technologies/mobile/flutter-app-development-expertise.svg';

    $slide2title = 'Quality Delivered in Time';
    $slide2desc = 'We put stringent quality checks at every level of our WordPress development services eco-system. Especially during WordPress website development, we deploy a dedicated QA team on each WordPress project that ensures bug-free and quality deliverables. We also integrate accessible source codes to address future WordPress customization requirements of your website by offering you quality WordPress solutions in viable time.';
    $slide2alt = 'Quality Delivered in Time';
    $slide2img = 'assets/img/technologies/mobile/uncompromised-quality-check.svg';

    $slide3title = 'Practical WordPress Solutions';
    $slide3desc = 'Being a top WordPress website development company, we help you scale your website in a way that you can achieve your goals instantly. We work closely with our clients to identify their business goals and define their requirements to design custom WordPress solutions with comprehensive business logic, efficient performance and technical scalability all at affordable rates. Hire WordPress experts from Webito Infotech at absolutely affordable costs for instant ROI.';
    $slide3alt = 'Practical WordPress Solutions';
    $slide3img = 'assets/img/technologies/mobile/flutter-app-solution.svg';

    $slide4title = 'Highly Skilled WordPress Developers';
    $slide4desc = 'Hire WordPress developers from us whose consistent and dedicated performances have made Webito Infotech the best WordPress web development company in India and USA. Their experience and creativity have helped us to deliver quality digital solutions that meet our clients expectations by getting the best of what WordPress has to offer. Rest assured you can unveil wordpress flexibility while we quickly get your websites up and running in no time.';
    $slide4alt = 'Highly Skilled WordPress Developers';
    $slide4img = 'assets/img/technologies/mobile/hire-flutter-developer.svg';
    ?>
    @include('technology.mobile.common.slider')
    {{-- Slider-Section End --}}

    {{-- Offer-Section Start --}}
    <?php
    $title = 'Custom WordPress Development Services';
    $subtitle = 'WHAT WE DO';

    $slide1title = 'WordPress Theme Customisation';
    $slide1desc = 'Hire WordPress Developers who design your website in various responsive themes and templates to drive more traffic to transform your business.';

    $slide2title = 'WordPress Plugin Development';
    $slide2desc = 'Get customized plugins for your websites uniqueness that goes beyond defaults. Enhance functionality with feature rich plugins.';

    $slide3title = 'PSD to WordPress Integration';
    $slide3desc = 'Hire WordPress experts who can easily integrate PSD files into WordPress for easy and hassle-free content management system.';

    $slide4title = 'WooCommerce Development';
    $slide4desc = 'We help clients to build online store based on WooCommerce with customizable plugins and themes powered by WordPress.';

    $slide5title = 'WordPress Migration Services';
    $slide5desc = 'Switch your existing website to WordPress platform for improving functionality without compromising on data and security.';

    $slide6title = 'WordPress Support & Maintenance';
    $slide6desc = 'Our MySQL experts provide end-to-end consultation services to ensure a quality website or application that meets business goals.';
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
