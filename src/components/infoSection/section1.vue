<template>
    <div id="section1-wrapper">
        <h1>{{ count }}</h1>
        <button @click="increaseCount">Up</button>
        <button @click="decreaseCount">Down</button>
    </div>
</template>

<script>
    export default {
        name: 'Section1',
        props: {
        },
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increaseCount: function() {
                this.count++;
            },
            decreaseCount: function() {
                this.count--;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #section1-wrapper {
        min-height: 1024px;

        margin-top: 78px;
        padding: 22px;
    }

    #section1-wrapper h1  {
        font-size: 64px;
    }
</style>
