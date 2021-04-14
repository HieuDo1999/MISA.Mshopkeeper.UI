<template>
<div class="alert">
    <div class="alert-background"></div>
    <div class="alert-container">
        <div class="alert-header">
            <div class="title">Misa eShop</div>
            <div class="icon-x" @click="agree"></div>
        </div>
        <div class="alert-content">
            <div class="icon-alert"></div>
            <div class="content-text">
              
            </div>
        </div>

        <div class="alert-footer" @click="agree">
        <div class="footer-btn-agree">
            <div class="text-agree">Đồng ý</div>
        </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    methods:{
     agree(){
         this.$emit("agree");
     }
    }

}
</script >

<style scoped>
@import "../styles/layout/alert.css";
</style>
