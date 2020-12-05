@extends('layouts.landing.master')
@section('title', 'Landing Page')

@section('css')
<link rel="stylesheet" type="text/css" href="{{asset('assets/css/animate.css')}}">
@endsection

@section('style')

@endsection

@section('content')
<div class="page-body-wrapper">
	<div class="bg-sky-blue highlight-on-scroll" id="home">
		<div class="sticky-header">
			<header>
				<div class="container-modify">
					<nav class="navbar navbar-b navbar-trans navbar-expand-xl fixed-top nav-padding" id="mainNav">
						<a class="navbar-brand" href="#"><img class="img-fluid" src="{{asset('assets/images/logo/logo.png')}}" alt=""></a>
						<button class="navbar-toggler navabr_btn-set custom_nav" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
						<div class="navbar-collapse justify-content-center collapse hidenav" id="navbarDefault">
							<ul class="navbar-nav navbar_nav_modify" id="scroll-spy">
								<li class="nav-item"><a class="nav-link js-scroll active" href="#home">Home</a></li>
								<li class="nav-item"><a class="nav-link js-scroll" href="#layout">Features</a></li>
								<li class="nav-item"><a class="nav-link js-scroll" href="#dashboards">Teamwork</a></li>
								<li class="nav-item"><a class="nav-link js-scroll" href="#components">Pricing plan</a></li>
								<li class="nav-item"><a class="nav-link js-scroll" href="#applications">Subscribe</a></li>
								<li class="nav-item buy-btn">
									<form class="form-inline" target="_blank" action="https://themeforest.net/user/pixelstrap/portfolio">
										<button class="btn-download btn btn-gradient">Purchase</button>
									</form>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</div>
		<div class="main-landing text-center">
			<div class="container">
				<div class="landing-main-content">
					<h1>One Stop For All Admin Template</h1>
					<p> Desktop App-Easy to used our Admin Template,Attractive and clean design ,with many features:-Dark & light,Chat,Mail And Many More.....</p>
					<img class="img-fluid" src="{{asset('assets/images/landing/16.png')}}" alt="">
					<div class="position-cards"><a href="{{route('index')}}" target="_blank"><img class="img-fluid landing-card-1" src="{{asset('assets/images/landing/9.png')}}" alt=""></a><img class="img-fluid landing-card-2" src="{{asset('assets/images/landing/8.png')}}" alt=""><img class="img-fluid landing-card-4" src="{{asset('assets/images/landing/5.png')}}" alt=""><img class="img-fluid landing-card-5" src="{{asset('assets/images/landing/7.png')}}" alt=""><img class="img-fluid landing-card-6" src="{{asset('assets/images/landing/10.png')}}" alt=""><img class="img-fluid landing-card-7" src="{{asset('assets/images/landing/11.png')}}" alt=""><img class="img-fluid landing-card-8" src="{{asset('assets/images/landing/3.png')}}" alt=""><img class="img-fluid landing-square-1" src="{{asset('assets/images/landing/1.png')}}" alt=""><img class="img-fluid landing-square-2" src="{{asset('assets/images/landing/4.png')}}" alt=""><img class="img-fluid landing-square-3" src="{{asset('assets/images/landing/15.png')}}" alt=""><img class="img-fluid landing-card-10" src="{{asset('assets/images/landing/12.png')}}" alt=""><img class="img-fluid landing-card-11" src="{{asset('assets/images/landing/13.png')}}" alt=""></div>
					<div class="landing-animation"><img class="img-fluid star-animate" src="{{asset('assets/images/landing/2.png')}}" alt=""><img class="img-fluid star-animate-1" src="{{asset('assets/images/landing/6.png')}}" alt=""></div>
				</div>
			</div>
		</div>
	</div>
