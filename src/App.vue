<template>
    <div id="app">
        <app-header/>

        <transition name="page" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

        <app-footer/>
    </div>
</template>

<script>
    import appHeader from './components/PortfolioHeader.vue'
    import appFooter from './components/PortfolioFooter.vue'
    import jQuery from 'jquery'

    global.jQuery = jQuery
    global.$ = jQuery

    export default {
        name: 'app',
        components: {
            appHeader, appFooter
        },
        data() {
            return {
                title: ''
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');

    .page-enter-active, .page-leave-active {
        transition: opacity 0.3s, transform 0.3s;
    }

    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }

</style>
