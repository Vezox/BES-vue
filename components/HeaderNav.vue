<template>
  <header id="header-main">
    <div class="header-main typography">
      <top-nav />
      <button class="close-menu hide-menu">
        <img
          class="lazy"
          src="/images/common/close-mobi.png"
          alt="Về chúng tôi"
        />
      </button>
      <div class="container_common">
        <div class="content_common">
          <a :href="localePath('/')" class="logo-main">
            <img
              class="lazy"
              src="/images/logo.png"
              :style="{ height: '48px' }"
              alt="BES cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
            />
          </a>
          <a :href="localePath('/')" class="logo-main-mobi">
            <img
              class="lazy"
              src="/images/logo.png"
              alt="BES cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
            />
          </a>
          <div class="back1">
            <img
              class="lazy"
              src="/images/common/back.png"
              alt="BES cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
            />
          </div>
          <div class="back2">
            <img
              class="lazy"
              src="/images/common/back.png"
              alt="BES cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
            />
          </div>
          <div class="menu-main">
            <ul id="js_menu" class="menu" color="#fff">
              <li
                id="menu-item-2779"
                class="has-sub menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2779"
              >
                <a :href="localePath('/gioi-thieu')">Về BES</a>
                <!-- <ul class="sub-menu">
                  <li
                    id="menu-item-2783"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2783"
                  >
                    <a :href="localePath('/tam-nhin-su-menh/')">Tầm nhìn, sứ mệnh</a>
                  </li>
                  <li
                    id="menu-item-2783"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2783"
                  >
                    <a :href="localePath('/gia-tri-cot-loi/')">Giá trị cốt lõi</a>
                  </li>
                <li
                    id="menu-item-2783"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2783"
                  >
                    <a :href="localePath('/#vi-sao-nen-chon-bes')">Vì sao chọn BES</a>
                  </li> 
                  <li
                    id="menu-item-2783"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2783"
                  >
                    <a :href="localePath('/co-so-vat-chat/')">Cơ sở vật chất</a>
                  </li>
                 <li
                    id="menu-item-2783"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2783"
                  >
                    <a :href="localePath('/review/')">Review</a>
                  </li> 
                  <li
                    id="menu-item-2782"
                    class="sub_menu_child menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2782"
                  >
                    <a :href="localePath('/chuong-trinh-sau-dai-hoc/')">Đối tác </a>
                    <ul class="sub-menu">
                      <li
                        id="menu-item-2786"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2786"
                      >
                        <a :href="localePath('/doanh-nghiep/')">Doanh nghiệp (công nghệ)</a>
                      </li>
                      <li
                        id="menu-item-2786"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2786"
                      >
                        <a :href="localePath('/hiep-hoi-doanh-nhan/')">Hiệp hội doanh nhân</a>
                      </li>
                    </ul>
                  </li>
                </ul> -->
              </li>
              <li
                id="menu-item-2798"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2798"
              >
                <a :href="localePath('/khoa-hoc/')">Khoá học</a>
              </li>
              <li
                id="menu-item-2803"
                class="has-sub menu-item menu-item-type-post_type menu-item-object-page menu-item-2803 menu-item-has-children"
              >
               <span href="/">Hình ảnh</span>
                <ul class="sub-menu">
                  <li
                    class="menu-item"
                    v-for="item in topics"
                  >
                  <a :href="localePath('/hinh-anh/' + item.slug)">{{ item.name }}</a>
                >
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-2800"
                class="has-sub menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2800"
              >
              <a :href="localePath('/tin-tuc/')">Tin tức</a>
                <!-- <span href="/">Thông tin</span>
                <ul class="sub-menu">
                  <li
                    id="menu-item-2802"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2802"
                  >
                  </li>
                  <li
                    id="menu-item-2801"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2801"
                  >
                    <a :href="localePath('/su-kien')">Sự kiện</a>
                  </li>
                </ul> -->
              </li>
              <!-- <li
                id="menu-item-2799"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2799"
              >
                <a :href="localePath('/he-thong-nhuong-quyen/')"
                  >Hệ thống nhượng quyền</a
                >
              </li> -->
              <li
                id="menu-item-2803"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2803"
              >
                <a :href="localePath('/app')">App</a>
              </li>
              <li
                id="menu-item-2809"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2803"
              >
                <a :href="localePath('/vien-intic')">Viện INTIC</a>
              </li>
              <li
                id="menu-item-2803"
                class="has-sub menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2803"
              >
                <span href="">Liên hệ</span>
                <ul class="sub-menu">
                  <li
                    id="menu-item-2796"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2796"
                  >
                    <a :href="localePath('/tuyen-dung/')">Tuyển dụng </a>
                  </li>
                  <li
                    id="menu-item-2797"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2797"
                  >
                    <a :href="localePath('/tu-van/')">Tư vấn</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="language">
              <li class="lang-item lang-item-3 lang-item-en lang-item-first">
                <a
                  lang="en-US"
                  hreflang="en-US"
                  @click.prevent.stop="$i18n.setLocale('en')"
                  >en</a
                >
              </li>
              <li class="lang-item lang-item-6 lang-item-vi current-lang">
                <a
                  lang="vi"
                  hreflang="vi"
                  @click.prevent.stop="$i18n.setLocale('vi')"
                  >vi</a
                >
              </li>
            </ul>
          </div>
          <div class="_folow">
            <p class="title">Follow us</p>
            <a href="https://www.facebook.com/profile.php?id=100090654726991" target="_blank">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M12.8028 0H2.19733C0.985855 0 6.10352e-05 0.985794 6.1052e-05 2.19727V12.8027C6.10352e-05 14.0142 0.985855 15 2.19733 15H6.62115V9.69727H4.86334V7.06055H6.62115V5.27344C6.62115 3.81947 7.8039 2.63672 9.25787 2.63672H11.9239V5.27344H9.25787V7.06055H11.9239L11.4844 9.69727H9.25787V15H12.8028C14.0143 15 15.0001 14.0142 15.0001 12.8027V2.19727C15.0001 0.985794 14.0143 0 12.8028 0Z"
                  fill="#F5F5F5"
                />
              </svg>
            </a>
            <a href="https://www.youtube.com/@BES-BETHEBEST/channels" target="_blank">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path
                  d="M16.7128 1.15636C16.2393 0.314182 15.7255 0.159273 14.6793 0.100364C13.6342 0.0294546 11.0062 0 8.72952 0C6.44842 0 3.81933 0.0294546 2.77533 0.0992728C1.73133 0.159273 1.21642 0.313091 0.738606 1.15636C0.25097 1.99745 6.10352e-05 3.44618 6.10352e-05 5.99673C6.10352e-05 5.99891 6.10352e-05 6 6.10352e-05 6C6.10352e-05 6.00218 6.10352e-05 6.00327 6.10352e-05 6.00327V6.00546C6.10352e-05 8.54509 0.25097 10.0047 0.738606 10.8371C1.21642 11.6793 1.73024 11.832 2.77424 11.9029C3.81933 11.964 6.44842 12 8.72952 12C11.0062 12 13.6342 11.964 14.6804 11.904C15.7266 11.8331 16.2404 11.6804 16.7139 10.8382C17.2059 10.0058 17.4546 8.54618 17.4546 6.00655C17.4546 6.00655 17.4546 6.00327 17.4546 6.00109C17.4546 6.00109 17.4546 5.99891 17.4546 5.99782C17.4546 3.44618 17.2059 1.99745 16.7128 1.15636ZM6.54552 9.27273V2.72727L12.0001 6L6.54552 9.27273Z"
                  fill="#F5F5F5"
                />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@bes_bethebest" target="_blank">
              <svg
                      fill="#F5F5F5"
                      width="15"
                      height="15"
                      viewBox="0 0 512 512"
                      id="icons"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
                      />
                    </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="coating_header hide-menu"></div>

    <div class="navigation-mobile">
      <a href="/" class="logo-main">
        <img class="lazy" src="/images/common/logo.png" alt="Về chúng tôi" />
      </a>
      <div class="hamburger" id="show-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <SocialFix />
  </header>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
import SocialFix from "@/components/SocialFix.vue";
import api from "../plugins/api";
export default {
  components: { TopNav, SocialFix },
  data() {
    return {
      topics: [],
    };
  },
  created() {
    this.getTopic();
  },
  methods: {
    getTopic() {
      api.post("/topic/list", {page: 1, limit: 10}).then((res) => {
        this.topics = res.data.list;
      });
    },
  },
};
</script>
