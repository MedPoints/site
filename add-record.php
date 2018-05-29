<?php define( '_ACCESS', 1 ); ?>

<?php

    $page_name = 'add-record';
    $page_title = 'Add record';
	$page_keywords = '';
	$page_description = '';
	
?>

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/header.php"); ?>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="/account">Account</a></li>
            <li class="breadcrumb-item"><a href="/account-records">Medical records</a></li>
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
		 
    		<form>

        <div class="row">
            <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12">

				<div class="form-group row">
                    <label for="recordTitle" class="col-2 col-form-label">Title</label>
                    <div class="col-10">
                        <input type="text" class="form-control" id="recordTitle" placeholder="Record title" required />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="clinic" class="col-2 col-form-label">Clinic</label>
                    <div class="col-10">
                        <input type="text" class="form-control" id="clinic" placeholder="Clinic" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="service" class="col-2 col-form-label">Service</label>
                    <div class="col-10">
                        <input type="text" class="form-control" id="service" placeholder="Service" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="example-date-input" class="col-2 col-form-label">Date</label>
                    <div class="col-10">
                        <input class="form-control" type="date" value="2011-08-19" id="example-date-input" />
                    </div>
                </div>
				
              
                <div class="form-group row">
                    <label for="textArea" class="col-2 col-form-label">Text</label>
                	<div class="col-10">
                    	<textarea name="textarea" class="form-control" id="textArea" placeholder="Add some text"></textarea>
					</div>
                </div> 
				
				<h5>You can upload files in doc, pdf, txt, jpg, jpeg, png, xml formats</h5>
				
				<br />
					
                 <div class="input-fields-wrap">
					<a class="add-field-button"><i class="fas fa-plus"></i> Add more files</a>
					<div class="form-group row">
						<div class="col-2 col-form-label">File 1</div>
						<div class="col-9">
                        	<label class="custom-file">
								<input type="file" id="file" name="file[]" class="custom-file-input">
								<span class="custom-file-control"></span>
							</label>
						</div>
                	</div>
					<!--/.form-group--> 
				</div>
				<!--/.input-fields-wrap-->
 
            </div>
            <!--/.col-->
			
            <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12">

                <nav class="sticky-top">

                    <div class="wave">
					
						<p>Uploaded files - 3 / <small>20 max</small></p>
                        <ul>
                            <li class="parent"><a href="#" target="_blank">File1_name.doc</a> <a class="float-right delete-parent" href="#"><i class="fas fa-times"></i></a></li>
                            <li class="parent"><a href="#" target="_blank">File2_name.doc</a> <a class="float-right delete-parent" href="#"><i class="fas fa-times"></i></a></li>
                            <li class="parent"><a href="#" target="_blank">File3_name.doc</a> <a class="float-right delete-parent" href="#"><i class="fas fa-times"></i></a></li>
                        </ul>
                        <div>Total weight - <strong>25 345 kb</strong></div>
                        <p>Transaction Fee = <strong>0.0001 MPT</strong></p> 
	 
                        <div class="form-group">
							<a class="btn btn-primary justify" href="#">Add record</a>  
						</div>  

                    </div>
                    <!--/.wave-->

                </nav>
 
            </div>
            <!--/.col-->
        </div>
        <!--/.row-->

    </form> 
			
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->
 
<script>
$(document).ready(function() {
    var max_fields      = 20; //maximum input boxes allowed
    var wrapper         = $(".input-fields-wrap"); //Fields wrapper
    var add_button      = $(".add-field-button"); //Add button ID
   
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="form-group row"><div class="col-2 col-form-label">File ' + x + '</div><div class="col-9"><label class="custom-file"><input type="file" id="file" name="file ' + x + '" class="custom-file-input"><span class="custom-file-control"></span></label></div><a href="#" class="remove-field"><i class="fas fa-times"></i></a></div><!--/.form-group-->'); //add input box
        }
    });
   
    $(wrapper).on("click",".remove-field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
</script>
 
    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/footer.php"); ?>