
 <section class="ftco-section bg-gra">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="heading-section mb-5"><b>APP</b></h2>
            </div>
            <div class="col-md-12">
                <div class="featured-carousel owl-carousel">
                    <div class="item member">
                        <div class="work2">
                            <div  class="img d-flex align-items-end justify-content-center" style="background-image: url(assets/img/Portfolio/design/JKR/jkr_dark.png) ; alt: JKR;">
                                <div class="text w-100">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>JKR</h4>
                                            <span class="cat">App Designing & Development</span>

                                            <div class="social">
                                                <a href="/portfolio_page"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item member">
                        <div class="work2">
                            <div class="img d-flex align-items-end justify-content-center" style="background-image: url(assets/img/Portfolio/design/Vishwakarma_app.png); ">
                                <div class="text w-100">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Vishwakarma</h4>
                                            <span class="cat">App Designing & Development</span>

                                            <div class="social">
                                                <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item member">
                        <div class="work2">
                            <div class="img d-flex align-items-end justify-content-center" style="background-image: url(assets/img/Portfolio/design/expenger.png);">
                                <div class="text w-100">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Expenger</h4>
                                            <span class="cat">App Designing & Development</span>

                                            <div class="social">
                                                <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <canvas id="webgl-canvas"></canvas>

<!-- vertexShader -->
<script id="js-vertex-shader" type="x-shader/x-vertex">
attribute vec3 position;

void main()	{
  gl_Position = vec4(position, 1.0);
}
</script>

<!-- fragmentShader -->
<script id="js-fragment-shader" type="x-shader/x-fragment">
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float xScale;
uniform float yScale;
uniform float distortion;

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float d = length(p) * distortion;

  float rx = p.x * (1.0 + d);
  float gx = p.x;
  float bx = p.x * (1.0 - d);

  float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
  float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
  float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

  gl_FragColor = vec4(r, g, b, 1.0);
}
</script>
                    <div class="item member">
                        <div class="work2">
                            <div class="img d-flex align-items-end justify-content-center" style="background-image: url(assets/img/Portfolio/design/JKR/JKR_Light.png);">
                                <div class="text w-100">
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>JKR</h4>
                                            <span class="cat">App Designing & Development</span>

                                            <div class="social">
                                                <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item member">
                        <div class="work2">
                            <div class="img d-flex align-items-end justify-content-center" style="background-image: url(assets/img/Portfolio/design/JKR/jkr_login.png);">
                                <div class="text middle w-100">

                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>JKR</h4>
                                            <span class="cat">App Designing & Development</span>

                                            <div class="social">
                                                <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
