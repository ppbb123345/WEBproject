const express = require('express')
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const crypto = require('crypto'); 

require('dotenv').config();

const cors = require("cors");


const app = express();
app.use(express.json()); // ใช้ middleware เพื่อให้ express จัดการ JSON data
app.use(express.urlencoded({ extended: true }));  

app.use(cors());

const port = 3000

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: false })); // สำหรับข้อมูลแบบ URL-encoded
app.use(bodyParser.json()); // สำหรับ JSON
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) =>{
    res.render('Webproject')
})

app.get('/login',(req, res) =>{
    res.render('login')
})

app.get('/register',(req, res) =>{
    res.render('register')
})

app.get('/contack',(req, res) =>{
    res.render('contack')
})

app.get('/case',(req, res) =>{
    res.render('case')
})

app.get('/case1',(req, res) =>{
    res.render('case1')
})

app.get('/article',(req, res) =>{
    res.render('article')
})

app.get('/about',(req, res) =>{
    res.render('about')
})

app.get('/loginsuc',(req, res) =>{
    res.render('loginsuc')
})

app.get('/home',(req, res) =>{
    res.render('home')
})

app.get('/estimate',(req, res) =>{
    res.render('estimate')
})

app.get('/article1',(req, res) =>{
    res.render('article1')
})

app.get('/article2',(req, res) =>{
    res.render('article2')
})

app.get('/article3',(req, res) =>{
    res.render('article3')
})

app.get('/article4',(req, res) =>{
    res.render('article4')
})

app.get('/review',(req, res) =>{
    res.render('review')
})

app.get('/article5',(req, res) =>{
    res.render('article5')
})

app.get('/article6',(req, res) =>{
    res.render('article6')
})

app.get('/article7',(req, res) =>{
    res.render('article7')
})

app.get('/article8',(req, res) =>{
    res.render('article8')
})

app.get('/article9',(req, res) =>{
    res.render('article9')
})

app.get('/case2',(req, res) =>{
    res.render('case2')
})

// ตัวอย่างเชื่อมต่อฐานข้อมูล
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "database01"
// });

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database');
  });
  
  


// สมัครสมาชิก
app.post('/register1', (req, res) => {
    const { username, email, tel, Age, password, confirmPassword } = req.body;


    // ตรวจสอบว่า password และ confirmPassword ตรงกันหรือไม่
    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }

    // ตรวจสอบว่า Age เป็นตัวเลข และต้องมากกว่า 5 ปี
    if (isNaN(Age) || Age < 5) {
        return res.status(400).send("Age must be a number and at least 13 years old");
    }


    // ตรวจสอบ userName และ email ว่ามีอยู่ในฐานข้อมูลหรือไม่
    const checkUserQuery = 'SELECT * FROM user WHERE username = ? OR email = ?';
    db.query(checkUserQuery, [username, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }

        if (result.length > 0) {
            const isUsernameTaken = result.some(row => row.username === username);
            const isEmailTaken = result.some(row => row.email === email);

            if (isUsernameTaken && isEmailTaken) {
                return res.status(400).send("Username and Email already exist");
            } else if (isUsernameTaken) {
                return res.status(400).send("Username already exists");
            } else if (isEmailTaken) {
                return res.status(400).send("Email already exists");
            }
        }

        const insertUserQuery = 'INSERT INTO user (username, email, tel, age, password) VALUES (?, ?, ?, ?, ?)';
        db.query(insertUserQuery, [username, email, tel, Age, password], (err, result) => {
            if (err) {
                console.error("Insert error:", err);
                return res.status(500).send("Internal Server Error");
            }
            console.log('User registered successfully:', result);
            res.redirect('/login');
        });
    });
});


// Login
app.post('/register2', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; // เพิ่มรับค่ารหัสผ่าน
    // const md5password = crypto.createHash("md5").update(password).digest("hex");

    const sql = `SELECT * FROM user WHERE username = ?`;
    db.query(sql, [username], (err, result) => {
       if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        if (result.length === 0) {
            res.send("คุณยังไม่มีบัญชีสมาชิกโปรดลงทะเบียนเพื่อสมัครเป็นสมาชิก");
            return;
        }
        if (result[0].password !== password) {
            res.send("Invalid password. Please try again.");
            return;
        }

        //  ถ้ารหัสผ่านถูกต้อง → Redirect ไปหน้าหลัก (เช่น "/home")
        res.redirect("/home");
    });
});

// หน้าติดต่อเรา
// เส้นทาง POST สำหรับบันทึกข้อมูลจากฟอร์ม
app.post('/register3', (req, res) => {
    console.log('Data received from frontend:', req.body); // Debug ตรงนี้

    const { Fullname, email, phone, message } = req.body;

    // if (!Fullname || !email || !phone || !message) {
    //     return res.status(400).json({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    // }

    const query = 'INSERT INTO contact (Fullname, email, phone, message) VALUES (?, ?, ?, ?)';
    const values = [Fullname, email, phone, message];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' });
        }
        console.log('✅ Data inserted successfully:', result);
        res.status(200).json({ success: true, message: 'บันทึกข้อมูลสำเร็จ' });
    });
});


// แบบประเมิน

app.post("/register4", (req, res) => {
    const { rating, question1, question2, question3, question4, question5, comment } = req.body;
  
    const sql = "INSERT INTO estimate (rating, question1, question2,question3,question4,question5, comment) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [rating, question1, question2, question3, question4, question5, comment], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ message: "บันทึกข้อมูลล้มเหลว" });
      } else {
        res.status(200).json({ message: "บันทึกข้อมูลสำเร็จ!" });
      }
    });
  });

app.listen(port, () => {
    console.log(` Server is running on http://localhost:${port}` );
});


// ดึงข้อมูลมาแสดงหน้ารีวิว

app.get('/estimate1', (req, res) => {
    db.query('SELECT * FROM estimate ', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.send(results);
        }
    });
});
