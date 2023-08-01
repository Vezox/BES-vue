<template>
  <div class="page-international-students _page_form_campus typography">
    <body
      class="page-template page-template-page-template page-template-international_student_support page-template-page-templateinternational_student_support-php page page-id-2029"
    >
      <div id="page" class="site">
        <HeaderNav />
        <div class="main-header">
          <div class="container_common">
            <div class="content_common">
              <div class="w-cont">
                <div class="app-down-col">
                  <span class="sub-download">Mobile App</span>
                  <h1 class="title-app-download">Download BES APP</h1>
                  <div class="app-features">
                    <div class="app-feature-item" v-for="(i, idx) in features" :key="idx">
                      <div class="app-feaure-aft-item"></div>
                      <span class="feature-name">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_38)">
                            <path
                              d="M48.1411 19.1411C48.142 13.8592 45.9968 9.06589 42.5344 5.60606C39.0752 2.14441 34.2812 -0.000909778 29 -3.52769e-06C23.7189 -0.000909778 18.9248 2.14441 15.4658 5.60685C12.0033 9.06589 9.85808 13.8592 9.85887 19.1411C9.85808 22.674 10.8229 25.9915 12.4981 28.831C12.499 28.8319 12.4999 28.8327 12.4999 28.8327C12.5052 28.8433 12.5106 28.8541 12.516 28.8629L12.5177 28.8621C13.6926 30.9521 15.383 33.0198 16.7555 34.9931C17.4445 35.9803 18.0507 36.9381 18.4699 37.8138C18.8927 38.6906 19.1161 39.4739 19.126 40.1033V50.709C19.1269 53.9819 21.7776 56.6327 25.0506 56.6336H26.2459C26.8859 57.4589 27.8758 58 29 58C30.1242 58 31.1141 57.4589 31.7541 56.6337H32.9494C36.2225 56.6328 38.8733 53.982 38.874 50.7091V38.7076H37.5069H21.6743C21.5114 37.9974 21.2578 37.3057 20.9356 36.631C20.1479 34.9967 19.0076 33.4158 17.879 31.8725C16.7493 30.3352 15.6296 28.8372 14.8872 27.5002L14.8747 27.4779L14.8685 27.469C13.423 25.0284 12.5943 22.1881 12.5934 19.1411C12.5943 14.606 14.4278 10.5132 17.3991 7.54022C20.372 4.56806 24.4649 2.7354 29 2.73438C33.5351 2.73529 37.628 4.56806 40.6009 7.54022C43.572 10.5132 45.4057 14.6059 45.4065 19.1411C45.4057 22.1881 44.577 25.0284 43.1306 27.469L43.1207 27.486L43.111 27.5038C41.9912 29.5234 40.5073 30.9495 38.882 31.8858C37.2575 32.8204 35.4844 33.2593 33.8173 33.2593C31.8724 33.2611 30.0921 32.6602 28.8513 31.6348C28.2282 31.1221 27.7343 30.5062 27.3889 29.7861C27.0443 29.065 26.8451 28.2336 26.8441 27.2591C26.8441 27.1594 26.8646 27.0454 26.8691 26.9421C28.9671 25.064 34.7369 25.2028 35.9126 18.9898C36.6595 15.0367 34.59 11.7807 34.242 9.41922C23.6077 8.50776 18.7468 18.0782 23.8409 25.6665C23.9745 25.8649 24.0839 26.0216 24.1765 26.1631C24.1374 26.5342 24.1098 26.901 24.1098 27.2589C24.1089 28.6145 24.3964 29.8695 24.9224 30.9661C25.711 32.6155 27.0213 33.8884 28.5781 34.7268C30.1368 35.568 31.9446 35.9926 33.8174 35.9935C35.9599 35.9926 38.1958 35.4336 40.2458 34.2551C42.2851 33.0838 44.1311 31.291 45.4832 28.8628C45.4841 28.8611 45.485 28.8592 45.4867 28.8575C45.4922 28.8468 45.4983 28.8379 45.5037 28.828L45.5028 28.8272C47.178 25.9888 48.142 22.673 48.1411 19.1411ZM21.8603 41.4421H36.1396V45.6987L21.8603 42.6625V41.4421ZM21.8603 44.5263L36.1396 47.5626V50.7091C36.1396 50.9041 36.1155 51.0928 36.0826 51.2771L21.8603 48.2533V44.5263ZM21.8603 50.1181L35.2121 52.9567C35.2094 52.9594 35.2076 52.962 35.2049 52.9648C34.6237 53.5443 33.835 53.8984 32.9493 53.8993H25.0504C24.1648 53.8984 23.3762 53.5442 22.7949 52.9648C22.2155 52.3835 21.8612 51.5948 21.8603 50.7092V50.1181ZM25.8864 22.6303C25.8864 21.8951 25.8864 20.6685 27.2358 17.1099C28.5852 13.5521 32.0201 11.2218 32.2657 11.7121C27.9728 16.8651 27.0799 22.7648 26.9901 23.1217C26.8674 23.613 25.8864 23.3673 25.8864 22.6303Z"
                              fill="green"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_38">
                              <rect width="58" height="58" fill="green" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>{{i.title}}</span>
                      </span>
                      <p style="font-size: 14px">{{i.content}}</p>
                    </div>
                  </div>
                  <div class="app-down-btn">
                    <div>
                      <img src="/images/ggdownload.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/appledownload.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="app-down-col">
                  <div class="app-col app-col-pr">
                    <img
                      height="700px"
                      class="mb-app"
                      src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
                      alt=""
                    />
                    <img
                      class="app-pr"
                      src="https://cdn.pixabay.com/photo/2013/07/12/14/42/qr-code-148603_1280.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSite />
      </div>
    </body>
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
import FooterSite from "@/components/Footer.vue";
export default {
  components: { HeaderNav, FooterSite },
  computed: {
    randomColor() {
      return Math.floor(Math.random() * 16777215).toString(16);
    },
  },
  data(){
    return {
      features: [
        {
          title: "Book lịch học",
          content: "Chủ động book lịch học với giáo viên để chủ động trong lịch trình cá nhân"
        },
        {
          title: "Thông báo",
          content: "Cập nhật mới nhất về lịch học, sự kiện sắp tới, ưu đãi và thông tin mới nhất từ BES"
        },
        {
          title: "Báo cáo",
          content: "báo cáo tiến trình học tập, nhận xét và đánh giá của giáo viên"
        },
        {
          title: "Phản hồi/Góp ý",
          content: "Nhắn gửi đến BES những lời nhận xét và góp ý để tạo nên một môi trường tốt hơn"
        }
      ]
    }
  },
  methods: {},
};
</script>
<style scoped>

