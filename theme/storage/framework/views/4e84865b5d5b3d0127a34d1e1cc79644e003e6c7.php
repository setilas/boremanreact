<footer class="footer <?php if(url()->current() == route('footer-dark')): ?> footer-dark <?php elseif(url()->current() == route('footer-fixed')): ?> footer-fix <?php endif; ?>">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 footer-copyright text-center">
              <p class="mb-0">Copyright <?php echo e(date('Y')); ?> © Cuba theme by pixelstrap  </p>
            </div>
        </div>
    </div>
</footer><?php /**PATH /home/ekta/Documents/GitHub/Cuba/resources/views/layouts/light/footer.blade.php ENDPATH**/ ?>