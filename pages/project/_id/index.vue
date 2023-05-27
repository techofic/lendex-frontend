
<template>
    <div>
        <!--************Project-Details-Header****************-->

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
                                <h2 class="title">Project Details</h2>
                                <ul class="breadcrumb-link">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li class="active">
                                        Project Details
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--************Project-Details-Body****************-->

        <div class="project-details-box pb-150 pt-135">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="project-content-section">
                            <div class="project-hero-image">
                                <img src="/assets/img/project-details-hero-img.png" alt="">
                            </div>
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="default-content-style">
                                        <span class="section-tag">
                                            {{ projectInfo.subtitle }}
                                        </span>
                                        <h2 class="title">
                                            {{ projectInfo.title }}
                                        </h2>
                                        <p>
                                            {{ projectInfo.description }}
                                        </p>
                                        <p>
                                            {{ projectInfo.description }}
                                        </p>
                                        <p>
                                            {{ projectInfo.description }}
                                        </p>
                                        <h3 class="sub-title">
                                            How to complete this?
                                        </h3>
                                        <p>
                                            {{ projectInfo.description }}
                                        </p>
                                        <ul class="content-list-item content-list-with-icon">
                                            <li>
                                                <div class="left">
                                                    <div class="icon">
                                                        <i class="las la-lightbulb"></i>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <h4>Idea Generate</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry has been the standard dummy text ever since the 1500s, when
                                                        an unknown printer took a galley of type typesetting, remaining
                                                        essentially unchanged.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="left">
                                                    <div class="icon">
                                                        <i class="las la-pencil-ruler"></i>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <h4>Research & Sketching</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry has been the standard dummy text ever since the 1500s, when
                                                        an unknown printer took a galley of type typesetting, remaining
                                                        essentially unchanged.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="left">
                                                    <div class="icon">
                                                        <i class="las la-plane"></i>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <h4>Launched Project</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry has been the standard dummy text ever since the 1500s, when
                                                        an unknown printer took a galley of type typesetting, remaining
                                                        essentially unchanged.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <h3 class="sub-title">Project result and summery</h3>
                                        <p>
                                            {{ projectInfo.description }}
                                        </p>
                                        <p>
                                            {{ projectInfo.description }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 offset-xl-1">
                                    <div class="project-sidebar">
                                        <h3 class="title">Information</h3>
                                        <ul class="project-sidebar-list-item">
                                            <li class="project-sidebar-single-box">
                                                <h6 class="title-text">Project Name:</h6>
                                                <span class="text">
                                                    {{ projectInfo.project_name }}
                                                </span>
                                            </li>
                                            <li class="project-sidebar-single-box">
                                                <h6 class="title-text">Clients:</h6>
                                                <span class="text">
                                                    {{ projectInfo.clients }}
                                                </span>
                                            </li>
                                            <li class="project-sidebar-single-box">
                                                <h6 class="title-text">Budget:</h6>
                                                <span class="text">$890.00</span>
                                            </li>
                                            <li class="project-sidebar-single-box">
                                                <h6 class="title-text">Duration:</h6>
                                                <span class="text">
                                                    {{ projectInfo.duration }}
                                                </span>
                                            </li>
                                            <li class="project-sidebar-single-box">
                                                <h6 class="title-text">Date:</h6>
                                                <span class="text">
                                                    {{ projectInfo.date }}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--************Counter****************-->

        <Counter />

    </div>
</template>

<script>
import Counter from "/components/counter";

export default {
    components: {
        Counter,
    },
    data() {
        return {
            projectInfo: [],
        };
    },
    methods: {
        async getProject() {
            const res = await this.callApi('get', `/api/projects/${this.$route.params.id}`);
            if (res.status == 200) {
                this.projectInfo = res.data;
                console.log(this.projectInfo);
            };
        },

    },
    async created() {
        this.getProject();
    },

};
</script>