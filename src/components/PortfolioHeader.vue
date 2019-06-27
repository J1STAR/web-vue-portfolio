<template>
    <div id="header-wrapper">
        <div class="header-contents">
            <!-- 타이틀 -->
            <p class="title">J1STAR</p>

            <!-- 상단 메뉴 && 모바일 메뉴 -->
            <div class="nav-bar">
                <ul>
                    <li>
                        <router-link to="/" class="a-nav-bar">About Me</router-link>
                    </li>
                    <li>
                        <router-link to="/skills" class="a-nav-bar">Skills</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioHeader',
        props: {},
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1000;
        height: 78px;
        background: black;
    }

    .title {
        margin-left: 22px;

        color: white;
        font-weight: 600;
        line-height: 78px;
        cursor: pointer;
        font-size: 32px;
        display: inline-block;
    }

    .active .title {
        color: #272727;
    }

    .nav-bar {
        position: absolute;
        top: 0;
        right: 20px;
        color: #fff;
    }

    .active .nav-bar {
        color: #272727;
    }

    .nav-bar ul {
        list-style: none;
    }

    .nav-bar li {
        display: inline-block;
        line-height: 78px;
        font-size: 16px;
        font-weight: 400;
        margin-right: 24px;
    }

    .nav-bar li:last-child {
        margin-right: 0;
    }
</style>
