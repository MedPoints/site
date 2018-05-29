<?php defined('_ACCESS') or die('У вас нет прав для вызова данной страницы!'); ?>

</div>
<!--/.wrapper-->

<footer> 

    <div class="row"> 
        <div class="col-xl-8 col-md-7 col-sm-12">
		
			<div class="row">
                <div class="col-xl-4 col-md-4 col-sm-6">
            		<h4>Project</h4>
            		<ul>
                		<li><a href="/about">About</a></li>
                		<li><a href="/terms-of-use">Terms of use</a></li>
                		<li><a href="/privacy-policy">Privacy Policy</a></li>
                		<li><a href="/partnership">Partnership</a></li>
						<li><a href="/explorer">Blockchain explorer</a></li>
						<li><a href="/blog">Blog</a></li>
            		</ul> 
                </div>
                <!--/.col-->
                <div class="col-xl-4 col-md-4 col-sm-6"> 
            		<h4>Support</h4>
            		<ul>
                		<li><a href="/faq">FAQ</a></li>
                		<li><a href="/account-tickets">Support</a></li>
						<li><a href="/terms-of-use">Terms of use</a></li>
						<li><a href="/privacy-policy">Privacy Policy</a></li>
            		</ul>
                </div>
                <!--/.col-->
                <div class="col-xl-4 col-md-4 col-sm-12"> 
            		<h4>Applications</h4>
            		<div class="row">
                		<div class="col-xl-6 col-md-12 col-sm-6">
                    		<ul>
                        		<li><i class="fas fa-mobile-alt"></i> Mobile</li>
                        		<li><a href="#">Apple</a></li>
                        		<li><a href="#">Android</a></li>
								<li><a href="#">Windows</a></li>
                    		</ul>
                		</div>
                		<!--/.col-->
                		<div class="col-xl-6 col-md-12 col-sm-6">
                    		<ul>
                        		<li><i class="fas fa-desktop"></i> Desktop</li>
                        		<li><a href="#">Windows</a></li>
                        		<li><a href="#">Mac OS</a></li>
                    		</ul>
                		</div>
                		<!--/.col-->
            		</div>
            		<!--/.row--> 
                </div>
                <!--/.col-->
            </div>
            <!--/.row--> 
             
        </div>
        <!--/.col-->
        <div class="col-xl-4 col-md-5 col-sm-12">
		
            <p>Sign up for updates of MedPoints&#8482;<br /><small>Without any spam and advertising</small></p>
			
            <form>

                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Your e-mail here" />

                    <div class="input-group-btn">
                        <button type="button" class="btn btn-secondary">
          					<i class="fas fa-envelope"></i>
        				</button>
                    </div>
                </div>
 
            </form>
			 
			<div class="row social-bottom">
        		<div class="col-xl-6 col-md-12 col-sm-12">
            		<small>Follow the updates in the official project groups</small>
        		</div>
        		<!--/.col-->
        		<div class="col-xl-6 col-md-12 col-sm-12">
            		<ul class="list-inline">
						<li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-telegram-plane"></i></a> </li>
            			<li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
            			<li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
            			<li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a> </li>
					</ul>
        		</div>
        		<!--/.col-->
    		</div>
    		<!--/.row /.social-bottom-->
		 
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->

	<p><div class="alert alert-info text-center"><h5>Information on the site is provided for informational purposes only.</h5> Clinics and doctors are not official partners of the system. Medicinal guides may not be 100% faithful, as well as a description of specific drugs and services.</div></p> 

    <div class="row">
        <div class="col">
            Copyright &copy;
            <script type="text/javascript">
                var mdate = new Date(); document.write(mdate.getFullYear());
            </script>
			MedPoints&#8482; All rights reserved.
        </div>
        <!--/.col-->
        <div class="col text-right">
            <a href="/sitemap"><i class="fas fa-sitemap"></i> Site Map</a>
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->

</footer>


<!-- Bootstrap core JavaScript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->


<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="js/ie10-viewport-bug-workaround.js"></script>

<!-- Tooltips -->
<script> 
	$('[data-toggle="tooltip"]').tooltip(); 
</script>

<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
  <script>
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content"
    });
    $( "#accordion2" ).accordion({
      heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion3" ).accordion({
      heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion4" ).accordion({
      heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion5" ).accordion({
      heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion6" ).accordion({
      heightStyle: "content",
        collapsible: true,
        active: false
    });
  } );
  </script>

<!-- Ccarousels -->
<script src="js/owl.carousel.js"></script>

