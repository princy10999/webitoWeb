@extends('master')
@section('teampage-contain')
    <?php
    $seotitle = 'Team of Webito Infotech Software development Company';
    $metacontent = 'Top Employees who can Developed Web, Mobile App and Custom Software';
    $metaname = 'Software development Company, Application Development Company Team';
    $metaproperty = 'Webito Infotech - Transforming Ideas. Digitally.';
    ?>
    <link rel="stylesheet" type="text/css" href="../../assets/css/team.css" />
    <script>
        !(function() {
            document.documentElement.className = "js";
            var e, t;
            ((t = document.createElement("style")).innerHTML =
                "root: { --tmp-var: bold; }"),
            document.head.appendChild(t),
                (e = !!(
                    window.CSS &&
                    window.CSS.supports &&
                    window.CSS.supports("font-weight", "var(--tmp-var)")
                )),
                t.parentNode.removeChild(t),
                e ||
                alert(
                    "Please view this demo in a modern browser that supports CSS Variables."
                );
        })();
    </script>
    {{-- </head> --}}
    {{-- <body class="loading"> --}}
    <main id="team-page-main-sec">
        {{-- <div class="message">
      Please view this demo on a desktop to see the effect.
    </div>
    <div class="frame">
      <div class="frame__title-wrap">
        <h1 class="frame__title">3D Grid Interaction with Content Preview</h1>
      </div>
      <div class="frame__links">
        <a href="#"
          >Previous demo</a
        >
        <a href="#">Article</a>
        <a href="#">GitHub</a>
      </div>
    </div> --}}
        <div class="content">
            <h2 class="content__title">
                <span class="content__title-line content__title-line--1" data-splitting="">WEBITO</span>
                <span class="content__title-line content__title-line--2" data-splitting="">INFOTECH</span>
            </h2>
            <div class="grid">
                {{-- <a href="#preview-1" class="grid__item pos-1" data-title="<img src='../../assets/img/team/dr.strange.png'/>"
          ><div
            class="grid__item-img"
            style="background-image: url(../../assets/img/team/prachi.png)"
          ></div
        ></a> --}}
                {{-- <a href="#preview-2" class="grid__item pos-2" data-title="Procody X"
          ><div
            class="grid__item-img"
            style="background-image: url(../../assets/img/team/2.1da28664.jpg)"
          ></div
        ></a> --}}
                <a href="#preview-3" style="height: 110%;" class="grid__item pos-3"
                    data-title="<img src='../../assets/img/team/thanos.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/divyaraj.png)"></div>
                </a>
                <a href="#preview-4" class="grid__item pos-4" data-title="<img src='../../assets/img/team/ironman1.png'>">

                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/manav.png)"></div>
                </a>
                <a href="#preview-5" style="height: 110%;" class="grid__item pos-5"
                    data-title="<img src='../../assets/img/team/dr.strange.png'/>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/brijesh.png)"></div>
                </a>
                <a href="#preview-6" class="grid__item pos-6"
                    data-title="<img src='../../assets/img/team/black-widow.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/krishna.png)"></div>
                </a>
                <a href="#preview-7" style=" width: 95%;" class="grid__item pos-7"
                    data-title="<img src='../../assets/img/team/superman1.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/satyam.png)"></div>
                </a>
                <a href="#preview-8" style="height: 110%; " class="grid__item pos-8"
                    data-title="<img src='../../assets/img/team/black-panther.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/rushikesh.png)"></div>
                </a>
                <a href="#preview-9" style="height: 110%; width: 120%;" class="grid__item pos-9"
                    data-title=" <img src='../../assets/img/team/captain.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/chelsi.png)"></div>
                </a>
                {{-- <a href="#preview-10" class="grid__item pos-10" data-title="Resson"
          ><div
            class="grid__item-img"
            style="background-image: url(../../assets/img/team/manav.png)"
          ></div
        ></a> --}}
                {{-- <a href="#preview-11" class="grid__item pos-11" data-title="Atinkers"
          ><div
            class="grid__item-img"
            style="background-image: url(../../assets/img/team/manav.png)"
          ></div
        ></a> --}}
                {{-- <a href="#preview-12" class="grid__item pos-12" data-title="Twinhouse"
          ><div
            class="grid__item-img"
            style="background-image: url(../../assets/img/team/manav.png)"
          ></div
        ></a> --}}
                <a href="#preview-13" style="height: 90%; width: 90%;" class="grid__item pos-13"
                    data-title="<img src='../../assets/img/team/supergirl.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/shivani.png)"></div>
                </a>
                <a href="#preview-14" class="grid__item pos-14" data-title="<img src='../../assets/img/team/hulk.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/juli.png)"></div>
                </a>
                <a href="#preview-15" class="grid__item pos-15" data-title="<img src='../../assets/img/team/s1.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/jainish.png)"></div>
                </a>
                <a href="#preview-16" class="grid__item pos-16"
                    data-title="<img src='../../assets/img/team/wonderwomen1.png'>">
                    <div class="grid__item-img" style="background-image: url(../../assets/img/team/prachi.png)"></div>
                </a>
            </div>
            <div class="preview">
                <div class="preview__item" id="preview-1">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/prachi1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Mohanneles</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Acapulco, Mexico</span><span>15/05/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Had a barney with the inlaws a bit miffed pigeons in Trafalgar
                            Square nigh on't goggle box chav hard cheese old boy, marvelous
                            Moriarty pulled a right corker squiffy fork out, a tad
                            stupendous chaps doing my head in ee bah gum.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-2">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Procody X</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Bangkok, Thailand</span><span>22/02/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Houlligan pants pork dripping Moriarty ponce knackered wind up
                            treacle lad bugger, ridicule mince pies ridiculous knackered
                            munta tosser sorted it nonsense. Completely.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-3">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/divyaraj1.png)">
                        </div>
                    </div>
                    <h3 data-splitting="" class="preview__item-title">Divyaraj</h2>
                        <div class="preview__item-content">
                            <div class="preview__item-meta">

                                I enjoy what I do and love to do nothing in my spare time but I love to do nothing <br>
                                ..

                                {{-- <span>Berlin, Germany</span><span>16/05/2025</span> --}}
                            </div>
                            <p class="preview__item-description">

                                {{-- It's not my fault, I didn't do anything ... but we'll fix it! --}}
                            </p>
                            <button class="preview__item-info unbutton">+ Info</button>
                            {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                        </div>
                </div>
                <div class="preview__item" id="preview-4">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/manav1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Manav</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Berlin, Germany</span><span>26/06/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Manav, one of the co-founders heads the creative strategy at Webito Infotech.
                            One of the core pillars responsible for the process driven approach followed on every project
                            picked up
                            by Webito.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-5">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/brijesh1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Brijesh</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Lisbon, Portugal</span><span>09/12/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Brijesh is one of the co-founders heads the creative strategy at Webito Infotech. one of the
                            most understanding full-stack developer you're going to meet, ever. From technical, design, user
                            or client perspective — he's there for you, fully aware of the context of a project.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-6">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/krishna1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Krishna</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Lisbon, Portugal</span><span>09/12/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            She believes that everyone is unique in their own way , <br>
                            Silence is the most powerful Scream says Krishna , <br>
                            'A Flutter Developer working for cinderella shoes'.

                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-7">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/satyam1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Satyam</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Madrid, Spain</span><span>18/010/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            The most average person you have ever met <br>
                            Gamer by nature,he is a soft spoken developer who runs on wit and curiosity <br>
                            He believes that everyone is unique in their own way.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-8">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/rushikesh1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Rushikesh</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Berlin, Germany</span><span>03/09/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Rushikesh is the most understanding developer you're going to meet, ever -Just Kidding <br>
                            An introvert who is ready to take on the world one design at a time.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-9">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/chelsi1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Chelsi</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>London, United Kingdom</span><span>16/01/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Food and thoughtful conversations are the way to my heart. So we can have
                            thoughtful conversations about food. Eat, Sleep, Code and Repeat.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-10">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Resson</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            <span>Vienna, Austria</span><span>12/03/2025</span>
                        </div>
                        <p class="preview__item-description">
                            The chippy tally-ho The Hounds of Baskerville pot noodle 'ar kid
                            conked him one on the nose fancy a cuppa bowler hat doing my nut
                            in black cab, trouble and strife sausage roll damn conked him
                            one on the nose ponce.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        <button class="preview__item-button">Buy Tickets</button>
                    </div>
                </div>
                <div class="preview__item" id="preview-11">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Atinkers</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            <span>Berlin, Germany</span><span>22/08/2025</span>
                        </div>
                        <p class="preview__item-description">
                            Doing my nut in chav scouser cheesed off chav scally, Sherlock
                            brown sauce god save the queen shortbread, cobbles pigeons in
                            Trafalgar Square pork dripping.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        <button class="preview__item-button">Buy Tickets</button>
                    </div>
                </div>
                {{-- <div class="preview__item" id="preview-12">
          <button class="preview__item-back unbutton">
            <span>Back</span>
          </button>
          <div class="preview__item-imgwrap">
            <div
              class="preview__item-img"
              style="background-image: url(../../assets/img/team/12.c107ec1c.jpg)"
            ></div>
          </div>
          <h2 data-splitting="" class="preview__item-title">Twinhouse</h2>
          <div class="preview__item-content">
            <div class="preview__item-meta">
              <span>Berlin, Germany</span><span>29/07/2025</span>
            </div>
            <p class="preview__item-description">
              Collywobbles completely starkers 221B Baker Street terribly
              round our gaff Shakespeare a tad, driving a mini have a gander
              could be a bit of a git nose rag. Cornish pasty old girl up the
              duff ey up every.
            </p>
            <button class="preview__item-info unbutton">+ Info</button>
            <button class="preview__item-button">Buy Tickets</button>
          </div>
        </div> --}}
                <div class="preview__item" id="preview-13">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/shivani1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Shivani</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Sydney, Australia</span><span>19/07/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Shivani believes in "Live like an adult, Think like a child" philosophy and she
                            is fashionabaly right and good listener also, She understands everything but doesn't react at
                            all.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-14">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/hiren.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Hiren</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Paris, France</span><span>22/06/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Not just a problem solver but also an Jhonny lover. <br>
                            I like to read and annoy people.

                            {{-- With less beard Responsibility comes great :) <br>
              Please can you help me with my beard because my friends are tired of my Girlfriend staring at them.. <br> --}}

                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-15">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/jainish1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Jainish</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Belgrade, Serbia</span><span>04/11/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Currently pursuing his PhD in overthinking. <br>
                            Our one of a kind Colorblind Designer,Jainish loves to travel and imbibe inspiration from mother
                            nature. <br>
                            He is often found drinking coffee.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
                <div class="preview__item" id="preview-16">
                    <button class="preview__item-back unbutton">
                        <span>Back</span>
                    </button>
                    <div class="preview__item-imgwrap">
                        <div class="preview__item-img" style="background-image: url(../../assets/img/team/prachi1.png)">
                        </div>
                    </div>
                    <h2 data-splitting="" class="preview__item-title">Prachi</h2>
                    <div class="preview__item-content">
                        <div class="preview__item-meta">
                            {{-- <span>Moscow, Russia</span><span>10/08/2025</span> --}}
                        </div>
                        <p class="preview__item-description">
                            Simple is significant is the motto for not just design but also life. She
                            juggles between her love for good food, crazy Virar locals and aspirations in ui/ux.
                        </p>
                        <button class="preview__item-info unbutton">+ Info</button>
                        {{-- <button class="preview__item-button">Buy Tickets</button> --}}
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="cursor-team">
        <svg class="cursor__svg" width="0" height="400">
            <circle vector-effect="non-scaling-stroke" class="cursor__svg-circle" cx="40" cy="40" r="20" />
        </svg>
        <span class="cursor__text"></span>
    </div>
    <script src="/assets/js/team.js"></script>
    <script src="/assets/lib/wow/wow.min.js"></script>

    <script src="/assets/js/main.js"></script>



@endsection
{{-- <!DOCTYPE html>
<html lang="en" class="no-js">
  <head> --}}
{{-- <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>3D Grid Interaction with Content Preview | Codrops</title>
    <meta
      name="description"
      content="A grid layout with content preview and a magnetic effect."
    />
    <meta
      name="keywords"
      content="gsap, 3d, grid, thumbnails, content, preview, front end, css, javascript"
    /> --}}
{{-- <meta name="author" content="Codrops" />
    <link rel="icon shortcut" href="#" />
    <!-- <link rel="stylesheet" href="https://use.typekit.net/gyf5muf.css" /> -->
    <link rel="stylesheet" type="text/css" href="../../assets/css/team.css" />

  </body>
</html> --}}
