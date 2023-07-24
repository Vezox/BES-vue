<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterSite from "@/components/Footer.vue";
export default {
  components: { HeaderNav, FooterSite },
  methods: {
    getStyle(i) {
      return {
        transform: `rotate(${i * 10}deg)`,
      };
    },
  },
};
</script>

<template>
  <body
    class="page-template page-template-page-template page-template-i-f-programme page-template-page-templatei-f-programme-php page page-id-2552"
  >
    <div id="page" class="site">
      <HeaderNav></HeaderNav>

      <div id="content" class="site-content main-header">
        <div class="page-programme typography">
          <div class="banner-def lazy" style="">
            <img
              src="/images/home/s4-bg-1.png"
              style="height: 200px; width: 100%; object-fit: cover"
            />
            <div class="banner_mobi lazy">
              <img src="/images/banner/banner_1.png" alt="" />
            </div>
            <div class="container_common">
              <div class="content_common">
                <div class="content">
                  <div class="top">
                    <a :href="localePath('/')">Home</a>
                    <span>/</span>
                    <a href="#">Khoá học</a>
                  </div>
                  Khoá học Class
                </div>
              </div>
            </div>
          </div>
          <div class="content-page">
            <div class="_decor">
              <img
                class="lazy"
                src="/images/ifprogramme/decor.png"
                alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
              />
            </div>
            <div class="container_common">
              <div class="content_common">
                <div class="_wrapper">
                  <div class="section1" id="data-h1">
                    <div class="title-def">
                      <img class="lazy" src="/images/common/star.png" />Tổng
                      quan về chương trình
                    </div>
                    <div class="content-section1 the_content_def">
                      <p>
                        <span data-contrast="auto"
                          >Là khoá học độc quyền, được thiết kế nhằm phục vụ cho
                          người đi làm bận rộn với các tiện ích và hỗ trợ tối
                          đa, linh hoạt dựa theo thời gian và mục tiêu của người
                          học. Với đội ngũ chuyên môn là các chuyên gia giảng
                          dạy ngoại ngữ, BES đã thiết kế nên chương trình học
                          được chứng minh và dành riêng cho người bận rộn.</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="section2" id="data-h2">
                    <div class="title-def">
                      <img class="lazy" src="/images/common/star.png" />
                      Khoá học mang lại
                    </div>
                    <div class="content-section2 the_content_def khoa-hoc">
                      <div>
                        <div class="_img">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <span data-contrast="auto">
                          Các giờ học nhóm hướng dẫn tạo nên môi trường học
                          tiếng Anh với đa dạng các chủ đề giúp học viên có thể
                          vận dụng ngôn ngữ vào các bài thảo luận, tình huống,
                          thuyết trình dưới sự hướng dẫn và hỗ trợ từ giảng
                          viên.
                        </span>
                      </div>
                      <div>
                        <div class="_img">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame-1-e1644310543108.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <span data-contrast="auto">
                          Đối với khoá VIP, các giờ học 1-1 với giáo viên nước
                          ngoài giúp học viên củng cố kiến thức, tăng khả năng
                          phản xạ ngôn ngữ và nhận được đánh giá chi tiết nhất
                          về khả năng ngôn ngữ của bản thân.Học viên đặt lịch
                          học thông qua app để chủ động trong thời gian và lịch
                          trình.</span
                        >
                      </div>
                      <div>
                        <div class="_img">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame-2-1.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <span data-contrast="auto">
                          Giáo trình được đội ngũ chuyên môn BES biên soạn và
                          xuất bản độc quyền với đa dạng chủ đề và có thể ứng
                          dụng vào trong thực tế, công việc. Giáo trình cũng
                          được nghiên cứu chia theo cấp bậc đạt chuẩn quốc tế để
                          phù hợp với từng cấp độ của chương trình học.</span
                        >
                      </div>
                      <div>
                        <div class="_img">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame-3.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <span data-contrast="auto">
                          Cố vấn học tập cá nhân giúp học viên xác định mục tiêu
                          học tập, cập nhật tiến độ trong suốt quá trình học và
                          tiến hành điều chỉnh, hướng người học đến mục đích học
                          tập cuối cùng.</span
                        >
                      </div>
                      <div>
                        <div class="_img">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame-4.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <span data-contrast="auto">
                          Học viên được sử dụng tất cả các tiện ích tại BES như
                          app tích hợp tiện ích, khu tự học, khu thư viện,
                          cafeteria... Các buổi workshop chuyên đề giúp tăng
                          cường thực hành, phát triển kỹ năng mềm và giao lưu,
                          kết nối.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="section6" id="data-h3">
                    <div class="title-def">
                      <img
                        class="lazy"
                        src="/images/common/star.png"
                        alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                      />
                      Thời lượng chương trình
                    </div>
                    <div class="content-section2 the_content_def khoa-hoc">
                      <div>
                        <div style="width: 14%">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <div style="width: 86%">
                          <span data-contrast="auto">
                            Khoá VIP có thời lượng 1 năm: học viên được phép
                            tham gia tối đa 2 lớp học nhóm và không giới hạn các
                            giờ học 1-1.
                          </span>
                        </div>
                      </div>
                      <div>
                        <div style="width: 14%">
                          <img
                            class="lazy"
                            src="/uploads/2021/09/Frame.png"
                            alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                          />
                        </div>
                        <div style="width: 86%">
                          <span data-contrast="auto">
                            Khoá Class có thời lượng 3,5 tháng bao gồm 26 buổi
                            học, 2 buổi/tuần, 1,5h/buổi.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="content-section6">
                      <div class="content_table">
                        <div class="table_rps">
                          <table
                            style="
                              border-collapse: collapse;
                              width: 100%;
                              height: 520px;
                            "
                          >
                            <tbody>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px"></td>
                                <td style="width: 30%; height: 60px">
                                  <strong>VIP</strong>
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <strong>Class</strong>
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Phương pháp học độc quyền
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Lớp học với giáo viên nước ngoài
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Lớp học tương tác 1-1 với giáo viên nước ngoài
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/x.svg" />
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Cấu trúc khoá học
                                </td>
                                <td style="width: 30%; height: 60px">
                                  Tối đa 2 khoá class không giới hạn giờ 1-1
                                </td>
                                <td style="width: 30%; height: 60px">
                                  1 khoá thời lượng 3,5 tháng
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Giáo trình độc quyền
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Kiểm tra trình độ đầu vào
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Học 24/7
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/x.svg" />
                                </td>
                              </tr>
                              <tr style="height: 60px">
                                <td style="width: 40%; height: 60px">
                                  Cố vấn học tập
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                                <td style="width: 30%; height: 60px">
                                  <img src="/images/check.svg" />
                                </td>
                              </tr>
                              <tr></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section4" id="data-h4">
                    <div class="title-def">
                      <img
                        class="lazy"
                        src="/images/common/star.png"
                        alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                      />
                      Phương pháp giảng dạy
                    </div>
                    <div class="content-section2 the_content_def">
                      <div class="circle-container">
                        <div class="line-1 dotted-line"></div>
                        <div class="line-2 dotted-line"></div>
                        <div class="line-3 dotted-line"></div>
                        <div class="line-4 dotted-line">
                          <div id="triangle-up" class="triangle-dotted"></div>
                        </div>
                        <div class="line-5 dotted-line">
                          <div id="triangle-left" class="triangle-dotted"></div>
                        </div>

                        <h1 class="title-circle">
                          Vòng tròng tuần hoàn mục tiêu
                        </h1>

                        <div class="circle-box">
                          <div class="box-1">
                            <h1>Quá trình đánh giá</h1>
                            <span>(trước khoá học)</span>
                          </div>

                          <div class="box-2">
                            <h1>Quá trình đánh giá</h1>
                            <span>(trước khoá học)</span>
                          </div>

                          <div class="box-3">
                            <h1>Quá trình đánh giá</h1>
                            <span>(trước khoá học)</span>
                          </div>
                        </div>
                        <div class="circle-arrow-container">
                          <div class="big-arrow">
                            <div class="triangle-top"></div>
                            <div class="triangle-bottom"></div>
                            <div class="triangle-right"></div>
                            <span> Kiểm tra năng lực </span>
                          </div>
                          <div class="big-arrow">
                            <div class="triangle-top"></div>
                            <div class="triangle-bottom"></div>
                            <div class="triangle-right"></div>
                            <span> Tìm hiểu nhu cầu </span>
                          </div>
                          <div class="big-arrow">
                            <div class="triangle-top"></div>
                            <div class="triangle-bottom"></div>
                            <div class="triangle-right"></div>
                            <span> Xác định mục tiêu </span>
                          </div>
                          <div class="big-arrow">
                            <div class="triangle-top"></div>
                            <div class="triangle-bottom"></div>
                            <div class="triangle-right"></div>
                            <span> Thoả thuận mục tiêu </span>
                          </div>
                          <div class="circle-arrow">
                            <div class="arrow arrow-1"></div>
                            <div class="arrow arrow-2"></div>
                            <div class="arrow arrow-3"></div>

                            <div class="circle-part-line">
                              <div class="part-line" style="rotate: -30deg">
                                <div class="part-text part-text-1">Đào tạo</div>
                              </div>
                              <div class="part-line" style="rotate: 90deg">
                                <div class="part-text part-text-2">
                                  Đánh giá
                                </div>
                              </div>
                              <div class="part-line" style="rotate: 210deg">
                                <div class="part-text part-text-3">
                                  Hiệu chỉnh
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="big-arrow">
                            <div class="triangle-top"></div>
                            <div class="triangle-bottom"></div>
                            <div class="triangle-right"></div>
                            <span> Kết khoá & chứng chỉ </span>
                          </div>
                          <div class="big-arrow">
                            <div class="triangle-top"></div>
                            <div class="triangle-bottom"></div>
                            <div class="triangle-right"></div>
                            <span> Xác định mục tiêu mới </span>
                          </div>
                        </div>
                      </div>
                      <div class="circle-study">
                        <div class="circle">
                          <div
                            v-for="i in 18"
                            class="circle-line"
                            :style="getStyle(i)"
                          ></div>
                          <div class="circle-content content1">
                            <img src="/images/users.svg" alt="" />
                            <h1>workshop ngoại khoá</h1>
                            <p>Tăng cường thực hành</p>
                            <ul>
                              <li>Đa dạng hoạt động</li>
                              <li>Khách mời là chuyên gia từ nhiều lĩnh vực</li>
                              <li>Giao lưu, kết nối bạn bè</li>
                            </ul>
                          </div>
                          <div class="circle-content content2">
                            <img src="/images/comments.svg" alt="" />
                            <h1>Giờ học 1-1</h1>
                            <p>Tăng cường tương tác</p>
                            <ul>
                              <li>Giao tiếp với giáo viên nước ngoài</li>
                              <li>Phát triển phản xạ ngôn ngữ</li>
                              <li>Điều chỉnh theo năng lực học viên</li>
                            </ul>
                          </div>
                          <div class="circle-content content3">
                            <img src="/images/people.svg" alt="" />
                            <h1>Lớp thảo luận</h1>
                            <p>Vận dụng tiếng anh vào thực tế</p>
                            <ul>
                              <li>Đa dạng các chủ để</li>
                              <li>Phát triển kỹ năng mềm</li>
                              <li>Giao lưu, kết nối</li>
                            </ul>
                          </div>

                          <div class="circle-content content4">
                            <h1>Giờ học 1-1</h1>
                            <p>Tăng cường tương tác</p>
                            <ul>
                              <li>Giao tiếp với giáo viên nước ngoài</li>
                              <li>Phát triển phản xạ ngôn ngữ</li>
                              <li>Điều chỉnh theo năng lực học viên</li>
                            </ul>
                          </div>
                          <div class="circle-content content5">
                            <h1>Giờ học 1-1</h1>
                            <p>Tăng cường tương tác</p>
                            <ul>
                              <li>Giao tiếp với giáo viên nước ngoài</li>
                              <li>Phát triển phản xạ ngôn ngữ</li>
                              <li>Điều chỉnh theo năng lực học viên</li>
                            </ul>
                          </div>
                          <div class="circle-content content6">
                            <h1>Giờ học 1-1</h1>
                            <p>Tăng cường tương tác</p>
                            <ul>
                              <li>Giao tiếp với giáo viên nước ngoài</li>
                              <li>Phát triển phản xạ ngôn ngữ</li>
                              <li>Điều chỉnh theo năng lực học viên</li>
                            </ul>
                          </div>
                          <div class="mini-circle">
                            <img
                              class="lazy mini-img1"
                              src="/images/book.svg"
                              alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                            />

                            <img
                              class="lazy mini-img2"
                              src="/images/group.svg"
                              alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                            />

                            <img
                              class="lazy mini-img3"
                              src="/images/headphone.svg"
                              alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section4" id="data-h5">
                    <div class="title-def">
                      <img
                        class="lazy"
                        src="/images/common/star.png"
                        alt="Cộng đồng học tiếng anh dành cho doanh nhân Việt Nam"
                      />
                      Biểu đồ cấp độ BES
                    </div>
                    <div class="content-section2 the_content_def">
                      <div class="part-container">
                        <div class="part">
                          <span>Level CEFR A1</span>
                          <div class="line"></div>
                        </div>
                        <div class="part">
                          <span>A2</span>
                          <div class="line"></div>
                        </div>
                        <div class="part">
                          <span>A3</span>
                          <div class="line"></div>
                        </div>
                        <div class="part">
                          <span>A4</span>
                          <div class="line"></div>
                        </div>
                      </div>
                      <div class="box-target-container">
                        <div class="box-target target-1">
                          <H1>BUIDING</H1>
                          <span>Beginner</span>
                        </div>
                        <div class="box-target target-2">
                          <H1>ENEGRY</H1>
                          <span>Elementary</span>
                        </div>
                        <div class="box-target target-3">
                          <H1>SPEED UP</H1>
                          <span>Intermidiate</span>
                        </div>
                        <div class="box-target target-4">
                          <H1>POWER</H1>
                          <span>Upper-Intermediate</span>
                        </div>
                      </div>
                      <div class="box-text">
                        <div class="line"></div>
                        <div class="text-content-container">
                          <div class="text-content">
                            <ul>
                              <li>Có thể giao tiếp cơ bản</li>
                              <li>
                                Bài diễn thuyết chậm, rõ ràng, với những đoạn
                                nghỉ dài
                              </li>
                              <li>
                                Văn bản ngắn, đơn giản và các từ thông dung
                              </li>
                            </ul>
                          </div>
                          <div class="text-content">
                            <ul>
                              <li>
                                Ngôn ngữ cơ bản về cá nhân, từ liên quan đến gia
                                đình và công việc
                              </li>
                              <li>
                                Hiểu được các từ ngữ được nói chậm, rõ ràng
                              </li>
                              <li>
                                Các văn bản ngắn, đơn giản về các vấn đề quen
                                thuộc
                              </li>
                            </ul>
                          </div>
                          <div class="text-content">
                            <ul>
                              <li>
                                Ý chính của các chủ đề thông dụng ở công sở,
                                trường học hay khi du lịch
                              </li>
                              <li>
                                Các chi tiết chung và cụ thể trong một bài diễn
                                thuyết rõ ràng
                              </li>
                              <li>
                                Thông tin, dữ kiện về những chủ đề bạn quan tâm
                              </li>
                            </ul>
                          </div>
                          <div class="text-content">
                            <ul>
                              <li>Ý chính của văn bản phức tạp</li>
                              <li>
                                Ngôn ngữ nói tiêu chuẩn, phát trực tiếp hoặc
                                phát sóng truyền hình
                              </li>
                              <li>
                                Các nội dung có các từ vựng đọc rộng, thể hiện ý
                                kiến tự do
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="teacher"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- #content -->
        <FooterSite />
      </div>
    </div>
    <!-- #page -->
  </body>
