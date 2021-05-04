<?php
/**
 * Template Name: Blog
 *
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 *
 * @package WordPress
 * @subpackage Yestau
 * @since 1.0.0
 */

get_header(); ?>

    <div class="grid-container full-width">
        <div class="grid-x grid-padding-x full-background" style = "background: url(https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);  background-position: center center;">
            <div class="large-12 cell">
                <div class="content-middle">
                    <h1 class = "center" >One Awesome Title</h1>
                    <button class="btn btn-v1 center">Button 4</button>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <?php
            if ( have_posts() ) :
            while ( have_posts() ) : the_post();
            echo "<div class='small-12 large-6 cell'>";
            ?>

            <div class = 'blog-card'>
                <a href = "<?php the_permalink(); ?>">


                    <?php
                    echo "<div class = 'card-thumbnail'>";
                    the_post_thumbnail();
                    echo "</div>";

                    echo "<div class='card-cat'>";

                    the_tags('', ', ', '<br />');

                    echo "</div>";

                    echo '<h3><a href="' . get_permalink() . '">' . get_the_title() . '</a></h3>';

                    the_excerpt( '<p class = "blog-excerpt">', '</p>' );


                    echo "<div class = 'card-details'>";

                    echo "<span class='card-name'>";
                    the_author();
                    echo "</span>";
                    echo " | ";

                    echo "<span class='card-date'>";
                    echo get_the_date();
                    echo "</span>";


                    echo "</a>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                    endwhile;
                    else:
                        _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
                    endif;
                    ?>
            </div>
        </div>










    </div>







<?php get_footer();
