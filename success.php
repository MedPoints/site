<?php define( '_ACCESS', 1 ); ?>

<?php

    $page_name = 'success';
    $page_title = 'Successful booking';
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
 
    <h3>You can track the status of your application in <a href="/account" title="Go to your account">your account</a> </h3>

    <?php include($_SERVER["DOCUMENT_ROOT"]."/inc/footer.php"); ?>