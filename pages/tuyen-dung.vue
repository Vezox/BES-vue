<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterSite from "../components/Footer.vue";
import api from "../plugins/api";

export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      form: {
        full_name: "",
        email: "",
        phone: "",
        current_salary: "",
        expected_salary: "",
        file: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        const res = await api.post("/recruitment/create", this.form);
        alert("Đã gửi thành công");
        const btn = document.querySelector(
          ".box__online__application__form.active"
        );
        btn.classList.remove("active");
      } catch (error) {
        console.error("submit", error);
      }
    },
    async uploadFile(e) {
      try {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("name", e.target.files[0].name);
        const res = await api("/recruitment/upload-cv", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        const data = res.data;
        this.form.file = data.url;
      } catch (error) {
        console.error("uploadFile", error);
        if (error?.response?.data.message) {
          alert(error.response.data.message);
        }
      }
    },
  },
};
</script>

<template>
  <body
    class="page-template page-template-page-template page-template-aboutus page-template-page-templateaboutus-php page page-id-2539"
  >
    <div id="page" class="site">
      <HeaderNav></HeaderNav>

      <div id="content" class="site-content main-header">
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
                  Tuyển dụng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content" class="site-content">
        <div class="page-jobs typography">
          <div class="content-page">
            <div class="_decor_top">
              <img
                class="lazy"
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/page/page-decor-top.png"
                alt="Jobs at BES"
              />
            </div>
            <div class="_decor_bottom">
              <img
                class="lazy"
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                data-src="https://www.buv.edu.vn/wp-content/themes/main/assets/images/page/page-decor-bottom-left3.png"
                alt="Jobs at BES"
              />
            </div>
            <div class="container_common">
              <div class="content_common wrap" id="js-tab-job-buv">
                <div class="tab_job_list">
                  <div class="_tab_content tab1" data-content-new>
                    <div class="inner_wrap2">
                      <div class="title-def">
                        <img
                          class="lazy"
                          src="/images/common/star.png"
                          alt="Software Engineer"
                        />
                        Môi trường làm việc tại BES
                      </div>
                      <div class="content the_content_def">
                        <p>
                          BES ra đời với mục tiêu tạo nên một môi trường giúp
                          cho doanh nhân Việt Nam được nâng cao năng lực bản
                          thân cũng như phát triển thêm các mối quan hệ trong xã
                          hội. Tại sao bạn tham gia vào BES?
                        </p>
                        <ul>
                          <li>
                            Môi trường làm việc chuyên nghiệp và năng động.
                          </li>
                          <li>
                            Nhiều cơ hội phát triển năng lực và sự nghiêp.
                          </li>
                          <li>Mở rộng các mối quan hệ trong xã hội.</li>
                          <li>Chế độ đãi ngộ rõ ràng, minh bạch.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="inner_wrap2">
                      <div class="title-def">
                        <img
                          class="lazy"
                          src="/images/common/star.png"
                          alt="Software Engineer"
                        />
                        Gửi CV của bạn
                      </div>
                      <div class="content the_content_def">
                        <p>Các vị trí mà BES đang tuyển dụng:</p>
                        <ul>
                          <li>Giảng viên nước ngoài.</li>
                          <li>Trợ giảng.</li>
                          <li>Nhân viên trải nghiệm khách hàng.</li>
                        </ul>
                        <p>
                          Chưa có vị trí hiện tại phù hợp với bạn? Hãy gửi CV
                          của bạn đến phòng nhân sự của BES ngay hôm nay, bạn sẽ
                          là một trong những ứng viên tiềm năng đầu tiên cho
                          công việc phù hợp sắp tới.
                        </p>
                        <p>
                          <em>
                            *Bằng cách gửi CV của bạn, bạn đồng ý rằng BES có
                            quyền xử lý thông tin cá nhân được cung cấp của bạn
                            liên quan đến các vị trí tuyển dụng tiềm năng. Thông
                            tin chi tiết đã gửi của bạn sẽ chỉ được sử dụng nội
                            bộ.
                          </em>
                        </p>
                        <a class="btn_site _far js_submit_cv js_apply_now">
                          <span> Apply now </span>
                          <img
                            class="lazy"
                            src="/images/common/arrow-right.png"
                            alt="Software Engineer"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script type="text/javascript">
            jQuery(document).ready(function ($) {
              $(".js_apply_now").click("on", function (event) {
                $(".box__online__application__form").addClass("active");
              });
              $("#frm_question").css({
                opacity: "0",
                height: "0",
                overflow: "hidden",
              });
              $("#frm_source").val("General");
              $("#js-tab-job-buv").tabs_new2();
              var action_click = "click";
              var speed = "1000";
              $(".inner_wrap1 .content-detail .item .intro-other ._label").on(
                action_click,
                function () {
                  $(this).toggleClass("is-toggle");
                  $(this).next().slideToggle(speed);
                }
              );
              var album1 = new Swiper(".album1 .swiper-container", {
                speed: 1200,
                loop: false,
                slidesPerView: "auto",
                spaceBetween: 60,
                autoplay: {
                  delay: 3000,
                },
                autoHeight: true,
                navigation: {
                  nextEl: ".album1 .swiper-button-next",
                  prevEl: ".album1 .swiper-button-prev",
                },
              });
              $(".js-tab-album").tabs_new();
              var slide_video = new Swiper("#lib-video .swiper-container", {
                slidesPerView: "1",
                spaceBetween: 10,
                // loop: true,
                autoHeight: true,
                speed: 800,
                autoplay: {
                  delay: 3000,
                },
                navigation: {
                  nextEl: "#lib-video .custom-index-next",
                  prevEl: "#lib-video .custom-index-prev",
                },
              });
              $("._tab_job_type a").on(action_click, function () {
                album1.update();
                slide_video.update();
              });
              $("._tab_album_type a").on(action_click, function () {
                album1.update();
              });
              $(".js_submit_cv").click("on", function (event) {
                $(".box__online__application__form").addClass("active");
              });
            });
          </script>
        </div>
        <!-- #content -->
        <footer id="site-footer" class="site-footer">
          <div class="box__online__application__form">
            <div class="online__applycation__form _page_form_campus tyography">
              <div class="content_common _container_campus_form">
                <div class="form-title the_content_def">
                  <h3>online application form</h3>
                </div>
                <div class="content-main">
                  <form
                    class="form-item active frm-application"
                    id="apply_form"
                    @submit.prevent="submit"
                  >
                    <div class="frm-all active">
                      <div class="frm-group the_content_def">
                        <label>Họ và tên<span>*</span></label>
                        <input
                          placeholder="Họ và tên"
                          type="text"
                          name="full_name"
                          id="fullname"
                          required
                          v-model="form.full_name"
                        />
                      </div>
                      <div class="frm-group the_content_def">
                        <label>Mobile phone<span>*</span></label>
                        <input
                          placeholder="Enter your phone number"
                          type="text"
                          name="apply_phone"
                          id="apply_phone"
                          required
                          v-model="form.phone"
                        />
                        <div class="msg_error phone_error"></div>
                      </div>
                      <div class="frm-group the_content_def">
                        <label>Email<span>*</span></label>
                        <input
                          placeholder="Enter your email"
                          type="email"
                          name="apply_email"
                          id="apply_email"
                          required
                          v-model="form.email"
                        />
                        <div class="msg_error email_error"></div>
                      </div>

                      <div class="frm-group the_content_def">
                        <label>Mức lương hiện tại</label>
                        <input
                          placeholder="Mức lương hiện tại"
                          type="number"
                          name="current_salary"
                          id="current_salary"
                          v-model="form.current_salary"
                        />
                      </div>
                      <div class="frm-group the_content_def">
                        <label>Mức lương mong muốn</label>
                        <input
                          placeholder="Enter expected salary"
                          type="number"
                          name="expected_salary"
                          id="expected_salary"
                          v-model="form.expected_salary"
                        />
                      </div>
                      <div class="frm-group the_content_def">
                        <label>Tải lên CV<span>*</span></label>
                        <input
                          type="file"
                          class="upload_cv"
                          name="upload_cv"
                          id="upload_cv"
                          required
                          @change="uploadFile"
                        />
                      </div>
                      <div class="frm-group">
                        <button class="btn_site _far btn_submit" type="submit">
                          Submit
                          <img
                            class="lazy"
                            src="/images/common/arrow-right.png"
                          />
                        </button>
                      </div>
                    </div>
                    <div class="frm_msg" style="text-align: center"></div>
                  </form>
                </div>
              </div>
              <div class="x_close">
                <img class="lazy" src="/images/common/close_bl.png" />
              </div>
            </div>
          </div>
          <script>
            jQuery(document).ready(function ($) {
              $("#apply_find_about").on("change", function () {

              $(".x_close").click("on", function (event) {
                $(".box__online__application__form.active").removeClass(
                  "active"
                );
              });
              var regex_name_input =
                /^[a-zA-Z_àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ\s-']+$/;
              var regex_phone_input =
                /^08([0-9]{8})|09([0-9]{8})|01([0-9]{9})|03([0-9]{8})$/;
              var regex_email_input =
                /^([a-z0-9_\.\-\']+\@[\da-z\.-]+\.[a-z\.]{2,3})$/;
              var name_error = $("body").find(".name_error");
              var phone_error = $("body").find(".phone_error");
              var email_phone = $("body").find(".email_phone");
              // $('#apply_form button').prop('disabled', true).css("cursor", "not-allowed");
              $("#apply_name").keyup(function (event) {
                var name = $(this).val();
                if (!regex_name_input.test(name)) {
                  name_error.text("This field can only be entered text.");
                } else {
                  name_error.text("");
                }
              });
              //check phone
              $("#apply_phone").keyup(function (event) {
                var phone = $(this).val();
                if (!regex_phone_input.test(phone)) {
                  phone_error.text("Invalid phone number.");
                } else {
                  phone_error.text("");
                }
              });
              // check mail
              $("#apply_email").keyup(function (event) {
                var email = $(this).val();
                if (!regex_email_input.test(email)) {
                  email_phone.text("Invalid email.");
                } else {
                  email_phone.text("");
                }
              });
              var cv = $(".upload_cv").val();
              function validate_fileupload(fileName) {
                var allowed_extensions = new Array(
                  "pdf",
                  "docx",
                  "xlsx",
                  "xls",
                  "doc"
                );
                var file_extension = fileName.split(".").pop().toLowerCase();
                for (var i = 0; i <= allowed_extensions.length; i++) {
                  if (allowed_extensions[i] == file_extension) {
                    return $(".cv_error").text("");
                  }
                }

                return $(".cv_error").text(
                  "File format must be pdf, docx, xlsx, xls please check the format and try again."
                );
              }
              var letter = $(".upload_letter").val();
              function validate_fileLetter(fileName) {
                var allowed_extensions = new Array(
                  "pdf",
                  "docx",
                  "xlsx",
                  "xls",
                  "doc"
                );
                var file_extension = fileName.split(".").pop().toLowerCase();
                for (var i = 0; i <= allowed_extensions.length; i++) {
                  if (allowed_extensions[i] == file_extension) {
                    return $(".letter_error").text("");
                  }
                }

                return $(".letter_error").text(
                  "File format must be pdf, docx, xlsx, xls please check the format and try again."
                );
              }
              $(".upload_cv").change(function (event) {
                x = event.target.files[0].name;
                $(".js_upload_name").text(x);
                var cv = $(".upload_cv").val();
                if (cv !== "") {
                  validate_fileupload(cv);
                }
              });
              $(".upload_letter").change(function (event) {
                x = event.target.files[0].name;
                $(".js_upload_name_letter").text(x);
                var letter = $(".upload_letter").val();
                if (letter !== "") {
                  validate_fileLetter(letter);
                }
              });
              $("#apply_form").submit(function (e) {
                e.preventDefault();
                const thisEl = $(this);
                const formThisData = new FormData(
                  document.getElementById("apply_form")
                );
                const thisSubmitBtn = thisEl.find(".btn_submit");
                const formMsgSuccess = thisEl.find(".frm_msg");
                const formMsgUnsuccessful = thisEl.find(".frm_msg");
                const fieldGroup = thisEl.find(".frm-all");
                console.log("oke la")
                $.ajax({
                  type: "post",
                  url: obj.AJAX_URL,
                  dataType: "json",
                  cache: false,
                  processData: false,
                  contentType: false,
                  async: false,
                  data: formThisData,
                })
                  .done(function (response) {
                    if (response.success) {
                      formMsgSuccess.text(response.msg);
                      $("#apply_name").val("");
                      $("#apply_date").val("");
                      $("#apply_phone").val("");
                      $("#apply_email").val("");
                      $("#apply_address").val("");
                      $("#apply_find_about").val("");
                      $("#apply_question").val("");
                      $("#apply_area").val("");
                      $("#apply_date_available").val("");
                      $("#expected_salary").val("");
                      $("#current_salary").val("");
                      $(".js_upload_name").text("No file chosen");
                      $(".js_upload_name_letter").text("No file chosen");
                      fieldGroup.remove();
                    }
                    if (response.msg) {
                      formMsgUnsuccessful.text(response.msg);
                    }
                  })
                  .fail(function (jqXHR, textStatus, errorThrown) {
                    console.log("ERROR", jqXHR.responseText);
                  });
              });
            });
          </script>
        </footer>
        <form style="margin: 0">
          <input
            type="hidden"
            id="contact_nonce"
            name="contact_nonce"
            value="b1acbd1ce6"
          /><input
            type="hidden"
            name="_wp_http_referer"
            value="/work-for-buv/"
          />
        </form>
        <form style="margin: 0">
          <input
            type="hidden"
            id="contact_under_nonce"
            name="contact_under_nonce"
            value="ed5a678420"
          /><input
            type="hidden"
            name="_wp_http_referer"
            value="/work-for-buv/"
          />
        </form>
        <form style="margin: 0">
          <input
            type="hidden"
            id="contact_post_nonce"
            name="contact_post_nonce"
            value="c28a1f3610"
          /><input
            type="hidden"
            name="_wp_http_referer"
            value="/work-for-buv/"
          />
        </form>
        <form style="margin: 0">
          <input
            type="hidden"
            id="contact_pathway_nonce"
            name="contact_pathway_nonce"
            value="8d7466c5c6"
          /><input
            type="hidden"
            name="_wp_http_referer"
            value="/work-for-buv/"
          />
        </form>
        <form style="margin: 0">
          <input
            type="hidden"
            id="contact_english_nonce"
            name="contact_english_nonce"
            value="f09390bf91"
          /><input
            type="hidden"
            name="_wp_http_referer"
            value="/work-for-buv/"
          />
        </form>
      </div>

      <FooterSite />
    </div>
  </body>
</template>
