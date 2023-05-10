<template>
  <div>

    <!--************Hero****************-->
    <div class="hero-section bg-dark-blue">
      <div class="hero-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xxl-7">
              <div class="hero-content">
                <h3 class="title-big">Hello! I'm</h3>
                <h2 class="title-large">Mirta
                  <span class="shape-mark">Akins</span>
                </h2>
                <p>UI/UX Designer specializing in Shopify & Webflow.</p>
                <a href="#" class="btn btn-xl btn-outline-one icon-space-left">
                  Get Resume
                  <i class="las la-download"></i>
                </a>
                <div class="video-link">
                  <a href="#" class="wave-btn vbox-item">
                    <i class="las la-play-circle"></i>
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
            <!-- <img src="static/assets/img/portrait-hero.png" alt=""> -->
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

    <div class="service-section pb-135 pt-135 bg-secondary-blue">
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
            <slide>
              <div class="product-card bg-dark-blue">
                <div class="product-card--icon">
                  <!-- <img src="./assets/img/service-icon-1.png" alt=""> -->
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
              <div class="product-card bg-dark-blue">
                <div class="product-card--icon">
                  <!-- <img src="./assets/img/service-icon-1.png" alt=""> -->
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
              <div class="product-card bg-dark-blue">
                <div class="product-card--icon">
                  <!-- <img src="./assets/img/service-icon-1.png" alt=""> -->
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
              <div class="product-card bg-dark-blue">
                <div class="product-card--icon">
                  <!-- <img src="./assets/img/service-icon-1.png" alt=""> -->
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

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>
      </div>
    </div>

    <!--************Skill****************-->

    <div class="skill-section pt-135 pb-135 bg-dark-blue">
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
            <div class="skill-area">
              <div class="skill-area--item">
                <h4 class="tag">Communication</h4>
                <div class="skill-box">
                  <div class="progress-line" data-width="75" style="width: 75%;">
                    <span class="skill-percentage">75%</span>
                  </div>
                </div>
              </div>
              <div class="skill-area--item">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--************Counter****************-->

    <div class="counter-section pb-135 pt-135 bg-secondary-blue">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="counter-single--item">
              <div class="icon">
                <!-- <img src="./assets/img/counterup-icon-1.png" alt=""> -->
              </div>
              <div class="content">
                <h2 class="number">
                  <span>258</span>+
                </h2>
                <span class="text">Happy Clients</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="counter-single--item">
              <div class="icon">
                <!-- <img src="./assets/img/counterup-icon-2.png" alt=""> -->
              </div>
              <div class="content">
                <h2 class="number">
                  <span>590</span>K
                </h2>
                <span class="text">Project Complete</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="counter-single--item">
              <div class="icon">
                <!-- <img src="./assets/img/counterup-icon-3.png" alt=""> -->
              </div>
              <div class="content">
                <h2 class="number">
                  <span>28</span>+
                </h2>
                <span class="text">Years Of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--************Project****************-->

    <div class="project-section pt-135 pb-135 bg-light-blue">
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
        <hooper :settings="project" :itemsToSlide="2" :wheelControl="false" :infiniteScroll="false">
          <slide>
            <div class="project-single--item">
              <div class="img-box">
                <div class="bg-overlay">
                </div>
                <div class="bg-image">
                  <!-- <img src="./assets/img/project-slider-img-3.png" alt=""> -->
                </div>
                <div class="image">
                  <!-- <img src="./assets/img/project-slider-img-3.png" alt=""> -->
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
                  <!-- <img src="./assets/img/project-slider-img-3.png" alt=""> -->
                </div>
                <div class="image">
                  <!-- <img src="./assets/img/project-slider-img-3.png" alt=""> -->
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
                  <!-- <img src="./assets/img/project-slider-img-3.png" alt=""> -->
                </div>
                <div class="image">
                  <!-- <img src="./assets/img/project-slider-img-3.png" alt=""> -->
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

          <hooper-pagination slot="hooper-addons"></hooper-pagination>

          <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->

        </hooper>
      </div>
    </div>

    <!--************Testomonial****************-->

    <div class="testomonial-section pt-135 pb-135 bg-dark-blue">
      <div class="container">
        <div class="row">
          <div class="col d-xl-flex justify-content-xl-end">
            <div class="section-content pos-relative">
              <div class="section-header">
                <h4 class="subtitle">
                  <span>||</span>Testomonial
                </h4>
                <h4 class="title">
                  Satisfied Clients Say
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="testomonial-wrapper">
          <div class="row">
            <div class="col-12">
              <div class="testomonial-carousel">
                <hooper :settings="testomonial" :itemsToSlide="1" :wheelControl="false" :infiniteScroll="false">
                  <slide>
                    <div class="item">
                      <div class="content">
                        <span class="icon">“</span>
                        <p class="text">Lorem Ipsum simpy dummy text of the printing and types industry has
                          been the industr standard dummy.</p>
                        <div class="info">
                          <div class="author">
                            <h4 class="name">Raleigh Friend</h4>
                            <span class="designation">CEO, Seoly</span>
                          </div>
                          <ul class="review">
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="item">
                      <div class="content">
                        <span class="icon">“</span>
                        <p class="text">Lorem Ipsum simpy dummy text of the printing and types industry has
                          been the industr standard dummy.</p>
                        <div class="info">
                          <div class="author">
                            <h4 class="name">Raleigh Friend</h4>
                            <span class="designation">CEO, Seoly</span>
                          </div>
                          <ul class="review">
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <slide>
                    <div class="item">
                      <div class="content">
                        <span class="icon">“</span>
                        <p class="text">Lorem Ipsum simpy dummy text of the printing and types industry has
                          been the industr standard dummy.</p>
                        <div class="info">
                          <div class="author">
                            <h4 class="name">Raleigh Friend</h4>
                            <span class="designation">CEO, Seoly</span>
                          </div>
                          <ul class="review">
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                            <li class="fill"><i class="las la-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </slide>

                  <hooper-pagination slot="hooper-addons"></hooper-pagination>

                </hooper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--************Company****************-->

    <div class="company-section pb-135 pt-135 bg-secondary-blue">
      <div class="container">
        <div class="section-header">
          <h4 class="subtitle">
            <span>||</span>Favourite Clients
          </h4>
          <h4 class="title">
            Work With Trusted Company.
          </h4>
        </div>

        <div class="company-logo">
          <hooper :settings="company" :wheelControl="false" :infiniteScroll="false">
            <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <!-- <img src="./assets/img/company-logo-1.png" alt=""> -->
                  <!-- <img src="./assets/img/1.png" alt=""> -->
                </a>
              </div>
            </slide>
            <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <!-- <img src="./assets/img/company-logo-1.png" alt=""> -->
                  <!-- <img src="./assets/img/1.png" alt=""> -->
                </a>
              </div>
            </slide>
            <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <!-- <img src="./assets/img/company-logo-1.png" alt=""> -->
                  <!-- <img src="./assets/img/1.png" alt=""> -->
                </a>
              </div>
            </slide>
            <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <!-- <img src="./assets/img/company-logo-1.png" alt=""> -->
                  <!-- <img src="./assets/img/1.png" alt=""> -->
                </a>
              </div>
            </slide>
          </hooper>
        </div>
      </div>
    </div>

    <!--************Blog****************-->

    <div class="blog-section pt-135 pb-135 bg-light-blue">
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
              <!-- <img src="./assets/img/blog-feed-img-1.png" alt=""> -->
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
              <!-- <img src="./assets/img/blog-feed-img-2.png" alt=""> -->
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
              <!-- <img src="./assets/img/blog-feed-img-3.png" alt=""> -->
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
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
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
};
</script>