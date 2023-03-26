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
                alt="BES đạt chứng nhận kiểm định toàn diện từ Cơ quan Đảm bảo Chất lượng Giáo dục Đại học Anh Quốc (QAA)"
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
                alt="BES đạt chứng nhận kiểm định toàn diện từ Cơ quan Đảm bảo Chất lượng Giáo dục Đại học Anh Quốc (QAA)"
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
          <div class="home-page typography">
            <section class="h_section1 section-contact container" id="h_section1">
              <div class="hero-component-wrapper">
                <div class="hero-component HeroComponent-module--root--3nHyr">
                  <div class="HeroComponent-module--featuredImage--rRxk8">
                    <picture
                      ><source
                        type="image/webp"
                        srcset="
                          https://wse-strapi-image-hosting-wse-dev.s3.eu-west-1.amazonaws.com/large_DSCF_1960_copy_0e5793afb0.webp
                        "
                        media="(min-width: 1000px)" />
                      <source
                        type="image/webp"
                        srcset="
                          https://wse-strapi-image-hosting-wse-dev.s3.eu-west-1.amazonaws.com/medium_DSCF_1960_copy_0e5793afb0.webp
                        "
                        media="(min-width: 750px)" />
                      <source
                        type="image/webp"
                        srcset="
                          https://wse-strapi-image-hosting-wse-dev.s3.eu-west-1.amazonaws.com/small_DSCF_1960_copy_0e5793afb0.webp
                        "
                        media="(max-width: 750px)" />
                      <img
                        class="HeroComponent-module--image--6iLxP"
                        alt="SC Vivo City Center"
                        loading="eager"
                        src="https://wse-strapi-image-hosting-wse-dev.s3.eu-west-1.amazonaws.com/DSCF_1960_copy_0e5793afb0.webp"
                    /></picture>
                  </div>
                  <div class="HeroComponent-module--content--qbJuA">
                    <div class="ContentBlock-module--root--SmgMO">
                      <h1 class="title is-2">Liên hệ với chúng tôi</h1>
                      <div
                        class="content rich-text RichTextField-module--root--bYkkB"
                      >
                        <p>
                          Kết nối với chúng tôi và trò chuyện với đội ngũ cố vấn
                          để hiểu cách chúng tôi giúp bạn nâng cao tiếng Anh.
                          Đặt lịch hẹn ngay để bắt đầu chinh phục mục tiêu của
                          bạn.&nbsp;
                        </p>
                        <p>
                          Địa chỉ: 21 Lê Quý Đôn, Phường Võ Thị Sáu, Quận 3,
                          Thành phố Hồ Chí Minh
                        </p>
                        <p>Hotline: 1800 646448</p>
                        <p>Email: marketing-admin@wse.edu.vn</p>
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
            <section class="h_section1 section-contact-form container" id="h_section1">
                <div class="w-contact-form">
                    <div>
                        <h2 class="title-contact-form">Tư vấn ngay</h2>
                        <p class="sub-title-contact-form">Bắt đầu hành trình học tiếng Anh ngay hôm nay!</p>
                        <div class="w-form-contact">
                            <div class="w-form-contact-col">
                                <div class="w-row-contact">
                                    <label for="last-name">Họ (Last Name)</label>
                                    <input type="text" id="last-name"> 
                                </div>
                                <div class="w-row-contact">
                                    <label for="last-name">Số điện thoại (Phone)*</label>
                                    <input type="text" id="last-name"> 
                                </div>
                                <div class="w-row-contact">
                                    <label for="last-name">Đối tượng</label>
                                    <select name="" id="">
                                        <option value="">1</option>
                                        <option value="">1</option>
                                        <option value="">1</option>
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </div>
                            <div class="w-form-contact-col">
                                <div class="w-row-contact">
                                    <label for="last-name">Tên (First Name)</label>
                                    <input type="text" id="last-name"> 
                                </div>
                                <div class="w-row-contact">
                                    <label for="last-name">Email</label>
                                    <input type="text" id="last-name"> 
                                </div>
                                <div class="w-row-contact">
                                    <label for="last-name">Mục tiêu học</label>
                                    <div class="gr-checkbox">
                                        <ul>
                                            <li>
                                                <label for="muctieu-1">
                                                    <input  type="checkbox"  id="muctieu-1">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="muctieu-2">
                                                    <input  type="checkbox" id="muctieu-2">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="muctieu-3">
                                                    <input  type="checkbox" id="muctieu-3">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="muctieu-4">
                                                    <input  type="checkbox" id="muctieu-4">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="muctieu-5">
                                                    <input  type="checkbox" id="muctieu-5">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="muctieu-6">
                                                    <input  type="checkbox" id="muctieu-6">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="muctieu-7">
                                                    <input  type="checkbox" id="muctieu-7">
                                                    <span>Tiếng Anh tổng quát & Luyện thi</span>
                                                </label>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-row-contact full-w">
                                    <label for="last-name">Tỉnh thành nơi bạn sinh sống?</label>
                                    <select name="" id="">
                                        <option value="">1</option>
                                        <option value="">1</option>
                                        <option value="">1</option>
                                        <option value="">1</option>
                                    </select>
                                    <!-- <input type="text" id="last-name">  -->
                        </div>
                        <div class="w-row-contact full-w">
                            <label for="last-name">Bạn muốn học tại trung tâm nào?</label>
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">1</option>
                                <option value="">1</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <span class="note-accept-info">Bằng việc đăng ký thông tin, bạn đồng ý cho phép BES sử dụng thông tin mà bạn đã cung cấp nhằm mục đích tư vấn, tiếp thị sản phẩm và nghiên cứu thị trường.</span>
                        <br/>
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
  components: { TopNav, HeaderNav, SocialFix, SwiperContainer,FooterSite },
};
</script>

