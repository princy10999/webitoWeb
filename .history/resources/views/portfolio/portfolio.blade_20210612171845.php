@extends('master')
@section('portfoliocontent2')
    <section class="portfolio-section">
        <div class="container portfolio-title">
            <div class="title">Our Portfolio</div>
            <div class="subtitle"> Our work defines us. </div>
        </div>
    </section>
@endsection
@section('portfoliocontent')
    <link rel="stylesheet" href="../assets/css/portfolio.css" />
    <link rel="stylesheet" type="text/css" href="../assets/css/lightslider.css" />
    <link rel="stylesheet" href="<?php echo asset('css/sass.css'); ?>">

    <!--Jquery-->
    <script type="text/javascript" src="/assets/js/JQuery3.3.1.js"></script>
    <script type="text/javascript" src="/assets/js/lightslider.js"></script>

    <style>
        body {
      background: grey;
      padding-top: 2rem;
    }

    .card-img-top {
      width: 100%;
      border-top-left-radius: calc(.25rem - 1px);
      border-top-right-radius: calc(.25rem - 1px);
    }
    </style>

    <script>
        $(document).ready(function($) {
          $('.card-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [{
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
               breakpoint: 400,
               settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }]
        });
    });
    </script>
    <div class="container">
        <div class="card-slider">
          <div class="col-lg-12">
            <div class="card w-100">
              <img class="card-img-top" src="https://picsum.photos/seed/picsum/200/200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card">
              <img class="card-img-top" src="https://picsum.photos/seed/picsum/200/200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card w-100">
              <img class="card-img-top img-fluid" src="https://picsum.photos/seed/picsum/200/200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card w-100">
              <img class="card-img-top" src="https://picsum.photos/seed/picsum/200/200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card w-100">
              <img class="card-img-top" src="https://picsum.photos/seed/picsum/200/200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div container >
        <div class="center-text">
            <h2>APP</h2>
        </div>
    </div>






    <section>

        <div class="container1">
            <!--slider------------------->
            <ul id="autoWidth1" class="cs-hidden">
                <!--1------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <a href="/portfolio_page" class="marvel">E-Khedut</a>
                        <!--model-->
                        <img src="../assets/img/Portfolio/app/Mockup.png" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/AntMan-logo.jpg" class="logo" width="100px" style="height: auto;"> --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--2------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Explore</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/app/Vishwakarma_app.png" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Deadpool-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--3------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Corona Tracker</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/4.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/SpiderMan-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--4------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Food Recipe</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/5.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Venom-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--5------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">The Barber.</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/6.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Thor-logo.jpg" class="logo"> --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--6------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Peter Parker</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/7.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/IronMan-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>


    <!--Second slider------------------->

    <div container >
        <div class="center-text">
            <h2>WEB SITE</h2>
        </div>
    </div>
    <section>
        <div class="container1">
            <!--slider------------------->
            <ul id="autoWidth2" class="cs-hidden">
                <!--1------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">E-Khedut</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/1.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/AntMan-logo.jpg" class="logo" width="100px" style="height: auto;"> --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--2------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Explore</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/2.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Deadpool-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--3------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Corona Tracker</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/4.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/SpiderMan-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--4------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Food Recipe</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/5.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Venom-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--5------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">The Barber.</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/6.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Thor-logo.jpg" class="logo"> --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--6------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Peter Parker</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/7.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/IronMan-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>


    <!--Third slider------------------->

    <div container >
        <div class="center-text">
            <h2>UI/UX</h2>
        </div>
    </div>
    <section>
        <div class="container1">
            <!--slider------------------->
            <ul id="autoWidth3" class="cs-hidden">
                <!--1------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">E-Khedut</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/1.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/AntMan-logo.jpg" class="logo" width="100px" style="height: auto;"> --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--2------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Explore</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/2.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Deadpool-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--3------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Corona Tracker</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/4.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/SpiderMan-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--4------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Food Recipe</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/5.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Venom-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--5------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">The Barber.</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/6.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/Thor-logo.jpg" class="logo"> --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
                <!--6------------------------------>
                <li class="item-a">
                    <!--slider-box1-->
                    <div class="box1">
                        <p class="marvel">Peter Parker</p>
                        <!--model-->
                        <img src="../assets/img/Portfolio/img/7.jpg" class="model">
                        <!--details-->
                        <div class="details">
                            <!--logo-character-->
                            {{-- <img src="../assets/img/Portfolio/img/IronMan-logo.jpg" class="logo" > --}}
                            <!--character-details-->
                            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens
                                How MaKE him will be ie.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>


    <!--slider ends------------------->




    <script src="/assets/js/script.js" type="text/javascript"></script>
@endsection