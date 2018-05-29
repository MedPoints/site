<?php defined('_ACCESS') or die('У вас нет прав для вызова данной страницы!'); ?>

	<div class="account-menu">

	<ul class="list-group">
        <li class="list-group-item active">
            <a href="/account">Appointments</a>
        </li>
        <li class="list-group-item">
            <a href="/account-records">Records <span class="badge">1 <small>new request</small></span></a>
			<ul>
				<li><a href="/add-record"><i class="fas fa-plus-circle"></i> Add record</a></li> 
			</ul>
        </li>
        <li class="list-group-item">
            <a href="/account-balance">MPT = <strong>1120</strong><span class="badge">+ 300</span></a>
			<ul>
				<li><a href="#" data-toggle="modal" data-target="#addBalance"><i class="fas fa-plus-circle"></i> Add balance</a></li> 
			</ul>
        </li>
        <li class="list-group-item">
            <a href="/account-favorites">Favorites</a>
        </li>
        <li class="list-group-item">
            <a href="/account-tickets">Support <span class="badge">1 <small>new answer</small></span></a>
			<ul>
				<li><a href="/add-ticket"><i class="fas fa-plus-circle"></i> Add ticket</a></li> 
			</ul>
        </li>
        <li class="list-group-item">
            <a href="/account-insurance">Insurance</a>
			<ul>
				<li><a href="/add-insurance"><i class="fas fa-plus-circle"></i> Join insurance</a></li> 
			</ul>
        </li>
        <li class="list-group-item">
            <a href="/account-foundations">Foundations</a>
        </li>
        <li class="list-group-item">
            <a href="/account-edit"><i class="fas fa-cog"></i> Edit profile</a>
        </li>
    </ul>  
	
	</div><!--/.account-menu-->