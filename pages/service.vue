
<template>
    <div>
        <!--************Service-Header****************-->

        <div class="breadcrumb-section overflow-hidden pos-relative">
            <div class="breadcrumb-shape-top-left">
            </div>
            <div class="breadcrumb-shape-bottom-right">
            </div>
            <div class="breadcrumb-box">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content">
                                <h2 class="title">Services</h2>
                                <ul class="breadcrumb-link">
                                    <li>
                                        <a href="#">Service</a>
                                    </li>
                                    <li class="active">
                                        service List
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--************Service-Body****************-->

        <div class="service-cards pb-135 pt-135">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12 pb-30" v-for="(data, index) in ServiceTitle" :key="index">
                        <div class="product-card">
                            <div class="product-card--icon">
                                <img src="/assets/img/service-icon-1.png" alt="">
                            </div>
                            <h4 class="product-card--title">
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
                        </div>
                    </div>
                    <!-- <div class="col-lg-4 col-12 pb-30">
                        <div class="product-card">
                            <div class="product-card--icon">
                                <img src="/assets/img/service-icon-2.png" alt="">
                            </div>
                            <h4 class="product-card--title">
                                UI/UX Design
                            </h4>
                            <ul class="product-card--list">
                                <li><span><i class="las la-angle-double-right"></i></span>HTML/CSS</li>
                                <li><span><i class="las la-angle-double-right"></i></span>JavaScript</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Animation</li>
                                <li><span><i class="las la-angle-double-right"></i></span>WordPress</li>
                                <li><span><i class="las la-angle-double-right"></i></span>React</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12 pb-30">
                        <div class="product-card">
                            <div class="product-card--icon">
                                <img src="/assets/img/service-icon-3.png" alt="">
                            </div>
                            <h4 class="product-card--title">
                                UI/UX Design
                            </h4>
                            <ul class="product-card--list">
                                <li><span><i class="las la-angle-double-right"></i></span>Character Design</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Icon Set</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Illustration Guide</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Illustration Set</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Motion Graphic</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12 pb-30">
                        <div class="product-card">
                            <div class="product-card--icon">
                                <img src="/assets/img/service-icon-4.png" alt="">
                            </div>
                            <h4 class="product-card--title">
                                SEO Marketing
                            </h4>
                            <ul class="product-card--list">
                                <li><span><i class="las la-angle-double-right"></i></span>White Hat Seo</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Black Hat SEO</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Gray Hat Seo</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Nevgative SEO</li>
                                <li><span><i class="las la-angle-double-right"></i></span>On-page SEO</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12 pb-30">
                        <div class="product-card">
                            <div class="product-card--icon">
                                <img src="/assets/img/service-icon-5.png" alt="">
                            </div>
                            <h4 class="product-card--title">
                                Data Analysis
                            </h4>
                            <ul class="product-card--list">
                                <li><span><i class="las la-angle-double-right"></i></span>Diagnostic Analysis</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Predictive Analysis</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Prescriptive Analysis</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Risk Assesment</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Sales Forecasting</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12 pb-30">
                        <div class="product-card">
                            <div class="product-card--icon">
                                <img src="/assets/img/service-icon-6.png" alt="">
                            </div>
                            <h4 class="product-card--title">
                                Brand Identity
                            </h4>
                            <ul class="product-card--list">
                                <li><span><i class="las la-angle-double-right"></i></span>Brand Architecture</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Brand Authenticity</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Brand Awareness</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Brand Management</li>
                                <li><span><i class="las la-angle-double-right"></i></span>Brand Matrices</li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

        <!--************Counter****************-->

        <Counter />

        <!--************Company****************-->

        <Company />

    </div>
</template>

<script>
import Counter from "/components/counter";
import Company from "/components/company";

export default {
    components: {
        Counter,
        Company,
    },
    data() {
        return {
            ServiceTitle: [],
        };
    },
    methods: {
        async getService() {
            const res = await this.callApi("get", "/api/services");
            if (res.status == 200) {
                this.ServiceTitle = res.data;
                console.log(this.ServiceTitle);
            }
        },
    },
    async created() {
        this.getService();
    },
};
</script>