<template>
  <div id="shop-list">
    <div class="toolbar">
    <button class="btn btn-toolbar btn-add" @click="add">
        <div class="icon-toolbar icon-add"></div>
        <div  class="btn-text text-add" >Thêm mới</div>
    </button>
    <button class="btn btn-toolbar" @click="alertMs">
      <div class="icon-toolbar icon-duplicate"></div>
      <div class="btn-text text-duplicate">Nhân bản</div>
    </button>
    <button class="btn btn-toolbar" @click="edit" :class="{disable: (Object.keys(this.selectedStore).length?false:true)} " :disabled="(this.selectedStore==Object.empty?true:false)">
      <div class="icon-toolbar icon-edit"></div>
      <div class="btn-text text-edit">Sửa</div>
    </button>
    <button class="btn btn-toolbar" @click="confirmDelete"  :class="{disable:  (Object.keys(this.selectedStore).length?false:true)}">
      <div class="icon-toolbar icon-delete"></div>
      <div class="btn-text text-delete">Xóa</div>
    </button>
    <button class="btn btn-toolbar" @click="refresh">
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
              <th class="column shop-name">
                <div class="th-name">Ten cửa hàng</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter" />
                </div>
              </th>
               <th class="column shop-address">
                <div class="th-name">Dia chi</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter" />
                </div>
              </th>
               <th class="column shop-phone">
                <div class="th-name">So dien thoai</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input class="input-filter"  />
                </div>
              </th>
               <th class="column shop-status">
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
          <tr v-for="store in stores" :key="store.id" @dblclick="detail(store)" @click="selectRow(store)" :class="{'selectedRow': (store.storeCode == selectedStore.storeCode)}">
          <td class="store-code">{{store.storeCode}}</td>
          <td class="store-name">{{store.storeName}}</td>
          <td class="store-address" style="min-width:calc(100% - 39px);">{{store.address}}</td>
          <td class="store-phone">{{store.phoneNumber}}</td>
          <td class="store-status" v-if="store.status">Đang hoạt động</td>
          <td class="store-status" v-else>Ngừng hoạt động</td>
          </tr>

           <tr>
        <td class="store-code">ssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas</td>
        <td class="store-name">ssssssssss11111111111111111111111111111111111ssssssss</td>
        <td class="store-address">sssssssssssssss111111111111111111111111111ss</td>
        <td class="store-phone">ssssssss11111111111111111111111111ssssss</td>
        <td class="store-status">ssssssss1111111111111111111111111111111111ssssssss</td>
      

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
    <StoreDetail @refresh="refresh"  @closeDialog="closeDialog" v-if="!isHideParent" :store="store" ></StoreDetail>
    <ConfirmDelete @cancelDelete="cancelDelete" @deleteStore="deleteStore" v-if="isConfirm" :store="store" ></ConfirmDelete>
    <Alert @agree="agree" v-if="isAlert"></Alert>
  </div>
</template>

<script>

import StoreDetail from './StoreDetail.vue';
import axios from 'axios';
import ConfirmDelete from './ConfirmDelete.vue';
import Alert from './Alert.vue';
export default {
  components: {  StoreDetail, ConfirmDelete, Alert },
  data(){
    return {
      isHideParent: true,
      stores:[],
      store:{},
      isConfirm:false,
      isAlert:false,
      selectedStore:{},
      storeId:null,
    }
  },
  created(){
    this.fetchStores();

  },
  mounted:{
    
  },
  methods:{
      edit(){
      this.isHideParent=false;
      }
    ,
    add(){
      this.isHideParent=false;
      this.store={};
    },
    async deleteStore(){
      var response=await axios.delete(`https://localhost:44362/api/v1/stores/${this.storeId}` ,)
       if(response){
         alert("done")
         this.isConfirm=false;
         this.refresh()
    }
    },

    closeDialog(){
      this.isHideParent=true;
    },
    async fetchStores(){
       var response=await axios.get("https://localhost:44362/api/v1/stores")
          this.stores=response.data
        
    },
    detail(store){
      this.isHideParent=false;
      this.store=store;
    },
    refresh(){
      this.fetchStores();
    },
    confirmDelete(){
      if((Object.keys(this.selectedStore).length?false:true)){
        return 
      }else{
         this.isConfirm=true;
      }

    },
    alertMs(){
      this.isAlert=true;
    },
    agree(){
      this.isAlert=false;
    },
    cancelDelete(){
      this.isConfirm=false
      this.isConfirmDelete=false
    },
  
    selectRow(store){
      this.selectedStore=store
      this.storeId=store.storeId
      this.store=store
    }
  }
};
</script>

<style>
@import "../styles/pages/storelist.css";
</style>