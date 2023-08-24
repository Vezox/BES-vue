<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterSite from "../components/Footer.vue";
import api from "../plugins/api";

export default {
  components: { HeaderNav, FooterSite },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        province: "",
        description: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        await api.post("/franchise/create", this.form);
        alert("Gửi thông tin thành công");
        this.form = {
          name: "",
          phone: "",
          email: "",
          province: "",
          description: "",
        };
      } catch (error) {
        console.error(error);
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
        <div>
          <div id="nhuong-quyen-banner-image">
            <img src="/images/banner-x.png" alt="Image of Traffic Monsoon" />
          </div>
          <div id="hi"></div>
          <div class="form">
            <form @submit.prevent="submit">
              <div class="line">
                <input
                  type="text"
                  required
                  v-model="form.name"
                  placeholder="Họ và tên*"
                  name="name"
                />

                <input
                  type="email"
                  name="email"
                  required
                  v-model="form.email"
                  placeholder="Email*"
                />
              </div>
              <div class="line">
                <input
                  type="text"
                  required
                  v-model="form.phone"
                  name="phone"
                  placeholder="Số điện thoại*"
                />
                <select
                  v-model="form.province"
                  title="Lựa chọn tỉnh thành*"
                  required
                >
                  <option value="" disabled="disabled" selected="selected">
                    Tỉnh thành*
                  </option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="An Giang">An Giang</option>
                  <option value="Bà Rịa-Vũng Tàu">Bà Rịa-Vũng Tàu</option>
                  <option value="Bạc Liêu">Bạc Liêu</option>
                  <option value="Bắc Kạn">Bắc Kạn</option>
                  <option value="Bắc Giang">Bắc Giang</option>
                  <option value="Bắc Ninh">Bắc Ninh</option>
                  <option value="Bến Tre">Bến Tre</option>
                  <option value="Bình Dương">Bình Dương</option>
                  <option value="Bình Định">Bình Định</option>
                  <option value="Bình Phước">Bình Phước</option>
                  <option value="Bình Thuận">Bình Thuận</option>
                  <option value="Cà Mau">Cà Mau</option>
                  <option value="Cao Bằng">Cao Bằng</option>
                  <option value="Cần Thơ">Cần Thơ</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Đắk Lắk">Đắk Lắk</option>
                  <option value="Đắk Nông">Đắk Nông</option>
                  <option value="Điện Biên">Điện Biên</option>
                  <option value="Đồng Nai">Đồng Nai</option>
                  <option value="Đồng Tháp">Đồng Tháp</option>
                  <option value="Gia Lai">Gia Lai</option>
                  <option value="Hà Giang">Hà Giang</option>
                  <option value="Hà Nam">Hà Nam</option>
                  <option value="Hà Tĩnh">Hà Tĩnh</option>
                  <option value="Hải Dương">Hải Dương</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Hòa Bình">Hòa Bình</option>
                  <option value="Hậu Giang">Hậu Giang</option>
                  <option value="Hưng Yên">Hưng Yên</option>
                  <option value="Khánh Hòa">Khánh Hòa</option>
                  <option value="Kiên Giang">Kiên Giang</option>
                  <option value="Kon Tum">Kon Tum</option>
                  <option value="Lai Châu">Lai Châu</option>
                  <option value="Lào Cai">Lào Cai</option>
                  <option value="Lạng Sơn">Lạng Sơn</option>
                  <option value="Lâm Đồng">Lâm Đồng</option>
                  <option value="Long An">Long An</option>
                  <option value="Nam Định">Nam Định</option>
                  <option value="Nghệ An">Nghệ An</option>
                  <option value="Ninh Bình">Ninh Bình</option>
                  <option value="Ninh Thuận">Ninh Thuận</option>
                  <option value="Phú Thọ">Phú Thọ</option>
                  <option value="Phú Yên">Phú Yên</option>
                  <option value="Quảng Bình">Quảng Bình</option>
                  <option value="Quảng Nam">Quảng Nam</option>
                  <option value="Quảng Ngãi">Quảng Ngãi</option>
                  <option value="Quảng Ninh">Quảng Ninh</option>
                  <option value="Quảng Trị">Quảng Trị</option>
                  <option value="Sóc Trăng">Sóc Trăng</option>
                  <option value="Sơn La">Sơn La</option>
                  <option value="Tây Ninh">Tây Ninh</option>
                  <option value="Thái Bình">Thái Bình</option>
                  <option value="Thái Nguyên">Thái Nguyên</option>
                  <option value="Thanh Hóa">Thanh Hóa</option>
                  <option value="Thừa Thiên – Huế">Thừa Thiên – Huế</option>
                  <option value="Tiền Giang">Tiền Giang</option>
                  <option value="Trà Vinh">Trà Vinh</option>
                  <option value="Tuyên Quang">Tuyên Quang</option>
                  <option value="Vĩnh Long">Vĩnh Long</option>
                  <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                  <option value="Yên Bái">Yên Bái</option>
                </select>
              </div>
              <div>
                <textarea
                  v-model="form.description"
                  placeholder="Mô tả về Quý công ty hoặc bản thân quý vị*"
                  required
                ></textarea>
              </div>
              <div class="btn">
                <button type="submit" class="button-63" role="button">
                  Gửi thông tin
                </button>
              </div>
            </form>
          </div>

          <div class="btn">
            <a
              :href="localePath('/gioi-thieu')"
              class="button-63 big-btn"
              role="button"
            >
              Ghé thăm BES
            </a>
          </div>
        </div>
        <div class="goi-nhuong">
          <div class="box-1 div-box">
            <div class="box">
              App đặt lịch học riêng tích hợp với CRM để tương tác và quản lý dữ
              liệu khách hàng
            </div>
            <div class="box">
              Các hỗ trợ trong công tác thiết lập và quản lý trung tâm
            </div>
          </div>
          <div class="box-2 div-box">
            <div class="box">
              Tài liệu dành cho mọi khoá học như giáo trình dành cho giáo viên,
              học viên, kho đề thi và bài kiểm tra
            </div>
            <div class="box">Kho tài lệu hỗ trợ của BES</div>
          </div>
          <div class="box-1 div-box">
            <div class="box">
              Đội ngũ cố vấn chuyên môn về học thuật, vận hành và marketing
            </div>
            <div class="box">
              Trọn bộ sổ tay hướng dẫn thành lập và vận hành trung tâm tiếng Anh
            </div>
          </div>
        </div>

        <div class="btn" style="margin-bottom: 4em;">
          <a href="#hi" class="button-63 big-btn" role="button">
            Nhận tư vấn miễn phí
          </a>
        </div>
      </div>

      <div id="content" class="site-content">
        <!-- #content -->
        <FooterSite />
      </div>
    </div>
    <!-- #page -->
  </body>
</template>

<style scoped>
* {
}
#nhuong-quyen-banner-image img {
  max-width: 100%;
  height: auto;
  width: auto;
  margin: auto;
  display: block;
}

