<script>
import HeaderNav from "../../components/HeaderNav.vue";
import FooterSite from "@/components/Footer.vue";
import api from "../../plugins/api";
export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      hots: [],
      events: [],
      page: 1,
      limit: 6,
    };
  },
  mounted() {
    this.getHotEvents();
    this.getEvents();
    new Swiper(".js-recent-events", {
      slidesPerView: "auto",
      spaceBetween: 1,
      loop: true,
      speed: 800,
      autoHeight: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".js-recent-events .swiper-pagination",
        clickable: true,
      },
    });
  },
  methods: {
    async getHotEvents() {
      const params = {
        page: 1,
        limit: 3,
        type: "event",
        sort: {view: -1},
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.hots = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    async getEvents(page = 1) {
      const params = {
        page: page,
        limit: this.limit,
        type: "event",
      };
      api
        .post("/post/list", params)
        .then((res) => {
          this.events = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
  },
};
</script>
<template>
  <body
    class="page-template page-template-page-template page-template-events page-template-page-templateevents-php page page-id-2561 page-child parent-pageid-2559"
  >
    <div id="page" class="site">
      <HeaderNav></HeaderNav>

      <div id="content" class="site-content main-header">
        <div class="page_news_events typography">
          <div class="content-page">
            <div class="container_common">
              <div class="content_common">
                <div class="swiper-container js-recent-events" v-if="hots.length">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="hot in hots">
                      <div
                        class="recent_events lazy"
                        style="
                          background-image: url(/images/news/event-img12.jpg);
                        "
                      >
                        <div class="_content">
                          <div class="type">Sự kiện nổi bật</div>
                          <h3 class="title">
                            <a :href="localePath('/su-kien/' + hot.slug)">
                              {{hot.title}}
                            </a>
                          </h3>
                          <div class="event_intro">
                            <span>
                              <img
                                class="lazy"
                                src="/images/common/event-icon1.png"
                              />
                              {{ hot.address }}
                              </span
                            >
                            <span>
                              <img
                                class="lazy"
                                src="/images/common/event-icon2.png"
                              /> 
                              {{ new Date(hot.date).toLocaleDateString() }}
                              </span
                            >
                            <span>
                              <img
                                class="lazy"
                                src="/images/common/event-icon3.png"
                              />
                              {{ new Date(hot.date).toLocaleTimeString() }}
                              </span
                            >
                          </div>
                          <div class="excerpt" style="height: 70px;">
                            {{hot.descriptions}}
                          </div>
                          <a :href="localePath('/su-kien/' + hot.slug)" class="btn_site _near">
                            <span>Chi tiết</span>
                            <img
                              class="lazy"
                              src="/images/common/arrow-right.png"
                              alt="LEADERS TALK<br>ĐỔI MỚI SÁNG TẠO VÀ KHỞI NGHIỆP – NHỮNG DOANH NGHIỆP THÀNH CÔNG TẠI VIỆT NAM"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination pagination-star"></div>
                </div>
                <div class="inner_wrap js-tab-new-events js_pagination_common">
                  <div class="title-def">
                    <img
                      class="lazy"
                      src="/images/common/star.png"
                      alt="<strong>BES EXPERIENCE DAY 2023 &#8211; YOU DEFINE YOU: You Are The Influencer</strong>"
                    />Tin tức Sự kiện
                  </div>
                  <div class="_tab_content type_taball" data-content>
                    <div class="new_feature _event" v-for="event in events" :key="event._id">
                      <a  :href="localePath('/su-kien/' + event.slug)" class="_img">
                        <img
                          class="lazy"
                          :src="event.image.url"
                          alt="LEADERS TALK<br>ĐỔI MỚI SÁNG TẠO VÀ KHỞI NGHIỆP – NHỮNG DOANH NGHIỆP THÀNH CÔNG TẠI VIỆT NAM"
                        />
                        <div class="event_intro">
                          <span>
                            <img
                              class="lazy"
                              src="/images/common/event-icon1.png"
                              alt="LEADERS TALK<br>ĐỔI MỚI SÁNG TẠO VÀ KHỞI NGHIỆP – NHỮNG DOANH NGHIỆP THÀNH CÔNG TẠI VIỆT NAM"
                            /> 
                            {{ event.address }}
                            </span
                          >
                          <span>
                            <img
                              class="lazy"
                              src="/images/common/event-icon2.png"
                              alt="LEADERS TALK<br>ĐỔI MỚI SÁNG TẠO VÀ KHỞI NGHIỆP – NHỮNG DOANH NGHIỆP THÀNH CÔNG TẠI VIỆT NAM"
                            />
                            {{ new Date(event.date).toLocaleDateString() }}
                            </span
                          >
                          <span>
                            <img
                              class="lazy"
                              src="/images/common/event-icon3.png"
                              alt="LEADERS TALK<br>ĐỔI MỚI SÁNG TẠO VÀ KHỞI NGHIỆP – NHỮNG DOANH NGHIỆP THÀNH CÔNG TẠI VIỆT NAM"
                            />
                            {{ new Date(event.date).toLocaleTimeString() }}
                            </span
                          >
                        </div>
                      </a>
                      <div class="_text">
                        <a class="title" :href="localePath('/su-kien/' + event.slug)"
                          >
                          {{ event.title }}
                          </a
                        >
                        <p class="excerpt">
                          {{ event.descriptions }}
                        </p>
                      </div>
                    </div>
                    <div class="pagination_list_def js_panigator">
                      <div class="paginate_links">
                        <a
                          class="next page-numbers"
                          v-if="page > 1"
                          @click="getEvents(page - 1)"
                          >&lt;</a
                        >
                        <span aria-current="page" class="page-numbers current">
                          {{ page }}
                        </span>
                        <a
                          class="next page-numbers"
                          v-if="page < totalPage"
                          @click="getEvents(page + 1)"
                          >&gt;</a
                        >
                      </div>
                      <input
                        type="hidden"
                        id="pagination_events_nonce"
                        name="pagination_events_nonce"
                        value="efc9edf0b7"
                      /><input
                        type="hidden"
                        name="_wp_http_referer"
                        value="/tin-tuc-su-kien/su-kien/"
                      />
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
