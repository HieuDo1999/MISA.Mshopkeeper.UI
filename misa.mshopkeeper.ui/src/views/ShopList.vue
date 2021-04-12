<template>
  <div id="shop-list">
    <Toolbar></Toolbar>
    <!-- <div class="grid-wrap">
      <div class="grid">
        <table>
          <thead>
            <tr>
              <th class="m-column column-shop-code">
                <div class="header-title">
                  <span>Ma cua hang</span>
                </div>
                <div class="header-filter">
                  <div class="btn-option">
                    <span>*</span>
                  </div>
                  <div class="input-filter">
                    <input type="text" />
                  </div>
                </div>
              </th>
              <th class="m-column column-shop-name">
                <div class="header-title">
                  <span>Ten cua hang</span>
                </div>
                <div class="header-filter">
                  <div class="btn-option">
                    <span>*</span>
                  </div>
                  <div class="input-filter">
                    <input type="text" />
                  </div>
                </div>
              </th>
              <th class="m-column column-shop-address">
                <div class="header-title">
                  <span>Dia chi</span>
                </div>
                <div class="header-filter">
                  <div class="btn-option">
                    <span>*</span>
                  </div>
                  <div class="input-filter">
                    <input type="text" />
                  </div>
                </div>
              </th>
              <th class="m-column column-shop-phone">
                <div class="header-title">
                  <span>So dien thoai</span>
                </div>
                <div class="header-filter">
                  <div class="btn-option">
                    <span>*</span>
                  </div>
                  <div class="input-filter">
                    <input type="text" />
                  </div>
                </div>
              </th>
              <th class="m-column column-shop-status">
                <div class="header-title">
                  <span>Trang thai</span>
                </div>
                <div class="header-filter">
                  <div class="btn-option">
                    <span>*</span>
                  </div>
                  <div class="input-filter">
                    <input type="text" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
            </tr>
            <tr>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
              <td>aaa</td>
            </tr>
          </tbody>
        </table>
        <div class="grid-footer-wrap">
        <div class="grid-footer">
          <div>button</div>

        </div>
      </div>
      </div>
      
    </div> -->
    <div class="data-content">
      <div class="grid data-table">
        <table style="width:100%">
          <thead>
            <tr>
              <th class="column shop-code">
                <div class="th-name">Mã cửa hàng</div>
                <div class="th-filter">
                  <div class="btn-filter">*</div>
                  <input class="input-filter" />
                </div>
              </th>
              <th class="column shop-name">
                <div class="th-name">Tên cửa hàng</div>
                <div class="th-filter">
                  <div class="btn-filter">*</div>
                  <input class="input-filter" />
                </div>
              </th>
              <th class="column shop-address">
                <div class="th-name">Địa chỉ</div>
                <div class="th-filter">
                  <div class="btn-filter">*</div>
                  <input class="input-filter" />
                </div>
              </th>
              <th class="column shop-phone">
                <div class="th-name">Số điện thoại</div>
                <div class="th-filter">
                  <div class="btn-filter">*</div>
                  <input class="input-filter" />
                </div>
              </th>
              <th class="column shop-status">
                <div class="th-name">Trạng thái</div>
                <div class="th-filter">
                  <div class="btn-filter">*</div>
                  <input class="input-filter" />
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