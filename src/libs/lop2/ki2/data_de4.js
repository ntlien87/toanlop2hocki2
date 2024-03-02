function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num_1_1 = getRandomInt(1, 6);
const num_1_2 = getRandomInt(10, 60);

const num_2_1 = getRandomInt(10, 20);

const num_4_1 = getRandomInt(2, 9);

const num_5_1 = getRandomInt(1, 9);
const num_5_2 = getRandomInt(1, 9);
const num_5_3 = getRandomInt(1, 9);
8;
const num_8_1 = getRandomInt(6, 9);
const num_8_2 = getRandomInt(20, 30);
const num_8_3 = getRandomInt(3, 5);
const num_8_4 = getRandomInt(10, 19);

const num_9_1 = getRandomInt(5, 15);

export const questions_4 = [
  {
    id: 1,
    noi_dung: `Số điền vào chỗ chấm là: ${num_1_1} giờ ${num_1_2} phút = …… phút:`,
    dap_an_dung: `${num_1_1 * 60 + num_1_2}`,
  },
  {
    id: 2,
    noi_dung: `Bàn học của Điền dài 1m + ${num_2_1}dm. Hỏi bàn học của Điền dài bao nhiêu ra cen-ti-mét?`,
    dap_an_dung: `${100 + num_2_1 * 10}`,
  },
  {
    id: 3,
    noi_dung: "Hiệu của số lớn nhất có 3 chữ số và số lớn nhất có 2 chữ số là:",
    dap_an_dung: "900",
  },
  {
    id: 4,
    noi_dung: `Giá trị của chữ số ${num_4_1} trong 1${num_4_1}7 là:`,
    dap_an_dung: `${num_4_1}0`,
  },
  {
    id: 5,
    noi_dung: `Số gồm ${num_5_1} + ${num_5_2}0 + ${num_5_3}00 được viết thành?`,
    dap_an_dung: `${num_5_3}${num_5_2}${num_5_1}`,
  },
  {
    id: 6,
    hinh_anh: "/questions4_6.jpg",
    noi_dung: `Số cuối cùng cần điền vào hình thoi màu tím là bao nhiêu:`,
    dap_an_dung: "10",
  },
  {
    id: 7,
    hinh_anh: "/questions4_7.jpg",
    noi_dung: "Có bao nhiêu hình khối trụ trong hình dưới đây:",
    dap_an_dung: "3",
  },
  {
    id: 8,
    noi_dung: `Kết quả phép tính '${num_8_1} x ${num_8_2} - ${num_8_3} x ${num_8_4}' là:`,
    dap_an_dung: `${num_8_1 * num_8_2 - num_8_3 * num_8_4}`,
  },
  {
    id: 9,
    noi_dung: `Mỗi buổi học Điền đạp xe khoảng ${num_9_1} phút để tới trường, mỗi ngày học 2 buổi . Hỏi trong 1 tuần Điền mất bao nhiêu phút để đạp xe tới trường`,
    dap_an_dung: `${num_9_1 * 2 * 7}`,
  },
  {
    id: 10,
    noi_dung:
      "Tính tổng của số liền trước số lẻ nhỏ nhất có 3 chữ số giống nhau và số chẵn nhỏ nhất có 3 chữ số giống nhau?",
    dap_an_dung: "332",
  },
];
