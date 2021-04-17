<template>
<div class="alert">
    <div class="alert-background"></div>
    <div class="alert-container">
        <div class="alert-header">
            <div class="title">Misa eShop</div>
            <div class="icon-x" ></div>
        </div>
        <div class="alert-content">
            <div class="icon-alert"></div>
            <div class="content-text">
              Xóa thành công cửa hàng
             
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
         this.$emit("disappear");
     }
    }

}
</script >

<style scoped>
@import "../styles/layout/alert.css";
.icon-alert{
 background: url('https://eshopvnappg1.misacdn.net/QLCH/resources/images/icon-popup.png') 
      no-repeat  -3px -2px !important;
      height:44px;
      width: 44px;
      position: absolute;
      left: 10px;
      top: 10px;
}

</style>
