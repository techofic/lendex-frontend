<template>
    <div>
        <!--************About-Header****************-->

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
                                <h2 class="title">About Us</h2>
                                <ul class="breadcrumb-link">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li class="active">
                                        About
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--************About-template****************-->

        <div class="video-info-display-box pb-135 pt-135">
            <div class="container">
                <div class="video-info-display-wrapper">
                    <div class="row align-items-center">
                        <div
                            class="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-3 offset-lg-0">
                            <div class="video-card">
                                <a class="wave-btn vbox-item" href="#">
                                    <i class="las la-play-circle"></i>
                                </a>
                                <a class="main-button about-btn" href="#">
                                    Get Resume
                                    <i class="las la-download"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                            <div class="video-info-content">
                                <h2 class="title">I'm {{ userInfo.name }}</h2>
                                <h3 class="sub-title">
                                    {{ userInfo.designation }}
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and pesetting industry has been the
                                    industry's standard dummy text ever since the 1500s, when an unkn own printer took
                                    galley of type and scrambled.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="resume-info-display-box pb-135 pt-135">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="resume-tab nav">
                            <li class="nav-item">
                                <button class="nav-link"  @click="activeTab = 'education-tab'">Education</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link"  @click="activeTab = 'experience-tab'">Experience</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="resume-info-display-wrapper">
                    <div class="row">
                        <div class="col-12">
                            <div class="tabb-content" id="myTabContent">
                                <div class="tabb-pane" id="education-tab" v-show="activeTab === 'education-tab'">
                                    <ul class="resume-list">
                                        <li class="resume-tab-list-single-item" v-for="(data, index) in aboutEducation"
                                            :key="index" v-if="data.type == 'education'">
                                            <div class="content">
                                                <div class="left">
                                                    <span class="year">{{ data.start_date }} - {{ data.end_date }}</span>
                                                </div>
                                                <div class="right">
                                                    <h3 class="title">
                                                        {{ data.degree }}
                                                    </h3>
                                                    <span class="institute-name">
                                                        {{ data.institute }}
                                                    </span>
                                                    <p>
                                                        {{ data.description }}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- <li class="resume-tab-list-single-item">
                                            <div class="content">
                                                <div class="left">
                                                    <span class="year">2012 - 2014</span>
                                                </div>
                                                <div class="right">
                                                    <h3 class="title">Masters of Business Administration</h3>
                                                    <span class="institute-name">University of California, Berkeley</span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been indus dard dummy text ever since the
                                                        1500 when an uniknown prnter took galley of type and scrambled make
                                                        specimen book has not only five centuries the into electronic.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="resume-tab-list-single-item">
                                            <div class="content">
                                                <div class="left">
                                                    <span class="year">2015 - 2018</span>
                                                </div>
                                                <div class="right">
                                                    <h3 class="title">Bachelor of Grapgic Arts</h3>
                                                    <span class="institute-name">University of California, Berkeley</span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been indus dard dummy text ever since the
                                                        1500 when an uniknown prnter took galley of type and scrambled make
                                                        specimen book has not only five centuries the into electronic.
                                                    </p>
                                                </div>
                                            </div>
                                        </li> -->
                                    </ul>
                                </div>
                                <div class="tabb-pane" id="experience-tab" v-show="activeTab === 'experience-tab'">
                                    <ul class="resume-list">
                                        <li class="resume-tab-list-single-item"
                                            v-for="(data, index) in aboutExperience.data" :key="index"
                                            v-if="data.type == 'experience'">
                                            <div class="content">
                                                <div class="left">
                                                    <span class="year">{{ data.start_date }} - {{ data.end_date }}</span>
                                                </div>
                                                <div class="right">
                                                    {{ data.degree }}
                                                    <span class="institute-name">
                                                        {{ data.institute }}
                                                    </span>
                                                    <p>
                                                        {{ data.description }}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="resume-tab-list-single-item">
                                            <div class="content">
                                                <div class="left">
                                                    <span class="year">2018 - 2019</span>
                                                </div>
                                                <div class="right">
                                                    <h3 class="title">Junior Web Developer</h3>
                                                    <span class="institute-name">Acme Lab</span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been indus dard dummy text ever since the
                                                        1500 when an uniknown prnter took galley of type and scrambled make
                                                        specimen book has not only five centuries the into electronic.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--************Counter****************-->

        <Counter />

        <!--************Testomonial****************-->

        <Testomonial />

        <!--************Company****************-->

        <Company />

    </div>
</template>

<script>
import Counter from "/components/counter";
import Testomonial from "/components/testomonial";
import Company from "/components/company";

export default {
    components: {
        Counter,
        Testomonial,
        Company,
    },
    data() {
        return {
            activeTab: 'education-tab',
            userInfo: [],
            aboutEducation: [],
            aboutExperience: [],
        };
    },

    methods: {
        async getUserInfo() {
            const res = await this.callApi("get", "/api/user");
            if (res.status == 200) {
                this.userInfo = res.data[0];
                // console.log(this.userInfo);
            }
        },
        async getEducation() {
            const res = await this.callApi("get", "/api/educations");
            if (res.status == 200) {
                this.aboutEducation = res.data;
                console.log(this.aboutEducation);
            };
        },
        async getExperience() {
            const res = await this.callApi("get", "/api/experiences");
            if (res.status == 200) {
                this.aboutExperience = res.data;
                // console.log(this.aboutExperience);
            };
        },
    },
    async created() {
        this.getUserInfo();
        this.getEducation();
        this.getExperience();
    },
};
</script>