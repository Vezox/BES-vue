<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterSite from "@/components/Footer.vue";
export default {
  components: { HeaderNav, FooterSite },
};
</script>

<template>
  <div class="page-international-students _page_form_campus typography">
    <body
      class="page-template page-template-page-template page-template-international_student_support page-template-page-templateinternational_student_support-php page page-id-2029"
    >
      <div id="page" class="site">
        <HeaderNav></HeaderNav>

        <div id="content" class="site-content main-header">
          <div class="banner-def">
            <img src="/images/banner/banner_1.png" alt="" />
            <div class="banner_mobi">
              <img src="/images/banner/banner_1.png" alt="" />
            </div>
            <div class="container_common">
              <div class="content_common">
                <div class="content">
                  <div class="top">
                    <a :href="localePath('/')">Home</a>
                    <span>/</span>
                    <a href="#">Hệ thống nhượng quyền</a>
                  </div>
                  Hệ thống nhượng quyền
                </div>
              </div>
            </div>
          </div>
          <div class="content-page">
            <div class="_decor_top">
              <img
                src="/images/page/page-decor-top.png"
                alt=""
              />
            </div>
            <div class="decor_bottom">
              <img
                src="/images/page/page-decor-bottom-left3.png"
                alt=""
              />
            </div>
            <div class="container_common">
              <div class="content_common">
                <div class="title-def">
                  <img
                  class="img-star"
                    src="/images/common/star.png"
                    alt="International Students Support"
                  />Hệ thống nhượng quyền
                </div>
                <div
                  class="box_highlight_of_vietnam"
                  v-for="i in 2"
                  :key="i"
                  style="margin-bottom: 0"
                >
                  <div class="item" v-for="i in 2" :key="i">
                    <img
                      src="/uploads/2022/01/Hanoi.jpg"
                      alt=""
                    />
                    <div class="_text">
                      <h3>Hanoi</h3>
                      <p>
                        <span
                          class="TextRun SCXW202581741 BCX0"
                          lang="EN-US"
                          xml:lang="EN-US"
                          data-contrast="auto"
                          ><span class="NormalTextRun SCXW202581741 BCX0"
                            >Culture and history are the key aspects of this
                            1000-year-old city. Walk the narrow historic streets
                            of the Old Quarter which contains 36 streets, with
                            shops selling everything from red candlesticks to
                            lacquerware and water puppets, and then go for a
                            stroll to take in the sights and sounds around Hoan
                            Kiem Lake. The lake is the focal point of Hanoi
                            life, especially on weekends. The Turtle Tower
                            (‘</span
                          ><span
                            class="NormalTextRun SpellingErrorV2 SCXW202581741 BCX0"
                            >Tháp</span
                          ><span class="NormalTextRun SCXW202581741 BCX0">
                          </span
                          ><span
                            class="NormalTextRun SpellingErrorV2 SCXW202581741 BCX0"
                            >Rùa</span
                          ><span class="NormalTextRun SCXW202581741 BCX0"
                            >’ in Vietnamese) was built in the 18th Century and </span
                          ><span class="NormalTextRun SCXW202581741 BCX0"
                            >is located in</span
                          ><span class="NormalTextRun SCXW202581741 BCX0">
                            the </span
                          ><span
                            class="NormalTextRun SpellingErrorV2 SCXW202581741 BCX0"
                            >centre</span
                          ><span class="NormalTextRun SCXW202581741 BCX0">
                            of the lake, on a small island. You’ll also find
                            plenty of street traders, cafés, restaurants,
                            tourist shops and art galleries in this historical
                            area.</span
                          ></span
                        ><span
                          class="EOP SCXW202581741 BCX0"
                          data-ccp-props='{"201341983":0,"335559739":160,"335559740":259}'
                        >
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="title-def" style="margin-top: 32px">
                  <img
                  class="img-star"
                    src="/images/common/star.png"
                    alt="International Students Support"
                  />Tại sao lại chọn hệ thống nhượng quyền của BES
                </div>
                <div class="content_preparing the_content_def">
                  <p>
                    The Student Experience Department is designed for enriching
                    and unlocking student potential at the University alongside
                    providing a vast array of opportunities to help students
                    develop a path to explore their future-orientated options.
                    Alongside this, the department aims to highlight the
                    essential skills required to prepare them for life after
                    college, grow as well-rounded individuals, and connect
                    students to future career possibilities.
                  </p>
                  <p>
                    The department can be found hosting a wide range of
                    extracurricular activities offered throughout the year to
                    support students in growing as individuals, embracing
                    diversity, exploring talents, cultivating leadership skills,
                    and enhancing their emotional intelligence. All these
                    efforts are put in place with the aim of building global
                    citizens who engage in their local communities and contexts.
                  </p>
                  <p>
                    So, let’s check out what you need to prepare before coming
                    to BES for your study.
                  </p>
                </div>
                <h3>Essential items on Vietnam arrival</h3>
                <div class="box_essential_items">
                  <div class="_left">
                    <img
                      src="/uploads/2021/12/1710TM-Camtrip-113-scaled-e1639977036883.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    style="
                      background: url('/images/admission/bgr1.png');
                    "
                    class="_right"
                  >
                    <div class="box_content the_content_def">
                      <div class="_item">
                        <h3>Passport</h3>
                        <p></p>
                      </div>
                      <div class="_item">
                        <h3>Visa</h3>
                        <p></p>
                      </div>
                      <div class="_item">
                        <h3>Offer letter</h3>
                        <p>Offer letter from British University Vietnam</p>
                      </div>
                      <div class="_item">
                        <h3>Key contact</h3>
                        <p>
                          Key contact name/ phone numbers from BES Student Life
                          Team
                        </p>
                      </div>
                      <div class="_item">
                        <h3>Currency</h3>
                        <p>
                          Vietnamese dong (or you can exchange money at the
                          airport). It is also easier to bring money to get
                          exchanged since you usually get a better exchange rate
                          for bigger notes
                        </p>
                      </div>
                      <div class="_item">
                        <h3>Driving license</h3>
                        <p>
                          Driving license (or another identification document).
                        </p>
                      </div>
                      <div class="_item">
                        <h3>Personal valuables</h3>
                        <p>
                          All personal valuables: laptop, phone, camera, etc.
                        </p>
                      </div>
                      <div class="_item">
                        <h3>Travel documents</h3>
                        <p>
                          Have photocopies of all your key travel documents in
                          your main luggage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box__content__text the_content_def">
                  <p>
                    <strong>ACCOMMODATION</strong>
                  </p>
                  <p>
                    BES can connect you to a recommended agent who can help you
                    find accommodation in Ecopark. Renting serviced and
                    furnished apartments is very common in Vietnam. Don’t worry
                    – BES Student Life will assign you with a Vietnamese student
                    who will become your ‘global buddy’ and help you out.
                  </p>
                  <p>
                    <strong>TRANSPORTATION</strong>
                  </p>
                  <p>
                    The most popular way to get around is by motorbike. However,
                    for foreign students, the easiest way to travel by bike is
                    to book a driver via. an app which there are a number of
                    popular brands in Vietnam, for instance, Gojek, Grab, Be,
                    etc. and helmets are compulsory. Buses and taxies are also
                    available, and fares in Vietnam are very affordable. Longer
                    distance travel to other Vietnamese cities or into the
                    countryside can be done by long-distance bus, train, and by
                    air.
                  </p>
                </div>
                <div class="the_content_def section_global_buddy">
                  <h3>Global Buddy Programme</h3>
                  <p></p>
                  <p>
                    This programme aims to deepen students’ understanding of
                    themselves and other identities by fostering an
                    understanding of various dimensions of culture and an
                    appreciation of cultural and human differences. Global Buddy
                    team is a group of BES volunteers who dedicate their time
                    and commitment to support international students with on and
                    off-campus services. Buddies will be the first contact point
                    prior to departure from your home country and will stay in
                    contact with you for the whole exchange period. As local
                    students, BES buddies have strong knowledge and
                    understanding about Vietnamese culture and will be a great
                    hand to help you make the most of your time in Vietnam.
                    Buddies will support international students to learn how to
                    cope with cultural and social diversity and the nuances of
                    Vietnamese culture. Together, they will explore how-to
                    live-in harmony and connect within the community.
                  </p>
                  <p>
                    The Global Buddy team organises activities for International
                    Students together with BES Student Life Team throughout your
                    semester in Vietnam. The activities include:
                  </p>
                  <div class="_left">
                    <img
                      src="/uploads/2021/12/Hanoi-2.jpg"
                      alt="International Students Support"
                    />
                  </div>
                  <div
                    class="_right the_content_def"
                    style="
                      background-image: url('/images/admission/ban_do_viet_nam.png');
                    "
                  >
                    <ul>
                      <li>Airport pickup services</li>
                      <li>International orientation</li>
                      <li>City tours and Food tours</li>
                      <li>Welcome activities and dinner</li>
                      <li>Vietnamese language classes</li>
                      <li>Vietnamese culture sharing</li>
                      <li>Community engagement trip</li>
                      <li>Exploring Vietnam</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- #content -->
        <FooterSite />
      </div>
      <!-- #page -->
    </body>
  </div>
</template>