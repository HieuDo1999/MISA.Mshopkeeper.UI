<template>
  <div id="shop-list">
    <div class="toolbar">
      <button class="btn btn-toolbar btn-add" @click="add">
        <div class="icon-toolbar icon-add"></div>
        <div class="btn-text text-add">Thêm mới</div>
      </button>
      <button class="btn btn-toolbar" @click="alertMs">
        <div class="icon-toolbar icon-duplicate"></div>
        <div class="btn-text text-duplicate">Nhân bản</div>
      </button>
      <button
        class="btn btn-toolbar"
        @click="edit"
        :class="{
          disable: Object.keys(this.selectedStore).length ? false : true,
        }"
        :disabled="Object.keys(this.selectedStore).length ? false : true"
      >
        <div class="icon-toolbar icon-edit"></div>
        <div class="btn-text text-edit">Sửa</div>
      </button>
      <button
        class="btn btn-toolbar"
        @click="confirmDelete"
        :class="{
          disable: Object.keys(this.selectedStore).length ? false : true,
        }"
      >
        <div class="icon-toolbar icon-delete"></div>
        <div class="btn-text text-delete">Xóa</div>
      </button>
      <button class="btn btn-toolbar" @click="refreshAll">
        <div class="icon-toolbar icon-refresh"></div>
        <div class="btn-text text-refresh">Nạp</div>
      </button>
    </div>

    <div class="data-content">
      <div class="grid data-table">
        <table style="width: 100%; border-spacing: 0px">
          <thead>
            <tr>
              <th class="column shop-code">
                <div class="th-name">Mã cửa hàng</div>

                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input
                    class="input-filter"
                    v-model="filterStoreCode"
                    @blur="filterStoreWithStoreCode"
                  />
                </div>
              </th>
              <th class="column shop-name">
                <div class="th-name">Ten cửa hàng</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input
                    class="input-filter"
                    v-model="filterStoreName"
                    @blur="filterStoreWithStoreName"
                  />
                </div>
              </th>
              <th class="column shop-address">
                <div class="th-name">Địa chỉ</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input
                    class="input-filter"
                    v-model="filterAddress"
                    @blur="filterStoreWithAddress"
                  />
                </div>
              </th>
              <th class="column shop-phone">
                <div class="th-name">Số điện thoại</div>
                <div class="th-filter">
                  <div class="btn-filter">
                    <div class="icon-option-filter">*</div>
                  </div>
                  <input
                    class="input-filter"
                    v-model="filterStorePhone"
                    @blur="filterStoreWithPhoneNumber"
                  />
                </div>
              </th>
              <th class="column shop-status">
                <div class="th-name">Trạng thái</div>
                <div class="th-filter">
                  <select
                    class=""
                    name=""
                    id=""
                    v-model="filterStoreStatus"
                    @change="filterStoreWithStatus">
                    <option  :value="2">Tất cả</option>
                    <option :value="1">Đang hoạt động</option>
                    <option :value="0">Ngừng hoạt động</option>
                  </select>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="table-grid">
            <tr
              v-for="store in stores"
              :key="store.id"
              @dblclick="detail(store)"
              @click="selectRow(store)"
              :class="{
                selectedRow: store.storeCode == selectedStore.storeCode,
              }"
             
            >
              <td class="store-code" ref="storeCode" @mouseover="viewFullStoreCode(store.storeCode)">{{ store.storeCode }}</td>
              <td class="store-name">{{ store.storeName }}</td>
              <td class="store-address" style="min-width: calc(100% - 39px)">
                {{ store.address }}
              </td>
              <td class="store-phone">{{ store.phoneNumber }}</td>
              <td class="store-status" v-if="store.status">Đang hoạt động</td>
              <td class="store-status" v-else>Ngừng hoạt động</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="footer">
        <div class="footer-icon">
          <div class="wrap-icon wrap-icon-1" @click="firstPage">
            <div class="icon-1"></div>
          </div>
          <div class="wrap-icon wrap-icon-2" @click="previousPage">
            <div class="icon-2"></div>
          </div>
          <div class="page-title">Trang</div>
          <div class="wrap-page-number">
            <input
              class="input-page-number"
              v-model="pageCurrent"
              @change="fetchStores"
              @keyup="fetchStores"
            />
          </div>
          <div class="page-total">trên {{ this.totalPages }}</div>
          <div class="wrap-icon wrap-icon-3" @click="nextPage">
            <div class="icon-3"></div>
          </div>
          <div class="wrap-icon wrap-icon-4" @click="lastPage">
            <div class="icon-4"></div>
          </div>
          <div class="wrap-icon wrap-icon-5">
            <div class="icon-5"></div>
          </div>
          <div class="page-select">
            <select name="" id="" v-model="numberRecordInPage" @change="selectNumberRecordInPage">
              <option  :value="30" >30</option>
              <option  :value="40">40</option>
              <option :value="50">50</option>
              <option :value="60">60</option>
              <option :value="70">70</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <StoreDetail
      @alertDuplicateStoreCode="alertDuplicateStoreCode"
      @refresh="refresh"
      @closeDialog="closeDialog"
      @setStoreNull="setStoreNull"
      :isAdd="isAdd"
      v-if="!isHideParent"
      :store="store"
    ></StoreDetail>
    <ConfirmDelete
      @cancelDelete="cancelDelete"
      @deleteStore="deleteStore"
      v-if="isConfirm"
      :store="store"
    ></ConfirmDelete>
    <Alert @agree="agree" v-if="isAlert"></Alert>
    <MSDelete @disappear="disappear" v-if="isMsDelete"></MSDelete>
  </div>
