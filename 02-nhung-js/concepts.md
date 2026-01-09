Đoạn mã JS phải đặt trước thẻ đóng của body là </body>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bài 4 - thêm js vào trong file html</title>
</head>
<body>
    <!-- Các thành phần HTML khác -->
    <script>
        // mã js
        alert("xin chào, đây là 1 thông báo từ javascript");
    </script>
</body>
</html>
```

Có 2 cách chèn JS vào file HTML


1. Internal (nội bộ): Là sẽ code trực tiếp mã JavaScript vào trong file HTML bằng thẻ <script></script>

   Ví dụ: `<script> alert("Đây là mã Internal"); </script>`
2. External (Bên ngoài): Là cách bạn viết mã JavaScript ở một file riêng (đuôi `.js`), sau đó dùng thẻ `<script>` để gọi file đó vào HTML.

     Ví dụ:  `<script src="./main"></script>`