</template>
<style scoped>
._wrapper {
  padding-left: 0% !important;
  padding-right: 0%;
}

._wrapper .section4 {
  padding: 0;
}

.circle-container {
  padding: 4em 0 12em;
  position: relative;
  margin-bottom: 8em;
}

.circle-box {
  display: flex;
  justify-content: space-between;
  padding-bottom: 6em;
}

.dotted-line {
  border: none;
  border-top: 8px dotted var(--color-main);
  color: #fff;
  background-color: #fff;
  position: absolute;
  height: 4px;
}

.line-1 {
  rotate: 90deg;
  width: 20em;
  left: -8em;
  top: 14em;
}

.line-2 {
  rotate: 90deg;
  width: 38em;
  left: 12em;
  top: 23em;
}
.line-3 {
  rotate: 90deg;
  width: 20em;
  right: 5em;
  top: 14em;
}

.line-4 {
  width: 22em;
  rotate: 0deg;
  bottom: 7em;
  left: 32em;
}

.line-5 {
  rotate: 90deg;
  width: 10em;
  right: 15em;
  bottom: 12em;
}

.triangle-dotted {
  width: 0;
  height: 0;
  position: absolute;
}

#triangle-up {
  border-left: 1.2em solid transparent;
  border-right: 1.2em solid transparent;
  border-bottom: 2.4em solid var(--color-main);
  top: -8em;
  left: -2.2em;
}

