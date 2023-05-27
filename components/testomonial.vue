<template>
    <div class="testomonial-section pt-135 pb-135">
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
                            <hooper v-for="(data, index) in testomonialInfo" :key="index" :settings="testomonial"
                                :itemsToSlide="1" :wheelControl="false" :infiniteScroll="false">
                                <slide>
                                    <div class="item">
                                        <div class="content">
                                            <span class="icon">“</span>
                                            <p class="text">
                                                {{ data.description }}
                                            </p>
                                            <div class="info">
                                                <div class="author">
                                                    <h4 class="name">
                                                        {{ data.name }}
                                                    </h4>
                                                    <span class="designation">
                                                        {{ data.designation }}
                                                    </span>
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
                                <!-- <slide>
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
                  </slide> -->

                                <hooper-pagination slot="hooper-addons"></hooper-pagination>

                            </hooper>
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
      testomonialInfo: [],
      
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
    };
  },
  methods: {
    async getTestimonial() {
      const res = await this.callApi("get", "/api/testimonials");
      if(res.status == 200) {
        this.testomonialInfo =  res.data ;
        console.log(this.testomonialInfo);
      };
    },
     
  },
  async created() {
    this.getTestimonial();
  },

};
</script>