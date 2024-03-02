function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num2_2_1 = getRandomInt(723, 999);
const num2_2_2 = getRandomInt(222, 444);

export const questions_1 = [
  {
    id: 1,
    noi_dung: "Số gồm 6 trăm, 7 chục và 8 đơn vị là:",
    dap_an_dung: "678",
  },
  {
    id: 2,
    noi_dung: "Số chín trăm linh năm được viết là?",
    dap_an_dung: "905",
  },
  {
    id: 3,
    noi_dung: "Tìm x, biết 36 : x = 6:",
    dap_an_dung: "6",
  },
  {
    id: 4,
    noi_dung: "Số bé nhất trong các số 834, 148, 593, 328 là:",
    dap_an_dung: "148",
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
    noi_dung: "Tính: 99 - 9 x 9 + 9",
    dap_an_dung: "27",
  },
  {
    id: 8,
    noi_dung: "1m + 5dm = ...cm. Số cần điền vào chỗ chấm là?",
    dap_an_dung: "150",
  },
  {
    id: 9,
    noi_dung:
      "Một cửa hàng tuần trước bán được 281 kg gạo, tuần sau bán nhiều hơn tuần trước gấp 3 lần . Hỏi tuần sau cửa hàng bán được bao nhiêu ki-lô-gam gạo? ",
    dap_an_dung: "843",
  },
  {
    id: 10,
    hinh_anh: "/questions_1_10.jpg",
    noi_dung:
      "Quan sát hình ảnh, tính tổng khối lượng 4 chiếc cân bằng bao nhiêu ki-lô-gam ?  ",
    dap_an_dung: "30",
  },
];

export const questions_2 = [
  {
    id: 1,
    noi_dung: "Số lẻ liền trước của số lớn nhất có ba chữ số là:",
    dap_an_dung: "997",
  },
  {
    id: 2,
    noi_dung: `Hiệu của ${num2_2_1} và ${num2_2_2} là:`,
    dap_an_dung: `${num2_2_1 - num2_2_2}`,
  },
  {
    id: 3,
    hinh_anh: "/questions2_3.webp",
    noi_dung: "Độ dài của đường gấp khúc MNPQ bằng bao nhiêu cen-ti-mét:",
    dap_an_dung: "9",
  },
  {
    id: 4,
    noi_dung: "Số gồm 3 trăm, 0 chục và 9 đơn vị được viết là:",
    cac_dap_an: ["39", "390", "309", "903"],
    dap_an_dung: "309",
  },
  {
    id: 5,
    noi_dung: "Chọn câu trả lời thích hợp: Cột cờ trường em cao khoảng?",
    cac_dap_an: ["5km", "5dm", "5cm", "5m"],
    dap_an_dung: "5m",
  },
  {
    id: 6,
    noi_dung:
      "Ba bạn Sơn, Điền và Vy đến lớp học vẽ. Giờ bắt đầu vào lớp là 7 giờ 30 phút. Hôm đó Sơn đến lúc 7 giờ 15 phút, Điền đến lúc 8 giờ và Vy đến lúc 7 giờ 30 phút. Hỏi bạn nào đến lớp sớm trước giờ vào học?",
    cac_dap_an: ["Bạn Sơn", "Bạn Điền", "Bạn Vy", "Bạn Bo"],
    dap_an_dung: "Bạn Sơn",
  },
  {
    id: 7,
    hinh_anh: "/questions2_7.png",
    noi_dung: "Có mấy hình tứ giác trong hình bên?",
    cac_dap_an: ["1 hình", "2 hình", "3 hình", "4 hình"],
    dap_an_dung: "3 hình",
  },
  {
    id: 8,
    noi_dung: "Kết quả phép tính '99 - 9 x 8' là: ",
    cac_dap_an: ["720", "72", "17", "27"],
    dap_an_dung: "27",
  },
  {
    id: 9,
    noi_dung:
      "Khu vườn A có 90 cây vải, khu vườn B có số cây vải ít hơn 9 lần khu vườn A. Hỏi khu vườn B có bao nhiêu cây vải? ",
    cac_dap_an: ["81 cây vải", "30 cây vải", "9 cây vải", "10 cây vải"],
    dap_an_dung: "10 cây vải",
  },
  {
    id: 10,
    hinh_anh: "/questions2_10.jpg",
    noi_dung: "Quan sát hình ảnh và chọn đáp án đúng ?  ",
    cac_dap_an: [
      "Con mèo nặng: 3kg, Quả dưa nặng: 3kg",
      "Con mèo nặng: 4kg, Quả dưa nặng: 3kg",
      "Con mèo nặng: 4kg, Quả dưa nặng: 4kg",
      "Con mèo nặng: 4kg, Quả dưa nặng: 2kg",
    ],
    dap_an_dung: "Con mèo nặng: 4kg, Quả dưa nặng: 2kg",
  },
];

