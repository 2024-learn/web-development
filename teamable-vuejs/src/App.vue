<template>
    <div class="teamable-container">
       <Header title="Teamable-vue-app" action="Get Started" textColor="red" bgColor="navy"/>
    </div>

    <div class="teamable-container">
       <Header title="To-Do-List" action="Add Task"/>
        <!-- <button>Add task</button> -->

    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
    #app{
        /* color: navy; (this has been extracted to the header.vue file)*/
        margin-top: 50px;
        text-align: center;
    }
    .teamable-container{
        border: 1px solid steelblue;
        padding: 30px;
        max-width: 500px;
        margin: 20px auto;
    }
</style>