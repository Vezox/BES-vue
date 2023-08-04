<script>
import HeaderNav from "../../components/HeaderNav.vue";
import FooterSite from "../../components/Footer.vue";
import api from "../../plugins/api";
import { route } from "vue-router";

export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      post: null,
      hot_news: [],
    };
  },
  mounted() {
    this.getHotNews();
    this.getPost();
  },
  methods: {
    getPost() {
      console.log(this.$route);
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
        limit: 5,
        page: 1,
        sort: { view: -1 },
        type: "news",
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.hot_news = res.data.list;
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
              <img src="/images/banner/banner_1.png" alt="BES cộng đồng học tiếng anh cho doanh nhân Việt Nam" />
            </div>
            <div class="container_common">
              <div class="content_common">
                <div class="content">
                  <div class="top">
                    <a :href="localePath('/')">Home</a>
                    <span>/</span>
                    <a href="#">Tin tức</a>
                  </div>
                  Tin tức
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
                  <a :href="localePath('/tin-tuc/')">Tin tức</a>
                  <span>/</span>
                  <a :href="localePath('/tin-tuc/' + post?.slug)">{{
                    post?.title
                  }}</a>
                </div>
                <div class="wrap _flex">
                  <div class="_left" v-if="post">
                    <div class="cat_name">Cập nhật</div>
                    <div class="title_post">
                      {{ post.title }}
                    </div>
                    <div class="intro">
                      <p class="date">{{ formatDate(post.created_time) }}</p>
                    </div>
                    <div
                      class="the-content the_content_def"
                      v-html="post.content"
                    ></div>
                    <!-- <ul class="share">
                            <li>Chia sẻ</li>
                            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.buv.edu.vn/gs-raymond-gordon-hieu-truong-buv-viet-nam-la-kim-cuong-o-chau-a-ve-co-hoi-dau-tu-giao-duc/" target="_blank"><img class="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/common/face.png" alt="GS. Raymond Gordon, Hiệu trưởng BUV: Việt Nam là kim cương ở Châu Á về cơ hội đầu tư giáo dục"></a></li>
                            <li><a href="http://www.twitter.com/share?url=https://www.buv.edu.vn/gs-raymond-gordon-hieu-truong-buv-viet-nam-la-kim-cuong-o-chau-a-ve-co-hoi-dau-tu-giao-duc/" target="_blank"><img class="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/common/twitter.png" alt="GS. Raymond Gordon, Hiệu trưởng BUV: Việt Nam là kim cương ở Châu Á về cơ hội đầu tư giáo dục"></a></li>
                            <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.buv.edu.vn/gs-raymond-gordon-hieu-truong-buv-viet-nam-la-kim-cuong-o-chau-a-ve-co-hoi-dau-tu-giao-duc/;cid=article_share_linkedin" target="_blank"><img class="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/common/in.png" alt="GS. Raymond Gordon, Hiệu trưởng BUV: Việt Nam là kim cương ở Châu Á về cơ hội đầu tư giáo dục"></a></li>
                        </ul> -->
                  </div>

                  <div v-else class="_left" style="align-items: center">
                    <div class="loading">
                      <div class="ball red"></div>
                      <div class="ball green"></div>
                      <div class="ball yellow"></div>
                      <div class="ball blue"></div>
                      <div class="ball emerald-green"></div>
                      <div class="ball pink"></div>
                    </div>
                  </div>
                  <div class="_right new_sidebar_def">
                    <div class="recent_post">
                      <div class="label">Nổi bật</div>
                      <div class="recent_list" v-if="hot_news.length">
                        <div class="new_latest" v-for="item in hot_news">
                          <a
                            class="_img"
                            :href="localePath('/tin-tuc/' + item.slug)"
                          >
                            <img
                              class="lazy"
                              :src="item.image.url"
                              :alt="item.title"
                            />
                          </a>
                          <div class="_text">
                            <p class="time">
                              {{ formatDate(item.created_time) }}
                            </p>
                            <a
                              class="title"
                              :href="localePath('/tin-tuc/' + item.slug)"
                            >
                              {{ item.title }}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div v-else class="_left" style="align-items: center">
                        <div class="loading">
                          <div class="ball red"></div>
                          <div class="ball green"></div>
                          <div class="ball yellow"></div>
                          <div class="ball blue"></div>
                          <div class="ball emerald-green"></div>
                          <div class="ball pink"></div>
                        </div>
                      </div>
                    </div>
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
