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
                class="has-sub menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2798"
              >
                <span href="">Khoá học</span>
                <ul class="sub-menu">
                  <li
                    id="menu-item-2796"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2796"
                  >
                    <a :href="localePath('/khoa-hoc-vip/')">VIP</a>
                  </li>
                  <li
                    id="menu-item-2797"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2797"
                  >
                    <a :href="localePath('/khoa-hoc-class/')"> Class </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-2803"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2803"
              >
                <a :href="localePath('/su-kien-hinh-anh')">Sự kiện/Hình ảnh</a>
              </li>
              <li
                id="menu-item-2800"
                class="has-sub menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2800"
              >
                <span href="/">Thông tin</span>
                <ul class="sub-menu">
                  <li
                    id="menu-item-2802"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2802"
                  >
                    <a :href="localePath('/tin-tuc/')">Tin tức</a>
                  </li>
                  <li
                    id="menu-item-2801"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2801"
                  >
                    <a :href="localePath('/su-kien')">Sự kiện</a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-2799"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2799"
              >
                <a :href="localePath('/he-thong-nhuong-quyen/')"
                  >Hệ thống nhượng quyền</a
                >
              </li>
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
            <a href="">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M12.8028 0H2.19733C0.985855 0 6.10352e-05 0.985794 6.1052e-05 2.19727V12.8027C6.10352e-05 14.0142 0.985855 15 2.19733 15H6.62115V9.69727H4.86334V7.06055H6.62115V5.27344C6.62115 3.81947 7.8039 2.63672 9.25787 2.63672H11.9239V5.27344H9.25787V7.06055H11.9239L11.4844 9.69727H9.25787V15H12.8028C14.0143 15 15.0001 14.0142 15.0001 12.8027V2.19727C15.0001 0.985794 14.0143 0 12.8028 0Z"
                  fill="#F5F5F5"
                />
              </svg>
            </a>
            <a href="">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path
                  d="M16.7128 1.15636C16.2393 0.314182 15.7255 0.159273 14.6793 0.100364C13.6342 0.0294546 11.0062 0 8.72952 0C6.44842 0 3.81933 0.0294546 2.77533 0.0992728C1.73133 0.159273 1.21642 0.313091 0.738606 1.15636C0.25097 1.99745 6.10352e-05 3.44618 6.10352e-05 5.99673C6.10352e-05 5.99891 6.10352e-05 6 6.10352e-05 6C6.10352e-05 6.00218 6.10352e-05 6.00327 6.10352e-05 6.00327V6.00546C6.10352e-05 8.54509 0.25097 10.0047 0.738606 10.8371C1.21642 11.6793 1.73024 11.832 2.77424 11.9029C3.81933 11.964 6.44842 12 8.72952 12C11.0062 12 13.6342 11.964 14.6804 11.904C15.7266 11.8331 16.2404 11.6804 16.7139 10.8382C17.2059 10.0058 17.4546 8.54618 17.4546 6.00655C17.4546 6.00655 17.4546 6.00327 17.4546 6.00109C17.4546 6.00109 17.4546 5.99891 17.4546 5.99782C17.4546 3.44618 17.2059 1.99745 16.7128 1.15636ZM6.54552 9.27273V2.72727L12.0001 6L6.54552 9.27273Z"
                  fill="#F5F5F5"
                />
              </svg>
            </a>
            <a href="">
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path
                  d="M5.92582 13C5.23895 13 4.53196 12.9444 3.82074 12.8329C2.56806 12.6363 1.3 11.9811 0.941173 11.7849L6.10352e-05 11.2703L1.01897 10.9353C2.13277 10.569 2.81031 10.3418 3.64902 9.98603C2.80922 9.57934 2.16198 8.84775 1.85041 7.90203L1.61338 7.18244L1.80776 7.21213C1.62344 7.02635 1.47789 6.83779 1.36507 6.66632C0.963834 6.05688 0.751399 5.31221 0.796601 4.67405L0.841196 4.04595L1.21723 4.19162C1.0586 3.89205 0.94396 3.57212 0.876582 3.23681C0.712378 2.41906 0.8498 1.55029 1.26364 0.790587L1.5912 0.189272L2.02928 0.715453C3.41477 2.37979 5.16963 3.36708 7.25241 3.6561C7.16734 3.06969 7.23108 2.50377 7.44207 1.99649C7.6877 1.40584 8.12469 0.904985 8.7054 0.547976C9.35034 0.151583 10.1325 -0.0404934 10.9077 0.00713193C11.7301 0.0576657 12.4769 0.365837 13.07 0.898925C13.3596 0.82367 13.573 0.743325 13.8614 0.634744C14.0349 0.569426 14.2317 0.495261 14.478 0.410432L15.3854 0.0977776L14.7937 1.78781C14.8327 1.78454 14.8729 1.78175 14.915 1.77993L15.884 1.73606L15.3112 2.51879C15.2784 2.56363 15.27 2.57635 15.2584 2.59393C15.2122 2.66349 15.1548 2.75001 14.3687 3.79971C14.1719 4.06256 14.0736 4.4049 14.0919 4.76385C14.1616 6.1279 13.9942 7.36203 13.5942 8.43185C13.2159 9.44398 12.6296 10.3124 11.8518 11.0129C10.8894 11.8797 9.66215 12.4731 8.20407 12.7765C7.48884 12.9254 6.72078 13 5.92582 13Z"
                  fill="#F5F5F5"
                />
              </svg>
            </a>
            <a href="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11.669 0H4.33111C1.94293 0 6.10352e-05 1.94287 6.10352e-05 4.33105V11.669C6.10352e-05 14.0571 1.94293 16 4.33111 16H11.6691C14.0572 16 16 14.0571 16 11.669V4.33105C16 1.94287 14.0572 0 11.669 0V0ZM8.00005 12.3749C5.5877 12.3749 3.62518 10.4123 3.62518 7.99998C3.62518 5.58764 5.5877 3.62512 8.00005 3.62512C10.4124 3.62512 12.3749 5.58764 12.3749 7.99998C12.3749 10.4123 10.4124 12.3749 8.00005 12.3749ZM12.4795 4.65685C11.7666 4.65685 11.1868 4.07702 11.1868 3.36413C11.1868 2.65124 11.7666 2.07129 12.4795 2.07129C13.1924 2.07129 13.7724 2.65124 13.7724 3.36413C13.7724 4.07702 13.1924 4.65685 12.4795 4.65685Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M8.00023 4.5636C6.10522 4.5636 4.56335 6.10534 4.56335 8.00048C4.56335 9.89549 6.10522 11.4374 8.00023 11.4374C9.89537 11.4374 11.4371 9.89549 11.4371 8.00048C11.4371 6.10534 9.89537 4.5636 8.00023 4.5636Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M12.4796 3.01038C12.284 3.01038 12.1248 3.16956 12.1248 3.36511C12.1248 3.56067 12.284 3.71985 12.4796 3.71985C12.6752 3.71985 12.8344 3.56079 12.8344 3.36511C12.8344 3.16943 12.6752 3.01038 12.4796 3.01038Z"
                  fill="#F5F5F5"
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
export default {
  components: { TopNav, SocialFix },
};
</script>
