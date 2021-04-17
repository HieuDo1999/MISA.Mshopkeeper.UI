<template>
<div class="confirm-delete">
    <div class="confirm-background"></div>
    <div class="confirm-container">
        <div class="confirm-header">
            <div class="title">Xóa dữ liệu</div>
            <div class="btn-delete icon-x" @click="cancel"></div>
        </div>
        <div class="confirm-content">
            <div class="icon-question"></div>
            <div class="content-text">
                Bạn có chắc chắn muốn xóa {{this.store.storeName}} ra khỏi danh sách cửa hàng?
            </div>
        </div>

        <div class="btn-delete confirm-footer">
            <div class="footer-btn-delete" @click="agree">
                <div class="footer-icon-delete"></div>
                <div class="text-delete">Xóa</div>
            </div>
        <div class="btn-delete footer-btn-cancel" @click="cancel">
            <div class="icon-cancel"></div>
            <div class="text-cancel">Hủy bỏ</div>
        </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    props:["store"],
    methods:{
        cancel(){
           this.$emit("cancelDelete"); 
        },
        agree(){
             this.$emit("deleteStore");
        }
    }

}
</script >

<style scoped>
@import "../styles/layout/confirmdelete.css";
</style>