.form {
  width: 100%;
  display: flex;
  justify-content: center;
}

.form form {
  margin: 2em 1em;
  width: 100%;
  max-width: 40em;
  padding: 1.4em;
  background-color: #fff;
  box-shadow: 1px 5px 10px 5px #ccc;
  border-radius: 1.2em;
}

.form .line {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
  height: 8em;
}

input,
select {
  width: 48%;
  height: 3em;
}

textarea,
input,
select {
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 0.5em;
  border: none;
  color: #333;
  box-shadow: 1px 2px 4px #cccccc78;
  background-color: rgb(204 204 204 / 21%);
}

.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.4em 0;

  font-family: Brandon_bld\.otf!important;
}

.button-63 {
  align-items: center;
  background-image: linear-gradient(144deg, #a0650a, #895506 50%, #6c0207);
  border: 0;
  border-radius: 0.5em;
  box-shadow: #794e0d99 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 1.2em;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 0.8em 1em;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
}

.big-btn {
  width: 100%;
  max-width: 20em;
  font-size: 1.4em;
}

.button-63:active,
.button-63:hover {
  outline: 0;
}


.goi-nhuong {
  display: flex;
  justify-content: space-evenly;
  margin: 4em 6em;
}
@media (max-width: 720px) {
  .goi-nhuong {
  display: flex;
  flex-direction: column;
  margin: 4em 0;
}
.goi-nhuong .div-box {
  width: 100%;
  margin: 0;
}

.goi-nhuong .box-2 {
  position: relative;
  top: 0;
}
}

.div-box {
  width: 30%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 1em 0;
}

.box-2 {
  position: relative;
  top: -2em;
}

.box {
  background-image: linear-gradient(144deg, #412a06, #72070c);
  border: 0;
  border-radius: 1em;
  box-shadow: #794e0d99 0 5px 10px -5px;
  box-sizing: border-box;
  color: #ffffff;
  padding: 1em 1.6em;
  min-height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
}
</style>
