<?php defined('_ACCESS') or die('У вас нет прав для вызова данной страницы!'); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="medpoints">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="no-cache" />
    <meta http-equiv="Cache-Control" content="no-cache" />

    <link rel="icon" href="img/favicon.png" type="image/x-icon" />
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />

    <title><?=$page_title?></title>
    <meta name="keywords" content="<?=$page_keywords?>" />
    <meta name="description" content="<?=$page_description?>" />

    <link href="css/reset.css" rel="stylesheet">
    <link href="https://v4-alpha.getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link href="css/normalize.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/flag-icon.min.css" rel="stylesheet">
    <link href="css/simpleLightbox.min.css" rel="stylesheet">
    <link href="css/zabuto_calendar.css" rel="stylesheet">

    <script src="js/modernizr.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.countdown.js" type="text/javascript"></script>

</head>

<body class="<?=$page_name?>">

    <!--  -->
    <form class="modal fade" id="chooseLocation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Choose your location</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">
                    <label>Start type your City name</label>
                    <input type="text" class="form-control" placeholder="example: New-York" />
                    <br />
                    <ul>
                        <li><a href="#"><strong>New-York</strong> USA</a></li>
                        <li><a href="#"><strong>Berlin</strong> Germany</a></li>
                        <li><a href="#"><strong>Moscow</strong> Russian Federation</a></li>
                    </ul>
                </div>
                <!--/.modal-body-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save location</button>
                </div>
            </div>
        </div>
    </form>

    <!--  -->
    <form class="modal fade" id="sorry" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Demonstration limits</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">
                    <h3>Sorry, this functionality is not yet available.</h3>
                </div>
                <!--/.modal-body--> 
            </div>
        </div>
    </form>

    <!--  -->
    <form class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Log in to MedPoints</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="walletId">Wallet ID</label>
                        <input type="text" class="form-control" id="walletId" placeholder="Wallet ID" required />
                    </div>
                    <div class="form-group">
                        <label for="walletKey">Wallet key</label>
                        <input type="text" class="form-control" id="walletKey" placeholder="Wallet key" required />
                    </div>
                    <br />
                    <label class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input">
  						<span class="custom-control-indicator"></span>
  						<span class="custom-control-description">Remember me</span>
					</label>
                    <a class="float-right" href="/faq#technical">Sign in problems?</a>
                </div>
                <!--/.modal-body-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Log in</button>
                </div>
            </div>
        </div>
    </form>
    <!--  -->


    <!--  -->
    <form class="modal fade" id="editPaymentInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit payment Information</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="cardNumber">Card number</label>
                        <input type="text" name="cardNumber" class="form-control" id="cardNumber" placeholder="0000000000000000" required />
                    </div>
                    <div class="form-group">
                        <label for="cardHolder">Card holder (in latin)</label>
                        <input type="text" name="cardHolder" class="form-control" id="cardHolder" placeholder="JOHN DOE" required />
                    </div>

                    <div class="row">
                        <div class="col-8">

                            <span class="label">Expiration date</span>
                            <div class="row">
                                <div class="col">
                                    <select class="custom-select mb-2 mr-sm-2 mb-sm-0 justify" id="expirationMonth">
    									<option selected>Month</option>
    									<option value="1">One</option>
    									<option value="2">Two</option>
    									<option value="3">Three</option>
  									</select>
                                </div>
                                <!--/.col-->
                                <div class="col">
                                    <select class="custom-select mb-2 mr-sm-2 mb-sm-0 justify" id="expirationYear">
    									<option selected>Year</option>
    									<option value="1">One</option>
    									<option value="2">Two</option>
    									<option value="3">Three</option>
  									</select>
                                </div>
                                <!--/.col-->
                            </div>
                            <!--/.row-->
                        </div>
                        <!--/.col-->
                        <div class="col-4">
                            <label for="CVCCode">CVC/CVV code</label>
                            <input type="text" name="CVCCode" class="form-control" id="CVCCode" placeholder="***" required />
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
                </div>
                <!--/.modal-body-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </form>

    <!--  -->
    <form class="modal fade" id="addBalance" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add balance</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">
                    <div>Card number</div>
                    <p><strong>0000 **** **** 0000</strong></p>
                    <div>Card holder (in latin)</div>
                    <p><strong>JOHN DOE</strong></p>
                    <div class="row">
                        <div class="col">
                            <div>Expiration date</div>
                            <p><strong>05.2020</strong></p>
                        </div>
                        <!--/.col-->
                        <div class="col">
                            <div>CVC/CVV code</div>
                            <p>***</p>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->

                    <label for="amount">Amount</label>
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon">$</div>
                        <input type="text" name="amount" class="form-control" id="amount" placeholder="100" />
                    </div>

                </div>
                <!--/.modal-body-->
                <div class="modal-footer">
                    <a class="btn btn-primary" href="">Add funds</a> Or <a class="btn btn-secondary" href="">pay via Paypal</a>
                </div>
            </div>
        </div>
    </form>

    <!--  -->
    <form class="modal fade" id="listFunds" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Make donation to General fund</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">
                    <div>Card number</div>
                    <p><strong>0000 **** **** 0000</strong></p>
                    <div>Card holder (in latin)</div>
                    <p><strong>JOHN DOE</strong></p>
                    <div class="row">
                        <div class="col">
                            <div>Expiration date</div>
                            <p><strong>05.2020</strong></p>
                        </div>
                        <!--/.col-->
                        <div class="col">
                            <div>CVC/CVV code</div>
                            <p>***</p>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->

                    <label for="amount">Amount</label>
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon">$</div>
                        <input type="text" name="amount" class="form-control" id="amount" placeholder="100" />
                    </div>

                </div>
                <!--/.modal-body-->
                <div class="modal-footer">
                    <a class="btn btn-primary" href="">List funds</a> Or <a class="btn btn-secondary" href="">pay via Paypal</a>
                </div>
            </div>
        </div>
    </form>

    <!--  -->
    <form class="modal fade" id="freeLicense" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Get free license</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true"><i class="fas fa-times"></i></span>
        			</button>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="clinicName">Clinic's name</label>
                                <input type="text" name="amount" class="form-control" id="clinicName" placeholder="Clinic's name" />
                            </div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="contactPerson">Contact person</label>
                                <input type="text" name="amount" class="form-control" id="contactPerson" placeholder="Contact person" />
                            </div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="eMail">E-mail</label>
                                <input type="text" name="amount" class="form-control" id="eMail" placeholder="E-mail" />
                            </div>
                            <div class="alert alert-warning" role="alert"><strong>Attention!</strong> Specify a <strong>real e-mail</strong>, because this address will receive a link to download the program and activation keys.</div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
 
                </div>
                <!--/.modal-body-->
                <div class="modal-footer">
                    <a class="btn btn-primary" href="">Get free MedPoins Software</a>
                </div>
            </div>
        </div>
    </form>

    <div class="ico-info-box">Welcome to MedPoints&#8482;! This is a basic demo that simulates user experience, but does not contain the full functionality at the moment. <br />If you want to become part of the project and support its development, please join our <a href="https://medpoints.io" target="_blank">ICO company</a>.</div>

    <header>

        <nav class="navbar navbar-toggleable-md">

            <button id="btn-menu" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i><span> Open menu</span></button>
			
            <a class="navbar-brand" href="/"><img src="img/logo.svg" alt="" /></a>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <span class="nav-link">Medical booking in</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#chooseLocation">New York &nbsp;<i class="fas fa-pencil-alt"></i></a>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link">Languege</span>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-gb"></i></a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-gb"></i> English</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-de"></i> Deutsche</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-ru"></i> Русский</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-cn"></i> 中国</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-kr"></i> 한국어</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-jp"></i> 日本語</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-ae"></i> اللغة العربية</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-fr"></i> Française</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-es"></i> Español</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-it"></i> Italiana</a>
                            <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-pt"></i> Portugues</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link">Font-size</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link sizer" href="#" id="small">A</a> 
                        <a class="nav-link sizer selected" href="#" id="medium" class="selected">A</a> 
                        <a class="nav-link sizer" href="#" id="large">A</a>
                    </li>
                </ul>

                <ul class="navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="nav-link" href="/rates">1 <strong>MPT</strong> = 0.01 <i class="fas fa-dollar-sign"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/registration">Registration</a>
                    </li>
                </ul>

            </div>

        </nav>

        <section class="jumbotron">
            <div class="col-sm-12 mx-auto">

                <div class="row">
                    <div class="col-9">
                        <h1 class="display-3">MedPoints&#8482; - Blockchain based <br />worldwide <strong>medical booking</strong></h1>
                    </div>
                    <!--/.col--> 
                </div>
                <!--/.row-->

            </div>
        </section>

        <h1 class="page-title" id="js-intro"><?=$page_title?></h1>
 
            <div class="row">
                <div class="col-xl-3 push-xl-9 col-lg-12 push-lg-0">
					<div class="extra">
					<ul class="row">
                    	<li class="col-xl-12 col-lg-6 text-xl-right text-lg-left"> 
                    		<a href="/insurance"><i class="fas fa-heartbeat"></i> Insurance program</a>
                    	</li>
                    	<!--/.col-->
                    	<li class="col-xl-12 col-lg-6 text-xl-right text-lg-left">
                    		<a href="/foundation"><i class="far fa-life-ring"></i> Help foundation</a> 
                    	</li>
                    	<!--/.col-->
                    </ul>
                    <!--/.row-->
					</div>
					<!--/.extra-->
                </div>
                <!--/.col-->
                <div class="col-xl-9 pull-xl-3 col-lg-12 pull-lg-0">
				<div class="cats">
					<ul class="row">
                    	<li class="col active">
                    		<a class="" href="/clinics"><span>60 000+</span><h3>Clinics</h3></a>
                		</li>
                		<!--/.col-->
                		<li class="col">
                    		<a class="" href="/services"><span>2 000+</span><h3>Services</h3></a>
                		</li>
                		<li class="col">
                    		<a class="" href="/doctors"><span>1 000 000+</span><h3>Doctors</h3></a>
                		</li>
                		<!--/.col-->
                		<li class="col">
                    		<a class="" href="/pharmacies"><span>3 100 000+</span><h3>Pharmacies</h3></a>
                		</li>
                		<!--/.col-->
                		<li class="col">
                    		<a class="" href="/drugs"><span>240 000 000+</span><h3>Drugs</h3></a>
                		</li>
                		<!--/.col-->	 
                    </ul>
                    <!--/.row--> 
        		</div>
        		<!--/.cats-->
                </div>
                <!--/.col--> 
            </div>
            <!--/.row--> 

    </header>

    <div class="wrapper">

        <form class="search">

            <div class="row">
                <div class="col-xl-9 col-md-8 col-sm-12">
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" placeholder="Type your search request ..." />

                        <select class="custom-select">
  							<option selected>Category</option>
  							<option value="1">Clinics</option>
  							<option value="2">Services</option>
  							<option value="3">Doctors</option>
  							<option value="4">Pharmacies</option>
  							<option value="5">Drugs</option> 
						</select>

                        <div class="input-group-btn">
                            <button type="button" class="btn btn-primary">
          						<i class="fas fa-search"></i><span> Search</span>
        					</button>
                        </div>
                    </div>
                </div>
                <!--/.col-->
                <div class="col-xl-1 col-md-2 col-sm-6">
                    <a class="btn btn-primary btn-lg justify" href="#" data-toggle="modal" data-target="#sorry"><i class="fas fa-microphone"></i></a>
                </div>
                <!--/.col-->
                <div class="col-xl-2 col-md-2 col-sm-6">
                    <a class="btn btn-primary btn-lg justify" href="/partnership">Add</a>
                </div>
                <!--/.col-->
            </div>
            <!--/.row-->

        </form>
        <!--/.search-->