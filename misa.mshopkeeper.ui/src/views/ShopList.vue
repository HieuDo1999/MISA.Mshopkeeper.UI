<template>
  <div id="shop-list">
    <div class="toolbar">
    <button class="btn btn-toolbar btn-add" @click="add">
        <div class="icon-toolbar icon-add"></div>
        <div  class="btn-text text-add" >Thêm mới</div>
    </button>
    <button class="btn btn-toolbar">
      <div class="icon-toolbar icon-duplicate"></div>
      <div class="btn-text text-duplicate">Nhân bản</div>
    </button>
    <button class="btn btn-toolbar">
      <div class="icon-toolbar icon-edit"></div>
      <div class="btn-text text-edit">Sửa</div>
    </button>
    <button class="btn btn-toolbar">
      <div class="icon-toolbar icon-delete"></div>
      <div class="btn-text text-delete">Xóa</div>
    </button>
    <button class="btn btn-toolbar">
      <div class="icon-toolbar icon-refresh"></div>
      <div class="btn-text text-refresh">Nạp</div>
    </button>
  </div>
   
    <div class="data-content">
      <div class="grid data-table">
         <table style="width:100%; border-spacing:0px;  ">
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
          <tbody class="table-grid">
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
    <ShopDetail @closeDialog="closeDialog" v-if="!isHideParent" ></ShopDetail>
  </div>
</template>

<script>

import ShopDetail from './ShopDetail.vue';
export default {
  components: {  ShopDetail },
  data(){
    return {
      isHideParent: true,
    }
  },
  methods:{
    add(){
      this.isHideParent=false;
    },
    closeDialog(){
      this.isHideParent=true;
    }
  }
};
</script>

<style>
@import "../styles/pages/shoplist.css";
</style>