<!-- Reviews carousel-->
<script>
    $('.reviews ul').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
     $( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
     $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
</script>

<!-- Galleries carousels-->
<script>
    $('.gallery ul.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            }, 
            1000:{
                items:3,
                nav:true,
                loop:false
            },
            1400:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
     $( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
     $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
</script>

<!-- LightBox -->
<script src="js/simpleLightbox.js"></script>
<script>
    $('.gallery a.gallery-img').simpleLightbox();
</script>

<!-- Adaptive style -->
<script>
    $(document).ready(function(){
      
      $("#small").click(function(event){
        event.preventDefault();
        $("body").addClass("small");
        $("body").removeClass("medium");
        $("body").removeClass("large");
        
      });
      
      $("#medium").click(function(event){
        event.preventDefault();
        $("body").removeClass("small");
        $("body").removeClass("large");
        
      });
      
      $("#large").click(function(event){
        event.preventDefault();
        $("body").addClass("large");
        $("body").removeClass("small");
        $("body").removeClass("medium");
        
      });
      
      $( "a.sizer" ).click(function() {
       $("a.sizer").removeClass("selected");
      $(this).addClass("selected");
      
     });
    
    });
</script>
	
	<!-- Change btn text on copied -->
<script>
    // Count down  
    $(document).ready(function(){
      
      $('.btn-copy1').click(function () {
    if($('.btn-copy1 i').hasClass('fa-copy'))
    {
        $('.btn-copy1').html('<i class="far fa-copy"></i> Copied');   
        $('.btn-copy2').html('<i class="far fa-copy"></i> Copy'); 
    }
    else
    {      
        $('.btn-copy1').html('<i class="far fa-copy"></i> Copy'); 
    }
    }); 
      
      $('.btn-copy2').click(function () {
    if($('.btn-copy2 i').hasClass('fa-copy'))
    {
        $('.btn-copy2').html('<i class="far fa-copy"></i> Copied');   
        $('.btn-copy1').html('<i class="far fa-copy"></i> Copy'); 
    }
    else
    {      
        $('.btn-copy2').html('<i class="far fa-copy"></i> Copy'); 
    }
    }); 
    
    });
</script> 
	
	<!-- Change btn text on copied -->
<script>
    // Count down  
    $(document).ready(function(){
      
      $('.btn-map').click(function () {
    if($('.btn-map i').hasClass('fa-map-marker'))
    {
        $('.btn-map').html('<i class="fas fa-map-marker"></i> Close map');    
    }
    else
    {      
        $('.btn-map').html('<i class="fas fa-map-marker"></i> Show on map'); 
    }
    });  
    
    });
</script> 

<!-- Change btn text on collapse status -->
<script>
    // Count down  
    $(document).ready(function(){
      
      $('#btn-more').click(function () {
    if($('#btn-more i').hasClass('fa-angle-down'))
    {
        $('#btn-more').html('<i class="fas fa-angle-up"></i> Less filters'); 
    }
    else
    {      
        $('#btn-more').html('<i class="fas fa-angle-down"></i> More filters'); 
    }
    }); 
    
    });
</script>

<!-- Nav toggle -->
<script>
    // Count down  
    $(document).ready(function(){
      
      $('#btn-menu').click(function () {
    if($('#btn-menu i').hasClass('fa-bars'))
    {
        $('#btn-menu').html('<i class="fas fa-times"></i><span> Close menu</span>'); 
    }
    else
    {      
        $('#btn-menu').html('<i class="fas fa-bars"></i><span> Open menu</span>'); 
    }
    }); 
    
    });
</script>

<!-- bell toggle -->
<script>
    // Count down  
    $(document).ready(function(){
      
      $('.btn-bell1').click(function () {
    if($('.btn-bell1 i').hasClass('fa-bell'))
    {
        $('.btn-bell1').html('<i class="fas fa-bell-slash text-danger"></i>'); 
    }
    else
    {      
        $('.btn-bell1').html('<i class="fas fa-bell text-success"></i>'); 
    }
    });  
      
      $('.btn-bell2').click(function () {
    if($('.btn-bell2 i').hasClass('fa-bell'))
    {
        $('.btn-bell2').html('<i class="fas fa-bell-slash text-danger"></i>'); 
    }
    else
    {      
        $('.btn-bell2').html('<i class="fas fa-bell text-success"></i>'); 
    }
    });  
    
    });
</script>
 
<!-- Delete parent -->
<script>
    $("a.delete-parent").click(function(event) {
      event.preventDefault();
      $(this).parent('.parent').remove();
    });
</script>
 
<!-- Crop -->
<script>
function repos(imgs) {
    imgs.each(function (i, o) {
        var imgw = $(o).width()
        var boxw = $(o).parent('div').width()
        var imgh = $(o).height()
        var boxh = $(o).parent('div').outerHeight()

        if (imgw > boxw) {
            $(o).css('left', ((imgw / 3) - (boxw / 3)) * -1)
        } else {
            $(o).css('left', 0)
        }

        if (imgh > boxh) {
            $(o).css('top', ((imgh / 3) - (boxh / 3)) * -1)
        } else {
            $(o).css('top', 0)
        }

    })
}
$(window).resize(function () {
    repos($('.crop img'))
})

repos($('.crop img'))
</script>
 
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter47967821 = new Ya.Metrika({
                    id:47967821,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true,
                    ut:"noindex"
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/47967821?ut=noindex" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</body>

</html>