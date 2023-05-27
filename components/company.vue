<template>
    <div class="company-section pb-135 pt-135">
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
                <hooper v-for="(data, index) in companyInfo" :key="index" :settings="company" :wheelControl="false"
                    :infiniteScroll="false">
                    <slide>
                        <div class="single-item">
                            <a href="#" class="image">
                                <img :src="`http://127.0.0.1:8000/attachments/${data.image}`">
                                <img :src="`http://127.0.0.1:8000/attachments/${data.hover_image}`">
                                <!-- <img src="/assets/img/company-logo-1.png" alt=""> -->
                                <!-- <img src="/assets/img/1.png" alt=""> -->
                                <!-- {{ data.image }}
                  {{ data.hover_image }} -->
                            </a>
                        </div>
                    </slide>
                    <!-- <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <img src="/assets/img/company-logo-1.png" alt="">
                  <img src="/assets/img/1.png" alt="">
                </a>
              </div>
            </slide>
            <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <img src="/assets/img/company-logo-1.png" alt="">
                  <img src="/assets/img/1.png" alt="">
                </a>
              </div>
            </slide>
            <slide>
              <div class="single-item">
                <a href="#" class="image">
                  <img src="/assets/img/company-logo-1.png" alt="">
                  <img src="/assets/img/1.png" alt="">
                </a>
              </div>
            </slide> -->
                </hooper>
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
            companyInfo: [],

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
        async getTrustedCompanie() {
            const res = await this.callApi("get", "/api/trusted_companies");
            if (res.status == 200) {
                this.companyInfo = res.data;
                console.log(this.companyInfo);
            };
        },

    },
    async created() {
        this.getTrustedCompanie();
    },

};
</script>