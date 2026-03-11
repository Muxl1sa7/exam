const nodemailer = require("nodemailer");

async function sendMessage(code, email) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "durdiboyevamuxlisa7@gmail.com",
                pass: process.env.GOOGLE_PASS
            }
        });


        await transporter.sendMail({
            subject: "exam5",
            from: "durdiboyevamuxlisa7@gmail.com",
            to: email,
            text: `
            <!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<title>Biz bilan bog‘laning</title>

<style>
body{
  margin:0;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:sans-serif;
  background: linear-gradient(135deg,#667eea,#764ba2);
}

.card{
  background:white;
  padding:35px;
  border-radius:16px;
  width:360px;
  box-shadow:0 15px 40px rgba(0,0,0,0.25);
}

h2{
  text-align:center;
  margin-bottom:5px;
}

p{
  text-align:center;
  color:#666;
  margin-bottom:20px;
}

input,textarea{
  width:100%;
  padding:12px;
  margin-top:10px;
  border-radius:8px;
  border:1px solid #ddd;
}

button{
  margin-top:15px;
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#667eea;
  color:white;
  font-size:16px;
  cursor:pointer;
}

button:hover{
  background:#5563d1;
}
</style>
</head>

<body>

<div class="card">

<h2>💌 Biz bilan bog‘laning</h2>
<p>Sizning fikringiz biz uchun juda muhim. Bir necha so‘z yozib qoldiring.</p>

<form>

<input type="text" placeholder="😊 Ismingizni yozing">
<input type="email" placeholder="📧 Email manzilingiz">

<textarea rows="4" placeholder="✍️ Qalbingizdagi fikr yoki xabaringizni yozing..."></textarea>

<button>🚀 Xabarni yuborish</button>

</form>

</div>

</body>
</html>
            `
        })
    } catch (error) {
        throw CustomErrorhandler.InternalServer(error.message);
    }
}

module.exports = sendMessage;