#triangle-left {
  border-top: 1.2em solid transparent;
  border-right: 2.4em solid var(--color-main);
  border-bottom: 1.2em solid transparent;
  top: 10em;
  left: 8.8em;
  rotate: -90deg;
}

.title-circle {
  position: absolute;
  bottom: 3em;
  left: 43%;
  color: var(--color-main);
}

.circle-box > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: var(--color-main);
}

.circle-box > div > h1 {
  color: var(--color-main);
}

.box-1 {
  width: 40%;
}

.box-2 {
  width: 40%;
}

.box-3 {
  width: 20%;
}

.circle-arrow-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.big-arrow {
  width: 6.2em;
  height: 4em;
  background-color: var(--color-main);
  color: #fff;
  font-weight: 900;
  font-size: 1em;
  padding-left: 0.4em;
  display: flex;
  align-items: center;
  position: relative;
  top: 10em;
}

.big-arrow span {
  display: block;
  z-index: 9999;
}

.triangle-top {
  width: 0;
  height: 0;
  border-top: 3.6em solid var(--color-main);
  border-left: 2em solid transparent;
  position: absolute;
  left: -1.1em;
  top: 0;
}

.triangle-right {
  width: 0;
  height: 0;
  border-top: 2em solid transparent;
  border-left: 1.2em solid var(--color-main);
  border-bottom: 2em solid transparent;
  position: absolute;
  left: 6.2em;
  top: 1px;
}

