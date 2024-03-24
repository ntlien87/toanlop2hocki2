function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num_1_1 = getRandomInt(5, 9);
const num_1_2 = getRandomInt(6, 9);

const num_2_1 = getRandomInt(6, 9);
const num_2_2 = getRandomInt(6, 9);

const num_3_1 = getRandomInt(3, 9);
const num_3_2 = getRandomInt(20, 50);

const num_4_1 = getRandomInt(5, 9);
const num_4_2 = getRandomInt(15, 20);
const num_4_3 = getRandomInt(5, 7);
const num_4_4 = getRandomInt(3, 9);

const num_6_arr = [40, 48, 56, 64, 72];
const random_num_6 = num_6_arr[Math.floor(Math.random() * num_6_arr.length)];

const num_7_1 = getRandomInt(20, 30)

const num_10_1 = getRandomInt(6, 9);
const num_10_2 = getRandomInt(5, 9);
const num_10_3 = getRandomInt(2, 4);

export const questions_6 = [
  {
    id: 1,
    noi_dung: `Cho dãy số ${num_1_1}; ${num_1_1 + num_1_2}; ${
      num_1_1 + num_1_2 * 2
    }; ...; ${num_1_1 + num_1_2 * 4} .Số thích hợp điền vào chỗ chấm là?`,
    dap_an_dung: `${num_1_1 + num_1_2 * 3}`,
  },
  {
    id: 2,
    noi_dung: `Cho dãy số ${num_2_1 + num_2_2 * 4}; ${
      num_2_1 + num_2_2 * 3
    }; ...; ${
      num_2_1 + num_2_2
    }; ${num_2_1} .Số thích hợp cần điền vào chỗ chấm là?`,
    dap_an_dung: `${num_2_1 + num_2_2 * 2}`,
  },
  {
    id: 3,
    noi_dung: `${num_3_1}giờ ${num_3_2}phút = ...phút. Điền số thích hợp vào chỗ chấm:`,
    dap_an_dung: `${num_3_1 * 60 + num_3_2}`,
  },
  {
    id: 4,
    noi_dung: `Tính: ${num_4_1} x ${num_4_2} - ${num_4_3} x ${num_4_4}`,
    dap_an_dung: `${num_4_1 * num_4_2 - num_4_3 * num_4_4}`,
  },
  {
    id: 5,
    hinh_anh: "/questions6_5.png",
    noi_dung: "Sô cần điền vào hình ngũ giác bên phải là?",
    dap_an_dung: "8",
  },
  {
    id: 6,
    noi_dung: `Tìm x, biết: x : 8 = ${random_num_6 / 8}, x = ?`,
    dap_an_dung: `${random_num_6}`,
  },
  {
    id: 7,
    noi_dung: `Thứ năm tuần này là ngày ${num_7_1}. Vậy thứ 2 tuần trước là ngày bao nhiêu?`,
    dap_an_dung: `${num_7_1 - 10}`,
  },
  {
    id: 8,
    hinh_anh: "/questions6_8.jpg",
    noi_dung: "Hình dưới có bao nhiêu hình tam giác?  ",
    dap_an_dung: "4",
  },
  {
    id: 9,
    noi_dung:
      "Tính hiệu của số tròn chục liền trước số lớn nhất có 3 chữ số và số tròn chục liền sau số nhỏ nhất có 3 chữ số:",
    dap_an_dung: "880",
  },
  {
    id: 10,
    noi_dung: `Sơn có ${num_10_1} viên bi, Điền có nhiều hơn gấp ${num_10_2} lần số bi của Sơn, Na có nhiều hơn gấp ${num_10_3} lần số bi của Điền. Hỏi Na có bao nhiêu viên bi?`,
    dap_an_dung: `${num_10_1 * num_10_2 * num_10_3}`,
  },
];
