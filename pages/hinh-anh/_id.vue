<template>
  <body
    class="page-template page-template-page-template page-template-events page-template-page-templateevents-php page page-id-2561 page-child parent-pageid-2559"
  >
    <div id="page" class="site">
      <HeaderNav></HeaderNav>

      <div id="content" class="site-content main-header">
        <div class="page_news_events typography">
          <section
            class="h_section6 container"
            id="h_section8"
            style="padding-top: 50px"
          >
            <div class="container_common">
              <div class="content_common">
                <div class="label_def _gray">
                  <img
                    class="lazy"
                    src="/images/common/star.png"
                    alt="BES Spirit Photo Contest"
                  />
                  Hình ảnh/Sự kiện
                  <img
                    style="margin-left: 16px"
                    class="lazy"
                    src="/images/common/star.png"
                    alt="BES Spirit Photo Contest"
                  />
                </div>
              </div>
              <stack
                v-if="!loading"
                :column-min-width="300"
                :gutter-width="30"
                :gutter-height="15"
              >
                <stack-item
                  v-for="(image, i) in images"
                  :key="i"
                  style="transition: transform 300ms"
                >
                  <a href="#">
                    <div class="w-img-stack">
                      <img
                        class="img-stack"
                        :src="image.image.url"
                        alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                      />
                    </div>
                  </a>
                </stack-item>
              </stack>
              <div v-else class="loading">
                <div class="ball red"></div>
                <div class="ball green"></div>
                <div class="ball yellow"></div>
                <div class="ball blue"></div>
                <div class="ball emerald-green"></div>
                <div class="ball pink"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- #content -->
      <FooterSite />
    </div>
    <!-- #page -->
  </body>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import FooterSite from "@/components/Footer.vue";
import api from "../../plugins/api";
export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      images: [],
      page: 1,
      loading: false,
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages() {
      this.loading = true;
      api
        .post("/image-topic/list", {
          page: this.page,
          limit: 100,
          slug_topic: this.$route.params.id,
        })
        .then((res) => {
          this.images = res.data.list;
          this.page++;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
.label_def {
  justify-content: center;
  padding: 24px 0 48px 0;
}
.img-stack {
  border-radius: 12px;
}
.w-img-stack {
  position: relative;
  cursor: pointer;
}
.img-stack-des {
  position: absolute;
  width: 100%;
  background-color: #ffffffb3;
  padding: 4px 8px;
  border-radius: 0 0 12px 12px;
  bottom: 0;
  font-size: 14px;
  text-shadow: #ffffff5d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}
.img-stack-des:hover {
  white-space: initial;
  max-height: 95%;
  overflow-y: auto;
}
</style>