.triangle-bottom {
  width: 0;
  height: 0;
  border-bottom: 3.6em solid var(--color-main);
  border-left: 2em solid transparent;
  position: absolute;
  left: -1.1em;
  top: calc(0.4em);
}

.circle-arrow {
  width: 24em;
  height: 24em;
  background-color: var(--color-main);
  border-radius: 50%;
  position: relative;
}

.circle-arrow .arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 4em solid transparent;
  border-left: 5em solid white;
  border-bottom: 4em solid transparent;
}

.circle-arrow .arrow::after {
  display: block;
  content: "";
  width: 0;
  height: 0;
  border-top: 4em solid transparent;
  border-left: 5em solid var(--color-main);
  border-bottom: 4em solid transparent;
  top: -4em;
  left: -104px;
  position: absolute;
}

.circle-arrow .arrow-1 {
  top: -2em;
  left: 50%;
  transform: translateX(-50%);
  rotate: -4deg;
}

.circle-arrow .arrow-2 {
  bottom: 40px;
  right: 20px;
  rotate: 120deg;
}

.circle-arrow .arrow-3 {
  bottom: 50px;
  left: 16px;
  rotate: 232deg;
}

.circle-part-line {
  width: 20em;
  height: 20em;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  top: 2em;
  left: 2em;
  z-index: 9999;
  overflow: hidden;
}

