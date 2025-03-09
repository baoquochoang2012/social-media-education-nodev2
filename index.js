require('dotenv').config()
const express = require('express');
const { StreamChat } = require('stream-chat');
const cors = require('cors');
const app = express();
const nodemailer = require("nodemailer");
// no cors needed for this example
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const transporter = nodemailer.createTransport({
  service: "Gmail", // hoặc dịch vụ email khác
  auth: {
    user: process.env.NAMEMAIL, // email của bạn
    pass: process.env.PASSMAIL, // mật khẩu email của bạn
  },
});

app.use(cors());


const port = 3000;

// Replace with your actual API key and secret
const apiKey = '5dtq65792mxr';
const apiSecret = 'ayabvrzh6p7nfnrn67pnu6e93zb6bvdjhusz557u7mmrqyhcb3mxxapmg5254m4n';

const serverSideClient = StreamChat.getInstance(apiKey, apiSecret);

app.get('/generate-token', (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    return res.status(400).send('User ID is required');
  }
  const token = serverSideClient.createToken(userId);
  res.send({ token });
});

app.post("/sendMail", async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.NAMEMAIL,
    to,
    subject,
    html: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('success');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error account email:", process.env.NAMEMAIL);
    return res.status(500).json({ success: false, error: error.message });
  }
});
// POST endpoint for sending email
app.post("/invite-user", async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "socialmedia@gmail.com", // Email sender
    to, // Recipient
    subject, // Email subject
    text, // Email body
  };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log("Error sending email:", error);
  //   }
  //   console.log("Email sent successfully:", info.response);
  // });
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error account email:", "emb1910059@student.ctu.edu.vn");
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/sendMails", async (req, res) => {
  const { recipients, subject, text } = req.body;

  if (!Array.isArray(recipients) || recipients.length === 0) {
    return res.status(400).json({ success: false, error: "Invalid recipients list" });
  }

  const mailOptions = {
    from: process.env.NAMEMAIL,
    to: recipients.join(", "), // Join all recipients with a comma
    subject,
    html: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to multiple recipients");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
   connect AbortController "Minh Khoa"Khoa
   Device Access Access: 2 
   IP IP:  11.13326517503337, 106.57591626363813Uể

   User : 0398299631 

   DataTransfer : 
   " location share" To 000129
   " sợ hết pin"To 000129
   "anh đi gấp nên chỉ kịp áo quần và điện thoại"To 000129
   "Em đâu rồi"To 000129
   "10km nữa tới nơi"To 000129
   " Anh gặp con Trang có việc "To 000013
   " Để xem"To 00012234
   " Anh cũng mệt lắm"To 00012313
   " Chặn nó rồi"To 0000098
   "Tuần sau đi nha" To 000007778
   " cơ địa yếu chứ không phải cố tình" To 00003123
   " Áp lực lắm" To 013300443
   " Anh cẩn thận nhé" From 000013
" Anh với nó không còn gì nữa " To 002849939
" Đọc tn xong tự nhiên như thế " To 002849939
" em muốn gặp nhau mấy giờ " To 00000382992
" Con Trang nó hối anh công khai " To 0000394992
" Nó làm phiền anh thôi " To 0000389399
" nhưng anh dứt khoát rồi " To 0000389399
" Lên nhà nhưng ko được gì " To 0000003829
" Anh từ đầu không muốn v " To 00399300
