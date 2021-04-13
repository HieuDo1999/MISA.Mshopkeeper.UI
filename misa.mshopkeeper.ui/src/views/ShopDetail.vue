<template>
  <div>
    <div class="dialog">
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
            <span class="input-required">
              Trường không được phép để trống
            </span>
          </div>
          <div class="dialog-row">
            <label> Tên cửa hàng <span class="text-red">*</span> </label>
            <input type="text" class="d-input required" />
            <div class="d-icon icon-exclamation"></div>
            <span class="input-required">
              Trường không được phép để trống
            </span>
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
              @click="cancel"
            >
              <div class="d-icon footer-icon-x"></div>
              <div class="d-text">Hủy bỏ</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
@import "../styles/pages/shopdetail.css";
</style>
<script>
export default {
  name: "Dialog",
  props: [],
  data: function () {
    return {
      submitTypeP: "",
    };
  },
  methods: {
    cancel() {
      this.$emit("closeDialog", true);
    },
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