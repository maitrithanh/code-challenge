import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      Login: "Login",
      Category: "Category",
      Product: "Product",
      Username: "Username",
      Password: "Password",
      ViewMore: "View More",
      Register: "Register",
      ChainStores: "Chain stores",
      MyStore: "My store",
      ForgotPass: "Forgot password",
      TotalProduct: "Total product",
      Profile: "Profile",
      SaveProfile: "Save profile",
      ShopName: "Shop name",
      CreateProduct: "Create product",
      CreateShop: "Create shop",
      Active: "Active",
      DeActive: "De active",
      NoProductsYet: "No products yet!",
      WantToSearch: "What do you want to search?",
    },
  },
  vi: {
    translation: {
      Welcome: "Chào mừng",
      Login: "Đăng nhập",
      Category: "Danh mục",
      Product: "Sản phẩm",
      Username: "Tài khoản",
      Password: "Mật khẩu",
      ViewMore: "Xem thêm",
      Register: "Đăng ký",
      ChainStores: "Chỗi cửa hàng",
      MyStore: "Cửa hàng của tôi",
      ForgotPass: "Quên mật khẩu",
      TotalProduct: "Tổng số sản phẩm",
      Profile: "Hồ sơ",
      SaveProfile: "Lưu hồ sơ",
      ShopName: "Tên shop",
      CreateProduct: "Tạo sản phẩm",
      CreateShop: "Tạo shop",
      Active: "Hoạt động",
      DeActive: "Huỷ kích hoạt",
      NoProductsYet: "Chưa có sản phẩm nào!",
      WantToSearch: "Bạn muốn tìm gì?",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
