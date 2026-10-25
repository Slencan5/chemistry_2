# 🩺 BÁC SĨ VẬT LIỆU POLYMER - CẤP CỨU CA BỆNH KEO DÁN
> **Interactive Web Simulation Game phục vụ bài thuyết trình môn Hóa học 12 (Chuyên đề: Polymer & Keo Dán Tổng Hợp).**  
> **Phong cách: Phòng Cấp Cứu Vật Liệu Hiện Đại • Mô phỏng cơ lý 2-3s trực quan • 100% Phù hợp thuyết trình máy chiếu.**

---

## 🌟 Trải Nghiệm Khác Biệt & Độc Đáo

Dự án được thiết kế chuyên biệt để làm công cụ tương tác trực quan cho bài thuyết trình Hóa học:

1. **🚫 Giao diện Chuẩn Single-Page (100vh Fullscreen):**
   * **Tuyệt đối không có Header, Nav, Banner hay Footer.**
   * Không gian hiển thị trọn vẹn dành riêng cho bài test mô phỏng và câu hỏi.
2. **⚗️ Background Chủ Đề Hóa Học Đậm Nét:**
   * Cấu trúc mạng lục giác (Hexagon Grid), các họa tiết liên kết phân tử và hạt nguyên tử chuyển động lơ lửng.
   * Tông màu tối công nghệ cao với độ tương phản cực lớn giúp nội dung câu hỏi nổi bật rõ nét.
3. **🎬 Mô Phỏng Vật Lý Tương Tác 2 Giây (Fast Slow-Motion & Telemetry):**
   Khi người chơi chọn một loại keo dán, hệ thống đưa vào phòng kiểm chuẩn đo lường thực tế với telemetry áp lực, biến dạng và thời gian theo thời gian thực cho **cả 8 ca bệnh cấp cứu**:
   * **Ca 1 (Săm xe đạp):** Đinh nhọn đâm miếng vá săm (Đàn hồi nảy bật vs Giòn xì hơi).
   * **Ca 2 (500 bàn MDF):** Quả tạ 100KG đập mặt bàn dăm gỗ (Chịu lực siêu rẻ vs Gãy sập/Phá sản).
   * **Ca 3 (Bàn trà pha lê):** Xả nước tràn bề mặt (Hiệu ứng lá sen trượt giọt vs Thủy phân phồng rộp).
   * **Ca 4 (Giày sneaker):** Máy cơ khí bẻ gập đế 90° 1000 lần (Dẻo dai đàn hồi vs Nứt toác bung đế).
   * **Ca 5 (Vách ép tiêu âm):** Piston thủy lực 25 tấn nén dăm gỗ (Phẳng lỳ kiên cố vs Mềm oặt/Cạn quỹ).
   * **Ca 6 (Bình gốm sứ cổ):** Kéo giằng quai bình 10KG (Bám dính vô cơ siêu bền vs Trượt tuột rơi vỡ).
   * **Ca 7 (Xuồng hơi cao su):** Bơm khí nén 0.5 bar ngâm nước (Hàn lạnh kín khí 100% vs Thủy phân chìm xuồng).
   * **Ca 8 (Hổ phách bọ cánh cứng):** Chiếu quang học laser qua khối đúc (Pha lê trong vắt vs Đục ngầu/Cháy mẫu).
4. **🖼️ Tích Hợp Assets Thực Tế Khung Vuông Sắc Nét (Square Frame & Face Focus):**
   * Khi **THẮNG**: Tự động gọi hình ảnh `<img src="ac.jpg" alt="Correct" />` trong khung vuông tỉ lệ 1:1, viền phát sáng xanh ngọc và phát âm thanh tick.
   * Khi **THUA**: Tự động gọi hình ảnh `<img src="wa.jpg" alt="Wrong" />` trong khung vuông tỉ lệ 1:1 to rõ, **căn chỉnh tiêu cự hiển thị rõ nét khuôn mặt người trong ảnh**, kích hoạt hiệu ứng **CSS Shake rung lắc toàn màn hình** và phát âm thanh nổ.
5. **🛡️ Thiết Kế Chống Tràn Viền Tuyệt Đối (Zero Overflow Architecture):**
   * Toàn bộ các màn hình (Intro, Ca bệnh, Thử nghiệm mô phỏng, và 3 Modal popup) đều tự động co giãn thích ứng với chiều cao màn hình (`clamp()`, `vh`, `flex-shrink`).
   * Không bao giờ bị thanh cuộn dọc ngoài ý muốn, không bị cắt cụt nút bấm trên máy chiếu lớp học hay màn hình laptop 768p/800p/1080p.

---

## 🗂️ Cấu Trúc Thư Mục

```text
project hoá học để thuyết trình/
├── index.html       # Sân khấu cấp cứu, 8 ca bệnh, khung mô phỏng vật lý & modal kết quả
├── style.css        # Background hóa học, hiệu ứng 8 bài test mô phỏng & căn chỉnh khuôn mặt
├── script.js        # Engine 8 ca bệnh, telemetry 2s test, Web Audio & phím tắt MC
├── KEY_ANSWER.md    # Cẩm nang MC, đáp án chi tiết & phân tích hóa học 8 ca bệnh
├── README.md        # Giới thiệu & Hướng dẫn sử dụng
├── ac.jpg           # Ảnh hiển thị khi chọn đúng (Thắng)
├── wa.jpg           # Ảnh hiển thị khi chọn sai (Thua)
├── tick.mp3         # File âm thanh khi đúng
└── boom.mp3         # File âm thanh tiếng nổ khi sai
```

---

## 🚀 Hướng Dẫn Sử Dụng Trên Lớp Học

1. Nhấp đúp chuột vào file **`index.html`** để mở trên trình duyệt (Google Chrome, Safari, Microsoft Edge, Firefox).
2. Nhấn phím **F11** trên bàn phím (hoặc chọn chế độ toàn màn hình trên trình duyệt).
3. **Phím tắt điều khiển trường quay cực nhanh cho người thuyết trình (MC):**
   * Phím **`1`**: Kê đơn **Nhựa Vá Săm**
   * Phím **`2`**: Kê đơn **Keo Ure-Formaldehit (UF)**
   * Phím **`3`**: Kê đơn **Keo Epoxy (Keo AB)**
   * Phím **`Space`** hoặc **`Enter`**: Chuyển nhanh sang ca bệnh tiếp theo (khi thắng) hoặc Chơi lại (khi thua).

---

## 📜 Giấy Phép
Dự án được xây dựng phục vụ mục đích giáo dục phi thương mại (MIT License).
