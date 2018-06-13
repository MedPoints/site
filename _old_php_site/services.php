<?php define( '_ACCESS', 1 ); ?>

<?php

    $page_name = 'services';
    $page_title = 'Services';
	$page_keywords = '';
	$page_description = '';
	
?>

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/header.php"); ?>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"><?=$page_title?></li>
        </ol>
    </nav>

    <section class="bg-gray">

        <form class="filter">
            <div class="row">
                <div class="col-sm-9">
                    <label class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Can be covered by insurance points</span>
					</label> 
                </div>
                <!--/.col-->
                <div class="col-sm-3">
                    <button type="button" id="btn-more" class="btn btn-secondary float-right" data-toggle="collapse" data-target="#moreFilters">
						<i class="fas fa-angle-down"></i> More filters
					</button> 
                </div>
                <!--/.col-->
            </div>
            <!--/.row-->

            <div class="collapse" id="moreFilters">
                <hr />
                <div class="row">
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6"> 
                        <h3>Sex</h3>
                        <label class="custom-control custom-radio">
							<input id="radio1" name="radio" type="radio" class="custom-control-input" checked="checked">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Any</span>
						</label>
                        <label class="custom-control custom-radio">
							<input id="radio2" name="radio" type="radio" class="custom-control-input">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Male</span>
						</label>
                        <label class="custom-control custom-radio">
							<input id="radio3" name="radio" type="radio" class="custom-control-input">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Female</span>
						</label>
                    </div>
                    <!--/.col-->
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6"> 
                        <h3>Funding</h3>
                        <label class="custom-control custom-radio">
							<input id="radio4-1" name="radio4" type="radio" class="custom-control-input" checked="checked">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Any</span>
						</label>
                        <label class="custom-control custom-radio">
							<input id="radio4-2" name="radio4" type="radio" class="custom-control-input">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Public hospital</span>
						</label>
                        <label class="custom-control custom-radio">
							<input id="radio4-3" name="radio4" type="radio" class="custom-control-input">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Commercial clinic</span>
						</label>
                    </div>
                    <!--/.col-->
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6"> 
                        <h3>Location</h3>
                        <label class="custom-control custom-radio">
							<input id="radio2-1" name="radio2" type="radio" class="custom-control-input" checked="checked">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">In your city</span>
						</label>
                        <label class="custom-control custom-radio">
							<input id="radio2-2" name="radio2" type="radio" class="custom-control-input">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Worldwide</span>
						</label>
                    </div>
                    <!--/.col-->
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6"> 
                        <h3>Sort by</h3>
                        <label class="custom-control custom-radio">
							<input id="radio3-1" name="radio3" type="radio" class="custom-control-input" checked="checked">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">By rating</span>
						</label>
                        <label class="custom-control custom-radio">
							<input id="radio3-2" name="radio3" type="radio" class="custom-control-input">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">By prices</span>
						</label>
                    </div>
                    <!--/.col-->
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">

                        <h3>Max price: <span id="demo"></span> MPT</h3>

                        <input class="justify" type="range" id="myRange">
                        <script>
                            var slider = document.getElementById("myRange");
                            var output = document.getElementById("demo");
                            output.innerHTML = slider.value;
                            
                            slider.oninput = function() {
                              output.innerHTML = this.value;
                            }
                        </script>

                    </div>
                    <!--/.col-->
                </div>
                <!--/.row-->
            </div>
            <!--/.collapse-->

        </form>

    </section>

    <div class="row">
	
        <div class="col-xl-4 push-xl-8 col-lg-12 push-lg-0">

            <nav class="sticky-top">
				<div class="map">
                	<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d84016.36429915384!2d2.161754161251458!3d48.848458114630624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x47e67031f8c20147%3A0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris%2C+3+Avenue+Victoria%2C+75004+Paris%2C+Francia!3m2!1d48.856836099999995!2d2.3504327!5e0!3m2!1sen!2sru!4v1517149847463"
                            width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            	</div><!--/.map-->

            </nav>

        </div>
        <!--/.col-->
		
        <div class="col-xl-8 pull-xl-4 col-lg-12 pull-lg-0">

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

            <div class="table-responsive">
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
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">General consultation</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Back Pain examination</a></h4>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Diabetes Consultation</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>45 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Eating disorder</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>60 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Foot Pain</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">New patient visit</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">General consultation</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Back Pain examination</a></h4>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Diabetes Consultation</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>45 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Eating disorder</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>60 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"><i class="fas fa-plus text-success" data-toggle="tooltip" data-placement="top" title="Can be covered by insurance points"></i></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                        <tr>
                            <td>
                                <h4><a href="/service" title="">Foot Pain</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </td>
                            <td>30 min.</td>
                            <td class="price-td">from <strong class="text-dark">$24</strong><br /><strong class="text-success">240 MPT</strong></td>
                            <td class="text-center"></td>
                            <td><a class="btn btn-primary float-right" href="/doctors"><strong>1270</strong> doctors</a><br /><br /><a class="btn btn-secondary float-right" href="/clinics"><strong>240</strong> clinics</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!--end of .table-responsive-->
			
			<br />
 
			<div class="row pagination-line">
            	<div class="col">
					<nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active">
                        <span class="page-link">2<span class="sr-only">(current)</span></span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            		</nav>
            	</div>
            	<!--/.col-->
            	<div class="col"> 
					<em>1-5 / 3154</em>
            	</div>
            	<!--/.col-->
          	</div>
          	<!--/.row-->

        </div>
        <!--/.col-->
    </div>
    <!--/.row-->

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/footer.php"); ?>