</div>
<section class="section-space cuba-demo-section layout" id="layout">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="cuba-demo-content mt50">
					<div class="couting">
						<h2>12+</h2>
						<p>Admin Unique Layouts</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="default-view" href="{{route('pages-layout-light')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/compact.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Light Layout             </h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="dark-view" href="{{route('pages-layout-dark')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/dark.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Dark Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="compact-view" href="{{route('pages-compact-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/compact.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Compact Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="rtl-view" href="{{route('pages-layout-rtl')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/rtl.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>RTL Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="box-view" href="{{route('pages-layout-box')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/box.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Box Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="menu-view" href="{{route('pages-vertical-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/vertical.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Vertical Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="darkrtl-view" href="{{route('pages-dark-rtl-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/dark&rtl.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Dark & RTL Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="verticalrtl-view" href="{{route('pages-vertical-rtl-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/vertical&rtl.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Vertical & RTL Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="compactrtl-view" href="{{route('pages-compact-rtl-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/compact&rtl.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Compact & RTL Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="darkbox-view" href="{{route('pages-dark-box-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/dark&box.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Dark & box Layout</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="verticalbox-view" href="{{route('pages-vertical-box-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/vertical&box.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Vetical Box Layout</h5>
					</div>
	     			</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a id="compactdark-view" href="{{route('pages-compact-dark-layout')}}" target="_blank"><img class="img-fluid cuba-img" src="{{asset('assets/images/landing/layout/compact&dark.jpg')}}" alt=""></a>
					<div class="cuba_img_content">
						<h5>Compact Dark  Layout</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section-space cuba-demo-section bg-Widget">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="cuba-demo-content mt50">
					<div class="couting">
						<h2>Cards</h2>
					</div>
					<p>So many unique cards</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid p-0">
		<div class="advance-card"><img class="img-fluid" src="{{asset('assets/images/landing/card.jpg')}}" alt=""></div>
	</div>
</section>
<section class="section-space cuba-demo-section app_bg" id="applications">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="cuba-demo-content mt50">
					<div class="couting">
						<h2>20+</h2>
					</div>
					<p>Usefull application</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container container-modify apps">
		<div class="row">
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('social-app')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/social-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Social App</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('knowledgebase')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/knowlagebase-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>knowledgebase</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('support-ticket')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/support-ticket-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Support Ticket</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('email-application')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/mail-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Email Dashboard</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('to-do')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/To-Do-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>To-Do</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('job-cards-view')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/job-search-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Job Search</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('chart-morris')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/Chart-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Chart</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div class="img-effect">
					<a href="{{route('product-page')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/ecommerce-app.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Ecommerce</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-12"><a class="btn-download btn btn-gradient" href="{{route('bookmark')}}" target="_blank">View More...  </a></div>
		</div>
	</div>
</section>
<section class="section-space cuba-demo-section" id="dashboards">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="cuba-demo-content mt50">
					<div class="couting">
						<h2>2+</h2>
					</div>
					<p>Dashboard                      </p>
				</div>
			</div>
		</div>
	</div>
	<div class="container container-modify">
		<div class="row dashboard">
			<div class="col-lg-6 col-sm-6">
				<div class="img-effect">
					<a href="{{route('index')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/dafault-dashboard.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Default Dashboard</h4>
						</div>
					</a>
				</div>
			</div>
			<div class="col-lg-6 col-sm-6">
				<div class="img-effect">
					<a href="{{route('dashboard-02')}}" target="_blank">
						<img class="img-fluid cuba-img" src="{{asset('assets/images/landing/ecommerce-dashboard.jpg')}}" alt="">
						<div class="cuba_img_content">
							<h4>Ecommerce Dashboard</h4>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section-space cuba-demo-section email_bg">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="cuba-demo-content mt50">
					<div class="couting">
						<h2> Email</h2>
						<p> Usefull Templates</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<img class="img-fluid" src="{{asset('assets/images/landing/email_section_img.jpg')}}" alt="">
</section>
<section class="section-space cuba-demo-section components-section" id="components">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="cuba-demo-content mt50">
					<div class="couting">
						<h2>UI</h2>
						<p>Components                        </p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container container-modify">
		<div class="row component_responsive">
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/1.png')}}" alt="">
					<h6 class="m-0 Pt-4">SweetAlert2</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/2.png')}}" alt="">
					<h6 class="m-0">Avatar</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/3.png')}}" alt="">
					<h6 class="m-0">Scrollable</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/4.png')}}" alt="">
					<h6 class="m-0">Tree view</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/5.png')}}" alt="">
					<h6 class="m-0">Bootstrap notify</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/6.png')}}" alt="">
					<h6 class="m-0">Rating </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/7.png')}}" alt="">
					<h6 class="m-0">Dropzone</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/8.png')}}" alt="">
					<h6 class="m-0">Tour</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/9.png')}}" alt="">
					<h6 class="m-0">Animated modal</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/10.png')}}" alt="">
					<h6 class="m-0">Owl Carousel</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/11.png')}}" alt="">
					<h6 class="m-0">Ribbons </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/12.png')}}" alt="">
					<h6 class="m-0">Pagination </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/13.png')}}" alt="">
					<h6 class="m-0">Steps </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/14.png')}}" alt="">
					<h6 class="m-0">Breadcrumb  </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/15.png')}}" alt="">
					<h6 class="m-0">Range Slider </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/16.png')}}" alt="">
					<h6 class="m-0">image cropper </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/17.png')}}" alt="">
					<h6 class="m-0">Sticky </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/18.png')}}" alt="">
					<h6 class="m-0">Progress </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/19.png')}}" alt="">
					<h6 class="m-0">Tooltip </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/20.png')}}" alt="">
					<h6 class="m-0">Spinners </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/21.png')}}" alt="">
					<h6 class="m-0">Dropdown </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/22.png')}}" alt="">
					<h6 class="m-0">Tabs </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/23.png')}}" alt="">
					<h6 class="m-0">Accordion  </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/24.png')}}" alt="">
					<h6 class="m-0">Navs</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/25.png')}}" alt="">
					<h6 class="m-0">Shadow</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/26.png')}}" alt="">
					<h6 class="m-0">state color</h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/27.png')}}" alt="">
					<h6 class="m-0">List  </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/28.png')}}" alt="">
					<h6 class="m-0">Grid </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/29.png')}}" alt="">
					<h6 class="m-0">Helper classes </h6>
				</div>
			</div>
			<div class="col-lg-2 col-sm-4 col-6 component-col-set">
				<div class="component-hover-effect">
					<img src="{{asset('assets/images/landing/icon/30.png')}}" alt="">
					<h6 class="m-0">Typography</h6>
				</div>
			</div>
		</div>
	</div>
</section>
@endsection

@section('script')

<script src="{{asset('assets/js/landing_sticky.js')}}"></script>
<script src="{{asset('assets/js/jarallax_libs/libs.min.js')}}"></script>
<script src="{{asset('assets/js/scrollpy_landing.js')}}"></script>
<script type="text/javascript">
	$("#landing-page").addClass("landing-page");
</script>
@endsection