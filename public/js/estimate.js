document.addEventListener("DOMContentLoaded", function () {
    let selectedRating = 0;

    //ฟังก์ชันเปลี่ยนสีดาวเมื่อกด
    document.querySelectorAll(".star").forEach((star) => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value"); // ดึงค่าที่กด
            document.querySelectorAll(".star").forEach((s) => {
                s.classList.toggle("active", s.getAttribute("data-value") <= selectedRating);
            });
        });
    });

    // ฟังก์ชันส่งข้อมูลไปยัง Node.js
    document.getElementById("review-form").addEventListener("submit", function (event) {
        event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

        // ดึงค่าจากฟอร์ม
        const question1 = document.getElementById("question1").value;
        const question2 = document.getElementById("question2").value;
        const question3 = document.getElementById("question3").value;
        const question4 = document.getElementById("question4").value;
        const question5 = document.getElementById("question5").value;
        const comment = document.getElementById("comment").value;

        // ส่งข้อมูลไปยัง Node.js ผ่าน API
        fetch("http://localhost:3000/register4", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                rating: selectedRating, 
                question1, 
                question2, 
                question3, 
                question4, 
                question5, 
                comment 
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // แจ้งเตือนเมื่อสำเร็จ
            document.querySelector(".success-message").style.display = "block"; // แสดงข้อความ
            document.getElementById("review-form").reset(); // ล้างค่า
            selectedRating = 0; // รีเซ็ตดาว
            document.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
        })
        .catch(error => {
            console.error("เกิดข้อผิดพลาด:", error);
            alert("ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่!");
        });
    });
});
