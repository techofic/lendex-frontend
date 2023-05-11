<template>
    <div>

        <!--************Header****************-->

        <header class="header-section d-lg-block d-none sticky-header sticky">
            <div class="header-wrapper">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col">
                            <nuxt-link to="/home" class="header-logo">
                                Lendex
                                <!-- <img src="./assets/img/logo.png" alt=""> -->
                            </nuxt-link>
                        </div>
                        <div class="col-auto">
                            <ul class="header-nav">
                                <li><nuxt-link to="/home">Home</nuxt-link></li>
                                <li class="has-dropdown">
                                    <nuxt-link to="/service">Service</nuxt-link>
                                    <ul class="submenu">
                                        <li><nuxt-link to="/service">Services</nuxt-link></li>
                                        <li><nuxt-link to="/serviceDetails">Service Details</nuxt-link></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown">
                                    <nuxt-link to="/blog">Blog</nuxt-link>
                                    <ul class="submenu">
                                        <li><nuxt-link to="/blog">Blog List Full Width</nuxt-link></li>
                                        <li><nuxt-link to="/blogLeftSidebar">Blog List Left Sidebar</nuxt-link></li>
                                        <li><nuxt-link to="/blogRightSidebar">Blog List Right Sidebar</nuxt-link></li>
                                        <li><nuxt-link to="/blogDetails">Blog Details Full Width</nuxt-link></li>
                                        <li><nuxt-link to="/blogDetailsLeft">Blog Details Left Sidebar</nuxt-link></li>
                                        <li><nuxt-link to="/blogDetailsRight">Blog Details Right Sidebar</nuxt-link></li>
                                    </ul>
                                </li>
                                <li class="has-dropdown">
                                    <nuxt-link to="#">Pages</nuxt-link>
                                    <ul class="submenu">
                                        <li><nuxt-link to="/about">About Us</nuxt-link></li>
                                        <li><nuxt-link to="/project">Project</nuxt-link></li>
                                        <li><nuxt-link to="/projectDetails">Project Details</nuxt-link></li>
                                        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                                        <li><nuxt-link to="/error">404 Page</nuxt-link></li>
                                    </ul>
                                </li>
                                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="col">
                            <div class="header-btn-link text-end">
                                <nuxt-link to="/contact" class="btn btn-sm btn-outline-one icon-space-left">Hire Me
                                    <i class="las la-angle-double-right"></i>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!--************Mobile-Header****************-->

        <div class="mobile-header d-block d-lg-none">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col">
                        <div class="mobile-logo">
                            <nuxt-link to="/home">
                                Lendex
                                <!-- <img src="./assets/img/logo.png" alt=""> -->
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mobile-action-link text-end">
                            <button type="button" v-on:click="showSidebar()">
                                <i class="las la-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="navbar-mobile--wrapper d-lg-none" v-bind:class="{ active: isSidebar }">
            <div class="navbar-mobile">
                <div class="navbar-mobile--head">
                    <button type="button" v-on:click="hideSidebar()">
                        <i class="lni lni-close"></i>
                    </button>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" aria-current="page" to="/home">HOME</nuxt-link>
                    </li>
                    <li class="nav-item dropdown" @click="showServicesDropdown = !showServicesDropdown; closeOtherDropdowns('services')">
                        <nuxt-link to="/service" class="nav-link dropdown-toggle" :class="{ show: showServicesDropdown }">
                            SERVICES
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="dropdown-menu" :class="{ show: showServicesDropdown }" v-if="showServicesDropdown">
                                <li><nuxt-link class="dropdown-item" to="/service">SERVICE LIST</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/serviceDetails">SERVICE DETAILS</nuxt-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li class="nav-item dropdown" @click="showBlogDropdown = !showBlogDropdown; closeOtherDropdowns('blog')">
                        <nuxt-link to="/blog" class="nav-link dropdown-toggle" :class="{ show: showBlogDropdown }">
                            BLOG
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="dropdown-menu" :class="{ show: showBlogDropdown }" v-if="showBlogDropdown">
                                <li><nuxt-link class="dropdown-item" to="/blog">BLOG LIST FULL WIDTH</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/blogLeftSidebar">BLOG LIST LEFT
                                        SIDEBAR</nuxt-link>
                                </li>
                                <li><nuxt-link class="dropdown-item" to="/blogRightSidebar">BLOG LIST RIGHT
                                        WIDTH</nuxt-link>
                                </li>
                                <li><nuxt-link class="dropdown-item" to="/blogDetails">BLOG DETAILS FULL WIDTH</nuxt-link>
                                </li>
                                <li><nuxt-link class="dropdown-item" to="/blogDetailsLeft">BLOG DETAILS LEFT
                                        SIDEBAR</nuxt-link>
                                </li>
                                <li><nuxt-link class="dropdown-item" to="/blogDetailsRight">BLOG DETAILS RIGHT
                                        SIDEBAR</nuxt-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li class="nav-item dropdown" @click="showPagesDropdown = !showPagesDropdown; closeOtherDropdowns('pages')">
                        <nuxt-link to="/about" class="nav-link dropdown-toggle" :class="{ show: showPagesDropdown }" >
                            PAGES
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="dropdown-menu" :class="{ show: showPagesDropdown }" v-if="showPagesDropdown">
                                <li><nuxt-link class="dropdown-item" to="/about">ABOUT US</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/project">PROJECT</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/projectDetails">PROJECT DETAILS</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/faq">FAQ</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/error">404 PAGE</nuxt-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/contact">CONTACT</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSidebar: false,
            showServicesDropdown: false,
            showBlogDropdown: false,
            showPagesDropdown: false,
        };
    },
    methods: {
        showSidebar() {
            this.isSidebar = true;
        },
        hideSidebar() {
            this.isSidebar = false;
        },
        closeOtherDropdowns(currentDropdown) {
            if (currentDropdown === 'services') {
                this.showBlogDropdown = false
                this.showPagesDropdown = false
            } else if (currentDropdown === 'blog') {
                this.showServicesDropdown = false
                this.showPagesDropdown = false
            } else if (currentDropdown === 'pages') {
                this.showServicesDropdown = false
                this.showBlogDropdown = false
            }
        },
    },
}
</script>

<style lang="scss">
.slide {
    &-enter {
        overflow: hidden;
        max-height: 0;

        &-to {
            max-height: 500px;
            overflow: hidden;
        }

        &-active {
            -moz-transition-duration: 0.5s;
            -webkit-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition-duration: 0.5s;
            -moz-transition-timing-function: ease-in;
            -webkit-transition-timing-function: ease-in;
            -o-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
        }
    }

    &-leave {
        @extend .slide-enter-to;

        &-to {
            @extend .slide-enter;
        }

        &-active {
            -moz-transition-duration: 0.5s;
            -webkit-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition-duration: 0.5s;
            -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        }
    }
}
</style>