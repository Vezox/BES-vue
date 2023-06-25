<template>
  <div>
    <div class="home blog">
      <div id="page" class="site">
        <header id="header-main">
          <div class="header-main typography">
            <top-nav />
            <button class="close-menu hide-menu">
              <img
                class="lazy"
                src="/images/common/close-mobi.png"
                alt="BES cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
              />
            </button>
            <header-nav />
          </div>

          <div class="coating_header hide-menu"></div>

          <div class="navigation-mobile">
            <a href="" class="logo-main">
              <img
                class="lazy"
                :style="{ height: '48px', width: 'auto' }"
                src="/images/logo.png"
                alt="BES cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
              />
            </a>
            <div class="hamburger" id="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <social-fix />
        </header>

        <div id="content" class="site-content">
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
                      <a href="#">Liên hệ</a>
                    </div>
                    Tư vấn
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-page typography">
            <section
              class="h_section1 section-contact container"
              id="h_section1"
            >
              <div class="hero-component-wrapper">
                <div class="hero-component HeroComponent-module--root--3nHyr">
                  <div class="HeroComponent-module--featuredImage--rRxk8">
                    <picture
                      ><source
                        type="image/webp"
                        srcset="/images/banner/banner_3.png"
                        media="(min-width: 1000px)" />
                      <source
                        type="image/webp"
                        srcset="/images/banner/banner_3.png"
                        media="(min-width: 750px)" />
                      <source
                        type="image/webp"
                        srcset="/images/banner/banner_3.png"
                        media="(max-width: 750px)" />
                      <img
                        class="HeroComponent-module--image--6iLxP"
                        alt="SC Vivo City Center"
                        loading="eager"
                        srcset="/images/banner/banner_3.png"
                    /></picture>
                  </div>
                  <div class="HeroComponent-module--content--qbJuA">
                    <div class="ContentBlock-module--root--SmgMO" style="margin-bottom: 0;">
                      <h1 class="title is-2" style="margin-bottom: 16px;">Liên hệ với chúng tôi</h1>
                      <div
                        class="content rich-text RichTextField-module--root--bYkkB"
                        style="margin-bottom: 0;"
                      >
                        <p>
                          Kết nối với chúng tôi và trò chuyện với đội ngũ cố vấn
                          để hiểu cách chúng tôi giúp bạn nâng cao tiếng Anh.
                          Đặt lịch hẹn ngay để bắt đầu chinh phục mục tiêu của
                          bạn.&nbsp;
                        </p>
                        <p>
                          Địa chỉ: KĐT Mới, đường Hồ Sỹ Dương, phường Hưng Bình,
                          TP Vinh (44 NQT rẽ vào)
                        </p>
                        <p>Hotline: 0928 33 22 28</p>
                        <p style="margin-bottom: 0;">Email: besgroupasia@gmail.com</p>
                      </div>
                      <div
                        class="ContentBlock-module--heroFeatures--pHlgq"
                      ></div>
                      <div class="ContentBlock-module--links--B5qxa"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="h_section1 section-contact-form container"
              id="h_section1"
            >
              <div class="w-contact-form">
                <div>
                  <h2 class="title-contact-form">Tư vấn ngay</h2>
                  <p class="sub-title-contact-form">
                    Bắt đầu hành trình học tiếng Anh ngay hôm nay!
                  </p>
                  <div class="w-form-contact">
                    <div class="w-form-contact-col">
                      <div class="w-row-contact">
                        <label for="last-name">Họ (Last Name)</label>
                        <input type="text" id="last-name" />
                      </div>
                      <div class="w-row-contact">
                        <label for="last-name">Số điện thoại (Phone)*</label>
                        <input type="text" id="last-name" />
                      </div>
                      <div class="w-row-contact">
                        <label for="last-name">Đối tượng</label>
                        <select name="" id="">
                          <option value="">Học sinh THPT</option>
                          <option value="">Sinh viên</option>
                          <option value="">Người đi làm(&lt;26t)</option>
                          <option value="">Người đi làm(>26t)</option>
                          <option value="">
                            Chủ doanh nghiệp/nội trợ/làm tự do
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="w-form-contact-col">
                      <div class="w-row-contact">
                        <label for="last-name">Tên (First Name)</label>
                        <input type="text" id="last-name" />
                      </div>
                      <div class="w-row-contact">
                        <label for="last-name">Email</label>
                        <input type="text" id="last-name" />
                      </div>
                      <div class="w-row-contact">
                        <label for="last-name">Mục tiêu học</label>
                        <div class="gr-checkbox">
                          <ul>
                            <li>
                              <label for="muctieu-1">
                                <input type="checkbox" id="muctieu-1" />
                                <span>Tiếng Anh tổng quát & Luyện thi</span>
                              </label>
                            </li>
                            <li>
                              <label for="muctieu-2">
                                <input type="checkbox" id="muctieu-2" />
                                <span>Sự nghiệp & mở rộng quan hệ</span>
                              </label>
                            </li>
                            <li>
                              <label for="muctieu-3">
                                <input type="checkbox" id="muctieu-3" />
                                <span>Tiếng anh văn phòng</span>
                              </label>
                            </li>
                            <li>
                              <label for="muctieu-4">
                                <input type="checkbox" id="muctieu-4" />
                                <span>Giải trí & giao lưu</span>
                              </label>
                            </li>
                            <li>
                              <label for="muctieu-5">
                                <input type="checkbox" id="muctieu-5" />
                                <span>Du học</span>
                              </label>
                            </li>
                            <li>
                              <label for="muctieu-6">
                                <input type="checkbox" id="muctieu-6" />
                                <span>Du lịch & văn hoá</span>
                              </label>
                            </li>
                            <li>
                              <label for="muctieu-7">
                                <input type="checkbox" id="muctieu-7" />
                                <span>Phong cách sống & Giải trí</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-row-contact full-w">
                    <label for="address">Tỉnh thành nơi bạn sinh sống?</label>
                    <input type="text" id="address" name="address" />
                    <!-- <input type="text" id="last-name">  -->
                  </div>
                  <span class="note-accept-info"
                    >Bằng việc đăng ký thông tin, bạn đồng ý cho phép BES sử
                    dụng thông tin mà bạn đã cung cấp nhằm mục đích tư vấn, tiếp
                    thị sản phẩm và nghiên cứu thị trường.</span
                  >
                  <br />
                  <button class="btn-reg-contact">Đăng ký tư vấn</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- #content -->
        <FooterSite />
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import SocialFix from "@/components/SocialFix.vue";
import SwiperContainer from "@/components/Swiper.vue";
import FooterSite from "@/components/Footer.vue";
export default {
  components: { TopNav, HeaderNav, SocialFix, SwiperContainer, FooterSite },
};
</script>

<style scoped>
* {
  font-family: AvenirLTStd-Light\.ttf !important;
}
</style>
