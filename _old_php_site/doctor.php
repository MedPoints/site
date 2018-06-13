<?php define( '_ACCESS', 1 ); ?>

<?php

    $page_name = 'doctor';
    $page_title = 'Smith John M.D';
	$page_keywords = '';
	$page_description = '';
	
?>

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/header.php"); ?>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/doctors">Doctors</a></li>
            <li class="breadcrumb-item active" aria-current="page"><?=$page_title?></li>
        </ol>
    </nav>

    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <div class="row">
                <div class="col-xl-4 col-md-12">
                    <a class="avatar" href="/"><div class="crop"><img src="img/_demo/doctor1.jpg" alt="" /></div></a>
                    <div class="text-success" data-toggle="tooltip" data-placement="top" title="Participant in the program of insurance points"><i class="fas fa-heartbeat"></i> Insurance</div> 
                </div>
                <!--/.col-->
                <div class="col-xl-8 col-md-12">
                    <div><a href="/doctors">Dietologist</a></div>
                    <h4><a href="/clinic">General hospital</a> <small>Public</small></h4>
                    <p>462 First Avenue, <a href="/doctors">New York</a>, <a href="/doctors">NY</a>, <a href="/doctors">United States</a></p>
                    <div>Work experience <strong>9+</strong> years</div>
                    <div>First visit from = <strong>100 MPT</strong> <br />+ <strong class="text-success">100 MPT bonus</strong> for next visits</div>
                </div>
                <!--/.col-->
            </div>
            <!--/.row-->

            <br />

            <div class="row">
                <div class="col">
                    <h3>Professional statement</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <hr />

                    <h3>All specializations</h3>


                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Abdominal Radiology</a></li>
                        <li class="list-inline-item"><a href="#">Addiction Psychiatry</a></li>
                        <li class="list-inline-item"><a href="#">Adolescent Medicine</a></li>
                        <li class="list-inline-item"><a href="#">Cardiothoracic Radiology</a></li>

                        <li class="list-inline-item"><a href="#">Abdominal Radiology</a></li>
                        <li class="list-inline-item"><a href="#">Addiction Psychiatry</a></li>
                        <li class="list-inline-item"><a href="#">Adolescent Medicine</a></li>
                        <li class="list-inline-item"><a href="#">Cardiothoracic Radiology</a></li>
                    </ul>

                    <hr />

                    <h3>Education</h3>

                    <ul>
                        <li><i class="fas fa-graduation-cap"></i> <a class="" href="#">New York Medical College</a> - Doctor of Medicine <br /><em>Graduate of 1994</em></li>
                        <li><i class="fas fa-graduation-cap"></i> <a class="" href="#">Montefiore Medical Center</a> - Residency in Internal Medicine <br /><em>Graduate of 1998</em></li>
                        <li><i class="fas fa-graduation-cap"></i> <a class="" href="#">New York Medical College</a> - Master Internal Medicine <br /><em>Graduate of 2003</em></li>
                    </ul>

                </div>
                <!--/.col-->
            </div>
            <!-- end row -->
 
        </div>
        <!--/.col-->
		
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <nav class="sticky-top">

                <div class="row">
				
                    <div class="col-xl-6 col-lg-12">

                        <div class="wave text-center">

                            <h4>Rating <strong class="text-success">9.99</strong></h4>

                            <p>based on <strong><a class="" href="#opinions">8 opinions</a></strong></p>

                            <ul class="rating">

                                <li class="row">
                                    <div class="col text-right">
                                        Knowledges
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-striped">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                                <span class="sr-only">9/10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/.col-->
                                </li>
                                <!-- end row -->
                                <li class="row">
                                    <div class="col text-right">
                                        Skills
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-striped">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                                                <span class="sr-only">3/10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/.col-->
                                </li>
                                <!-- end row -->
                                <li class="row">
                                    <div class="col text-right">
                                        Attention
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-striped">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                <span class="sr-only">6/10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/.col-->
                                </li>
                                <!-- end row -->
                                <li class="row">
                                    <div class="col text-right">
                                        Price / Quality
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-striped">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                                <span class="sr-only">7/10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--/.col-->
                                </li>
                                <!-- end row -->

                            </ul>
                            <!--/.rating-->

                            <p><a class="btn btn-primary btn-lg justify" href="/booking">Book to visit</a></p>

                            <p>In favorites at <strong>462</strong> users</p>

                            <a class="btn btn-secondary justify" href="#"><i class="far fa-heart"></i> Add to favorite</a>

                        </div>
                        <!--/.wave-->

                    </div>
                    <!--/.col-->
					
                    <div class="col-xl-6 col-lg-12">
						<div class="map hidden-lg-down">
                        	<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d84016.36429915384!2d2.161754161251458!3d48.848458114630624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x47e67031f8c20147%3A0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris%2C+3+Avenue+Victoria%2C+75004+Paris%2C+Francia!3m2!1d48.856836099999995!2d2.3504327!5e0!3m2!1sen!2sru!4v1517149847463"
                            width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div><!--/.map-->
						<div class="hidden-xl-up"><br /><a class="btn-map" href="#" data-toggle="collapse" data-target="#showMap"><i class="fas fa-map-marker"></i> Show on map</a>
							<div class="collapse" id="showMap">
								<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d84016.36429915384!2d2.161754161251458!3d48.848458114630624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x47e67031f8c20147%3A0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris%2C+3+Avenue+Victoria%2C+75004+Paris%2C+Francia!3m2!1d48.856836099999995!2d2.3504327!5e0!3m2!1sen!2sru!4v1517149847463"
                        width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
							</div><!--/.collapse-->
						</div>
                    </div>
                    <!--/.col-->
					
                </div>
                <!--/.row-->
 
            </nav>
 
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->

	<br />

    <section class="bg-gray">

        <div class="reviews" id="opinions">

            <h3>Opinions <span class="badge">8</span></h3>
            <ul class="owl-carousel owl-theme">
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars good">
							8 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril </p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars normal">
							6 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id.</p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars bad">
							3 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril
                        vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars good">
							8 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril.</p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars good">
							8 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril
                        vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars normal">
							6 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei.</p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars bad">
							3 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id..</p>
                </li>
                <li class="item">
                    <em>June 15 2017</em>
                    <p>Service <a href="/services" title="">New patient visit</a></p>
                    <span class="stars good">
							8 / 10
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</span>
                    <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad..</p>
                </li>
            </ul>
        </div>
        <!--/.reviews-->

    </section>
 
    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/footer.php"); ?>