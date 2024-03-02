function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num_2_1 = getRandomInt(2, 9);
const num_2_2 = getRandomInt(5, 9);

const num_4_1 = getRandomInt(333, 666);

const num_5_1 = getRandomInt(333, 999);
const num_5_2 = getRandomInt(333, 999);
const num_5_3 = getRandomInt(333, 999);
const num_5_4 = getRandomInt(333, 999);

const num_6_1 = getRandomInt(2, 9);
const num_6_2 = getRandomInt(2, 9);
const num_6_3 = getRandomInt(2, 9);
const num_6_4 = getRandomInt(2, 9);

const num_8_1 = getRandomInt(2, 9);
const num_8_2 = getRandomInt(20, 90);

const num_9_1 = getRandomInt(20, 60);
const num_9_2 = getRandomInt(5, 9);

const num_10_1 = getRandomInt(1, 3);
const num_10_2 = getRandomInt(1, 3);

export const questions_3 = [
  {
    id: 1,
    noi_dung: "Số bé nhất có 3 chữ số khác nhau là:",
    dap_an_dung: "102",
  },
  {
    id: 2,
    noi_dung: `Cho dãy số ${num_2_1}; ${num_2_1 + num_2_2}; ${
      num_2_1 + num_2_2 * 2
    };  ${num_2_1 + num_2_2 * 3}; ... số tiếp theo cần điền vào chỗ chấm là:`,
    dap_an_dung: `${num_2_1 + num_2_2 * 4}`,
  },
  {
    id: 3,
    noi_dung:
      "Nếu thứ 6 tuần này là ngày 26. Thì thứ 5 tuần trước là ngày bao nhiêu:",
    dap_an_dung: "18",
  },
  {
    id: 4,
    noi_dung: `Hiệu của số chẵn lớn nhất có ba chữ số và ${num_4_1} là:`,
    dap_an_dung: `${998 - num_4_1}`,
  },
  {
    id: 5,
    noi_dung: `Cho dãy số ${num_5_1}; ${num_5_2}; ${num_5_3}; ${num_5_4} . Số lớn nhất trong dãy số là?`,
    dap_an_dung: `${Math.max(num_5_1, num_5_2, num_5_3, num_5_4)}`,
  },
  {
    id: 6,
    noi_dung: `Kết quả phép tính '${num_6_1} x ${num_6_2} + ${num_6_3} x ${num_6_4}' là:`,
    dap_an_dung: `${num_6_1 * num_6_2 + num_6_3 * num_6_4}`,
  },
  {
    id: 7,
    hinh_anh: "/questions3_7.jpg",
    noi_dung: "Độ dài đường gấp khúc MNPQK bằng bao nhiêu cen-ti-mét:",
    cac_dap_an: ["20", "25", "15", "20"],
    dap_an_dung: "20",
  },
  {
    id: 8,
    noi_dung: `${num_8_1}dm + ${num_8_2}cm = ...cm. Điền số thích hợp vào chỗ chấm.`,
    dap_an_dung: `${num_8_1 * 10 + num_8_2}`,
  },
  {
    id: 9,
    noi_dung: `Một cửa hàng buổi sáng bán được ${num_9_1}kg gạo, buổi chiều bán được nhiều hơn gấp ${num_9_2} lần buổi sáng. Hỏi cả hai buổi cửa hàng đó bán được bao nhiêu ki-lô-gam gạo?`,
    dap_an_dung: `${num_9_1 + num_9_1 * num_9_2}`,
  },
  {
    id: 10,
    noi_dung: `Mỗi ngày Điền dành ${num_10_1} giờ để học bài và ${num_10_2} giờ để xem tivi, hỏi 1 tháng(30 ngày) Điền học bài và xem tivi tổng cộng hết bao nhiêu giờ?`,

    dap_an_dung: `${(num_10_1 + num_10_2) * 30}`,
  },
];