</template>

<script>
import StoreDetail from "./StoreDetail.vue";
import axios from "axios";
import ConfirmDelete from "./ConfirmDelete.vue";
import Alert from "./Alert.vue";
import MSDelete from "./MSDelete.vue";
export default {
  components: { StoreDetail, ConfirmDelete, Alert, MSDelete },
  data() {
    return {
      isHideParent: true,
      stores: [],
      store: {},
      isConfirm: false,
      isAlert: false,
      isMsDelete: false,
      selectedStore: {},
      storeId: null,
      filterStoreCode: "",
      filterStoreName: "",
      filterAddress: "",
      filterStorePhone: "",
      filterStoreStatus: "2",
      totalPages: 0,
      pageCurrent: 1,
      numberRecordInPage: 30,
      isAdd:true,
    };
  },
  created() {
    this.fetchStores();
    this.getTotalPages();
  },
  methods: {
    setStoreNull(){
      this.store={}
    },
    firstPage(){
      this.pageCurrent=1;
      this.fetchStores()
    },
    lastPage(){
      this.pageCurrent=this.totalPages;
      this.fetchStores()
    },
    viewFullStoreCode(storeCode){
     this.$refs.storeCode.title=storeCode;
    },
    async selectNumberRecordInPage(){
      this.getTotalPages()
      this.fetchStores()
      
    },
    async filterStoreWithStoreCode() {
      this.pageCurrent=1;
      const res = 
        await axios.get(
        `https://localhost:44362/api/v1/stores/GetStoreFilterByIndexOffset?storeCode=${this.filterStoreCode}&storeName=${this.filterStoreName}&address=${this.filterAddress}&phoneNumber=${this.filterStorePhone}&status=${this.filterStoreStatus}&positionStart=${this.numberRecordInPage * (this.pageCurrent - 1) + 1}&offSet=${this.numberRecordInPage}`
      );
      this.stores = res.data;
    },
    async filterStoreWithStoreName() {
this.pageCurrent=1;
      const res = await axios.get(
         `https://localhost:44362/api/v1/stores/GetStoreFilterByIndexOffset?storeCode=${this.filterStoreCode}&storeName=${this.filterStoreName}&address=${this.filterAddress}&phoneNumber=${this.filterStorePhone}&status=${this.filterStoreStatus}&positionStart=${this.numberRecordInPage * (this.pageCurrent - 1) + 1}&offSet=${this.numberRecordInPage}`
      );
      this.stores = res.data;
    },
    async filterStoreWithAddress() {
      this.pageCurrent=1;
      const res = await axios.get(
         `https://localhost:44362/api/v1/stores/GetStoreFilterByIndexOffset?storeCode=${this.filterStoreCode}&storeName=${this.filterStoreName}&address=${this.filterAddress}&phoneNumber=${this.filterStorePhone}&status=${this.filterStoreStatus}&positionStart=${this.numberRecordInPage * (this.pageCurrent - 1) + 1}&offSet=${this.numberRecordInPage}`
      );
      this.stores = res.data;
    },
    async filterStoreWithPhoneNumber() {
      this.pageCurrent=1;
      const res = await axios.get(
         `https://localhost:44362/api/v1/stores/GetStoreFilterByIndexOffset?storeCode=${this.filterStoreCode}&storeName=${this.filterStoreName}&address=${this.filterAddress}&phoneNumber=${this.filterStorePhone}&status=${this.filterStoreStatus}&positionStart=${this.numberRecordInPage * (this.pageCurrent - 1) + 1}&offSet=${this.numberRecordInPage}`
      );
      this.stores = res.data;
    },
    async filterStoreWithStatus() {
      this.pageCurrent=1;
      const res = await axios.get(
         `https://localhost:44362/api/v1/stores/GetStoreFilterByIndexOffset?storeCode=${this.filterStoreCode}&storeName=${this.filterStoreName}&address=${this.filterAddress}&phoneNumber=${this.filterStorePhone}&status=${this.filterStoreStatus}&positionStart=${this.numberRecordInPage * (this.pageCurrent - 1) + 1}&offSet=${this.numberRecordInPage}`
      );
      this.stores = res.data;
    },

    disappear() {
      this.isMsDelete = false;
    },
    nextPage() {
      if (this.pageCurrent == this.totalPages) {
        return;
      }
      this.pageCurrent++;
      this.refresh();
    },
    previousPage() {
      if (this.pageCurrent == 1) {
        return;
      }
      this.pageCurrent--;
      this.refresh();
    },
    async getTotalPages() {
      const res = await axios.get(
        `https://localhost:44362/api/v1/stores/GetCountStores`
      );
    
      if(res.data%this.numberRecordInPage>0){
      this.totalPages = Math.floor(res.data / this.numberRecordInPage)+1;
      }else{
        this.totalPages = Math.floor(res.data / this.numberRecordInPage);
      }
    
    },
    edit() {
      this.isHideParent = false;
      this.isAdd=false;
    },
    add() {
      this.isHideParent = false;
      this.store = {};
      this.isAdd=true
    },
    async deleteStore() {
      var response = await axios.delete(
        `https://localhost:44362/api/v1/stores/${this.storeId}`
      );
      if (response) {
        this.isMsDelete = true;
        this.isConfirm = false;
        this.refresh();
      }
    },
    closeDialog() {
      this.isHideParent = true;
    },
    async fetchStores() {
      var response = await axios.get(
        `https://localhost:44362/api/v1/stores/GetStoreFilterByIndexOffset?storeCode=${this.filterStoreCode}&storeName=${this.filterStoreName}&address=${this.filterAddress}&phoneNumber=${this.filterStorePhone}&status=${this.filterStoreStatus}&positionStart=${this.numberRecordInPage * (this.pageCurrent - 1) + 1}&offSet=${this.numberRecordInPage}`
      );
      this.stores = response.data;
    },
    detail(store) {
      this.isHideParent = false;
      this.store = store;
       this.isAdd=false;
    },
    alertDuplicateStoreCode() {
      this.isAlert = true;
    },
    refresh() {
      this.fetchStores();
    },
    refreshAll(){
      this.pageCurrent=1;
      this.filterStoreCode=""
      this.filterStoreName=""
      this.filterAddress=""
      this.filterStorePhone=""
      this.filterStoreStatus=2
      this.fetchStores()
    },
    confirmDelete() {
      if (Object.keys(this.selectedStore).length ? false : true) {
        return;
      } else {
        this.isConfirm = true;
      }
    },
    alertMs() {
      this.isAlert = true;
    },
    agree() {
      this.isAlert = false;
    },
    cancelDelete() {
      this.isConfirm = false;
      this.isConfirmDelete = false;
    },
    selectRow(store) {
      this.selectedStore = store;
      this.storeId = store.storeId;
      this.store = store;
    },
  },
};
</script>

<style>
@import "../styles/pages/storelist.css";
</style>