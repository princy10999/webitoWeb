@extends('master')
@section('contectuspage-contain')
    <!-- Meta Tag  -->
    <?php
    $seotitle = 'Discuss your projects with our Technology experts!';
    $metacontent = 'Your success is our delight ! get a free technology and business consultation from our panel of experts in the domains of mobile apps, web, game and UX / UI.';
    $metaname = 'Webito Infotech, Webito, jobs, careers, carreers, carrer, carrers, career, carreer, employment employement, employemnt, emolyment, job opportunity/opportunities,  entry-level, experienced professional, seekers, job seekers, students, university, college, value, purpose, innovation, Webito Infotech jobs blog, Webito Infotech Jobs Global, cognitive, Watson, explore jobs, new collar, skills, talent, programs, programme, partner, partnership, work, diverse, diversity, inclusive, inclusivity, inclusion, benefits, corporate citizen, future, STEM, Lime, GEM, engineers, MBAs, transform, transformation, P-Tech, veteran/s, veteran 2K, hiring initiative, potential, science';
    $metaproperty = 'Webito Infotech - TEARMS OF USE';
    ?>
    <style>
        form {
            padding: 2.3rem 2.2rem;
            z-index: 10;
            overflow: hidden;
            position: relative;
        }

    </style>
    <section>
        <div class="contactbg wow lightSpeedIn ">
            <img src=" /assets/img/index/illustration/contact-hero.webp " alt="Contact Webito Infotech" ;>
            <div class="imgtext">
                <div class="centered">
                    Contact Us
                </div>
                <div class="bottom-left">Let’s talk about your website or project. Send us a message and we will be
                    in touch within one business day.</div>
            </div>
        </div>
    </section>

    @include('layouts.contact')

@endsection
