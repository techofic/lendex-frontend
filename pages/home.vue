<template>
  <div>

    <!--************Hero****************-->
    <div class="hero-section">
      <div class="hero-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xxl-7">
              <div class="hero-content">
                <h3 class="title-big">Hello! I'm</h3>
                <h2 class="title-large">
                  {{ userInfo.name }}
                  <!-- <span class="shape-mark">Akins</span> -->
                </h2>
                <p>{{ userInfo.designation }}</p>
                <a href="#" class="btn btn-xl btn-outline-one icon-space-left">
                  Get Resume
                  <i class="las la-download"></i>
                </a>
                <div class="video-link">
                  <a href="#" class="wave-btn vbox-item">
                    <div class="ripple">
                      <i class="las la-play-circle"></i>
                    </div>
                  </a>
                  <span class="video-text"> Watch Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-shape hero-top-shape">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="hero-shape hero-bottom-shape">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="hero-portrait">
          <div class="image">
            <!-- <img src="/assets/img/portrait-hero.png" alt=""> -->
            <img :src="`http://127.0.0.1:8000/attachments/${userInfo.image}`">
            <div class="image-half-round-shape">
            </div>
            <div class="social-link">
              <a href="#"><i class="lab la-facebook-f"></i></a>
              <a href="#"><i class="lab la-dribbble"></i></a>
              <a href="#"><i class="lab la-linkedin-in"></i></a>
              <a href="#"><i class="lab la-behance"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--************Service****************-->

    <div class="service-section pb-135 pt-135">
      <div class="container">
        <div class="section-header">
          <h4 class="subtitle">
            <span>||</span>My Services
          </h4>
          <h4 class="title">
            Service Provide For My Clients.
          </h4>
        </div>

        <div class="service-section--carousel">
          <hooper :settings="service" :itemsToSlide="3" :wheelControl="false" :infiniteScroll="false">
            <slide v-for="(data, index) in ServiceTitle" :key="index">
              <div class="product-card ">
                <!-- <div class="inner-shape inner-shape-top-right">
                </div> -->
                <div class="product-card--icon">
                  <!-- {{ data.icon }} -->
                  <img src="/assets/img/service-icon-1.png" alt="">
                </div>
                <h4 class="product-card--title">
                  <!-- UI/UX Design -->
                  {{ data.title }}
                </h4>
                <ul v-for="(item) in data.points" class="product-card--list">
                  <li><span><i class="las la-angle-double-right"></i></span>
                    {{ item.title }}
                  </li>
                  <!-- <li><span><i class="las la-angle-double-right"></i></span>User Flow</li>
                  <li><span><i class="las la-angle-double-right"></i></span>WireFraming</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Prototyping</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Mobile App Design</li> -->
                </ul>
                <!-- <div class="inner-shape inner-shape-bottom-right">
                </div> -->
              </div>
            </slide>
            <!-- <slide>
              <div class="product-card">
                <div class="product-card--icon">
                  <img src="/assets/img/service-icon-1.png" alt="">
                </div>
                <h4 class="product-card--title">
                  UI/UX Design
                </h4>
                <ul class="product-card--list">
                  <li><span><i class="las la-angle-double-right"></i></span>Landing Pages</li>
                  <li><span><i class="las la-angle-double-right"></i></span>User Flow</li>
                  <li><span><i class="las la-angle-double-right"></i></span>WireFraming</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Prototyping</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Mobile App Design</li>
                </ul>
              </div>
            </slide>
            <slide>
              <div class="product-card">
                <div class="product-card--icon">
                  <img src="/assets/img/service-icon-1.png" alt="">
                </div>
                <h4 class="product-card--title">
                  UI/UX Design
                </h4>
                <ul class="product-card--list">
                  <li><span><i class="las la-angle-double-right"></i></span>Landing Pages</li>
                  <li><span><i class="las la-angle-double-right"></i></span>User Flow</li>
                  <li><span><i class="las la-angle-double-right"></i></span>WireFraming</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Prototyping</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Mobile App Design</li>
                </ul>
              </div>
            </slide>
            <slide>
              <div class="product-card">
                <div class="product-card--icon">
                  <img src="/assets/img/service-icon-1.png" alt="">
                </div>
                <h4 class="product-card--title">
                  UI/UX Design
                </h4>
                <ul class="product-card--list">
                  <li><span><i class="las la-angle-double-right"></i></span>Landing Pages</li>
                  <li><span><i class="las la-angle-double-right"></i></span>User Flow</li>
                  <li><span><i class="las la-angle-double-right"></i></span>WireFraming</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Prototyping</li>
                  <li><span><i class="las la-angle-double-right"></i></span>Mobile App Design</li>
                </ul>
              </div>
            </slide> -->

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>
      </div>
    </div>

    <!--************Skill****************-->

    <div class="skill-section pt-135 pb-135">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-header">
              <h4 class="subtitle">
                <span>||</span>Special Skills
              </h4>
              <h4 class="title">
                My Special Skill Field Here.
              </h4>
            </div>
            <button class="main-button hero-btn skill-btn">
              Get Resume
              <i class="las la-download"></i>
            </button>
          </div>
          <div class="col-lg-6">
            <div class="skill-area" v-for="(data, index) in skillInfo" :key="index">
              <div class="skill-area--item">
                <h4 class="tag">
                  {{ data.title }}
                </h4>
                <div class="skill-box">
                  <div class="progress-line" data-width="75" style="width: 75%;">
                    <span class="skill-percentage">
                      {{ data.percentage }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- <div class="skill-area--item">
                <h4 class="tag">Leadership</h4>
                <div class="skill-box">
                  <div class="progress-line" data-width="70" style="width: 70%;">
                    <span class="skill-percentage">70%</span>
                  </div>
                </div>
              </div>
              <div class="skill-area--item">
                <h4 class="tag">Teamwork</h4>
                <div class="skill-box">
                  <div class="progress-line" data-width="90" style="width: 90%;">
                    <span class="skill-percentage">90%</span>
                  </div>
                </div>
              </div>
              <div class="skill-area--item">
                <h4 class="tag">Flexibility</h4>
                <div class="skill-box">
                  <div class="progress-line" data-width="80" style="width: 80%;">
                    <span class="skill-percentage">80%</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--************Counter****************-->
    
    <Counter />

    <!--************Project****************-->

    <div class="project-section pt-135 pb-135">
      <div class="container">
        <div class="project-section--main">
          <div class="section-header">
            <h4 class="subtitle">
              <span>||</span>Awesome Portofolio
            </h4>
            <h4 class="title">
              My Complete Projects
            </h4>
          </div>
        </div>
      </div>
      <div class="project-carousel">
        <hooper v-for="(data, index) in projectInfo" :key="index" :settings="project" :itemsToSlide="2" :wheelControl="false" :infiniteScroll="false">
          <slide>
            <nuxt-link :to="`/project/${data.id}`">
              <div class="project-single--item">
                <div class="img-box">
                  <div class="bg-overlay">
                  </div>
                  <div class="bg-image">
                    <img src="/assets/img/project-slider-img-3.png" alt="">
                  </div>
                  <div class="image">
                    <img :src="`http://127.0.0.1:8000/attachments/${data.image}`">
                  </div>
                </div>
                <div class="content">
                  <h4 class="title">
                    {{ data.title }}
                  </h4>
                  <ul class="category-nav-item">
                    <li>Gardeining</li>
                    <li>/ Landscaping</li>
                    <li>/ Greem</li>
                  </ul>
                </div>
              </div>
            </nuxt-link>
          </slide>
          <!-- <slide>
            <div class="project-single--item">
              <div class="img-box">
                <div class="bg-overlay">
                </div>
                <div class="bg-image">
                  <img src="/assets/img/project-slider-img-3.png" alt="">
                </div>
                <div class="image">
                  <img src="/assets/img/project-slider-img-3.png" alt="">
                </div>
              </div>
              <div class="content">
                <h4 class="title">Musion - Gardening Website Template</h4>
                <ul class="category-nav-item">
                  <li>Gardeining</li>
                  <li>/ Landscaping</li>
                  <li>/ Greem</li>
                </ul>
              </div>
            </div>
          </slide>
          <slide>
            <div class="project-single--item">
              <div class="img-box">
                <div class="bg-overlay">
                </div>
                <div class="bg-image">
                  <img src="/assets/img/project-slider-img-3.png" alt="">
                </div>
                <div class="image">
                  <img src="/assets/img/project-slider-img-3.png" alt="">
                </div>
              </div>
              <div class="content">
                <h4 class="title">Musion - Gardening Website Template</h4>
                <ul class="category-nav-item">
                  <li>Gardeining</li>
                  <li>/ Landscaping</li>
                  <li>/ Greem</li>
                </ul>
              </div>
            </div>
          </slide> -->

          <hooper-pagination slot="hooper-addons"></hooper-pagination>

          <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->

        </hooper>
      </div>
    </div>

    <!--************Testomonial****************-->

    <Testomonial />

    <!--************Company****************-->

    <Company />

    <!--************Blog****************-->

    <div class="blog-section pt-135 pb-135">
      <div class="container">
        <div class="blog-section--header">
          <div class="section-header">
            <h4 class="subtitle">
              <span>||</span>Blog Post
            </h4>
            <h4 class="title">
              Latest Tips & Tricks.
            </h4>
          </div>
        </div>
        <div class="blog-section--list">
          <div class="single-item">
            <a href="#" class="image">
              <img src="/assets/img/blog-feed-img-1.png" alt="">
            </a>
            <div class="content-box">
              <div class="content">
                <div class="post-meta">
                  <div class="category">Business <span>-</span></div>
                  <a href="#" class="date">07 February, 2021</a>
                </div>
                <div class="title">
                  Don't wait until you officially started business to line these up.
                </div>
              </div>
              <button>Read More <span><i class="las la-angle-double-right"></i></span></button>
            </div>


          </div>
          <div class="single-item">
            <a href="#" class="image">
              <img src="/assets/img/blog-feed-img-2.png" alt="">
            </a>
            <div class="content-box">
              <div class="content">
                <div class="post-meta">
                  <div class="category">Business <span>-</span></div>
                  <a href="#" class="date">07 February, 2021</a>
                </div>
                <div class="title">
                  Don't wait until you officially started business to line these up.
                </div>
              </div>
              <button>Read More <span><i class="las la-angle-double-right"></i></span></button>
            </div>
          </div>
          <div class="single-item">
            <a href="#" class="image">
              <img src="/assets/img/blog-feed-img-3.png" alt="">
            </a>
            <div class="content-box">
              <div class="content">
                <div class="post-meta">
                  <div class="category">Business <span>-</span></div>
                  <a href="#" class="date">07 February, 2021</a>
                </div>
                <div class="title">
                  Don't wait until you officially started business to line these up.
                </div>
              </div>
              <button>Read More <span><i class="las la-angle-double-right"></i></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import Counter from "/components/counter";
import Testomonial from "/components/testomonial";
import Company from "/components/company";

import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Counter,
    Testomonial,
    Company,
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      userInfo: [],
      ServiceTitle: [],
      skillInfo: [],
      statisticCount: [],
      projectInfo: [],
      testomonialInfo: [],
      companyInfo: [],

      service: {
        itemsToShow: 1,
        centerMode: false,
        // itemsToSlide : 3,
        breakpoints: {
          450: {
            centerMode: false,
            itemsToShow: 2,
          },
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 3,
          },
        },
      },
      project: {
        itemsToShow: 1,
        centerMode: false,
        // itemsToSlide : 3,
        breakpoints: {
          450: {
            centerMode: false,
            itemsToShow: 2,
          },
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 2,
          },
        },
      },
      testomonial: {
        itemsToShow: 1,
        centerMode: false,
        // itemsToSlide : 3,
        breakpoints: {
          450: {
            centerMode: false,
            itemsToShow: 2,
          },
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 2,
          },
        },
      },
      company: {
        itemsToShow: 1,
        centerMode: false,
        // itemsToSlide : 3,
        breakpoints: {
          480: {
            centerMode: false,
            itemsToShow: 2,
          },
          991: {
            centerMode: false,
            itemsToShow: 3,
          },
          1200: {
            itemsToShow: 4,
          },
        },
      },
    };
  },
  methods: {
    async getUserInfo() {
      const res = await this.callApi("get", "/api/user");
      if (res.status == 200) {
        this.userInfo = res.data[0];
        console.log(this.userInfo);
      }
    },

    async getService() {
      const res = await this.callApi("get", "/api/services");
      if (res.status == 200) {
        this.ServiceTitle = res.data;
        console.log(this.ServiceTitle);
      }
    },

    async getSpecialSkill() {
      const res = await this.callApi("get", "/api/special_skills");
      if(res.status == 200) {
        this.skillInfo = res.data ;
        console.log(this.skillInfo);
      };
    },

    async getStatisticsCount() {
      const res = await this.callApi("get", "/api/statistics_count");
      if(res.status == 200) {
        this.statisticCount =  res.data[0] ;
        console.log(this.statisticCount);
      };
    },

    async getProject() {
      const res = await this.callApi("get", "/api/projects");
      if(res.status == 200) {
        this.projectInfo =  res.data ;
        console.log(this.projectInfo);
      };
    },

    async getTestimonial() {
      const res = await this.callApi("get", "/api/testimonials");
      if(res.status == 200) {
        this.testomonialInfo =  res.data ;
        console.log(this.testomonialInfo);
      };
    },

    async getTrustedCompanie() {
      const res = await this.callApi("get", "/api/trusted_companies");
      if(res.status == 200) {
        this.companyInfo =  res.data ;
        console.log(this.companyInfo);
      };
    },
     
  },
  async created() {
    this.getUserInfo();
    this.getService();
    this.getSpecialSkill();
    this.getStatisticsCount();
    this.getProject();
    this.getTestimonial();
    this.getTrustedCompanie();
  },

};
</script>