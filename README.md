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
  
  + Đặt mật khẩu cho `root user` là `123456`

## Tạo cơ sở dữ liệu
Tệp `query.sql` mô tả cơ sở dữ liệu mẫu.  
* Cách 1: Chạy file `query.sql` bằng command line:
  + Thêm PATH tới mysql:  
    - Start -> run -> gõ `SystemPropertiesAdvanced` -> `Environment Variable` -> Chọn mục `Path` trong `System Variable` 
    - Chọn `New`, chèn thêm đường dẫn tới thư mục `bin` của `MySQL`, ví dụ: `C:\Program Files\MySQL\MySQL Server 8.0\bin`  
  + Mở `cmd`, `cd` tới thư mục BookStore.  
  + Đăng nhập vào MySQL bằng lệnh `mysql -u root -p`, rồi nhập mật khẩu cho root (vd: `123456`)  
  + Thực thi script `query.sql` bằng câu lệnh `source query.sql`
* Cách 2: Chạy file `query.sql` bằng MySQL Workbench.

## Cách chạy ứng dụng
0. Cài đặt môi trường theo hướng dẫn ở trên
1. Clone repository về máy  
2. Cài đặt các module phụ thuộc  
Mở `cmd` lên, `cd` tới thư mục `BookStore`, chạy lệnh `npm install`
3. Chạy lệnh `npm start` để chạy server
4. Mở trình duyệt, truy cập địa chỉ http://localhost:3000 để vào trang chủ