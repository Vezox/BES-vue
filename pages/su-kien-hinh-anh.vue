
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
                  <img class="img-stack" :src="image.url" :alt="image.alt_description" />
                  <div class="img-stack-des">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </div>
                </div>
                </a>
                </stack-item>
              </stack>
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
export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      images: [
        {
          url: "/uploads/2021/12/Replace-Internship-Programmes-scaled.jpg",
          alt_description: "",
        },
        {
          url: "/uploads/2022/01/125199939_3707178062665868_6739041773961160754_n.jpg",
          alt_description: "",
        },
        {
          url: "/images/banner/banner_1.png",
          alt_description: "",
        },
        {
          url: "/uploads/2021/12/DSC09302-scaled-e1639114626147.jpg",
          alt_description: "",
        },
        {
          url: "/uploads/2021/10/Alumni-dinner-1-e1517371099923.jpg",
          alt_description: "",
        },
        {
          url: "/uploads/2021/12/DSC09427-scaled.jpg",
          alt_description: "",
        },
        {
          url: "/uploads/2021/12/Replace-Internship-Programmes-scaled.jpg",
          alt_description: "",
        },
        {
          url: "/uploads/2021/10/Alumni-dinner-1-e1517371099923.jpg",
          alt_description: "",
        },
        {
          url: "/uploads/2021/12/DSC09427-scaled.jpg",
          alt_description: "",
        }
      ],
    };
  },
};
</script>
<style scoped>
.label_def{
    justify-content: center;
    padding: 24px 0 48px 0;
}
.img-stack{
    border-radius: 12px;
}
.w-img-stack{
    position: relative;
    cursor: pointer;
}
.img-stack-des{
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
.img-stack-des:hover{
    white-space: initial;
    max-height: 95%;
    overflow-y: auto;
}
</style>