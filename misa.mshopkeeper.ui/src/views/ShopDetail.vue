<template>
  <div class="dialog"  :class="{ isHide: isHide }">
    <div class="dialog-background"></div>
    <form class="dialog-container" @submit="submitFunc">
      <div class="dialog-header">
        <div class="left-header">
          <div class="header-title">Thêm mới cửa hàng</div>
        </div>
            <button class="d-icon icon-x" @click="this.cancelFunc"></button>
          
      </div>
      <div class="dialog-content">
        <div class="dialog-row">
          <label> Mã cửa hàng <span class="text-red">*</span> </label>
          <input ref="storeCode" type="text" class="d-input required" />
          <div class="d-icon icon-exclamation"></div>
          <span class="input-required"> Trường không được phép để trống </span>
        </div>
        <div class="dialog-row">
          <label> Tên cửa hàng <span class="text-red">*</span> </label>
          <input type="text" class="d-input required" />
          <div class="d-icon icon-exclamation"></div>
          <span class="input-required"> Trường không được phép để trống </span>
        </div>
        <div class="dialog-row">
          <label> Địa chỉ <span class="text-red">*</span> </label>
          <textarea
            name=""
            id=""
            cols="100"
            rows="3"
            class="d-text-area required"
          ></textarea>
          <div class="d-icon icon-exclamation"></div>
          <span class="input-required" style="top: 70%">
            Trường không được phép để trống
          </span>
        </div>
        <div class="dialog-row">
          <div class="dialog-sub-row">
            <label for="">Số điện thoại</label>
            <input type="number" class="d-input" />
          </div>
          <div class="dialog-sub-row">
            <label for="" class="left-label">Mã số thuế</label>
            <input type="text" class="d-input" />
          </div>
        </div>

        <div class="dialog-row">
          <div class="dialog-sub-row">
            <label for="">Quốc gia</label>
            <select name="" id="" class="d-select">
              <option value="">Việt Nam</option>
            </select>
          </div>
          <div class="dialog-sub-row"></div>
        </div>
        <div class="dialog-row">
          <div class="dialog-sub-row">
            <label for="">Tỉnh/Thành phố</label>
            <select class="d-select">
              <option value="">Nhập để tìm kiếm</option>
            </select>
          </div>
          <div class="dialog-sub-row">
            <label for="" class="left-label">Quận/Huyện</label>
            <select class="d-select">
              <option value="">Nhập để tìm kiếm</option>
            </select>
          </div>
        </div>
        <div class="dialog-row">
          <div class="dialog-sub-row">
            <label for="">Phường/Xã</label>
            <select class="d-select">
              <option value="">Nhập để tìm kiếm</option>
            </select>
          </div>
          <div class="dialog-sub-row">
            <label for="" class="left-label">Đường phố</label>
            <input type="text" class="d-input" />
          </div>
        </div>
      </div>
      <div class="dialog-footer">
        <div class="dialog-footer-left">
          <button class="button-default btn-3">
            <div
              class="d-icon icon-help"
              style="background-size: contain"
            ></div>
            <div class="d-text text-help">Trợ giúp</div>
          </button>
        </div>
        <div class="dialog-footer-right">
          <button class="button-default btn-footer btn-1">
            <div class="d-icon icon-save"></div>
            <div class="d-text text-save">Lưu</div>
          </button>
          <button class="button-default btn-footer btn-2">
            <div class="d-icon icon-plus"></div>
            <div class="d-text text-plus">Lưu và thêm mới</div>
          </button>
          <button
            style="border: none"
            class="button-default btn-footer btn-4"
            @keydown="reFocus"
            @click="this.cancelFunc"
            
          >
            <div class="d-icon footer-icon-x"></div>
            <div class="d-text">Hủy bỏ</div>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.isHide {
  display: none;
}
.dialog-header{
    position: relative;
}
.btn-footer{
    height: 35px;
    position: relative;
    padding: 7px;

}
.btn-3{
    border: none;
    background-color: #ffffff;
    color: #2b3173;
    font: 600 13px Roboto!important;
}
.icon-help{
    background: url("https://eshopvnappg2.misacdn.net/QLCH/resources/images/help.png")
    no-repeat 4px 1px;
  height: 16px !important;
  width: 16px !important;
  position: absolute;
  padding:0px !important;
  left: 7px;
  top: 8px;

}
.text-help{
    position: absolute;
    right: 7px;
    top: 8px;;
}
.btn-1{
    width: 66px;
    height: 35px;
    background-color: #2b3173;
    border:1px solid #2b3173!important;
    position: absolute;
    left: 280px;


}
.btn-2{
     border:1px solid #2b3173!important;
     width: 138px; 
     margin-right: 8px;
}
.btn-4{
    width: 90px;
    background-color: #fff;
}
.btn-4:hover{
    border: 1px solid #5fa2dd !important;
}
.text-save{
    position: absolute;
    right: 0px;
    top: 8px;
    color: #fff !important;
}
.icon-save{
 background: url('https://eshopvnappg2.misacdn.net/QLCH/resources/images/common-icon.png')
  no-repeat  -649px -118px;
  height: 40px !important;
  width: 16px !important;
  position: absolute;
  padding:0px !important;
  left: 7px;
  top: -17px;
}
.icon-plus{
    background: url('https://eshopvnappg2.misacdn.net/QLCH/resources/images/common-icon.png')
  no-repeat  -26px -127px;
  height: 40px !important;
  width: 16px !important;
  position: absolute;
  padding:0px !important;
  left: 7px;
  top: -17px;
}
.text-plus{
    font-family: Roboto!important;
    color: #fff;
    font-weight: 555;
    position: absolute;
    right: 1px;
    top:8px;
}
.footer-icon-x{
    background: url("https://eshopvnappg2.misacdn.net/QLCH/resources/images/common-icon.png")
    no-repeat -252px -127px;
  height: 45px !important;
    width: 15px !important;
    position: absolute;
    padding: 0px !important;
    left: 7px;
    top: -17px;
}