export const questions_3 = [
  {
    id: 1,
    noi_dung: "Số bé nhất có 3 chữ số khác nhau là:",
    cac_dap_an: ["111", "101", "100", "102"],
    dap_an_dung: "102",
  },
  {
    id: 2,
    noi_dung:
      "Cho dãy số: 2; 4; 8; 16; ... số tiếp theo cần điền vào chỗ chấm là:",
    cac_dap_an: ["22", "26", "32", "36"],
    dap_an_dung: "32",
  },
  {
    id: 3,
    noi_dung:
      "Nếu thứ 6 tuần này là ngày 26. Thì thứ 5 tuần trước là ngày bao nhiêu:",
    cac_dap_an: ["17", "18", "19", "20"],
    dap_an_dung: "18",
  },
  {
    id: 4,
    noi_dung: "Số lẻ nhỏ nhất có ba chữ số là:",
    cac_dap_an: ["999", "101", "100", "111"],
    dap_an_dung: "101",
  },
  {
    id: 5,
    noi_dung:
      "Cho dãy số '427; 242; 369; 898; 654' Thứ tự các số từ bé đến lớn là?",
    cac_dap_an: [
      "427; 242; 369; 898; 654",
      "242; 427; 369; 898; 654",
      "242; 369; 427; 898; 654",
      "242; 369; 427; 654; 898",
    ],
    dap_an_dung: "242; 369; 427; 654; 898",
  },
  {
    id: 6,
    noi_dung: "Kết quả phép tính '6 x 7 + 9 x 8' là:",
    cac_dap_an: ["408", "114", "308", "214"],
    dap_an_dung: "114",
  },
  {
    id: 7,
    hinh_anh: "/questions3_7.jpg",
    noi_dung: "Độ dài đường gấp khúc MNPQK là:",
    cac_dap_an: ["20", "25", "25cm", "20cm"],
    dap_an_dung: "20cm",
  },
  {
    id: 8,
    noi_dung: "Kết quả phép tính '99 - 9 x 8' là: ",
    cac_dap_an: ["720", "72", "17", "27"],
    dap_an_dung: "27",
  },
  {
    id: 9,
    noi_dung:
      "Một cửa hàng buổi sáng bán được 56kg gạo, buổi chiều bán được nhiều hơn gấp 3 lần buổi sáng. Hỏi cả hai buổi cửa hàng đó bán được bao nhiêu ki-lô-gam gạo? ",
    cac_dap_an: ["59kg", "168kg", "224kg", "115kg"],
    dap_an_dung: "224kg",
  },
  {
    id: 10,
    hinh_anh: "/questions3_10.jpg",
    noi_dung:
      "Nam và Mai mỗi bạn vào một khu vườn chơi trò bịt mắt hái hoa và hai bạn quy định chỉ được đi thẳng để hái hoa. Hãy chọn câu phù hợp với hình ảnh.  ",
    cac_dap_an: [
      "Mai chắc chắn hái được bông hoa màu đỏ",
      "Mai không thể hái được bông hoa màu vàng",
      "Mai chắc chắn hái được bông hoa màu vàng",
      "Nam không thể hái bông hoa màu đỏ",
    ],
    dap_an_dung: "Mai chắc chắn hái được bông hoa màu vàng",
  },
];

