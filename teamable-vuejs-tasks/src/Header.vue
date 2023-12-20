<template>
    <header>
        <h1 :style="{ color: textColor}">{{ title }}</h1>
        <button @click="handleClick()" :style="{ background: bgColor}">{{ action }}</button>
    </header>
</template>

<script>
export default{
    name: "Header",
    props: {
        title: String,
        action: String,
        textColor: String,
        bgColor: String
    },
    methods: {
        handleClick() {
            console.log("Button Clicked")
        }
    }
}
</script>

<style>
    button{
        padding: 10px 20px;
        font-size: 15px;
        background-color: green;
        border: none;
        color: whitesmoke;
        border-radius: 10px;
        cursor: pointer;
    }
    h1 {
        color: navy;
    }
</style>