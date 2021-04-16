<template>
  <div>
    <div class="dialog">
      <div class="dialog-background"></div>
      <form class="dialog-container" @submit="submitFunc" :class="{'dialog-add': !this.store.storeId}">
        <div class="dialog-header">
          <div class="left-header">
           
            <div class="header-title" v-if="!this.store.storeId">Thêm mới cửa hàng</div>
          
            <div class="header-title" v-else>Sửa cửa hàng</div>
           
          </div>
          <button class="d-icon icon-x" @click="cancel"></button>
        </div>
        <div class="dialog-content" :class="{'dialog-content-update':this.store.storeId}">
          <div class="dialog-row">
            <label> Mã cửa hàng <span class="text-red">*</span> </label>
            <input
              ref="storeCode"
              type="text"
              class="d-input"
              v-model="store.storeCode"
              @click="clickInput = !clickInput"
              @blur="validate('storeCode', store.storeCode)"
              :class="{ warn: this.validateFieldsName.storeCode == false }"
            />

            <div
              v-if="
                !this.validateFieldsName.storeCode &&
                (store.storeCode == null || !store.storeCode)
              "
            >
              <div
                class="d-icon icon-exclamation"
                @mouseover="mouseOverStoreCode"
                @mouseout="mouseOutStoreCode"
              ></div>
              <span class="input-required" v-if="mouseOver.storeCode">
                Trường không được phép để trống
              </span>
            </div>
          </div>
          <div class="dialog-row">
            <label> Tên cửa hàng <span class="text-red">*</span> </label>
            <input
              type="text"
              class="d-input required"
              v-model="store.storeName"
              @blur="validate('storeName', store.storeName)"
              :class="{ warn: !this.validateFieldsName.storeName }"
            />
            <div
              v-if="
                !this.validateFieldsName.storeName &&
                (store.storeName == null || !store.storeName)
              "
            >
              <div
                class="d-icon icon-exclamation"
                @mouseover="mouseOverStoreName"
                @mouseout="mouseOutStoreName"
              ></div>
              <span class="input-required" v-if="mouseOver.storeName">
                Trường không được phép để trống
              </span>
            </div>
          </div>
          <div class="dialog-row">
            <label> Địa chỉ <span class="text-red">*</span> </label>
            <textarea
              name=""
              id=""
              cols="100"
              rows="3"
              class="d-text-area required"
              v-model="store.address"
              @blur="validate('address', store.address)"
              :class="{ warn: !this.validateFieldsName.address }"
            ></textarea>
            <div
              v-if="
                !this.validateFieldsName.address &&
                (store.address == null || !store.address)
              "
            >
              <div
                class="d-icon icon-exclamation"
                @mouseover="mouseOverAddress"
                @mouseout="mouseOutAddress"
              ></div>
              <span
                class="input-required"
                style="top: 70%"
                v-if="mouseOver.address"
              >
                Trường không được phép để trống
              </span>
            </div>
          </div>
          <div class="dialog-row">
            <div class="dialog-sub-row">
              <label for="">Số điện thoại</label>
              <input type="text" class="d-input" v-model="store.phoneNumber" />
            </div>
            <div class="dialog-sub-row">
              <label for="" class="left-label">Mã số thuế</label>
              <input type="text" class="d-input" v-model="store.storeTaxCode" />
            </div>
          </div>

          <div class="dialog-row">
            <div class="dialog-sub-row">
              <label for="">Quốc gia</label>
              <select name="" id="" class="d-select" v-model="store.countryId" @change="changeCountry(store.countryId)">
                <option :value="this.country.countryId" v-if="country.countryId">
                  {{ this.country.countryName }}
                </option>
                <option
                  v-for="country in countrys"
                  :key="country.id"
                  :value="country.countryId"
                >
                  {{ country.countryName }}
                </option>
              </select>
            </div>
            <div class="dialog-sub-row"></div>
          </div>
          <div class="dialog-row">
            <div class="dialog-sub-row">
              <label for="">Tỉnh/Thành phố</label>
              <select class="d-select" v-model="store.provinceId" @change="changeProvince(store.provinceId)" :disabled="(Object.keys(this.store).length?false:true)||this.store.countryId=={}">
                <option :value="province.provinceId" v-if="province.provinceId">
                  {{ province.provinceName }}
                </option>
                <option
                  v-for="province in provinces"
                  :key="province.id"
                  :value="province.provinceId"
                >
                  {{ province.provinceName }}
                </option>
              </select>
            </div>
            <div class="dialog-sub-row">
              <label for="" class="left-label">Quận/Huyện</label>
              <select class="d-select" v-model="store.districtId" @change="changeDistrict(store.districtId)" >
                <option :value="district.districtId" v-if="district.districtId">
                  {{ district.districtName }}
                </option>
                <option
                  v-for="district in districts"
                  :key="district.id"
                  :value="district.districtId"
                >
                  {{ district.districtName }}
                </option>
              </select>
            </div>
          </div>
          <div class="dialog-row">
            <div class="dialog-sub-row">
              <label for="">Phường/Xã</label>
              <select class="d-select" v-model="store.wardId"  >
                <option :value="ward.wardId" v-if="ward.wardId" >{{ ward.wardName }}</option>
                <option
                  v-for="ward in wards"
                  :key="ward.id"
                  :value="ward.wardId"
                >
                  {{ ward.wardName }}
                </option>
              </select>
            </div>
            <div class="dialog-sub-row">
              <label for="" class="left-label">Đường phố</label>
              <input type="text" class="d-input" v-model="store.street" />
            </div>
          </div>
          <div class="dialog-row " v-if="store.storeId">
              <div class="checkbox-wrap">
                <input type="checkbox" v-model="this.status">
                <div class="checkbox-text">Ngừng hoạt động</div>
              </div>
          </div>
        </div>
        <div class="dialog-footer">
          <div class="dialog-footer-left">
            <div class="btn-help">
              <div
                class="d-icon icon-help"
                style="background-size: contain"
              ></div>
              <div class="d-text text-help">Trợ giúp</div>
            </div>
          </div>
          <div class="dialog-footer-right">
            <button class="btn-right btn-save" @click="save">
              <div class="icon-save"></div>
              <div class="text-save">Lưu</div>
            </button>
            <button class="btn-right btn-plus" @click="saveAndAdd">
              <div class="icon-plus"></div>
              <div class="text-plus">Lưu và thêm mới</div>
            </button>
            <button
            
              class="btn-right btn-cancel"
              @keydown="reFocus"
              @click="cancel"
            >
              <div class="footer-icon-x"></div>
              <div class="text-cancel">Hủy bỏ</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
