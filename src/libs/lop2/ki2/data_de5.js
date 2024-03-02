function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num_1_1 = getRandomInt(1, 9);

const num_2_1 = getRandomInt(1, 4);

const num_3_1 = getRandomInt(10, 20);
const num_3_2 = getRandomInt(5, 9);
const num_3_3 = getRandomInt(7, 9);

const num_4_1 = getRandomInt(777, 999);
const num_4_2 = getRandomInt(333, 444);
const num_4_3 = getRandomInt(111, 222);

const num_5_1 = getRandomInt(3, 9);
const num_5_2 = getRandomInt(20, 70);

export const questions_5 = [
  {
    id: 1,
    noi_dung: `Lúc ${num_1_1} giờ thì kim giờ chỉ số ${num_1_1}, kim phút chỉ vào số mấy?`,

    dap_an_dung: "12",
  },
  {
    id: 2,
    noi_dung: `Thương của phép chia có số bị chia bằng ${num_2_1}5, số chia bằng 5 là:`,
    dap_an_dung: `${Number(num_2_1 + "5") / 5}`,
  },
  {
    id: 3,
    noi_dung: `Tìm x biết, x + ${num_3_1} = ${num_3_2} x ${num_3_3} `,
    dap_an_dung: `${num_3_2 * num_3_3 - num_3_1}`,
  },
  {
    id: 4,
    noi_dung: `Tính ${num_4_1} - ${num_4_2} - ${num_4_3} `,
    dap_an_dung: `${num_4_1 - num_4_2 - num_4_3}`,
  },
  {
    id: 5,
    noi_dung: `${num_5_1}dm ${num_5_2}cm = ...cm. Điền số thích hợp vào chỗ chấm.`,
    dap_an_dung: `${num_5_1 * 10 + num_5_2}`,
  },
  {
    id: 6,
    noi_dung: "Nếu thứ tư tuần này là ngày 22. Thì thứ hai tuần trước là ngày:",
    cac_dap_an: ["12", "13", "14", "15"],
    dap_an_dung: "13",
  },
  {
    id: 7,
    hinh_anh: "/questions5_7.jpg",
    noi_dung: "Hình dưới đây có bao nhiêu hình tam giác?",
    dap_an_dung: "6",
  },
  {
    id: 8,
    noi_dung: `Tính hiệu của số chẵn lớn nhất có 3 chữ số giống nhau và số lẻ nhỏ nhất có 3 chữ số giống nhau.`,
    dap_an_dung: "777",
  },
  {
    id: 9,
    noi_dung:
      "Mỗi buổi sáng Điền bắt đầu đạp xe đến lớp lúc 6 giờ, buổi học bắt đầu lúc 7 giờ, Điền tới lớp lúc 6 giờ 15 phút và mất 20 phút để ăn sáng. Hỏi Điền mất bao nhiêu phút để đạp xe tới lớp?",
    dap_an_dung: "15",
  },
  {
    id: 10,
    noi_dung:
      "Sơn có 20 thẻ bài pokemon, Điền có nhiều gấp 2 lần số thẻ của Sơn, Điền cho Vy số thẻ ít hơn 4 lần số thẻ của Điền. Hỏi Vy có bao nhiêu thẻ bài pokemon?",
    dap_an_dung: "10",
  },
];