.dialog-header .icon-x {
  background: url("https://eshopvnappg2.misacdn.net/QLCH/resources/images/tools/tool-sprites.png")
    no-repeat -1127px -127px;
  height: 16px !important;
  width: 16px !important;
  position: absolute;
  padding:0px !important;
  right: 14px;
  top: 10px;
  
}
.d-icon {
  background-repeat: no-repeat;
  background-position: center;
  border: none !important;
  outline: none;
}
.dialog-background {
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 4;
}
.dialog-container {
  z-index: 5;
  width: 600px;
  height: 479px;
  background-color: white;
  position: fixed;
  top: calc((100vh - 479px) / 2);
  left: calc((100vw - 600px) / 2);
  z-index: 5;
  border-radius: 3px;
}
.dialog-container .dialog-header {
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  max-height: 41px;
  background-color: #f0f0f0;
  border-radius: 3px 3px 0 0;
}
.dialog-header .header-title {
  font-size: 16px;
  font-weight: 700;
}
.dialog-container .dialog-content {
  height: 364px;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  border: 1px solid #e1e1e1;
}
.dialog-content .dialog-row {
  width: 100%;
  display: flex;
  padding: 6px 0;
  justify-content: space-between;
}
.dialog-row label {
  white-space: nowrap;
  padding: 8px 5px 0 0;
  min-width: 100px;
  max-width: 100px;
}
.dialog-row .left-label {
  padding-left: 16px;
}
.dialog-row .d-input {
  line-height: 20px;
  width: 100%;
  min-width: 420px;
  padding: 5px 10px;
  outline: none !important;
  border-radius: 3px;
  border: 1px solid #e1e1e1;
}
.dialog-row .d-input:focus {
  border: 1px solid #2b3173;
}
.dialog-row .icon-exclamation {
  position: relative;
  left: 3px;
  top: 35%;
  min-width: 16px;
  display: none;
}
.dialog-row .icon-exclamation:hover + span {
  display: block;
}
.dialog-row .input-required {
  position: relative;
  display: none;
  top: 100%;
}
.dialog-row .d-select {
  height: 32px;
  min-width: 170px;
  max-width: 170px;
  padding: 5px 10px;
  outline: none !important;
  border-radius: 3px;
  border: 1px solid #e1e1e1;
}
.dialog-row .d-select:focus {
  border: 1px solid #2b3173;
}
.dialog-row .d-text-area {
  padding: 5px 10px 4px;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  outline: none;
  max-width: calc(100% - 126px);
  min-width: 420px;
  max-height: 69px;
  min-height: 69px;
  resize: none;
}
.dialog-row .d-text-area:focus {
  border: 1px solid #2b3173;
}
.dialog-row .dialog-sub-row {
  display: flex;
  white-space: nowrap;
}
.dialog-sub-row .d-input {
  max-width: 148px;
  min-width: 148px;
}
.dialog-footer {
  display: flex;
  align-items: center;
  height: 61px;
  padding: 0 10px;
  justify-content: space-between;
}
.dialog-footer .dialog-footer-left {
  display: flex;
  padding: 7px;
  width: 78px;
  height: 19px;
  position: relative;
}
.dialog-footer-left .btn-3:hover {
  background-color: #e5e6eb;
  border-color: #e5e6eb !important;
}
.dialog-footer .d-text {
  color: #2b3173;
  font-size: 600;
  padding: 0 5px;
}
.dialog-footer .dialog-footer-right {
  display: flex;
}
</style>
<script>
export default {
  name: "Dialog",
  props: [
    // cancelFunc: Function,
   ' isHide'
  ],
  data: function () {
    return {
      submitTypeP: "",

    };
  },
  methods: {
    // chuyển border của tất cả input, select về mặc đinh
    //xóa !
    removeValidate() {
      // xoá border
      var form = document.getElementsByTagName("form")[0].elements;
      var iconExclamation = document.getElementsByClassName("icon-exclamation");
      for (var i = 0; i < form.length; ++i) {
        form[i].style.border = "1px solid #d2d2d2";
        iconExclamation[i].style.display = "none";
      }
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
    reFocus(e) {
      if (e.keyCode == 9) {
        e.preventDefault();
        console.log("re");
        this.focusFirstElement();
      }
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
    var form = document.getElementsByTagName("form")[0];

    form.addEventListener(
      "focus",
      (event) => {
        event.target.style.border = "1px solid #2b3173";
        event.target.style.outline = "none";
      },
      true
    );
    form.addEventListener(
      "blur",
      (event) => {
        if (
          !event.target.value &&
          event.target.tagName != "BUTTON" &&
          event.target.classList.contains("required")
        )
          event.target.style.border = "1px solid red";
        else event.target.style.border = "1px solid #e1e1e1";
      },
      true
    );
  },
};
</script>