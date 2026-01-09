// hộp thoại
// alert("xin chào");

// hiển thị hộp thoại nhập liệu cho người dùng nhập giá trị
// prompt("Nhập tên của bạn");
// Về cơ bản khi nhập tên vào hộp thoại nhập liệu thì sẽ biến mất, không lưu được vào bộ nhớ
// Vậy làm sao để lưu được dữ liệu mà người dùng nhập? Từ đó sẽ chúng ta sẽ có BIẾN xử lý vấn đề này

// Biến là một ô nhớ trong bộ nhớ được đặt tên và sử dụng để lưu trữ giá trị
// 3 từ khóa khai báo là let, var, const
// var: từ khóa khai báo biến trước ES6
// let: từ khóa khai báo biến được giới thiệu từ ES6
// const: hằng số -> biến không thay đổi được giá trị sau khi đã được gán

// Khai báo biến
var myName;
let firstName;


// Khởi tạo biến (là khai kết hợp với gán giá trị)
var lastName = "Nam";
let diemToan = 10;
const PI = 3.14;

// Xuất giá trị của BIẾN
console.log(lastName);
console.log("Điểm toán của bạn: " + diemToan + " điểm");
console.log(PI);

// Thay đổi giá trị của BIẾN
lastName = "James";
console.log(lastName);
diemToan = 9;
console.log(diemToan);

// Thử gán lại biến Hằng số
PI = 3.15
console.log(PI)
