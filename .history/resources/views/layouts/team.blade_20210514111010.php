<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>3D Grid Interaction with Content Preview | Codrops</title>
    <meta
      name="description"
      content="A grid layout with content preview and a magnetic effect."
    />
    <meta
      name="keywords"
      content="gsap, 3d, grid, thumbnails, content, preview, front end, css, javascript"
    />
    <meta name="author" content="Codrops" />
    <link rel="icon shortcut" href="#" />
    <!-- <link rel="stylesheet" href="https://use.typekit.net/gyf5muf.css" /> -->
    <link rel="stylesheet" type="text/css" href="index.320bd6f3.css" />
    <script>
      !(function () {
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
  </head>
  <body class="loading">
    <main>
      <div class="message">
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
      </div>
      <div class="content">
        <h2 class="content__title">
          <span
            class="content__title-line content__title-line--1"
            data-splitting=""
            >WEBITO/</span
          >
          <span
            class="content__title-line content__title-line--2"
            data-splitting=""
            >INFOTECH</span
          >
        </h2>
        <div class="grid">
          <a href="#preview-1" class="grid__item pos-1" data-title="Mohanneles"
            ><div
              class="grid__item-img"
              style="background-image: url(1.a3011d41.jpg)"
            ></div
          ></a>
          <a href="#preview-2" class="grid__item pos-2" data-title="Procody X"
            ><div
              class="grid__item-img"
              style="background-image: url(2.1da28664.jpg)"
            ></div
          ></a>
          <a href="#preview-3" class="grid__item pos-3" data-title="Evenner"
            ><div
              class="grid__item-img"
              style="background-image: url(3.71dee4ee.jpg)"
            ></div
          ></a>
          <a href="#preview-4" class="grid__item pos-4" data-title="M-Dignate"
            ><div
              class="grid__item-img"
              style="background-image: url(4.bb19b060.jpg)"
            ></div
          ></a>
          <a href="#preview-5" class="grid__item pos-5" data-title="Boxtony"
            ><div
              class="grid__item-img"
              style="background-image: url(5.b2d52b44.jpg)"
            ></div
          ></a>
          <a href="#preview-6" class="grid__item pos-6" data-title="Ruthfull"
            ><div
              class="grid__item-img"
              style="background-image: url(6.671b225a.jpg)"
            ></div
          ></a>
          <a href="#preview-7" class="grid__item pos-7" data-title="La Facuoup"
            ><div
              class="grid__item-img"
              style="background-image: url(7.9219ffc5.jpg)"
            ></div
          ></a>
          <a href="#preview-8" class="grid__item pos-8" data-title="Medivict"
            ><div
              class="grid__item-img"
              style="background-image: url(8.27370bed.jpg)"
            ></div
          ></a>
          <a href="#preview-9" class="grid__item pos-9" data-title="Steeplump"
            ><div
              class="grid__item-img"
              style="background-image: url(9.fa7927f3.jpg)"
            ></div
          ></a>
          <a href="#preview-10" class="grid__item pos-10" data-title="Resson"
            ><div
              class="grid__item-img"
              style="background-image: url(10.e3e98bc2.jpg)"
            ></div
          ></a>
          <a href="#preview-11" class="grid__item pos-11" data-title="Atinkers"
            ><div
              class="grid__item-img"
              style="background-image: url(11.c7798cc7.jpg)"
            ></div
          ></a>
          <a href="#preview-12" class="grid__item pos-12" data-title="Twinhouse"
            ><div
              class="grid__item-img"
              style="background-image: url(12.55655a18.jpg)"
            ></div
          ></a>
          <a href="#preview-13" class="grid__item pos-13" data-title="Lonstrian"
            ><div
              class="grid__item-img"
              style="background-image: url(13.388d394f.jpg)"
            ></div
          ></a>
          <a href="#preview-14" class="grid__item pos-14" data-title="Satinge"
            ><div
              class="grid__item-img"
              style="background-image: url(14.ea67d9b7.jpg)"
            ></div
          ></a>
          <a href="#preview-15" class="grid__item pos-15" data-title="Vikins"
            ><div
              class="grid__item-img"
              style="background-image: url(15.303c794d.jpg)"
            ></div
          ></a>
          <a
            href="#preview-16"
            class="grid__item pos-16"
            data-title="Choulder V"
            ><div
              class="grid__item-img"
              style="background-image: url(16.3a5cded4.jpg)"
            ></div
          ></a>
        </div>
        <div class="preview">
          <div class="preview__item" id="preview-1">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(1.f450af6d.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Mohanneles</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Acapulco, Mexico</span><span>15/05/2025</span>
              </div>
              <p class="preview__item-description">
                Had a barney with the inlaws a bit miffed pigeons in Trafalgar
                Square nigh on't goggle box chav hard cheese old boy, marvelous
                Moriarty pulled a right corker squiffy fork out, a tad
                stupendous chaps doing my head in ee bah gum.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-2">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(2.f8cbed21.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Procody X</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Bangkok, Thailand</span><span>22/02/2025</span>
              </div>
              <p class="preview__item-description">
                Houlligan pants pork dripping Moriarty ponce knackered wind up
                treacle lad bugger, ridicule mince pies ridiculous knackered
                munta tosser sorted it nonsense. Completely.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-3">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(3.d08bb8f2.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Evenner</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Berlin, Germany</span><span>16/05/2025</span>
              </div>
              <p class="preview__item-description">
                See a man about a dog naff chav gallivanting around Big Ben,
                blummin' rambunctious brainbox. A cuppa nuthouse ask your mother
                if it's just not cricket marmite, ever so lovely pennyboy. They
                can sod off stew and dumps.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-4">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(4.4a66af92.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">M-Dignate</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Berlin, Germany</span><span>26/06/2025</span>
              </div>
              <p class="preview__item-description">
                Gravy cheese and chips cotton on in a pickle narky bargain Betty
                chips see a man about a dog hedgehog a right toff bow ties are
                cool bloody shambles chaps, Sherlock the lakes a right royal
                knees up.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-5">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(5.aa242d55.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Boxtony</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Lisbon, Portugal</span><span>09/12/2025</span>
              </div>
              <p class="preview__item-description">
                Naff off taking the mick blummin' curtain twitching what a load
                of guff, wind up pezzy little a total jessie. Any road, best be
                off gutted it's me peepers pigeons in Trafalgar Square..
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-6">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(6.f9aff4e5.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Ruthfull</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Berlin, Germany</span><span>21/08/2025</span>
              </div>
              <p class="preview__item-description">
                And her Majesty's pleasure on his bill sausage roll off with her
                head squirrel baffled Shakespeare, stiff upper lip damn 'ar kid
                a cracking and thus. Jolly hockey sticks chinwag penny-dreadful
                stupendous indeed.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-7">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(7.c9f224f3.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">La Facuoup</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Madrid, Spain</span><span>18/010/2025</span>
              </div>
              <p class="preview__item-description">
                a fiver cotton on rambunctious. Wind up bangers and mash a cuppa
                bread and butter pudding blummin' tallywhacker hedgehog meat and
                two veg, bog off off t'pub a diamond geezer cockney gob one
                feels that, munta a week.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-8">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(8.c0bf7cd7.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Medivict</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Berlin, Germany</span><span>03/09/2025</span>
              </div>
              <p class="preview__item-description">
                Roast beef penny-dreadful it's cracking flags double dutch come
                hither on a stag do absolute slappers, marmite a right royal
                knees up fancy a cuppa have a bash naff for sooth, goggledegook
                grab a jumper utter shambles.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-9">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(9.33bedcf8.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Steeplump</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>London, United Kingdom</span><span>16/01/2025</span>
              </div>
              <p class="preview__item-description">
                In the jacksy daft cow 'tis could murder a pint cotton on,
                crumpets brown sauce a tad. Oo ecky thump what a mug lass
                jellied eels bottled it it's spitting, bog roll absolute it's
                spitting driving a mini nicked a cracking.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-10">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(10.d2723723.jpg)"
              ></div>
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
              <div
                class="preview__item-img"
                style="background-image: url(11.a0e32fb6.jpg)"
              ></div>
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
          <div class="preview__item" id="preview-12">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(12.c107ec1c.jpg)"
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
          </div>
          <div class="preview__item" id="preview-13">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(13.4b946fe9.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Lonstrian</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Sydney, Australia</span><span>19/07/2025</span>
              </div>
              <p class="preview__item-description">
                Bit of a div I could reet fancy a knows bugger all about nowt
                easy peasy two weeks on't trot Shakespeare cockney blummin',
                corgi you mean it ain't me noggin' alright duck stew and dumps.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-14">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(14.32b4623b.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Satinge</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Paris, France</span><span>22/06/2025</span>
              </div>
              <p class="preview__item-description">
                Essex girls how's your father stop arsing around Sonic
                Screwdriver, off t'shop real ale you mean it ain't me noggin'
                stiff upper lip what a mug Time Lord, ridicule Time Lord in the
                jacksy Big Ben houlligan.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-15">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(15.ef9ce3a0.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Vikins</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Belgrade, Serbia</span><span>04/11/2025</span>
              </div>
              <p class="preview__item-description">
                The chippy because there was nothing on the gogglebox mince pies
                crumpets 10 pence mix one off marvelous smeg head black cab it's
                nicked doofer what a doddle.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
          <div class="preview__item" id="preview-16">
            <button class="preview__item-back unbutton">
              <span>Back</span>
            </button>
            <div class="preview__item-imgwrap">
              <div
                class="preview__item-img"
                style="background-image: url(16.3af4bbb8.jpg)"
              ></div>
            </div>
            <h2 data-splitting="" class="preview__item-title">Choulder V</h2>
            <div class="preview__item-content">
              <div class="preview__item-meta">
                <span>Moscow, Russia</span><span>10/08/2025</span>
              </div>
              <p class="preview__item-description">
                It's the bees knees oopsy-daisies bottled it on his bill Essex
                girls in a pickle ever so, flabbergasted what a load of cobblers
                in the goolies Bad Wolf chuffed, and grab a jumper have a kip
                narky one off.
              </p>
              <button class="preview__item-info unbutton">+ Info</button>
              <button class="preview__item-button">Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="cursor">
      <svg class="cursor__svg" width="80" height="80">
        <circle
          vector-effect="non-scaling-stroke"
          class="cursor__svg-circle"
          cx="40"
          cy="40"
          r="20"
        />
      </svg>
      <span class="cursor__text"></span>
    </div>
    <script src="index.cad48f07.js"></script>
  </body>
</html>