.part-text {
  font-size: 1.6em;
  color: var(--color-main);
}

.part-text-1 {
  rotate: 30deg;
  transform: translate(30px, -84px);
}

.part-text-2 {
  transform: translate(26%, -116px) rotate(-90deg);
}

.part-text-3 {
  transform: translate(8%, -74px) rotate(-210deg);
}
.circle-part-line .part-line {
  position: absolute;
  width: calc(50% + 2px);
  height: 1em;
  background-color: var(--color-main);
  top: 48%;
  left: 24%;
  transform: translate(-50%, 0);
}

.circle-study {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 9em 0;
}

.circle-study .circle {
  width: 60em;
  height: 60em;
  border-radius: 50%;
  border: 0.4em solid var(--color-main);
  background-color: #fff !important;
}

.circle .circle-line {
  width: calc(100% + 6em);
  height: 3em;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: -3em;
}

h1 {
  font-size: 1.2em;
  font-weight: 700 !important;
  margin-bottom: 0.2em;
  font-family: Brandon_bld\.otf;
  text-transform: uppercase;
}

.circle-content p {
  font-size: 1em;
  font-weight: bold;
}

.circle-content {
  position: absolute;
  z-index: 1;
  background-color: #fff;
  width: 15em;
  height: 17.6em;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circle-content img {
  width: 7em;
  object-fit: cover;
  background-color: #fff;
  margin-bottom: 0.4em;
}

.circle-content.content1 {
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle-content.content3 {
  left: 100%;
  bottom: 0;
  transform: translate(-50%, -50%);
}

.circle-content.content2 {
  left: 0%;
  bottom: 0;
  transform: translate(-50%, -50%);
}

.circle-content.content4 {
  left: 18%;
  top: 36%;
  height: auto;
  transform: translate(-50%, -50%);
}

.circle-content.content5 {
  left: 82%;
  top: 36%;
  height: auto;
  transform: translate(-50%, -50%);
}

.circle-content.content6 {
  left: 50%;
  bottom: -2%;
  height: auto;
  transform: translate(-50%, -50%);
}

.mini-circle {
  width: 18em;
  height: 18em;
  background-color: #fff;
  border: 0.2em solid var(--color-main);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mini-circle img {
  width: 24%;
  height: 24%;
  object-fit: cover;
  background-color: #fff;
  padding: 0.4em;
}

.mini-circle .mini-img1 {
  position: absolute;
  top: 36%;
  right: 0;
  transform: translate(50%, -50%);
}

.mini-circle .mini-img2 {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.mini-circle .mini-img3 {
  position: absolute;
  top: 36%;
  left: 0;
  transform: translate(-50%, -50%);
}

.part-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8em;
  margin-right: 20%;
}

.part {
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.part span {
  font-size: 1em;
  font-weight: 600;
  color: rgb(111, 66, 2);
  margin-bottom: 0.4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
}

.part .line {
  width: 100%;
  height: 0.4em;
  background-color: rgb(111, 66, 2);
  position: absolute;
  bottom: 0;
  border-radius: 0.1em;
}

.part .line::before,
.part .line::after {
  display: block;
  content: "";
  width: 1.2em;
  height: 1.2em;
  background-color: rgb(111, 66, 2);
  position: absolute;
  bottom: -0.4em;
  right: 0;
  border-radius: 50%;
}

.part .line::after {
  left: 0;
}

.box-target-container {
  margin-top: 4em;
}

.box-text,
.box-target-container {
  rotate: -12deg;
}

.box-target-container {
  display: flex;
  margin-bottom: 5em;
  color: #fff;
}

.box-target {
  width: 18em;
  height: 12em;
  background-color: rgb(111, 66, 2);
  rotate: 12deg;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1em 0.1em 0.4em rgb(154, 109, 46);
}

.box-target > h1 {
  font-size: 1.4em;
  font-weight: 900 !important;
  margin-bottom: 0.2em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #fff;
}

.box-target::after {
  display: block;
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 3em solid rgb(154, 109, 46);
  border-left: 3em solid transparent;
  bottom: 0;
  right: 0;
}

.target-1 {
  right: 2.6em;
}

.target-2 {
  right: 5.2em;
}

.target-3 {
  right: 7.8em;
}

.target-4 {
  right: 10.4em;
}

.target-4::after {
  display: block;
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8em solid transparent;
  border-left: 8em solid rgb(111, 66, 2);
  border-bottom: 8em solid transparent;
  right: -6.4em;
  top: -2em;
}

.box-text > .line {
  width: 100%;
  height: 0.4em;
  background-color: rgb(111, 66, 2);
  margin-bottom: 2.4em;
  border-radius: 0.2em;
}

.box-text > .line::after {
  display: block;
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 1em solid transparent;
  border-left: 2em solid rgb(111, 66, 2);
  border-bottom: 1em solid transparent;
  right: -1.8em;
  top: -0.9em;
  rotate: -4deg;
}

.text-content-container {
  display: flex;
  justify-content: space-between;
}

.text-content {
  width: 24%;
  rotate: 12deg;
}

.text-content::before {
  display: block;
  content: "";
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  background-color: rgb(111, 66, 2);
  border-radius: 50%;
  right: 50%;
  top: -3.2em;
}

.khoa-hoc > div {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.khoa-hoc > div ._img {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.teacher {
  font-size: 16px;
}

.circle {
  background-color: var(--color-main);
  width: 20em;
  height: 20em;
  border-radius: 50%;
  position: relative;
}
</style>
