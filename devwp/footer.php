<?php
/**
 * The template for displaying the footer of the Yestau Theme
 *
 * Contains the opening of the footer of all pages and all subsequent content.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Yestau
 * @since 1.0.0
 */

?>
<script>
    jQuery(document).foundation();
</script>


<!-- FOOTER START -->
<div class="footer">
    <div class="contain">
        <div class="col">
            <?php wp_nav_menu( array( 'theme_location' => 'footer-column-1' ) ); ?>
        </div>
        <div class="col">
            <?php wp_nav_menu( array( 'theme_location' => 'footer-column-2' ) ); ?>
        </div>
        <div class="col">
            <?php wp_nav_menu( array( 'theme_location' => 'footer-column-3' ) ); ?>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- END OF FOOTER -->





<?php wp_footer(); ?>

</body>
</html>
