# 🤟 VSigning - Educational AI Platform for Sign Language Learning

> **Giải Nhì @ Youth-On! Hackathon 2024** (UNICEF Vietnam & VN-UK).

---

## 1. Vấn đề (Problem Statement)
Người khiếm thính tại Việt Nam gặp rào cản lớn trong giao tiếp. Việc học Ngôn ngữ Ký hiệu ở người bình thường lại khó khăn do thiếu công cụ tương tác trực quan và không có phản hồi sửa lỗi theo thời gian thực.

---

## 2. Giải pháp (Solutions)
**VSigning** là giải pháp giáo dục số mang tính nhân văn ("Tech for Good"), ứng dụng AI để tạo ra chu trình học ngôn ngữ ký hiệu chủ động, tương tác trực tiếp qua webcam và giúp người nghe bình thường dễ dàng kết nối với cộng đồng khiếm thính.

---

## 3. Cách triển khai (Implementation)

Hệ thống triển khai theo quy trình học 3 bước khép kín:

1. **Bước 1: Tiếp thu qua Flashcard Trực quan**
   - Học từ vựng qua thẻ ghi nhớ tương tác (hình ảnh, văn bản, hướng dẫn hướng chuyển động tay).
2. **Bước 2: Quan sát Video Thực hành Mẫu**
   - Xem video cử chỉ mẫu góc nhìn chuẩn, hỗ trợ chế độ quay chậm (Slow-motion) để quan sát chi tiết ngón tay.
3. **Bước 3: AI Chấm điểm & Sửa lỗi (Real-time Evaluation)**
   - Người học thực hành cử chỉ trước Webcam.
   - Mô hình AI (Hand Tracking & OpenCV) phân tích vị trí các khớp ngón tay thời gian thực.
   - Hệ thống phản hồi tức thì: Đánh giá độ chính xác (%) và chỉ rõ vị trí sai (ví dụ: *Gập ngón trỏ thấp hơn*, *Xòe bàn tay rộng hơn*) để người học sửa ngay.

---

## 👤 Tác giả & Đóng góp
- **Đỗ Trần Khánh Vinh** (*Lead Developer & Concept Creator*): Xây dựng ý tưởng sản phẩm giáo dục, thiết kế luồng Flashcard - AI, phát triển mô hình chấm điểm cử chỉ thời gian thực và tổng hợp tài liệu báo cáo.
