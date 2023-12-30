<style>
    :root {
        --indent: 0;
    }

    @media screen and (min-width: 40rem) {
        :root {
            --indent: clamp(1.5rem, 4vw, 2.5rem);
        }
    }

    body {
        margin: 0;
        /* display: flex; */
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    img {
        display: block;
        width: 100%;
        /* height: 100%; */
    }

    .card {
        margin: 2rem;
        display: grid;
        grid-template-columns:
            var(--indent) calc(3 * var(--indent)) 1fr 1fr calc(2 * var(--indent)) var(--indent);
        grid-template-rows:
            var(--indent) calc(3 * var(--indent)) 1fr calc(2 * var(--indent)) var(--indent);
        /* max-width: 80rem; */
    }

    .card::before {
        content: "";
        display: block;
        background: white;
        background-image: url(https://source.unsplash.com/6YmzwamGzCg/1200x1200);
        background-size: cover;
        grid-column: 2/-1;
        grid-row: 2/-1;
        box-shadow: 0 0 2rem hsla(0, 0%, 0%, 0.1);
    }

    .card::after {
        content: "";
        display: block;
        background: #e0dde4;
        grid-column: 1/-2;
        grid-row: 1/-2;
        z-index: -1;
    }

    .card img {
        grid-column: 4/5;
        grid-row: 3/4;
        box-shadow: 0 0 1rem hsla(0, 0%, 0%, 0.3);
        object-fit: cover;
        aspect-ratio: 1 / 1;
        border-radius: 15px;
    }

    .card figcaption {
        grid-column: 3/5;
        grid-row: 3/4;
        display: grid;
        grid-template-columns: 3fr 1fr 2fr;
    }

    .card blockquote {
        /* grid-column: 1/3; */
        margin: 0;
        padding-bottom: 1rem;
        /* font-size: clamp(2rem, 2.5vw, 3rem); */
        font-size: 3rem;
        font-weight: 100;
        align-self: flex-end;
    }

    .card cite {
        grid-column: 1/2;
        font-size: 1.3rem;
        font-weight: 100;
        font-style: normal;
    }

    .card .credit {
        grid-column: 2/4;
        place-self: flex-end;
        margin: 0;
        padding: 1rem;
        text-align: end;
        color: white;
        font-weight: 400;
    }

    .card a {
        color: white;
    }

</style>
<div class="wrapper">
    <figure class="card">
        <img src="assets/img/Portfolio/design/JKR/jkr.png" width="640" height="580" alt="" />
        {{-- <figcaption>
            <blockquote>
                We shape our tools and then the tools shape us.
            </blockquote>
            <cite>Attributed to Winston Churchill, Marshall McLuhan, and John
                Culkin.</cite>
            <!-- <p class="credit">
        <strong>Caju Gomes</strong>,
        <a href="https://unsplash.com/photos/Co8AlcOhIgE">Unsplash</a>
      </p> -->
        </figcaption> --}}
    </figure>
</div>









<div class="wrapper">
    <figure class="card">
        <img src="assets/img/Portfolio/img/Mokup5.png" width="640" height="440" alt="" />
        <figcaption>
            <blockquote>
                We shape our tools and then the tools shape us.
            </blockquote>
            <cite>Attributed to Winston Churchill, Marshall McLuhan, and John
                Culkin.</cite>
            <!-- <p class="credit">
        <strong>Caju Gomes</strong>,
        <a href="https://unsplash.com/photos/Co8AlcOhIgE">Unsplash</a>
      </p> -->
        </figcaption>
    </figure>
</div>










<div class="wrapper">
    <figure class="card">
        <img src="assets/img/Portfolio/img/Mokup5.png" width="640" height="440" alt="" />
        <figcaption>
            <blockquote>
                We shape our tools and then the tools shape us.
            </blockquote>
            <cite>Attributed to Winston Churchill, Marshall McLuhan, and John
                Culkin.</cite>
            <!-- <p class="credit">
        <strong>Caju Gomes</strong>,
        <a href="https://unsplash.com/photos/Co8AlcOhIgE">Unsplash</a>
      </p> -->
        </figcaption>
    </figure>
</div>
