<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterSite from "../components/Footer.vue";
export default {
  components: { HeaderNav, FooterSite },
};
</script>

<template>
  <body
    class="page-template page-template-page-template page-template-aboutus page-template-page-templateaboutus-php page page-id-2539"
  >
    <div id="page" class="site">
      <HeaderNav></HeaderNav>

      <div id="content" class="site-content main-header">
        <div class="page-about typography">
          <div class="banner-def lazy" style="background-size: contain">
            <img
              src="/images/home/s4-bg-1.png"
              style="height: 200px; width: 100%; object-fit: cover"
            />
            <div
              class="banner_mobi lazy"
              style="
                background: url(/images/banner/banner_1.png);
                background-size: contain;
                display: none;
              "
            ></div>
            <div class="container_common">
              <div class="content_common">
                <div class="content">
                  <div class="top">
                    <a :href="localePath('/')">Home</a>
                    <span>/</span>
                    <a href="#">Viện INTIC</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content" class="site-content">
        <div class="page-jobs typography">
          <div class="content-page">
            <div class="_decor_top">
              <img
                class="lazy"
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/page/page-decor-top.png"
                alt="Jobs at BES"
              />
            </div>
            <div class="_decor_bottom">
              <img
                class="lazy"
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/page/page-decor-bottom-left3.png"
                alt="Jobs at BES"
              />
            </div>
            <div class="container_common">
            </div>
          </div>
          <script type="text/javascript">
            jQuery(document).ready(function ($) {
              $(".js_apply_now").click("on", function (event) {
                $(".box__online__application__form").addClass("active");
              });
              $("#frm_question").css({
                opacity: "0",
                height: "0",
                overflow: "hidden",
              });
              $("#frm_source").val("General");
              $("#js-tab-job-buv").tabs_new2();
              var action_click = "click";
              var speed = "1000";
              $(".inner_wrap1 .content-detail .item .intro-other ._label").on(
                action_click,
                function () {
                  $(this).toggleClass("is-toggle");
                  $(this).next().slideToggle(speed);
                }
              );
              var album1 = new Swiper(".album1 .swiper-container", {
                speed: 1200,
                loop: false,
                slidesPerView: "auto",
                spaceBetween: 60,
                autoplay: {
                  delay: 3000,
                },
                autoHeight: true,
                navigation: {
                  nextEl: ".album1 .swiper-button-next",
                  prevEl: ".album1 .swiper-button-prev",
                },
              });
              $(".js-tab-album").tabs_new();
              var slide_video = new Swiper("#lib-video .swiper-container", {
                slidesPerView: "1",
                spaceBetween: 10,
                // loop: true,
                autoHeight: true,
                speed: 800,
                autoplay: {
                  delay: 3000,
                },
                navigation: {
                  nextEl: "#lib-video .custom-index-next",
                  prevEl: "#lib-video .custom-index-prev",
                },
              });
              $("._tab_job_type a").on(action_click, function () {
                album1.update();
                slide_video.update();
              });
              $("._tab_album_type a").on(action_click, function () {
                album1.update();
              });
              $(".js_submit_cv").click("on", function (event) {
                $(".box__online__application__form").addClass("active");
              });
            });
          </script>
        </div>

      <!-- #content -->
      <FooterSite />
    </div>
    </div>
    <!-- #page -->
  </body>
</template>
