<template>
  <div id="shop-list">
    <Toolbar></Toolbar>
   
    <div class="data-content">
      <div class="grid data-table">
        <table style="width:100%">
          <thead>
            <tr>
              <th class="column shop-code">
                <div class="th-name">Mã cửa hàng</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter" />
                </div>
              </th>
              <th class="column shop-code">
                <div class="th-name">Ten cửa hàng</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter" />
                </div>
              </th>
               <th class="column shop-code">
                <div class="th-name">Dia chi</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter" />
                </div>
              </th>
               <th class="column shop-code">
                <div class="th-name">So dien thoai</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter" />
                </div>
              </th>
               <th class="column shop-code">
                <div class="th-name">Trang thai</div>
                <div class="th-filter">
                  <select name="" id="">
                    <option value="">Dang hoat dong</option>
                    <option value="">1</option>
                  </select>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          </tr>
           <tr>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          <td>a</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="footer">
        <div class="footer-icon">
          <div class="wrap-icon wrap-icon-1">
          <div class="icon-1"></div>
          </div>
           <div class="wrap-icon wrap-icon-2">
          <div class="icon-2"></div>
          </div>
          <div class="page-title">Trang</div>
          <div class="wrap-page-number">
            <input class="input-page-number" value="1">
          </div>
          <div class="page-total">tren 2</div>
           <div class="wrap-icon wrap-icon-3">
          <div class="icon-3"></div>
          </div>
           <div class="wrap-icon wrap-icon-4">
          <div class="icon-4"></div>
          </div>
           <div class="wrap-icon wrap-icon-5">
          <div class="icon-5"></div>
          </div>
          <div class="page-select">
            <select name="" id="">
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </div>

        </div>
      </div>
    </div>
    <ShopDetail ></ShopDetail>
  </div>
</template>

<script>
import Toolbar from "../components/layout/Toolbar.vue";
import ShopDetail from './ShopDetail.vue';
export default {
  components: { Toolbar, ShopDetail },
};
</script>

<style>
@import "../styles/pages/shoplist.css";
</style>