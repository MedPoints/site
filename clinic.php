<?php define( '_ACCESS', 1 ); ?>

<?php

    $page_name = 'clinic';
    $page_title = 'General Hospital';
	$page_keywords = '';
	$page_description = '';
	
?>

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/header.php"); ?>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/clinics">Clinics</a></li>
            <li class="breadcrumb-item active" aria-current="page"><?=$page_title?></li>
        </ol>
    </nav>
 
    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <div class="row">
                <div class="col-xl-4 col-md-12"> 
                    <a class="avatar" href="/clinic"><div class="crop"><img src="img/_demo/clinic1.jpg" alt="" /></div></a>
                    <div class="text-success" data-toggle="tooltip" data-placement="top" title="Participant in the program of insurance points"><i class="fas fa-heartbeat"></i> Insurance</div>
                    <div class="text-success" data-toggle="tooltip" data-placement="top" title="Participant in the program of Help foundation"><i class="far fa-life-ring"></i> Help foundation</div>
                </div>
                <!--/.col-->
                <div class="col-xl-8 col-md-12">
                    <h3>Public</h3> 
                    <div><a href="/clinics">Dietology</a>, <a href="/clinics">Oncology</a>, <a href="/clinics">Traumatology</a> + 123 more</div>
                    <p>462 First Avenue, <a href="/clinics">New York</a>, <a href="/clinics">NY</a>, <a href="/clinics">United States</a></p>
                    <div class="row">
                        <div class="col">
							<div class="card">
                               <ul>
									<li><small>Monday-Friday:</small> <br />8:00 - 17:00</li>
									<li><small>Saturday:</small> <br />10:00 - 16:00</li>
									<li><small>Sunday:</small> <br />12:00 - 14:00</li>
                               </ul>
							</div><!--/.card-->
                        </div>
                        <!--/.col-->
                        <div class="col">
                            <div class="color-gray" data-toggle="tooltip" data-placement="top" title="Provides a transfer from the airport"><i class="fas fa-plane"></i> Airport transfer</div>
                            <div class="" data-toggle="tooltip" data-placement="top" title="Available with bus routes"><i class="fas fa-bus"></i> Bus route</div>
                            <div class="" data-toggle="tooltip" data-placement="top" title="Has free parking"><i class="fas fa-car"></i> Free parking</div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
 
                </div>
                <!--/.col-->
            </div>
            <!--/.row--> 
			
			<br />

            <p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri pertinacia deterruisset.</p>
 
            <div class="table-responsive">
                <table summary="" class="table table-hover">
                    <tbody>
                        <tr>
                            <td><strong>Network</strong></td>
                            <td>NYC Health + Hospitals, NYU Langone Health System</td>
                        </tr>
                        <tr>
                            <td><strong>Beds</strong></td>
                            <td>1,500 (1,160 general, 340 psychiatric)</td>
                        </tr>
                        <tr>
                            <td><strong>Hospital type</strong></td>
                            <td>Teaching</td>
                        </tr>
                        <tr>
                            <td><strong>Affiliated university</strong></td>
                            <td>NYU School of Medicine</td>
                        </tr>
                        <tr>
                            <td><strong>Emergency department</strong></td>
                            <td>Level I trauma center</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--/.table-responsive-->

            <hr />
 
            <h3>Clinic gallery</h3>

            <div class="gallery">
                <ul class="owl-carousel owl-theme">
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic1.jpg" title="Caption for gallery item 1"><img src="img/_demo/clinic1.jpg" alt="Gallery image 1" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic2.jpg" title="Caption for gallery item 2"><img src="img/_demo/clinic2.jpg" alt="Gallery image 2" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic3.jpg" title="Caption for gallery item 3"><img src="img/_demo/clinic3.jpg" alt="Gallery image 3" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic4.jpg" title="Caption for gallery item 1"><img src="img/_demo/clinic4.jpg" alt="Gallery image 1" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic5.jpg" title="Caption for gallery item 2"><img src="img/_demo/clinic5.jpg" alt="Gallery image 2" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic6.jpg" title="Caption for gallery item 3"><img src="img/_demo/clinic6.jpg" alt="Gallery image 3" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic7.jpg" title="Caption for gallery item 1"><img src="img/_demo/clinic7.jpg" alt="Gallery image 1" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic8.jpg" title="Caption for gallery item 2"><img src="img/_demo/clinic8.jpg" alt="Gallery image 2" /></a></li>
                    <li class="item"><a class="gallery-img" href="img/_demo/clinic9.jpg" title="Caption for gallery item 3"><img src="img/_demo/clinic9.jpg" alt="Gallery image 3" /></a></li>
                </ul>
            </div>
 
        </div>
        <!--/.col-->
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

            <nav class="sticky-top">

                <div class="row">
					
                    <div class="col-xl-6 col-lg-12">

                        <div class="wave text-center">
                            <h4>Rating <strong class="text-success">9.99</strong></h4>
                            <p>based on <strong><a class="" href="#opinions">58 opinions</a></strong></p>
                            <p><a class="btn btn-primary btn-lg justify" href="/doctors"><strong>215</strong> doctors</a></p>
                            <p><a class="" href="/services"><strong>1425</strong> services</a></p>

                            <p>In favorites at <strong>462</strong> users</p>

                            <a class="btn btn-secondary justify" href="#"><i class="far fa-heart"></i> Add to favorites</a>

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

    <hr />

    <div class="row">
        <div class="col">
 
            <h3>Departments</h3>

            <ul class="nav-pills">
                <li class="nav-link active"><a href="#">All</a></li>
                <li class="nav-link"><a href="#">Allergology and Immunology</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Pharmacy</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Vaccination</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Rehabilitation treatment</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Gastroenterology</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Gynecology and Obstetrics</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Children's clinic</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Dermatovenereology</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Diagnosis and analysis</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Cosmetology</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Cardiology</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Laboratory diagnostics</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Coloproctology</a> <span class="badge">1015</span></li>
                <li class="nav-link"><a href="#">Ophthalmology</a> <span class="badge">1015</span></li>
            </ul>
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->

    <hr />

    <div class="row">
        <div class="col">

            <h3>Services and prices <span class="badge">212</span></h3>

            <div class="table-responsive services">
                <table summary="" class="table table-hover">
                    <thead>
                        <tr>
                            <th width="40%">
                                <h5>Service</h5>
                            </th>
                            <th>
                                <h5>Time</h5>
                            </th>
                            <th>
                                <h5>Price</h5>
                            </th>
                            <th>
                                <h5>Rating</h5> 
                            </th>
                            <th>
                                <h5>Insurance</h5>
                            </th>
                            <th class="text-right">
                                <h5>Providers</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">New patient visit</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">1 MPT</strong></td>
                            <td>
								<h4><strong class="text-success">9.99</strong></h4>
                            	<p>based on <strong><a class="" href="/service#opinions">58 opinions</a></strong></p>
							</td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>140</strong> doctors</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">General consultation</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$34</strong><br /><strong class="text-success">1 MPT</strong></td>
                            <td>
								<h4><strong class="text-success">9.99</strong></h4>
                            	<p>based on <strong><a class="" href="/service#opinions">58 opinions</a></strong></p>
							</td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>97</strong> doctors</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Back Pain examination</a></h4>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$34</strong><br /><strong class="text-success">1 MPT</strong></td>
                            <td>
								<h4><strong class="text-success">9.99</strong></h4>
                            	<p>based on <strong><a class="" href="/service#opinions">58 opinions</a></strong></p>
							</td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>240</strong> doctors</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Diabetes Consultation</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$34</strong><br /><strong class="text-success">1 MPT</strong></td>
                            <td>
								<h4><strong class="text-success">9.99</strong></h4>
                            	<p>based on <strong><a class="" href="/service#opinions">58 opinions</a></strong></p>
							</td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>20</strong> doctors</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Eating disorder</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$34</strong><br /><strong class="text-success">1 MPT</strong></td>
                            <td>
								<h4><strong class="text-success">9.99</strong></h4>
                            	<p>based on <strong><a class="" href="/service#opinions">58 opinions</a></strong></p>
							</td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>50</strong> doctors</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Foot Pain</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$34</strong><br /><strong class="text-success">1 MPT</strong></td>
                            <td>
								<h4><strong class="text-success">9.99</strong></h4>
                            	<p>based on <strong><a class="" href="/service#opinions">58 opinions</a></strong></p>
							</td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>65</strong> doctors</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--end of .table-responsive-->

            <a class="btn btn-primary" href="/services">View all services</a>


            <hr />

            <h3>Foundation cases <span class="badge">10</span></h3>

            <br />

            <ul class="items-list">
                <li>
                    <div class="row">
                        <div class="col-xl-8 col-md-7 col-sm-12">
                            <div class="row">
								<div class="col-xl-4 col-md-5 col-sm-12">
                            		<a class="avatar" href="/foundation-case"><div class="crop"><img src="img/_demo/foundation-case1.jpg" alt="" /></div></a>
                        		</div>
                        		<!--/.col-->
                        		<div class="col-xl-8 col-md-7 col-sm-12">
                            		<h3><a class="" href="/foundation-case">Julia Ostin</a> <small>12 y.o.</small></h3>
                            		<p><a href="/foundation-cases">New York</a>, <a href="/foundation-cases">NY</a>, <a href="/foundation-cases">United States</a></p>
                            		<div>Required medical treatment:</div>
                            		<h3>Heart transplantation</h3>
                            		<div>Curator:
                                		<h4><a class="" href="/clinic">General Hospital</a> <small>Public</small></h4>
                            		</div>
                            		<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad..</p>
                        		</div>
                        		<!--/.col-->
							</div><!--/.row-->
                        </div>
                        <!--/.col--> 
                        <div class="col-xl-4 col-md-5 col-sm-12">
                            <div class="wave text-center">
                                <p>Required amount <br /><strong class="text-info">$55.000</strong> / <strong class="text-success">25.000 MPT</strong></p>
                                <p>Collected funds <br /><strong>$35.000</strong> / <strong>15.000 MPT</strong></p>
                                <p><strong>462</strong> users participated in fundraising</p> 
								<h3><span id="clock101"></span></h3>  
                                <script>
                                    // Count down  
                                    	$('#clock101').countdown('2018/09/10', function(event) {
                                      $(this).html(event.strftime('%D days %H:%M:%S'));
                                    });
                                </script>
								<br />
                                <a class="btn btn-primary justify" href="">List funds</a>
                            </div>
                            <!--/.wave-->
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
                </li> 
                <li>
                    <div class="row">
                        <div class="col-xl-8 col-md-7 col-sm-12">
                            <div class="row">
								<div class="col-xl-4 col-md-5 col-sm-12">
                            		<a class="avatar" href="/foundation-case"><div class="crop"><img src="img/_demo/foundation-case1.jpg" alt="" /></div></a>
                        		</div>
                        		<!--/.col-->
                        		<div class="col-xl-8 col-md-7 col-sm-12">
                            		<h3><a class="" href="/foundation-case">Julia Ostin</a> <small>12 y.o.</small></h3>
                            		<p><a href="/foundation-cases">New York</a>, <a href="/foundation-cases">NY</a>, <a href="/foundation-cases">United States</a></p>
                            		<div>Required medical treatment:</div>
                            		<h3>Heart transplantation</h3>
                            		<div>Curator:
                                		<h4><a class="" href="/clinic">General Hospital</a> <small>Public</small></h4>
                            		</div>
                            		<p>Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate euripidis ad..</p>
                        		</div>
                        		<!--/.col-->
							</div><!--/.row-->
                        </div>
                        <!--/.col--> 
                        <div class="col-xl-4 col-md-5 col-sm-12">
                            <div class="wave text-center">
                                <p>Required amount <br /><strong class="text-info">$55.000</strong> / <strong class="text-success">25.000 MPT</strong></p>
                                <p>Collected funds <br /><strong class="text-info">$55.000</strong> / <strong class="text-success">25.000 MPT</strong></p>
                                <p><strong>1462</strong> users participated in fundraising</p> 
								<h3>Case successfully closed</h3>   
                            </div>
                            <!--/.wave-->
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
                </li> 
            </ul>
 
            <a class="btn btn-primary" href="/foundation-cases">View all foundation cases</a>
 
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