<template>
  <div class="navbar">
    <div class="logo-site">
      <a href="">
        <div class="logo-eshop"></div>
      </a>
    </div>
    <div class="navbar-content">
      <router-link :to="{'name':'/'}" class="nav-item">
        <div class="nav-item-icon nav-item-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </router-link>
      <a class="nav-item">
        <div class="nav-item-icon  nav-item-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </a>
      <a class="nav-item">
        <div class="nav-item-icon  nav-item-order"></div>
        <div class="nav-item-text">Đơn hàng</div>
      </a>
      <a class="nav-item">
        <div class="nav-item-icon  nav-item-buy"></div>
        <div class="nav-item-text">Mua hàng</div>
      </a>
      <a class="nav-item" >
        <div class="nav-item-icon  nav-item-promotion"></div>
        <div class="nav-item-text">Khuyến mại</div>
      </a>
      <router-link :to="{'name':'StoreList'}" class="nav-item">
        <div class="nav-item-icon  nav-item-manage-shop"></div>
        <div class="nav-item-text">Quản lý cửa hàng</div>
      </router-link>
      <a class="nav-item" >
        <div class="nav-item-icon  nav-item-product"></div>
        <div class="nav-item-text">Hàng hóa</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>