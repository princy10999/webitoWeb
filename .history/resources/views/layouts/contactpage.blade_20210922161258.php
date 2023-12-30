@extends('master')
@section('contectuspage-contain')
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
            <img src=" /assets/img/index/illustration/contact-hero.png " alt="" ;>
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