export const questions_4 = [
  {
    id: 1,
    noi_dung: "Số điền vào chỗ chấm là: 1 giờ = …… phút:",
    cac_dap_an: ["50", "60", "6", "10"],
    dap_an_dung: "60",
  },
  {
    id: 2,
    noi_dung:
      "Chiều dài của cái bàn khoảng 15……. Tên đơn vị cần điền vào chỗ chấm là:",
    cac_dap_an: ["m", "km", "cm", "dm"],
    dap_an_dung: "dm",
  },
  {
    id: 3,
    noi_dung: "Hiệu của số lớn nhất có 3 chữ số và số lớn nhất có 2 chữ số là:",
    cac_dap_an: ["90", "99", "900", "9"],
    dap_an_dung: "900",
  },
  {
    id: 4,
    noi_dung: "Giá trị của chữ số 8 trong 287 là:",
    cac_dap_an: ["8", "80", "800", "87"],
    dap_an_dung: "80",
  },
  {
    id: 5,
    noi_dung: "Số 789 được viết theo đáp án nào sao đây?",
    cac_dap_an: [
      "789 = 7 + 8 + 9",
      "789 = 70 + 8 + 9",
      "789 = 700 + 8 + 90",
      "789 = 700 + 80 + 9",
    ],
    dap_an_dung: "789 = 700 + 80 + 9",
  },
  {
    id: 6,
    hinh_anh: "/questions4_6.jpg",
    noi_dung: "Thứ tự các số cần điền vào các khồi hình từ trái sang phải là:",
    cac_dap_an: [
      "12; 4; 16; 8",
      "14; 6; 24; 12",
      "13; 5; 20; 10",
      "13; 6; 24; 10",
    ],
    dap_an_dung: "13; 5; 20; 10",
  },
  {
    id: 7,
    hinh_anh: "/questions4_7.jpg",
    noi_dung: "Có bao nhiêu hình khối trụ trong hình dưới đây:",
    cac_dap_an: ["2 hình", "3 hình", "4 hình", "5 hình"],
    dap_an_dung: "3 hình",
  },
  {
    id: 8,
    noi_dung: "Kết quả phép tính '5 x 8 - 32 : 8' là: ",
    cac_dap_an: ["1", "10", "30", "36"],
    dap_an_dung: "36",
  },
  {
    id: 9,
    noi_dung:
      "Mỗi buổi học Điền đạp xe khoảng 5 phút để tới trường, mỗi ngày học 2 buổi . Hỏi trong 1 tuần Điền mất bao nhiêu thời gian để đạp xe tới trường",
    cac_dap_an: ["35 phút", "70 phút", "10 phút", "60 phút"],
    dap_an_dung: "70 phút",
  },
  {
    id: 10,
    noi_dung:
      "Tính tổng của số liền trước số lẻ nhỏ nhất có 3 chữ số giống nhau và số chẵn nhỏ nhất có 3 chữ số giống nhau?",
    cac_dap_an: ["332", "131", "232", "432"],
    dap_an_dung: "332",
  },
];

export const questions_5 = [
  {
    id: 1,
    noi_dung: "Lúc 8 giờ thì:",
    cac_dap_an: [
      "Kim giờ chỉ vào số 8, kim phút chỉ vào số 12",
      "Kim giờ chỉ vào số 12, kim phút chỉ vào số 8",
      "Kim giờ chỉ vào số 8, kim phút chỉ vào số 3",
      " Kim giờ chỉ vào số 8, kim phút chỉ vào số 6",
    ],
    dap_an_dung: "Kim giờ chỉ vào số 8, kim phút chỉ vào số 12",
  },
  {
    id: 2,
    noi_dung: "Thương của phép chia có số bị chia bằng 56, số chia bằng 8 là:",
    cac_dap_an: ["6", "7", "8", "9"],
    dap_an_dung: "7",
  },
  {
    id: 3,
    noi_dung:
      "Chọn dấu thích hợp để điền vào chỗ chấm: '2 x 3 + 5 …. 2 + 3 x 5'",
    cac_dap_an: ["=", ">", "<", "?"],
    dap_an_dung: "<",
  },
  {
    id: 4,
    noi_dung: "Phép nhân nào dưới đây ứng với tổng 2 + 2 + 2 + 2 + 2?",
    cac_dap_an: ["2 x 2 x 2 x 2 x 2", "2 x 5", "2 x 2", "2 x 4"],
    dap_an_dung: "2 x 5",
  },
  {
    id: 5,
    noi_dung: "Trong phép tính '2 x 5 = 10'. Đáp án nào dưới đây là đúng?",
    cac_dap_an: [
      "2 và 5 là các sô hạng, 10 là tông",
      "2 là số bị chia, 5 là sô chia, 10 là thương",
      "2 là số bị trừ, 5 là sô trừ, 10 là hiệu",
      "2 và 5 là các thừa số, 10 là tích",
    ],
    dap_an_dung: "2 và 5 là các thừa số, 10 là tích",
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
    noi_dung: "Hình dưới đây có?",
    cac_dap_an: [
      "2 hình tứ giác và 6 hình tam giác",
      "1 hình tứ giác và 5 hình tam giác",
      "2 hình tứ giác và 5 hình tam giác",
      "2 hình tứ giác và 6 hình tam giác",
    ],
    dap_an_dung: "2 hình tứ giác và 6 hình tam giác",
  },
  {
    id: 8,
    noi_dung: "Số gồm 6 trăm, 7 chục và 5 đơn vị được viết là: ",
    cac_dap_an: ["765", "657", "675", "567"],
    dap_an_dung: "675",
  },
  {
    id: 9,
    noi_dung:
      "Mỗi buổi sáng Điền bắt đầu đạp xe đến lớp lúc 6 giờ, buổi học bắt đầu lúc 7 giờ, Điền tới lớp lúc 6 giờ 15 phút và mất 20 phút để ăn sáng. Hỏi Điền mất bao nhiêu phút để đạp xe tới lớp?",
    cac_dap_an: ["60 phút", "15 phút", "45 phút", "30 phút"],
    dap_an_dung: "15 phút",
  },
  {
    id: 10,
    noi_dung:
      "Sơn có 20 thẻ bài pokemon, Điền có nhiều gấp 2 lần số thẻ của Sơn, Điền cho Vy số thẻ ít hơn 4 lần số thẻ của Điền. Hỏi Vy có bao nhiêu thẻ bài pokemon?",
    cac_dap_an: ["4 thẻ", "40 thẻ", "10 thẻ", "20 thẻ"],
    dap_an_dung: "10 thẻ",
  },
];

