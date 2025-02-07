document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault(); 

    const Fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("Tel").value;
    const message = document.getElementById("message").value;
    

    fetch('http://localhost:3000/register3', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            Fullname, email, phone, message
        }),
    })
    .then(response => response.json())  // เปลี่ยนเป็น .json() เพื่ออ่านค่าได้ถูกต้อง
    .then(data => {
        console.log('Server Response:', data);

        if (data.success) {
            document.getElementById('successModal').style.display = 'block';
        } else {
            alert('เกิดข้อผิดพลาด: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
    });

    // ปิด Modal เมื่อคลิกนอกกรอบ
    window.onclick = function (event) {
    var modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
});

