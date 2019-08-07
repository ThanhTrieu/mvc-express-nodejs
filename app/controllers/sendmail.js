"use strict";
const nodemailer = require("nodemailer");

exports.index = (req, res) => {
    const data = {
        title: 'Send-mail',
    }  
    res.render('sendmail/index', data);
}

exports.sendEmail = async (req, res) => {
    if(req.method == "POST"){
        let email = req.body.email;
        let subject = req.body.subject;
        let content = req.body.content;

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        //let testAccount = await nodemailer.createTestAccount();
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'trieuntgvt3h@gmail.com', // generated ethereal user
                pass: 'trieunt123' // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'trieuntgvt3h@gmail.com', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: content, // plain text body
            html: `<!doctype html>
            <html>
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1"/>
            <title>Remarketing Fashion</title>
            </head>
            <body>
                <table style="background-color:#fbfbfb; border-width: 3px; border-style: solid; border-color: #cdcdcd; width:754px; margin-left:auto; margin-right:auto; margin-top: 0; margin-bottom: 0; padding: 0;" width="754" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td width="754" style="width:754px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                        <img src="https://adx.admicro.vn/images/email/remarketing/fashion/the_fashion.jpg" width="754" height="138" style="margin:0; padding:0; border:0; outline:none; height:138px; width:754px;">
                        
                        <table style="border:0; width:754px; height: 90px; margin: 0;padding: 0;" width="754" height="90" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="12" height="90" style="width:12px; height: 90px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="730" height="90" style="width:730px; height: 90px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top; background-color:#f47b6b;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                    <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 1.5625rem; margin:0; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                        <strong>
                                        Ngành Thời Trang<br>
                                        Làm sao để thương hiệu tìm được chỗ đứng?
                                        </strong>
                                    </p>
                                </td>
                                
                                <td style="width:12px; height: 90px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 17px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <table style="background-color:#fbfbfb; border:0; width:754px; height: 198px; margin: 0;padding: 0;" width="754" height="198" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="40" height="198" style="width:40px; height: 198px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="674" height="198" style="width:674px; height: 198px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <table style="background-color:#fde062; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/ban-hang-bg.jpg'); background-position: left top; background-repeat: no-repeat; width:674px; height:198px; border: 0;  margin: 0;padding: 0;" width="674" height="198" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="24" height="198" style="width:24px; height: 198px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="420" height="198" style="width:420px; height: 198px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 55px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 0.9375rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">
                                                    Thời trang là thị trường có độ cạnh tranh khốc liệt.<br/>
                                                    Vậy làm thế nào để thương hiệu của bạn tìm được chỗ<br/>
                                                    đứng trong tâm trí khách hàng và <strong style=" font-size: 0.9375rem;">BÁN ĐƯỢC HÀNG?</strong>
                                                </p>
                                                
                                            </td>
                                            
                                            <td width="220" height="198" style="width:220px; height: 198px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                
                                <td width="40" height="198" style="width:40px; height: 198px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <p style="padding:0;margin:0; text-align:center; font-style: italic; font-family: Arial, Helvetica, sans-serif; font-size: 1.25rem; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">
                            <strong>Dưới đây là các bước cơ bản nhưng cực kỳ quan trọng</strong>
                        </p>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <table style="border:0; width:754px; height: 544px; margin: 0;padding: 0;" width="754" height="544" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="41" height="544" style="width:41px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="385" height="544" style="width:385px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <table style="background-color:#829fac; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/toi-uu-hinh-anh-quang-cao.jpg'); background-position: left top; background-repeat: no-repeat; width:385px; height:296px; border: 0;  margin: 0;padding: 0;" width="385" height="296" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="20" height="296" style="width:20px; height: 296px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="355" height="296" style="width:355px; height: 296px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 18px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong>1. Tối ưu hình ảnh quảng cáo:</strong>
                                                </p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 0.9375rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    Với đặc thù của ngành thời trang, hình ảnh càng bắt<br>
                                                    mắt chăm chút thì càng dễ tạo sức thu hút cũng như <br>
                                                    dấu ấn với khách hàng. Tăng tỉ lệ khách hàng tìm hiểu<br/>
                                                    về sản phẩm cũng như thương hiệu. Từ đó gia tăng <br/>quyết định mua hàng.
                                                </p>
                                                
                                            </td>
                                            
                                            <td width="10" height="296" style="width:10px; height: 296px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 18px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                    
                                    <table style="background-color:#f6bc67; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/toi-uu-landing-page.jpg'); background-position: left top; background-repeat: no-repeat; width:385px; height:228px; border: 0;  margin: 0;padding: 0;" width="385" height="228" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="20" height="228" style="width:20px; height: 228px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="355" height="228" style="width:355px; height: 228px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 35px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong>2. Tối ưu landing page:</strong>
                                                </p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 0.9375rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    Hình ảnh được đầu tư, giao diện <br>
                                                    thân thiện, thao tác dễ dàng cho<br> việc đặt hàng,<br>
                                                    đảm bảo website load nhanh và tối<br>
                                                    ưu trên mọi nền tảng.
                                                </p>
                                                
                                            </td>
                                            
                                            <td width="10" height="228" style="width:10px; height: 228px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                
                                <td width="14" height="544" style="width:14px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="273" height="544" style="width:14px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <table style="background-color:#f9aea4; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/khach-hang-tiem-nang.jpg'); background-position: left top; background-repeat: no-repeat; width:273px; height:544px; border: 0;  margin: 0;padding: 0;" width="273" height="544" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="30" height="544" style="width:30px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="220" height="544" style="width:220px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 50px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 50px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 50px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong>3. Nhắm chọn lại đối tượng <br>khách hàng tiềm năng:</strong>
                                                </p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 0.9375rem; margin:0; line-height:1.8; line-height: 180%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    Tiếp cận thường xuyên và <br>
                                                    nhắc lại liên tục đến đối tượng<br>
                                                    khách hàng đã từng có tương <br>
                                                    tác với sản phẩm giúp gia tăng<br>
                                                    nhận diện thương hiệu với<br>
                                                    khách hàng cũng như tỉ lệ chốt<br>
                                                    sales đến mức tối đa.
                                                </p>
                                                
                                            </td>
                                            
                                            <td width="23" height="544" style="width:23px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                
                                <td width="41" height="544" style="width:41px; height: 544px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <p style="padding:0;margin:0; text-align:center; font-style: italic; font-family: Arial, Helvetica, sans-serif; font-size: 1.25rem; line-height:1.4; line-height: 140%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">
                            <strong>AdMicro xin giới thiệu giải pháp quảng cáo được thiết kế<br>
                            riêng nhằm tối ưu hóa hiệu quả cho ngành Thời Trang</strong>
                        </p>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <table style="background-color:#fbfbfb; border:0; width:754px; height: 412px; margin: 0;padding: 0;" width="754" height="412" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="119" height="412" style="width:119px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="156" height="412" style="width:156px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 95px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                    
                                    <table style="background-color:#f6c06f; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/target-theo-vung-mien.png'); background-position: left top; background-repeat: no-repeat; width:156px; height:317px; border: 0;  margin: 0;padding: 0;" width="156" height="317" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="20" height="317" style="width:20px; height: 317px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="116" height="317" style="width:116px; height: 317px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 50px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1.0625rem; margin:0; line-height:2.5; line-height: 250%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong style="text-decoration: underline;font-size: 1.125rem; font-family: Arial, Helvetica, sans-serif;">Target</strong> theo<br>
                                                    vùng miền, độ tuổi, nhân khẩu học, hành vi online
                                                </p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 45px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="20" height="317" style="width:20px; height: 317px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                
                                <td width="12" height="412" style="width:12px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="191" height="412" style="width:191px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <table style="background-color:#f5887a; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/he-thong-website.png'); background-position: left top; background-repeat: no-repeat; width:191px; height:371px; border: 0;  margin: 0;padding: 0;" width="191" height="371" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="30" height="371" style="width:30px; height: 371px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="131" height="371" style="width:131px; height: 371px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 30px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1.0625rem; margin:0; line-height:2.2; line-height: 220%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    Quảng cáo banner trên hệ thống
                                                    <strong style="text-decoration: underline;font-size: 1.125rem; font-family: Arial, Helvetica, sans-serif;">200 website</strong>
                                                    uy tín và traffic hàng đầu
                                                    (Dantri,
                                                    Afamily, <br/>Kênh 14...)
                                                </p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 30px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="30" height="371" style="width:30px; height: 371px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 41px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="9" height="412" style="width:9px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="166" height="412" style="width:166px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 61px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                    
                                    <table style="background-color:#829fac; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/cong-nghe-retargeting.png'); background-position: left top; background-repeat: no-repeat; width:166px; height:345px; border: 0;  margin: 0;padding: 0;" width="166" height="345" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="20" height="345" style="width:20px; height: 345px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="126" height="345" style="width:126px; height: 345px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 35px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1.0625rem; margin:0; line-height:2.5; line-height: 250%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong style="text-decoration: underline;font-size: 1.125rem; font-family: Arial, Helvetica, sans-serif; color: #ffffff;">Công nghệ Retargeting</strong>,
                                                    bám đuổi theo mọi khách hàng mục tiêu tiềm năng
                                                </p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 35px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                            
                                            <td width="20" height="345" style="width:20px; height: 345px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 6px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                
                                <td width="101" height="412" style="width:101px; height: 412px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <p style="padding:0;margin:0; text-align:center; font-style: italic; font-family: Arial, Helvetica, sans-serif; font-size: 1.25rem; line-height:1.4; line-height: 140%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">
                            <strong>Đăng ký nhận thông tin và tư vấn miễn phí ngay tại đây<br>
                            để nhận được gói ưu đãi cực hấp dẫn!</strong>
                        </p>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        
                        <table style="width:754px; height:52x; border: 0; margin: 0;padding: 0;" width="754" height="52" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="221" height="52" style="width:221px; height: 52px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
        
                                <td width="312" height="52" style="width:312px; height: 52px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top; background-color: #f68e81;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 16px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                    
                                    <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 1.375rem; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                        <a href="https://remarketing.admicro.vn" target="_blank" style="outline:none; padding:0; margin:0; text-decoration:none; color: #ffffff !important;">
                                            <strong>TƯ VẤN NGAY</strong>
                                        </a>
                                    </p>
                                    
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
        
                                <td width="221" height="52" style="width:221px; height: 52px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                            </tr>
                        </table>
                        
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                        <table style="width:754px; height:280x; border: 0; margin: 0;padding: 0;" width="754" height="52" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td width="23" height="280" style="width:23px; height: 280px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                                <td width="708" height="280" style="width:708px; height: 280px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                
                                    <table style="background-color:#f6998d; background-image: url('https://adx.admicro.vn/images/email/remarketing/fashion/lien-he-adx.jpg'); background-position: left top; background-repeat: no-repeat; width:708px; height:280px; border: 0;  margin: 0;padding: 0;" width="708" height="280" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="20" height="280" style="width:20px; height: 280px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
        
                                            <td width="341" height="280" style="width:341px; height: 280px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
        
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
        
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1.5rem; margin:0; line-height:1.5; line-height:150%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong>Liên hệ</strong>
                                                </p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1rem; margin:0; line-height:1.5; line-height:150%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <strong>
                                                        Giải pháp cho Ngành Thời Trang<br/>
                                                        Email: <a style="text-decoration: none !important; color: #ffffff !important;" href="mailto:adx_support@admicro.vn">adx_support@admicro.vn</a>
                                                        <br>
                                                        Hotline: <a style="text-decoration: none !important; color: #ffffff !important;" href="tel:0963134498">096 313 4498</a>
                                                    </strong>
                                                </p>
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 1rem; margin:0; line-height:1.5; line-height:150%; mso-line-height-rule: exactly; color: #ffffff; overflow:hidden;">
                                                    <a href="https://www.facebook.com/quangcao.admarket/" target="_blank" title="facebook" style="outline:none; padding:0; margin:0; text-decoration:none; color: #f6998d !important;">
                                                        <img alt="" src="https://adx.admicro.vn/images/email/remarketing/fashion/facebook.png" style="margin:0; padding:0; border:0; outline:none; height:50px; width:50px;" width="50" height="50">
                                                    </a>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a style="text-decoration: none !important; color: #f6998d !important;" href="mailto:adx_support@admicro.vn">
                                                        <img alt="" src="https://adx.admicro.vn/images/email/remarketing/fashion/gmail.png" style="margin:0; padding:0; border:0; outline:none; height:50px; width:50px;" width="50" height="50">
                                                    </a>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a style="text-decoration: none !important; color: #f6998d !important;" href="tel:0963134498">
                                                        <img alt="" src="https://adx.admicro.vn/images/email/remarketing/fashion/phone.png" width="50" height="50" style="margin:0; padding:0; border:0; outline:none; height:50px; width:50px;">
                                                    </a>
                                                </p>
                                                
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
        
                                            <td width="347" height="280" style="width:347px; height: 280px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                                <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td width="23" height="280" style="width:23px; height: 280px; overflow:hidden; border:0; padding:0; margin:0;vertical-align:top;">
                                    <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                </td>
                            </tr>
                        </table>
                        <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 20px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        
                    </td>
                </tr>
            </table>
            </body>
            </html>
            `
        });
    }
    res.send('ok');
}