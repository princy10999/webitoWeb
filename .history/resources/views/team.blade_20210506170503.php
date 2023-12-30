<link href="assets/css/team.css" rel="stylesheet">
%h1 We did <strike>every</strike>nothing for you
%h2 Actually that's just <i>you</i> blaming us, we did what we can to satisfy your sick consumer behavior.
/* Your headlines will be much better of course. */
.portrait-container
  .portrait.cameron
    %ul.portrait-details
      %li David Cameron
      %li 53rd Prime Minister of the United Kingdom<br>of Great Britain and Northern Ireland
      %li 
        %a{:href => 'https://email.number10.gov.uk'} E-Mail Contact Form
      %li.fontawesome-phone
        %a{:href => 'tel:+442072764433'} +44-20-72764433
  .portrait.rousseff
    %ul.portrait-details
      %li Dilma Rousseff
      %li 36th President of the Federative Republic of Brazil
      %li
        %a{:href => 'mailto:sg@planalto.gov.br'} sg@planalto.gov.br
      %li.fontawesome-phone
        %a{:href => 'tel:+556134111571'} +55-61-34111571
  .portrait.obama
    %ul.portrait-details
      %li Barack Hussein Obama II
      %li 44th President of the United States of America
      %li
        %a{:href => 'mailto:president@whitehouse.gov'} president@whitehouse.gov
      %li.fontawesome-phone
        %a{:href => 'tel:+12024561414'} +1-202-4561414
  .portrait.jinping
    %ul.portrait-details
      %li Xi Jinping
      %li 7th President of the People's Repulic of China
      %li
        %a{:href => 'mailto:english@mail.gov.cn'} english@mail.gov.cn
      %li.fontawesome-phone
        %a{:href => 'tel:+861088050813'} +86-10-88050813
  .portrait.nahyan
    %ul.portrait-details
      %li Khalifa bin Zayed Al Nahyan
      %li 2nd President of the United Arab Emirates
      %li
        %a{:href => 'mailto:egov@tra.gov.ae'} egov@tra.gov.ae
      %li.fontawesome-phone
        %a{:href => 'tel:+97126269999'} +971-2-6269999
  .portrait.merkel
    %ul.portrait-details
      %li Angela Dorothea Merkel
      %li 8th Chancellor of the Federal Republic of Germany
      %li
        %a{:href => 'mailto:poststelle@bk.bund.de'} poststelle@bk.bund.de
      %li.fontawesome-phone
        %a{:href => 'tel:+4930184000'} +49-30-184000
  .portrait.mukherjee
    %ul.portrait-details
      %li Pranab Mukherjee
      %li 13th President of the Republic of India
      %li
        %a{:href => 'mailto:usgrievance@rb.nic.in'} usgrievance@rb.nic.in
      %li.fontawesome-phone
        %a{:href => 'tel:+911123015321'} +91-11-23015321
  .portrait.nieto
    %ul.portrait-details
      %li Enrique Peña Nieto
      %li 57th President of the United States of Mexico
      %li
        %a{:href => 'mailto:enrique.penanieto@presidencia.gob.mx'} enrique.penanieto@presidencia.gob.mx
      %li.fontawesome-phone
        %a{:href => 'tel:+52015550935300'} +52-55-50935300
  .portrait.hollande
    %ul.portrait-details
      %li François Hollande
      %li 24th President of the French Republic
      %li
        %a{:href => 'http://www.elysee.fr/ecrire-au-president-de-la-republique/'} Use Contact Form
      %li.fontawesome-phone
        %a{:href => 'tel:+33142928100'} +33-1-42928100
  .portrait.abe
    %ul.portrait-details
      %li Shinzō Abe
      %li 57th & 63rd Prime Minister of Japan
      %li
        %a{:href => 'https://www.kantei.go.jp/foreign/forms/comment_ssl.html'} Use Contact Form
      %li.fontawesome-phone
        %a{:href => 'tel:+81335810101'} +81-3-35810101
  .portrait.putin
    %ul.portrait-details
      %li Vladimir Vladimirovich Putin
      %li 2nd & 4th President of the Russian Federation
      %li
        %a{:href => 'http://eng.letters.kremlin.ru/send'} Use Contact Form
      %li.fontawesome-phone
        %a{:href => 'tel:+78002002316'} +7-800-2002316
  .portrait.reinfeldt
    %ul.portrait-details
      %li John Fredrik Reinfeldt
      %li 33rd Prime Minister of the Kingdom of Sweden
      %li
        %a{:href => 'mailto:fredrik.reinfeldt@gov.se'} fredrik.reinfeldt@gov.se
      %li.fontawesome-phone
        %a{:href => 'tel:+4684051000'} +46-8-4051000
  .portrait.zuma
    %ul.portrait-details
      %li Jacob Gedleyihlekisa Zuma
      %li 4th President of the Republic of South Africa
      %li
        %a{:href => 'mailto:president@po.gov.za'} president@po.gov.za
      %li.fontawesome-phone
        %a{:href => 'tel:+27123005200'} +27-12-3005200
  .portrait.kirchner
    %ul.portrait-details
      %li Cristina Fernández de Kirchner
      %li 52nd President of the Argentine Republic
      %li
        %a{:href => 'mailto:kirchner@presidencia.gov.ar'} kirchner@presidencia.gov.ar
      %li.fontawesome-phone
        %a{:href => 'tel:+541143443600'} +54-11-43443600

    <script>
$(window).load(function() {
// Make a mouse event function. I used click because I don't like the user to get attacked by stuff out of nowhere (hover). The pointer should be enough of an indicator.
  $('.portrait').on('click', function(e) {
    // Prevent parent DOM from firing any of this.
    e.stopPropagation();
    // Only fire if it is the actual element, no childs allowed.
    if(e.target != this) return;
    // Toggle a class and make siblings remove it.
    $(this).toggleClass('show').siblings().removeClass('show');
  });
  
  // Too keep this intuitive make a second function to remove on document click. (Don't force mouse movements.)
  $(document).click(function() {
    $('.portrait').removeClass('show');
  });
  
});
    </script>