.feature-name {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.feature-name > svg {
  margin-right: 8px;
}
.feature-name > span {
  font-size: 16px;
}
.mb-app {
  height: 500px !important;
}
.app-pr {
  top: auto !important;
  left: 53% !important;
  bottom: 50px;
}
.app-col-pr{
    position: relative;
}
.w-cont {
  display: flex;
  min-height: 500px;
  padding: 50px 0;
  flex-wrap: wrap;
}
.app-down-col {
  width: 50%;
}
@media only screen and (max-width: 1024px) {
    .w-cont{
        padding: 20px 0;
    }
    .app-down-col{
        width: 100%;
    }
}
.sub-download {
  text-transform: uppercase;
  color: #241c15;
  font-family: AvenirLTStd-Heavy\.ttf;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0;
  margin-bottom: 16px;
  display: block;
}
.title-app-download {
  font-weight: 400;
  font-family: AvenirLTStd-Heavy\.ttf;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-size: 3rem;
  line-height: 1;
  color: #000;
  letter-spacing: -0.0625rem;
  margin-bottom: 16px;
}
.app-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.app-feature-item {
  width: calc(50% - 10px);
  height: 120px;
  border-radius: 8px;
  border: 1px solid #ccc;
  position: relative;
  padding: 20px 10px;
}
.app-feaure-aft-item {
  width: 100%;
  position: absolute;
  height: 8px;
  border-radius: 8px 8px 0 0;
  left: 0;
  top: 0;
  background: #6f4402;
}
</style>