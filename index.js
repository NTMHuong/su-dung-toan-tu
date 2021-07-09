let chieuDai;
let chieuRong;
chieuDai= prompt("Nhập chiều dài");
chieuRong = prompt("Nhập chiều rộng");
let width = parseInt(chieuDai);
let height = parseInt(chieuRong);
let area = width * height;
document.write("Dien tich la: " + area);