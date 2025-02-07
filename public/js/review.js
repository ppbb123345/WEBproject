async function fetchLawyers() {
    try {
        const response = await fetch('http://localhost:3000/estimate1'); // แก้ให้ตรงกับ API
        const data = await response.json();
        console.log(data)
        const tableBody = document.getElementById('table-today'); // ต้องตรงกับ id ใน HTML
        tableBody.innerHTML = '';

        data.forEach((lawyer, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${lawyer.rating}</td>
                    <td>${lawyer.question1}</td>
                    <td>${lawyer.question2}</td>
                    <td>${lawyer.question3}</td>
                    <td>${lawyer.question4}</td>
                    <td>${lawyer.question5}</td>
                    <td>${lawyer.comment}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// โหลดข้อมูลเมื่อหน้าเว็บโหลดเสร็จ
window.onload = fetchLawyers;
