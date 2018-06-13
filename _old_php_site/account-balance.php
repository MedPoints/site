<?php define( '_ACCESS', 1 ); ?>

<?php

    $page_name = 'account-balance';
    $page_title = 'Account balance';
	$page_keywords = '';
	$page_description = '';
	
?>

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/header.php"); ?>


    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="/account">Account</a></li>
            <li class="breadcrumb-item active" aria-current="page"><?=$page_title?></li>
        </ol>
    </nav>

    <ul>
        <li id="191" class="alert alert-warning parent" role="alert">
            <strong>Note!</strong> <a class="" href="#">General Hospital</a> <small>Public</small> request your medical records at 11:24 - 12.02.2018. <a href="/account-request">Choose records to open</a>
            <a name="delete" id="191" class="delete-parent" href="#"><i class="fas fa-times"></i></a>
        </li>

        <li id="192" class="alert alert-warning parent" role="alert">
            <strong>Note!</strong> At 2011-08-20 <strong>16:45:00</strong> from your account will be charged <strong class="text-danger">35 MPT</strong> as Monthly insurance fee
            <a name="delete" id="192" class="delete-parent" href="#"><i class="fas fa-times"></i></a>
        </li>
    </ul>

	<div class="row">
        <div class="col-xl-3 push-xl-9 col-lg-4 push-lg-8 col-md-5 push-md-7 col-sm-12 push-sm-0"> 
            <nav class="sticky-top"> 
                <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/right.php"); ?> 
            </nav> 
        </div>
        <!--/.col--> 
        <div class="col-xl-9 pull-xl-3 col-lg-8 pull-lg-4 col-md-7 pull-md-5 col-sm-12 pull-sm-0"> 
		 
    		<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="true">All history</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="false">Arrival of funds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-3" role="tab" aria-controls="pills-3" aria-selected="false">Expenditure</a>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="table-responsive">
                        <table summary="" class="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <h5>Direction</h5>
                                    </th>
                                    <th>
                                        <h5>Value</h5>
                                    </th>
                                    <th>
                                        <h5>Time</h5>
                                    </th>
                                    <th>
                                        <h5>Transaction info</h5>
                                    </th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="alert-success text-center">
										<i class="fas fa-plus"></i>
                                        <div>Balance replenishment</div>
									</td>
                                    <td class="price-td"><strong class="text-dark">$34</strong><br /><strong class="text-success">125 MPT</strong></td>
                                    <td>2011-08-20 <strong>16:45:00</strong></td>
                                    <td> 
										<div class="card">
                        					<ul>
												<li>Transaction code <span id="transactionId">Ghhhsbb$hfhjaj77ghsFGGDa91PPvDa</span></li>
                								<li><a class="copy-link btn-copy1" onclick="copyToClipboard('#transactionId')"><i class="far fa-copy"></i> Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in blockchain explorer</a></li>
                        						<li>Transaction status <span class="text-info">In progress</span> <small class="float-right">confirmations 2/5</small></li> 
											</ul>
										</div><!--/.card-->
									</td> 
                                </tr>
                                <tr>
                                    <td class="alert-danger text-center">
										<i class="fas fa-minus"></i>
                                        <div>Services</div>
										<a class="" href="/clinic">General Hospital</a> <small>Public</small>
									</td>
                                    <td class="price-td"> 
                                        <ul>
                                            <li>
                                                <p>First axamination</p>
                                                <div>Terapist <a class="" href="/doctor">Smith John</a></div>
                                                <p>Price <span class="text-danger">1 MPT</span></p>
                                            </li>
                                            <li>
                                                <p>Blood check</p>
                                                <p>Price <span class="text-danger">1 MPT</span></p>
                                            </li>
                                            <li>
                                                <p>Radiology check</p>
                                                <p>Price <span class="text-danger">1 MPT</span></p>
                                            </li>
                                        </ul>
                                        <p>Total cost <strong class="text-danger">3 MPT</strong></p>
                                    </td>
                                    <td>2011-08-19 <strong>13:45:00</strong></td>
                                    <td> 
										<div class="card">
                        					<ul>
												<li>Transaction code <span id="transactionId">Ghhhsbb$hfhjaj77ghsFGGDa91PPvDa</span></li>
                								<li><a class="copy-link btn-copy1" onclick="copyToClipboard('#transactionId')"><i class="far fa-copy"></i> Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in blockchain explorer</a></li>
                        						<li>Transaction status <span class="text-success">Success</span> <small class="float-right">confirmations 5/5</small></li> 
											</ul>
										</div><!--/.card-->
									</td> 
                                </tr>
                                <tr>
                                    <td class="alert-danger text-center">
										<i class="fas fa-minus"></i>
                                        <div>Transaction Fee</div>
                                        <div>Adding medical records</div>
									</td>
                                    <td class="price-td">
										<strong class="text-danger">0.0002 MPT</strong>
									</td>
                                    <td>2011-08-18 <strong>12:45:00</strong></td>
                                    <td> 
										<div class="card">
                        					<ul>
												<li>Transaction code <span id="transactionId">Ghhhsbb$hfhjaj77ghsFGGDa91PPvDa</span></li>
                								<li><a class="copy-link btn-copy1" onclick="copyToClipboard('#transactionId')"><i class="far fa-copy"></i> Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in blockchain explorer</a></li>
                        						<li>Transaction status <span class="text-info">In progress</span> <small class="float-right">confirmations 2/5</small></li> 
											</ul>
										</div><!--/.card-->
									</td> 
                                </tr>
                                <tr>
                                    <td class="alert-danger text-center">
										<i class="fas fa-minus"></i>
                                        <div>Insurance fee</div>
									</td>
                                    <td class="price-td"><strong class="text-danger">35 MPT</strong></td>
                                    <td>2011-08-10 <strong>12:45:00</strong></td>
                                    <td> 
										<div class="card">
                        					<ul>
												<li>Transaction code <span id="transactionId">Ghhhsbb$hfhjaj77ghsFGGDa91PPvDa</span></li>
                								<li><a class="copy-link btn-copy1" onclick="copyToClipboard('#transactionId')"><i class="far fa-copy"></i> Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in blockchain explorer</a></li>
                        						<li>Transaction status <span class="text-info">In progress</span> <small class="float-right">confirmations 2/5</small></li> 
											</ul>
										</div><!--/.card-->
									</td> 
                                </tr>
                                <tr>
                                    <td class="alert-danger text-center">
										<i class="fas fa-minus"></i>
                                        <div>Transaction Fee</div>
                                        <div>Editing personal information</div>
									</td>
                                    <td class="price-td"><strong class="text-danger">0.0002 MPT</strong></td>
                                    <td>2011-08-05 <strong>22:45:00</strong></td>
                                    <td> 
										<div class="card">
                        					<ul>
												<li>Transaction code <span id="transactionId">Ghhhsbb$hfhjaj77ghsFGGDa91PPvDa</span></li>
                								<li><a class="copy-link btn-copy1" onclick="copyToClipboard('#transactionId')"><i class="far fa-copy"></i> Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in blockchain explorer</a></li>
                        						<li>Transaction status <span class="text-info">In progress</span> <small class="float-right">confirmations 2/5</small></li> 
											</ul>
										</div><!--/.card-->
									</td> 
                                </tr>
                                <tr>
                                    <td class="alert-success text-center">
										<i class="fas fa-plus"></i>
                                        <div>Balance replenishment</div>
									</td>
                                    <td class="price-td"><strong class="text-dark">$34</strong><br /><strong class="text-success">25 MPT</strong></td>
                                    <td>2011-07-01 <strong>05:45:00</strong></td>
                                    <td> 
										<div class="card">
                        					<ul>
												<li>Transaction code <span id="transactionId">Ghhhsbb$hfhjaj77ghsFGGDa91PPvDa</span></li>
                								<li><a class="copy-link btn-copy1" onclick="copyToClipboard('#transactionId')"><i class="far fa-copy"></i> Copy</a> / <a href="#" data-toggle="modal" data-target="#sorry">Check in blockchain explorer</a></li>
                        						<li>Transaction status <span class="text-info">In progress</span> <small class="float-right">confirmations 2/5</small></li> 
											</ul>
										</div><!--/.card-->
									</td> 
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
                <!--/.tab-pane-->
                <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-profile-tab">
					Arrival of funds
				</div>
                <!--/.tab-pane-->
                <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-contact-tab">
					Expenditure
				</div>
                <!--/.tab-pane-->
            </div>
            <!--/.tab-content--> 
			
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->
 
    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/footer.php"); ?>