# Website bán sách BookStore

## Công nghệ sử dụng
* NodeJS  
* Express JS  
* MySQL

## Cài đặt môi trường
* Cài đặt NodeJS
Vào [trang download của nodejs](https://nodejs.org/en/download/), tải xuống và cài đặt.  
* Cài đặt MySQL
Truy cập https://dev.mysql.com/downloads/, chọn `MySQL Installer for Windows`, tải xuống và cài đặt.  
Lưu ý: 
  + Trong quá trình cài đặt, chọn `Authentication Method` là `Use Legacy Authentication Method (Retain MySQL 5.x Compatibility)`  
  ![image](https://helpex.vn/upload/2019/4/18/ar/09-19-29-862-25907044-c01d-49a5-95b5-0b4b9c1fd78f.jpg)
  
  + Đặt mật khẩu cho `root user` là `123456`, hoặc chỉnh sửa thông tin xác thực kết nối database trong `database/sequelize.js`

## Cách chạy ứng dụng
0. Cài đặt môi trường theo hướng dẫn ở trên
1. Clone repository về máy  
2. Cài đặt các module phụ thuộc  
Mở `cmd` lên, `cd` tới thư mục `BookStore`, chạy lệnh `npm install`
3. Chạy lệnh `npm start` để chạy server
4. Mở trình duyệt, truy cập địa chỉ http://localhost:3000 để vào trang chủ
5. Truy cập http://localhost:3000/admin để vào trang admin