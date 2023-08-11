<script>
import HeaderNav from "../../components/HeaderNav.vue";
import FooterSite from "../../components/Footer.vue";
import api from "../../plugins/api";
import { route } from "vue-router";

export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      post: {},
      new_events: [],
    };
  },
  mounted() {
    this.getHotNews();
    this.getPost();
    new Swiper(".js_event_relate", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".js_event_relate .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        },
      },
    });
  },
  methods: {
    getPost() {
      if (!this.$route.params.id) return;
      api
        .get("/post/get/" + this.$route.params.id)
        .then((response) => {
          this.post = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getHotNews() {
      const params = {
        limit: 10,
        page: 1,
        type: "event",
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.new_events = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const daysOfWeek = {
        0: "Chủ nhật",
        1: "Thứ hai",
        2: "Thứ ba",
        3: "Thứ tư",
        4: "Thứ năm",
        5: "Thứ sáu",
        6: "Thứ bảy",
      };
      const dayOfWeek = daysOfWeek[date.getDay()];
      const formattedDate = `${dayOfWeek}, ${day < 10 ? "0" + day : day}/${
        month < 10 ? "0" + month : month
      }/${year}`;

      return formattedDate;
    },
  },
};
</script>

<template>
  <body
    class="page-template page-template-page-template page-template-news page-template-page-templatenews-php page page-id-2563 page-child parent-pageid-2559"
  >
    <!-- Google Tag Manager (noscript) -->

    <div id="page" class="site">
      <HeaderNav></HeaderNav>

      <div id="content" class="site-content main-header">
        <div class="page_news_events typography">
          <div class="banner-def lazy" style="">
            <img
              src="/images/home/s4-bg-1.png"
              style="height: 200px; width: 100%; object-fit: cover"
            />
            <div class="banner_mobi lazy">
              <img
                src="/images/banner/banner_1.png"
                alt="BES cộng đồng học tiếng anh cho doanh nhân Việt Nam"
              />
            </div>
            <div class="container_common">
              <div class="content_common">
                <div class="content">
                  <div class="top">
                    <a :href="localePath('/')">Home</a>
                    <span>/</span>
                    <a href="#">Sự kiện</a>
                  </div>
                  Sự kiện
                </div>
              </div>
            </div>
          </div>
          <div class="content-page">
            <img
              class="_decor_top lazy"
              src="/images/page/page-decor-top.png"
              alt="Tin tức"
            />
            <div class="container_common">
              <div class="content_common">
                <div class="breadcrumb">
                  <a :href="localePath('/')">Trang chủ</a>
                  <span>/</span>
                  <a :href="localePath('/su-kien/')">blog</a>
                  <span>/</span>
                  <a :href="localePath('/su-kien/' + post?.slug)">{{
                    post?.title
                  }}</a>
                </div>
                <div class="wrap _flex _event">
                  <div class="_left">
                    <div class="title_post">
                      {{ post?.title }}
                    </div>
                    <div class="event_intro">
                      <div class="left">
                        <span>
                          <img
                            class="lazy"
                            src="/images/common/event-icon1.png"
                          />
                          {{ post?.address }}
                        </span>
                        <span>
                          <img
                            class="lazy"
                            src="/images/common/event-icon2.png"
                          />
                          {{ new Date(post?.date).toLocaleDateString() }}</span
                        >
                        <span>
                          <img
                            class="lazy"
                            src="/images/common/event-icon3.png"
                          />
                          {{ new Date(post?.date).toLocaleTimeString() }}
                        </span>
                      </div>
                    </div>
                    <div
                      class="the-content the_content_def"
                      v-html="post.content"
                      v-if="post.content"
                    ></div>

                    <!-- <ul class="share">
                      <li>Chia sẻ</li>
                      <li>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https://www.buv.edu.vn/events/leaders-talk-suc-khoe-tong-the-nguoi-lao-dong-chia-khoa-phat-trien-ben-vung/"
                          target="_blank"
                          ><img
                            class="lazy"
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                            data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/common/face.png"
                            alt="LEADERS TALK &#8211; SỨC KHỎE TỔNG THỂ NGƯỜI LAO ĐỘNG: CHÌA KHÓA PHÁT TRIỂN BỀN VỮNG"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="http://www.twitter.com/share?url=https://www.buv.edu.vn/events/leaders-talk-suc-khoe-tong-the-nguoi-lao-dong-chia-khoa-phat-trien-ben-vung/"
                          target="_blank"
                          ><img
                            class="lazy"
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                            data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/common/twitter.png"
                            alt="LEADERS TALK &#8211; SỨC KHỎE TỔNG THỂ NGƯỜI LAO ĐỘNG: CHÌA KHÓA PHÁT TRIỂN BỀN VỮNG"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.buv.edu.vn/events/leaders-talk-suc-khoe-tong-the-nguoi-lao-dong-chia-khoa-phat-trien-ben-vung/;cid=article_share_linkedin"
                          target="_blank"
                          ><img
                            class="lazy"
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                            data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/common/in.png"
                            alt="LEADERS TALK &#8211; SỨC KHỎE TỔNG THỂ NGƯỜI LAO ĐỘNG: CHÌA KHÓA PHÁT TRIỂN BỀN VỮNG"
                        /></a>
                      </li>
                    </ul> -->
                  </div>
                </div>
                <div class="post_relate">
                  <div class="title-def">
                    <img
                      class="lazy"
                      src="/images/common/star.png"
                      alt="BES cộng đồng học tiếng anh dành cho doanh  nhân Việt Nam"
                    />
                    Các sự kiện khác
                  </div>
                  <div class="swiper-container js_event_relate">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="item in new_events">
                        <div class="new_feature">
                          <a
                            :href="localePath('/su-kien/' + item?.slug)"
                            class="_img"
                          >
                            <img
                              class="lazy"
                              :src="item?.image.url"
                              :alt="item?.title"
                            />
                            <div class="cat_name">Sự kiện mới nhất</div>
                          </a>
                          <div class="_text">
                            <div class="event_intro">
                              <span>
                                <img
                                  class="lazy"
                                  src="/images/common/event-icon1.png"
                          />
                          {{ item?.address }}
                              </span>
                              <span>
                                <img
                                src="/images/common/event-icon2.png"
                          /> 
                          {{ new Date(item?.date).toLocaleDateString() }}
                          </span >
                              <span>
                                <img
                                src="/images/common/event-icon1.png"
                          /> 
                          {{ new Date(item?.date).toLocaleTimeString() }}
                          </span>
                            </div>
                            <a
                              :href="localePath('/su-kien/' + item?.slug)"
                              class="title"
                              >
                              {{item?.title}}
                              </a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination pagination-star"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- #content -->
      <FooterSite />
    </div>
    <!-- #page -->
  </body>
</template>
