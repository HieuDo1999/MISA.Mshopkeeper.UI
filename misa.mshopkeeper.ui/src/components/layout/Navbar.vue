<template>
   <div class="navbar">
        <div class="logo-site">
            <a href="">
            <div class="logo-eshop">
            </div>
            </a>
        </div>
        <div class="navbar-content">
            <a class="nav-item">
                <div class="nav-item-icon nav-item-dashboard">
                    <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Tổng quan</div>
            </a>
             <a class="nav-item">
                <div class="nav-item-icon nav-item-report">
                   <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Báo cáo</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-order">
                     <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Đơn hàng</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-buy">
                     <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Mua hàng</div>
            </a>
            <a class="nav-item" :href="customer">
                <div class="nav-item-icon nav-item-promotion">
                     <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Khuyến mại</div>
            </a>
            <router-link class="nav-item" to="/dictionary/customer">
                <div class="nav-item-icon nav-item-manage-shop">
                     <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Quản lý cửa hàng </div>
            </router-link>
             <router-link class="nav-item" to="/dictionary/employee">
                <div class="nav-item-icon nav-item-product">
                     <i class="fas fa-tachometer-alt"></i>
                </div>
                <div class="nav-item-text">Hàng hóa</div>
            </router-link>
           

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>