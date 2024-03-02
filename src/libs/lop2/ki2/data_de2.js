function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num_2_1 = getRandomInt(723, 999);
const num_2_2 = getRandomInt(222, 444);

const num_4_1 = getRandomInt(1, 9);
const num_4_2 = getRandomInt(0, 9);
const num_4_3 = getRandomInt(1, 9);

const num_6_1 = getRandomInt(5, 9);

const num_8_1 = getRandomInt(333, 555);
const num_8_2 = getRandomInt(20, 30);
const num_8_3 = getRandomInt(5, 9);

const num_9_1 = getRandomInt(3, 4);

export const questions_2 = [
  {
    id: 1,
    noi_dung: "Số lẻ liền trước của số lớn nhất có ba chữ số là:",
    dap_an_dung: "997",
  },
  {
    id: 2,
    noi_dung: `Hiệu của ${num_2_1} và ${num_2_2} là:`,
    dap_an_dung: `${num_2_1 - num_2_2}`,
  },
  {
    id: 3,
    hinh_anh: "/questions2_3.webp",
    noi_dung: "Độ dài của đường gấp khúc MNPQ bằng bao nhiêu cen-ti-mét:",
    dap_an_dung: "9",
  },
  {
    id: 4,
    noi_dung: `Số gồm ${num_4_1} đơn vị , ${num_4_2} chục và ${num_4_3} trăm được viết là:`,
    cac_dap_an: ["39", "390", "309", "903"],
    dap_an_dung: `${num_4_3}${num_4_2}${num_4_1}`,
  },
  {
    id: 5,
    noi_dung:
      "Chọn câu trả lời thích hợp: Cột cờ trường em cao khoảng: 10... .Điền đơn vị thích hợp vào chỗ chấm ",
    dap_an_dung: "m",
  },
  {
    id: 6,
    noi_dung: `Tìm x biết, x là tích của số chẵn lớn nhất có 2 chữ số và ${num_6_1}`,
    dap_an_dung: `${num_6_1 * 98}`,
  },
  {
    id: 7,
    hinh_anh: "/questions2_7.png",
    noi_dung: "Có mấy hình tứ giác trong hình bên?",
    dap_an_dung: "3",
  },
  {
    id: 8,
    noi_dung: `Kết quả phép tính ${num_8_1} - ${num_8_2} x ${num_8_3} là: `,
    dap_an_dung: `${num_8_1 - num_8_2 * num_8_3}`,
  },
  {
    id: 9,
    noi_dung: `Khu vườn A có 24 cây vải, khu vườn B có số cây vải ít hơn ${num_9_1} lần khu vườn A. Hỏi khu vườn B có bao nhiêu cây vải? `,
    dap_an_dung: `${24 / num_9_1}`,
  },
  {
    id: 10,
    hinh_anh: "/questions2_10.jpg",
    noi_dung:
      "Quan sát hình ảnh và cho biết con mèo nặng gấp mấy lần quả dưa? Điền đáp án vào ô trống",
    dap_an_dung: "2",
  },
];