export const questions_6 = [
  {
    id: 1,
    noi_dung:
      "Cho dãy sô '562; 625; 652'.Hãy chọn đáp án Sai trong các đáp án dưới đây:",
    cac_dap_an: ["562 là số bé nhất", "652 > 562", "625 là số lẻ", "652 < 625"],
    dap_an_dung: "652 < 625",
  },
  {
    id: 2,
    noi_dung:
      "Trong các số 265; 279; 257; 297; 281 số lớn hơn 279 là:(chọn đáp án chính xác nhất)",
    cac_dap_an: ["281", "281 và 265", "297 và 265", "281 và 297"],
    dap_an_dung: "281 và 297",
  },
  {
    id: 3,
    noi_dung: "Chọn đáp án đúng trong các đáp án dưới đây",
    cac_dap_an: [
      "38m + 27m = 65dm",
      "16cm : 4cm = 12cm",
      "1m = 10dm",
      "1000m = 1km",
    ],
    dap_an_dung: "1000m = 1km",
  },
  {
    id: 4,
    noi_dung:
      "Cho dãy số: '6; 12; 18; ……; ……; 36; ……; 48; 54; ……'. Thứ tự các số cần điền vào chỗ chấm từ trái sang phải là?",
    cac_dap_an: [
      "24; 35; 42; 60",
      "24; 32; 42; 60",
      "24; 30; 42; 60",
      "21; 30; 42; 60",
    ],
    dap_an_dung: "24; 30; 42; 60",
  },
  {
    id: 5,
    hinh_anh: "/questions6_5.png",
    noi_dung: "Sô cần điền vào các hình từ trái sang phải là?",
    cac_dap_an: [
      "13, 4, 24, 8",
      "13, 5, 24, 8",
      "13, 4, 25, 8",
      "13, 4, 24, 10",
    ],
    dap_an_dung: "13, 4, 24, 8",
  },
  {
    id: 6,
    noi_dung: "Tìm x, biết: x : 4 = 8",
    cac_dap_an: ["x = 21", "x = 24", "x = 36", "x = 32"],
    dap_an_dung: "x = 32",
  },
  {
    id: 7,
    noi_dung: "Tìm 2 số a và b biết: 'a + b = 10 và a x b = 16'",
    cac_dap_an: [
      "a = 3, b = 7",
      "a = 4, b = 6",
      "a = 5, b = 5",
      "a = 2, b = 8",
    ],
    dap_an_dung: "a = 2, b = 8",
  },
  {
    id: 8,
    hinh_anh: "/questions6_8.jpg",
    noi_dung: "Hình dưới có?  ",
    cac_dap_an: [
      "1 hình tứ giác và 3 hình tam giác",
      "1 hình tứ giác và 4 hình tam giác",
      "2 hình tứ giác và 4 hình tam giác",
      "2 hình tứ giác và 3 hình tam giác",
    ],
    dap_an_dung: "2 hình tứ giác và 4 hình tam giác",
  },
  {
    id: 9,
    noi_dung:
      "Tính hiệu của số tròn chục liền trước số lớn nhất có 3 chữ số và số tròn chục liền sau số nhỏ nhất có 3 chữ số:",
    cac_dap_an: ["899", "890", "900", "880"],
    dap_an_dung: "880",
  },
  {
    id: 10,
    hinh_anh: "/questions6_10.jpg",
    noi_dung: "Quan sát hình bên dưới và chọn đáp án đúng",
    cac_dap_an: [
      "Cô bướm đến chỗ bông hoa màu đỏ",
      "Chị ong đến chỗ bông hoa màu vàng",
      "Anh kiến đến chỗ chiếc bánh",
      "Bác ốc sên đến chỗ quả táo",
    ],
    dap_an_dung: "Anh kiến đến chỗ chiếc bánh",
  },
];
