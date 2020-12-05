<div class="sidebar-wrapper">
   <div class="logo-wrapper">
      <a href="<?php echo e(route('index')); ?>"><img class="img-fluid for-light" src="<?php echo e(asset('assets/images/logo/logo.png')); ?>" alt=""><img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt=""></a>
      <div class="back-btn"><i class="fa fa-angle-left"></i></div>
      <div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
   </div>
   <div class="logo-icon-wrapper"><a href="<?php echo e(route('index')); ?>"><img class="img-fluid" src="<?php echo e(asset('assets/images/logo/logo-icon.png')); ?>" alt=""></a></div>
   <nav class="sidebar-main">
      <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
      <div id="sidebar-menu">
         <ul class="sidebar-links custom-scrollbar">
            <li class="back-btn">
               <a href="<?php echo e(route('index')); ?>"><img class="img-fluid" src="<?php echo e(asset('assets/images/logo/logo-icon.png')); ?>" alt=""></a>
               <div class="mobile-back text-right"><span>Back</span><i class="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
            </li>
            <li class="sidebar-list">
               <label class="badge badge-success">2</label>
               <a class="sidebar-link sidebar-title <?php echo e(Route::currentRouteName()=='index' ? 'active' : ''); ?>" style="cursor: pointer;">
                  <i data-feather="home"></i>
                  <span class="lan-3"> <?php echo app('translator')->get('lang.Dashboard'); ?> </span>
                  <div class="according-menu"><i class="fa fa-angle-<?php echo e(Route::currentRouteName()=='index' ? 'down' : 'right'); ?>"></i></div>
               </a>
               <ul class="sidebar-submenu" style="display: <?php echo e(Route::currentRouteName()=='index' ? 'block;' : 'none;'); ?>">
                  <li><a class="lan-4 <?php echo e(Route::currentRouteName()=='index' ? 'active' : ''); ?>" href="<?php echo e(route('index')); ?>">Default</a></li>
               </ul>
            </li>

            <li class="sidebar-list">
               <a class="sidebar-link sidebar-title <?php echo e(in_array(request()->route()->getPrefix(), ['/color-version', '/page-layout'] ) ? 'active' : ''); ?>" href="#">
                  <i data-feather="file-text"></i><span> <?php echo app('translator')->get('lang.Starter kit'); ?> </span>
                  <div class="according-menu"><i class="fa fa-angle-<?php echo e(in_array(request()->route()->getPrefix(), ['/color-version', '/page-layout'] ) ?  'down' : 'right'); ?>"></i></div>
               </a>
               <ul class="sidebar-submenu" style="display: <?php echo e(array(request()->route()->getPrefix() => ['color-version', 'page-layout'] ) ? 'block' : 'none'); ?>">
                  <li>
                     <a class="submenu-title <?php echo e(request()->route()->getPrefix() == '/color-version' ? 'active' : ''); ?>" href="#">Color Version<span class="sub-arrow"><i class="fa fa-angle-right"></i></span></a>
                     <ul class="nav-sub-childmenu submenu-content" style="display: <?php echo e(request()->route()->getPrefix() == '/color-version' ? 'block;' : 'none;'); ?>">
                        <li><a href="<?php echo e(route('layout-light')); ?>" class="<?php echo e(Route::currentRouteName()=='layout-light' ? 'active' : ''); ?>">Layout Light</a></li>
                        <li><a href="<?php echo e(route('layout-dark')); ?>" class="<?php echo e(Route::currentRouteName()=='layout-dark' ? 'active' : ''); ?>">Layout Dark</a></li>
                     </ul>
                  </li>
                  <li>
                     <a class="submenu-title <?php echo e(request()->route()->getPrefix() == '/page-layout' ? 'active' : ''); ?>" href="#">Page layout
                        <div class="according-menu"><i class="fa fa-angle-<?php echo e(request()->route()->getPrefix() == '/page-layout' ? 'down' : 'right'); ?>"></i></div>
                     </a>
                     <ul class="nav-sub-childmenu submenu-content" style="display: <?php echo e(request()->route()->getPrefix() == '/page-layout' ? 'block' : 'none'); ?>">
                        <li><a href="<?php echo e(route('layout-box')); ?>" class="<?php echo e(Route::currentRouteName()=='layout-box' ? 'active' : ''); ?>">Boxed</a></li>
                        <li><a href="<?php echo e(route('layout-rtl')); ?>" class="<?php echo e(Route::currentRouteName()=='layout-rtl' ? 'active' : ''); ?>">RTL</a></li>
                        <li><a href="<?php echo e(route('hide-on-scroll')); ?>" class="<?php echo e(Route::currentRouteName() == 'hide-on-scroll' ? 'active' : ''); ?>">Hide menu on Scroll</a></li>
                     </ul>
                  </li>
                  <li>
                     <a class="submenu-title <?php echo e(request()->route()->getPrefix() == '/footers' ? 'active' : ''); ?>" href="#">Footers
                           <div class="according-menu"><i class="fa fa-angle-<?php echo e(request()->route()->getPrefix() == '/footers' ? 'down' : 'right'); ?>"></i></div>
                     </a>
                     <ul class="nav-sub-childmenu submenu-content"  style="display: <?php echo e(request()->route()->getPrefix() == '/footers' ? 'block' : 'none'); ?>">
                        <li><a href="<?php echo e(route('footer-light')); ?>" class="<?php echo e(Route::currentRouteName()=='footer-light' ? 'active' : ''); ?>">Footer Light</a></li>
                        <li><a href="<?php echo e(route('footer-dark')); ?>" class="<?php echo e(Route::currentRouteName()=='footer-dark' ? 'active' : ''); ?>">Footer Dark</a></li>
                        <li><a href="<?php echo e(route('footer-fixed')); ?>" class="<?php echo e(Route::currentRouteName()=='footer-fixed' ? 'active' : ''); ?>">Footer Fixed</a></li>
                     </ul>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
      <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
   </nav>
</div><?php /**PATH /home/ekta/Documents/GitHub/Cuba/resources/views/layouts/light/sidebar.blade.php ENDPATH**/ ?>