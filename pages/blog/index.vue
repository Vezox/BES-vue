<script>
import HeaderNav from "../../components/HeaderNav.vue";
import FooterSite from "../../components/Footer.vue";
import api from "../../plugins/api";
import {route} from 'vue-router';
export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      hot_blog_30d: [],
      hot_blog: [],
      list_blog: [],
      page: 1,
      limit: 6,
      totalPage: 0,
      loading: true
    };
  },
  mounted() {
    this.getHotNews30d();
    this.getHotNews();
    this.getListNews();
  },
  methods: {
    getHotNews30d() {
      const params = {
        limit: 3,
        page: 1,
        sort: { view: -1 },
        type: "blog",
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.hot_blog_30d = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHotNews() {
      const params = {
        limit: 5,
        page: 1,
        sort: { view: -1 },
        type: "blog",
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.hot_blog = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getListNews(page = 1) {
      this.loading = true;
      const params = {
        page: page,
        limit: this.limit,
        type: "blog",
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.list_blog = res.data.list;
          this.totalPage = res.data.totalPage;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          this.loading = false;
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
    class="page-template page-template-page-template page-template-blog page-template-page-templateblog-php page page-id-2563 page-child parent-pageid-2559"
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
                    <a href="#">Blog</a>
                  </div>
                  Blog
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
                <div class="wrap _flex_short">
                  <div class="_left" v-if="hot_blog_30d.length">
                    <div class="new_feature" v-for="item in hot_blog_30d">
                      <a
                        :href="localePath('/blog/' + item.slug)"
                        class="_img"
                      >
                        <img
                          class="lazy"
                          :src="item.image.url"
                          :alt="item.title"
                        />
                        <div class="cat_name">Nổi bật trong 30 ngày</div>
                      </a>
                      <div class="_text">
                        <p class="time">
                          {{ formatDate(item.created_time) }}
                        </p>
                        <a
                          :href="localePath('/blog/' + item.slug)"
                          class="title"
                        >
                          {{ item.title }}
                        </a>
                        <p class="excerpt">
                          {{ item.descriptions }}
                        </p>
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
                  <div class="_right new_sidebar_def">
                    <div class="recent_post">
                      <div class="label">Nổi bật</div>
                      <div class="recent_list" v-if="hot_blog.length">
                        <div class="new_latest" v-for="item in hot_blog">
                          <a
                            class="_img"
                            :href="localePath('/blog/' + item.slug)"
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
                              :href="localePath('/blog/' + item.slug)"
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
                <div class="inner_wrap js-tab-latest-blog js_pagination_common">
                  <div class="title-def">
                    <img
                      class="lazy"
                      src="/images/common/star.png"
                      alt="Nữ MC giành nhiều cơ hội học tập, việc làm nhờ giỏi tiếng Anh"
                    />Blog mới nhất
                  </div>
                  <div class="_tab_content tab_new_cat" data-content v-if="!loading">
                    <div class="new_feature" v-for="item in list_blog">
                      <a
                        class="_img"
                        :href="localePath('/blog/' + item.slug)"
                      >
                        <img
                          class="lazy"
                          :src="item.image.url"
                          :alt="item.title"
                        />
                        <div class="cat_name">Cập nhật</div>
                      </a>
                      <div class="_text">
                        <p class="time"></p>
                        <a
                          class="title"
                          :href="localePath('/blog/' + item.slug)"
                        >
                          {{ item.title }}
                        </a>
                        <p class="excerpt">
                          {{ item.descriptions }}
                        </p>
                      </div>
                    </div>
                    <div class="pagination_list_def js_panigator">
                      <div class="paginate_links">
                        <a
                          class="next page-numbers"
                          v-if="page > 1"
                          @click="getListNews(page - 1)"
                          >&lt;</a
                        >
                        <span aria-current="page" class="page-numbers current">
                          {{ page }}
                        </span>
                        <a
                          class="next page-numbers"
                          v-if="page < totalPage"
                          @click="getListNews(page + 1)"
                          >&gt;</a
                        >
                      </div>
                      <input
                        type="hidden"
                        id="pagination_blog_cat_nonce"
                        name="pagination_blog_cat_nonce"
                        value="ed419f8ed2"
                      /><input
                        type="hidden"
                        name="_wp_http_referer"
                        value="/blog-su-kien/blog/"
                      />
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
      <!-- #content -->
      <FooterSite />
    </div>
    <!-- #page -->
  </body>
</template>
