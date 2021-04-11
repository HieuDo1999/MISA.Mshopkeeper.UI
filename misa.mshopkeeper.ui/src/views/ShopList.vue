<template>
  <div id="shop-list">
    <Toolbar></Toolbar>
    <div class="grid-wrap">
      <div class="grid-header">
        <div class="m-column column-shop-code">
          <div class="header-title-wapper">
            <div class="header-title-content">Mã cửa hàng</div>
          </div>
          <div class="header-filter">
            <div class="btn-option"></div>
            <div class="input-filter"></div>
          </div>
        </div>
        <div class="m-column column-shop-name">
          <div class="header-title-wapper">
            <div class="header-title-content">Tên cửa hàng</div>
          </div>
          <div class="header-filter">
            <div class="btn-option"></div>
            <div class="input-filter"></div>
          </div>
        </div>
     
        <div class="m-column column-shop-address">
          <div class="header-title-wapper">
            <div class="header-title-content">Địa chỉ</div>
          </div>
          <div class="header-filter">
            <div class="btn-option"></div>
            <div class="input-filter"></div>
          </div>
        </div>
        <div class="m-column column-shop-phone">
          <div class="header-title-wapper">
            <div class="header-title-content">Số điện thoại</div>
          </div>
          <div class="header-filter">
            <div class="btn-option"></div>
            <div class="input-filter"></div>
          </div>
        </div>
        <div class="m-column column-shop-status">
          <div class="header-title-wapper">
            <div class="header-title-content">Trạng thái</div>
          </div>
          <div class="header-filter">
            <div class="btn-option"></div>
            <div class="input-filter"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../components/layout/Toolbar.vue";
export default {
  components: { Toolbar },
};
</script>

<style>
@import "../styles/pages/shoplist.css";
</style>