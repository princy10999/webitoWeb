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
    
        @include('team.common.team-section')
    
    
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
