function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num_1_1 = getRandomInt(0, 9);
const num_1_2 = getRandomInt(1, 9);
const num_1_3 = getRandomInt(0, 9);

const num_2_1 = getRandomInt(2, 9);
const num_2_2 = getRandomInt(2, 9);

const num_3_1 = getRandomInt(6, 9);

const num_4_1 = getRandomInt(201, 999);
const num_4_2 = getRandomInt(201, 999);
const num_4_3 = getRandomInt(201, 999);
const num_4_4 = getRandomInt(201, 999);

const num_7_1 = getRandomInt(120, 200);
const num_7_2 = getRandomInt(5, 9);
const num_7_3 = getRandomInt(5, 9);
const num_7_4 = getRandomInt(50, 99);

const num_8_1 = getRandomInt(1, 9);
const num_8_2 = getRandomInt(1, 9);

const num_9_1 = getRandomInt(60, 99);
const num_9_2 = getRandomInt(4, 9);

export const questions_1 = [
  {
    id: 1,
    noi_dung: `Số gồm ${num_1_1} chục, ${num_1_2} trăm và ${num_1_3} đơn vị là:`,
    dap_an_dung: `${num_1_2}${num_1_1}${num_1_3}`,
  },
  {
    id: 2,
    noi_dung: `Số ${num_2_1} trăm lẻ (hoặc linh) ${num_2_2} được viết là?`,
    dap_an_dung: `${num_2_1}0${num_2_2}`,
  },
  {
    id: 3,
    noi_dung: `Tìm số a, biết a là tích của số nhỏ nhất có 3 chữ số khác nhau và ${num_3_1}`,
    dap_an_dung: `${102 * num_3_1}`,
  },
  {
    id: 4,
    noi_dung: `Số bé nhất trong các số ${num_4_4}, ${num_4_2}, ${num_4_1}, ${num_4_3} là:`,
    dap_an_dung: `${Math.min(num_4_1, num_4_2, num_4_3, num_4_4)}`,
  },
  {
    id: 5,
    noi_dung: "7 giờ tối là 19 giờ. Vậy 9 giờ tối là mấy giờ?",
    dap_an_dung: "21",
  },
  {
    id: 6,
    noi_dung:
      "Tính thương của số tròn chục lớn nhất có 2 chữ số và số liền trước của số chẵn nhỏ nhất có 2 chữ số?",
    dap_an_dung: "10",
  },
  {
    id: 7,
    noi_dung: `Tính: ${num_7_1} - ${num_7_2} x ${num_7_3} + ${num_7_4}`,
    dap_an_dung: `${num_7_1 - num_7_2 * num_7_3 + num_7_4}`,
  },
  {
    id: 8,
    noi_dung: `${num_8_1}m + ${num_8_2}dm = ...cm. Số cần điền vào chỗ chấm là?`,
    dap_an_dung: `${num_8_1 * 100 + num_8_2 * 10}`,
  },
  {
    id: 9,
    noi_dung: `Một cửa hàng tuần trước bán được ${num_9_1}kg gạo, tuần sau bán nhiều hơn tuần trước gấp ${num_9_2} lần . Hỏi tuần sau cửa hàng bán được bao nhiêu ki-lô-gam gạo?`,
    dap_an_dung: `${num_9_1 * num_9_2}`,
  },
  {
    id: 10,
    hinh_anh: "/questions_1_10.jpg",
    noi_dung:
      "Quan sát hình ảnh, tính tổng khối lượng 4 chiếc cân bằng bao nhiêu ki-lô-gam ?  ",
    dap_an_dung: "28",
  },
];
