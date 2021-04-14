<template>
<div class="confirm-delete">
    <div class="confirm-background"></div>
    <div class="confirm-container">
        <div class="confirm-header">
            <div class="title">Xóa dữ liệu</div>
            <div class="icon-x" @click="cancel"></div>
        </div>
        <div class="confirm-content">
            <div class="icon-question"></div>
            <div class="content-text">
                Bạn có chắc chắn muốn xóa k2 ra khỏi danh sách cửa hàng?
            </div>
        </div>

        <div class="confirm-footer">
            <div class="footer-btn-delete">
                <div class="footer-icon-delete"></div>
                <div class="text-delete">Xóa</div>
            </div>
        <div class="footer-btn-cancel" @click="cancel">
            <div class="icon-cancel"></div>
            <div class="text-cancel">Hủy bỏ</div>
        </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    methods:{
        cancel(){
           this.$emit("cancelDelete");
        }
    }

}
</script >

<style scoped>
@import "../styles/layout/confirmdelete.css";
</style>
