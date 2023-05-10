<template>
    <div>

        <!-------------- Header -------------->

        <div class="header-section sticky-header sticky">
            <div class="header-wrapper">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col">
                            <a href="#" class="header-logo">
                                LENDEX
                                <!-- <img src="./assets/img/logo.webp" alt=""> -->
                            </a>
                            <button v-on:click="showSidebar()">
                            <i class="d-lg-none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                    fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </i>
                        </button>
                        </div>
                        <div class="col-auto d-lg-block d-none">
                            <ul class="header-nav">
                                <li><a href="home.html">Home</a></li>
                                <li class="has-dropdown">
                                    <a href="service.html">Service</a>
                                    <ul class="submenu">
                                        <li><a href="service.html">Services</a></li>
                                        <li><a href="serviceDetails.html">Service Details</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown">
                                    <a href="#">Blog</a>
                                    <ul class="submenu">
                                        <li><a href="blog.html">Blog List Full Width</a></li>
                                        <li><a href="blogLeftSidebar.html">Blog List Left Sidebar</a></li>
                                        <li><a href="blogRightSidebar.html">Blog List Right Sidebar</a></li>
                                        <li><a href="blogDetails.html">Blog Details Full Width</a></li>
                                        <li><a href="blogDetailsLeft.html">Blog Details Left Sidebar</a></li>
                                        <li><a href="blogDetailsRight.html">Blog Details Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown">
                                    <a href="#">Pages</a>
                                    <ul class="submenu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="project.html">Project</a></li>
                                        <li><a href="projectDetails.html">Project Details</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="error.html">404 Page</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col d-lg-block d-none">
                            <div class="header-btn-link text-end">
                                <a href="contact.html" class="btn btn-sm btn-outline-one icon-space-left">Hire Me
                                    <i class="las la-angle-double-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-------------- Mobile Responsive -------------->

        <div class="navbar-mobile--wrapper d-lg-none" v-bind:class="{ active: isSidebar }">
            <div class="navbar-mobile">
                <div class="navbar-mobile--head">
                    <div class="header-brand">
                        <nuxt-link to="/">
                            <h4>Lendex</h4>
                        </nuxt-link>
                    </div>
                    <button type="button" v-on:click="hideSidebar()">
                        <h4>hide</h4>
                    </button>
                </div>
                <ul class="navbar-mobile--body">
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <nuxt-link class="nav-link dropdown-toggle" to="/shop" v-on:click="mobileMenuDropdown(0)">
                            Shop
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="" v-if="mobileDropdownIndex === 0">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </transition>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        v-on:click="mobileMenuDropdown(1)"
                        >
                        Sale
                        </a>
                        <transition name="slide">
                        <ul class="" v-if="mobileDropdownIndex === 1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                        </transition>
                    </li> -->
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/about">About Us</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/auction">Auction</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/wishlist">Wishlist</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/contactUs">Contact Us</nuxt-link>
                    </li>
                </ul>
                <div class="navbar-mobile--info bg-gray">
                    <div class="navbar-mobile--info-item" v-for="(data, index) in dataBanner.data" :key="index"
                        v-if="data.type == 'topPromotionalBanner'">
                        {{ data.title }}
                    </div>
                </div>
            </div>
        </div>


        <!-- <div class="offcanvas offcanvas-end navbar-content__item" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <button class="close-btn">
                    <i class="las la-times"></i>
                </button>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" aria-current="page" href="home.html">HOME</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">
                            SERVICES
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="service.html">SERVICE LIST</a></li>
                            <li><a class="dropdown-item" href="serviceDetails.html">SERVICE DETAILS</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">
                            BLOG
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="blog.html">BLOG LIST FULL WIDTH</a></li>
                            <li><a class="dropdown-item" href="blogLeftSidebar.html">BLOG LIST LEFT SIDEBAR</a></li>
                            <li><a class="dropdown-item" href="blogRightSidebar.html">BLOG LIST RIGHT WIDTH</a></li>
                            <li><a class="dropdown-item" href="blogDetails.html">BLOG DETAILS FULL WIDTH</a></li>
                            <li><a class="dropdown-item" href="blogDetailsLeft.html">BLOG DETAILS LEFT SIDEBAR</a></li>
                            <li><a class="dropdown-item" href="blogDetailsRight.html">BLOG DETAILS RIGHT SIDEBAR</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">
                            PAGES
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="about.html">ABOUT US</a></li>
                            <li><a class="dropdown-item" href="project.html">PROJECT</a></li>
                            <li><a class="dropdown-item" href="projectDetails.html">PROJECT DETAILS</a></li>
                            <li><a class="dropdown-item" href="faq.html">FAQ</a></li>
                            <li><a class="dropdown-item" href="error.html">404 PAGE</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                email: "",
            },
            isSidebar: false,
            isSearchbar: false,
            isCart: false,
            mobileDropdownIndex: -1,
            dataBanner: [],
            filter: {
                search: "",
            },
            search: "",
            results: [],
            isDataLoading: true,
        };
    },
    methods: {
        showSidebar() {
            this.isSidebar = true;
        },
        hideSidebar() {
            this.isSidebar = false;
        },
        mobileMenuDropdown(index) {
            if (this.mobileDropdownIndex === index) {
                this.mobileDropdownIndex = -1;
            } else {
                this.mobileDropdownIndex = index;
            }
        },
    },
}
</script>