@import "../styles/pages/storedetail.css";
</style>
<script>
import axios from "axios";
export default {
  name: "Dialog",
  props: ["store"],
  data: function () {
    return {
      submitTypeP: "",
      country: "",
      countrys: [],
      province: "",
      provinces: [],
      district: "",
      districts: [],
      ward: "",
      wards: [],
      clickInput: false,
      validateFields: ["storeCode", "storeName", "address"],
      validateFieldsName: {
        storeCode: true,
        storeName: true,
        address: true,
      },
      mouseOver: {
        storeCode: false,
        storeName: false,
        address: false,
      },
      isValidate: true,
      status:!this.store.status
    };
  },
  created() {
    if(this.store.storeId){
         this.fetchDataDetail();
    }else{
    this.fetchDataAdd();
    }
 
  },
  methods: {
    async fetchDataDetail() {
     
        try {
          let [
            country,
            countrys,
            province,
            provinces,
            district,
            districts,
            ward,
            wards,
          ] = await Promise.all([
            axios.get(
              "https://localhost:44362/api/v1/countrys/" + this.store.countryId
            ),
            axios.get("https://localhost:44362/api/v1/countrys"),
            axios.get(
              "https://localhost:44362/api/v1/provinces/" +
                this.store.provinceId
            ),
            axios.get("https://localhost:44362/api/v1/provinces/GetProvinceWithCountry/"+ this.store.countryId),
            axios.get(
              "https://localhost:44362/api/v1/districts/" +
                this.store.districtId
            ),
            axios.get("https://localhost:44362/api/v1/districts/GetDistrictWithProvince/"+this.store.provinceId),
            axios.get(
              "https://localhost:44362/api/v1/wards/" + this.store.wardId
            ),
            axios.get("https://localhost:44362/api/v1/wards/GetWardWithDistrict/"+this.store.districtId),
          ]);
          this.country = country.data;
          this.province = province.data;
          this.district = district.data;
          this.ward = ward.data;
          this.countrys = countrys.data.filter((c) => {
            return c.countryId != this.country.countryId;
          });
          this.provinces = provinces.data.filter((c) => {
            return c.provinceId != this.province.provinceId;
          });
          this.districts = districts.data.filter((c) => {
            return c.districtId != this.district.districtId;
          });
          this.wards = wards.data.filter((c) => {
            return c.wardId != this.ward.wardId;
          });
        } catch (e) {
          console.log(e);
        }
      
    },
    async changeCountry(countryId){
      const res=await  axios.get("https://localhost:44362/api/v1/provinces/GetProvinceWithCountry/"+ countryId)
      this.provinces=res.data
      this.province={};
      this.district={}
      this.ward={}
    },
   async changeProvince(provinceId){
        const res= await axios.get("https://localhost:44362/api/v1/districts/GetDistrictWithProvince/" + provinceId)
        this.districts=res.data
        this.district={}
        this.ward={}
    },
    async changeDistrict(districtId){
      const res= await axios.get("https://localhost:44362/api/v1/wards/GetWardWithDistrict/"+districtId)
      this.wards=res.data
      this.ward={}
    },


    async fetchDataAdd() {
      try {
        let [countrys, provinces, districts, wards] = await Promise.all([
          axios.get("https://localhost:44362/api/v1/countrys"),

          axios.get("https://localhost:44362/api/v1/provinces"),

          axios.get("https://localhost:44362/api/v1/districts"),

          axios.get("https://localhost:44362/api/v1/wards"),
        ]);

        this.countrys = countrys.data.filter((c) => {
          return c.countryId != this.country.countryId;
        });
        this.provinces = provinces.data.filter((c) => {
          return c.provinceId != this.province.provinceId;
        });
        this.districts = districts.data.filter((c) => {
          return c.districtId != this.district.districtId;
        });
        this.wards = wards.data.filter((c) => {
          return c.wardId != this.ward.wardId;
        });
      } catch (e) {
        console.log(e);
      }
    },
    cancel() {
      this.$emit("closeDialog", true);
      this.$emit("refresh", true);
    },
    validate(fieldName, fieldValue) {
      this.validateFields.filter((c) => {
        if (c == fieldName) {
          if (fieldValue == null || fieldValue == "") {
            this.validateFieldsName[`${fieldName}`] = false;
          } else {
            this.validateFieldsName[`${fieldName}`] = true;
          }
        }
      });
    },
    validateForSaveAndAdd() {
      this.validateFields.filter((c) => {
        if (this.store[`${c}`] == null || !this.store[`${c}`]) {
          this.validateFieldsName[`${c}`] = false;
          this.isValidate = false;
        }
      });
      this.validateFields.every((c) => {
        if (this.store[`${c}`] == null || !this.store[`${c}`]) {
          this.mouseOver[`${c}`] = true;
          setTimeout(() => {
            this.mouseOver[`${c}`] = false;
          }, 2000);
          return;
        }
      });
    },

    async saveAndAdd() {
      this.validateForSaveAndAdd();
      if (this.isValidate) {
        if(this.store.storeId){
          this.store.status=this.status?1:0;
           const res=await axios.put(`https://localhost:44362/api/v1/stores/${this.store.storeId}`, this.store);
           if(res){
             this.store={}
           }
        }else{
         const res= await axios.post("https://localhost:44362/api/v1/stores", this.store);
         if(res){
            this.store={}
             this.$emit("refresh", true);
         }
        }
      } else {
        alert("b");
      }
    },
    async save() {
       this.validateForSaveAndAdd();
      if (this.isValidate) {
        if(this.store.storeId){
            this.store.status=this.status?1:0;
           const res=await axios.put(`https://localhost:44362/api/v1/stores/${this.store.storeId}`, this.store);
           if(res){
             this.$emit("closeDialog", true);
           }
        }else{
          const res=await axios.post("https://localhost:44362/api/v1/stores", this.store);
           if(res){
             this.$emit("closeDialog", true);
              this.$emit("refresh", true);
           }
        }
      } else {
        alert("b");
      }
    },
    mouseOverStoreCode() {
      this.mouseOver.storeCode = true;
      setTimeout(() => {
        this.mouseOver.storeCode = false;
      }, 2000);
    },
    mouseOutStoreCode() {
      this.mouseOver.storeCode = false;
    },
    mouseOverStoreName() {
      this.mouseOver.storeName = true;
      setTimeout(() => {
        this.mouseOver.storeName = false;
      }, 2000);
    },
    mouseOverAddress() {
      this.mouseOver.address = true;
      setTimeout(() => {
        this.mouseOver.address = false;
      }, 2000);
    },
    mouseOutStoreName() {
      this.mouseOver.storeName = false;
    },
    mouseOutAddress() {
      this.mouseOver.address = false;
    },

    focusFirstElement() {
      this.$refs.storeCode.focus();
    },
    checkValidate() {
      var valid = true;
      var requiredField = document.getElementsByClassName("required");
      var iconExclamation = document.getElementsByClassName("icon-exclamation");
      for (var i = 0; i < requiredField.length; ++i) {
        if (requiredField[i].value == "") {
          valid = false;
          requiredField[i].style.border = "1px solid red";
          iconExclamation[i].style.display = "block";
        }
      }
      return valid;
    },
    reFocus() {
      this.focusFirstElement();
    },
    showForm() {
      this.removeValidate();
      this.$nextTick(() => this.focusFirstElement());
    },
    updateFunc() {
      console.log("update");
    },
    addFunc() {
      console.log("add");
    },
    submitFunc(e) {
      // kiểm tra dữ liệu hợp lệ
      e.preventDefault();
      var valid = this.checkValidate();
      if (valid) {
        // Xác định kiểu sử dụng modal
        if (this.submitType == "update") {
          this.updateFunc();
        } else {
          this.addFunc(e);
        }
      }
    },
  },

  mounted() {
    this.focusFirstElement();
  },
};
</script>