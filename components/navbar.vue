<template>
    <div>
        <!-- <div :class="theme === 'light' ? 'light-theme' : 'dark-theme'" class="theme-body"> -->

        <!--************Header****************-->

        <header class="header-section d-lg-block d-none sticky-header sticky">
            <div class="header-wrapper">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col">
                            <nuxt-link to="/home" class="header-logo">
                                <img src="/assets/img/logo.png" alt="">
                            </nuxt-link>
                            <!-- <button @click="changeTheme('light')">light theme</button> -->
                            <!-- <button @click="changeTheme('dark')">dark theme</button> -->
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
                                        <li><nuxt-link to="/project/id">Project Details</nuxt-link></li>
                                        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                                        <li><nuxt-link to="/error">404 Page</nuxt-link></li>
                                    </ul>
                                </li>
                                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="col theme-switch">
                            <label class="switch">
                                <input type="checkbox">
                                <span @click="changeTheme('light')" class="slider round"></span>
                            </label>
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
                                <img src="/assets/img/logo.png" alt="">
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
                        <i class="las la-times"></i>                    </button>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" aria-current="page" to="/home">HOME</nuxt-link>
                    </li>
                    <li class="nav-item dropdown"
                        @click="showServicesDropdown = !showServicesDropdown; closeOtherDropdowns('services')">
                        <nuxt-link to="/service" class="nav-link dropdown-toggle" :class=" { show: showServicesDropdown } ">
                            SERVICES
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="dropdown-menu" :class=" { show: showServicesDropdown } "
                                v-if=" showServicesDropdown ">
                                <li><nuxt-link class="dropdown-item" to="/service">SERVICE LIST</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/serviceDetails">SERVICE DETAILS</nuxt-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li class="nav-item dropdown"
                        @click=" showBlogDropdown = !showBlogDropdown; closeOtherDropdowns('blog') ">
                        <nuxt-link to="/blog" class="nav-link dropdown-toggle" :class=" { show: showBlogDropdown } ">
                            BLOG
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="dropdown-menu" :class=" { show: showBlogDropdown } " v-if=" showBlogDropdown ">
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
                    <li class="nav-item dropdown"
                        @click=" showPagesDropdown = !showPagesDropdown; closeOtherDropdowns('pages') ">
                        <nuxt-link to="/about" class="nav-link dropdown-toggle" :class=" { show: showPagesDropdown } ">
                            PAGES
                        </nuxt-link>
                        <transition name="slide">
                            <ul class="dropdown-menu" :class=" { show: showPagesDropdown } " v-if=" showPagesDropdown ">
                                <li><nuxt-link class="dropdown-item" to="/about">ABOUT US</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/project">PROJECT</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/project/id">PROJECT DETAILS</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/faq">FAQ</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/error">404 PAGE</nuxt-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/contact">CONTACT</nuxt-link>
                    </li>
                </ul>
                <div class="col text-end">
                    <label class="switch">
                        <input type="checkbox">
                        <span @click=" changeTheme('light') " class="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            theme: "light",
            toggleCount: 0,

            isSidebar: false,
            showServicesDropdown: false,
            showBlogDropdown: false,
            showPagesDropdown: false,
        };
    },
    methods: {
        // changeTheme(mode) {
        //     if (mode == 'light') {
        //         document.documentElement.style.setProperty('--primaryColor', '#858792');
        //         document.documentElement.style.setProperty('--secondaryColor', '#ffffff');
        //     }
        //     else {
        //         document.documentElement.style.setProperty('--primaryColor', '#ffffff');
        //         document.documentElement.style.setProperty('--secondaryColor', '#858792');
        //     }
        // },
        changeTheme() {
            this.toggleCount++;
            if (this.toggleCount % 2 === 0) {
                // Second toggle (even count) activates dark theme
                this.theme = "dark";
                document.documentElement.style.setProperty("--primaryColor", "#ffffff");
                document.documentElement.style.setProperty("--secondaryColor", "#858792");
                document.documentElement.style.setProperty("--bgDarkBlue", "#252734");
                document.documentElement.style.setProperty("--bgSecondaryBlue", "#2a2c39");
                document.documentElement.style.setProperty("--bgLightBlue", "#30313d");
                document.documentElement.style.setProperty("--bgSingleItem", "#282a37");
                document.documentElement.style.setProperty("--buttonbg", "#2e303d");
            } else {
                // First toggle (odd count) activates light theme
                this.theme = "light";
                document.documentElement.style.setProperty("--primaryColor", "#000000");
                document.documentElement.style.setProperty("--secondaryColor", "#ffffff");
                document.documentElement.style.setProperty("--bgDarkBlue", "#344467");
                document.documentElement.style.setProperty("--bgSecondaryBlue", "#5b6584");
                document.documentElement.style.setProperty("--bgLightBlue", "#8289a1");
                document.documentElement.style.setProperty("--bgSingleItem", "#abafc0");
                document.documentElement.style.setProperty("--buttonbg", "#56596e");
            }
        },
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

.switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 22px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked+.slider {
            background-color: var(--primaryColor);

            &:before {
                background-color: var(--secondaryColor);
                transform: translateX(24px);
            }
        }

        &:focus+.slider {
            box-shadow: 0 0 1px #2196F3;
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--secondaryColor);
        -webkit-transition: .4s;
        transition: .4s;

        &.round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }

        &:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 21px;
            left: 0px;
            bottom: 1px;
            background-color: var(--primaryColor);
            -webkit-transition: .4s;
            transition: .4s;
        }
    }
}
</style>