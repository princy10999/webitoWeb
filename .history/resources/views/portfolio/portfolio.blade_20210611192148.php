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
    html, body{
  margin: 0;
  padding: 0;
}
.wrapper{
  width:100%;
  padding-top: 20px;
  text-align:center;
}
h2{
  font-family:sans-serif;
  color:#fff;
}
.carousel{
  width:90%;
  margin:0px auto;
}
.slick-slide{
  margin:10px;
}
.slick-slide img{
  width:100%;
}
.slick-prev, .slick-next{
  background: #000;
  border-radius: 15px;
  border-color: transparent;
}
.card{
  border: 2px solid #fff;
  box-shadow: 1px 1px 15px #ccc;
}
.card-body{
  background: #fff;
  width: 100%;
  vertical-align: top;
}
.card-content{
  text-align: left;
  color: #333;
  padding: 15px;
}
.card-text{
  font-size: 14px;
  font-weight: 300;
}
</style>

<script>
    $(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});
</script>

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
                        <a href="" class="marvel">E-Khedut</a>
                        <!--model-->
                        <img src="../assets/img/Portfolio/app/JKR_Dark.png" class="model">
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
                        <img src="../assets/img/Portfolio/app/JKR_Light.png" class="model">
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


    <section>

<div class="wrapper">
    <h2>Slick Carousel Example<h2>
      <div class="carouse2l">
        <div>
          <div class="card">
            <div class="card-header">
              <img src="https://lorempixel.com/200/200/abstract/1">
            </div>
            <div class="card-body">
              <div class="card-content">
                <div class="card-title">This is the First slider</div>
                <div class="card-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-header">
              <img src="https://lorempixel.com/200/200/abstract/2">
            </div>
            <div class="card-body">
              <div class="card-content">
                <div class="card-title">This is the Second slider</div>
                <div class="card-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-header">
              <img src="https://lorempixel.com/200/200/abstract/3">
            </div>
            <div class="card-body">
              <div class="card-content">
                <div class="card-title">This is the Third slider</div>
                <div class="card-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-header">
              <img src="https://lorempixel.com/200/200/abstract/4">
            </div>
            <div class="card-body">
              <div class="card-content">
                <div class="card-title">This is the Fourth slider</div>
                <div class="card-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-header">
              <img src="https://lorempixel.com/200/200/abstract/5">
            </div>
            <div class="card-body">
              <div class="card-content">
                <div class="card-title">This is the Fifth slider</div>
                <div class="card-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-header">
              <img src="https://lorempixel.com/200/200/abstract/6">
            </div>
            <div class="card-body">
              <div class="card-content">
                <div class="card-title">This is the Sixth slider</div>
                <div class="card-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>


    <script src="/assets/js/script.js" type="text/javascript"></script>
@endsection
