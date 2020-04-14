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
            html: `<div style="background-color: #f0f0f0; margin-top: 0 !important; margin-right: 0 !important; margin-bottom: 0 !important; margin-left: 0 !important; padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0;">
            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
            <table style="background-color:#fff; max-width:600px !important; width: 100%; margin-left:auto; margin-right:auto; border: 0; padding: 0; border-radius: 3px; -webkit-border-radius: 3px; -mobz-border-radius: 3px;" width="100%" cellpadding="0" cellspacing="0"
                border="0">
                <tbody>
                    <tr>
                        <td style="padding: 0; margin: 0; border: 0;vertical-align:top;">
                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 13px; margin:0; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">
                                <a target="_blank" rel="noopener noreferrer" style="text-decoration: none !important; color: #111 !important;" href="https://adx.admicro.vn">
                                    <img alt="" src="https://adx.admicro.vn/images/adx.png" style="margin:0; padding:0; border:0; outline:none; height:60px;">
                                </a>
                            </p>
        
                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                            <table style="background-color:#fff; width: 100%; margin-left:auto; margin-right:auto; border: 0; padding: 0;" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                        <td width="15" style="padding: 0; margin: 0; border: 0;vertical-align:top; overflow: hidden; width: 14px;">
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                        </td>
                                        <td style="padding: 0; margin: 0; border: 0;vertical-align:top; overflow: hidden;">
                                            <p style="padding:0;margin:0; text-align:center; font-family: 'Times New Roman', Times, serif; font-size: 16px; margin:0; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #333; overflow:hidden; text-transform: uppercase; font-weight: bold;">
                                                <span>TẠO MỚI QUẢNG CÁO</span>
                                            </p>
        
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size:10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                                            <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; margin:0; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #333; overflow:hidden;">Xin chào <strong>thinhuuvan</strong>,</p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                            <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; margin:0; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #333; overflow:hidden;">
                                                <span>Bạn vừa tạo mới 1 quảng cáo trên hệ thống Admicro Ad Exchange Ecommerce. Thông tin chi tiết như sau:</span>
                                            </p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                                            <p style="padding:0;margin:0;font-family: Arial, Helvetica, sans-serif; font-size:13px; margin:0; line-height:1.5; mso-line-height-rule: exactly; overflow:hidden;text-decoration: underline">
                                                <strong>Thông tin quảng cáo</strong>
                                            </p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1.5; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div style="width:312px;margin: auto;background-color: #efefef;border: 1px solid #ccc;padding: 5px;">
                                                            <div style="background: white;">
                                                                <p class="myclear" style="padding: 0; margin: 0">
                                                                    <a target="_blank" href="https://gotrangtri.vn/">
                                                                        <img width="100%" src="https://adi.admicro.vn/adt/adn/2020/03/gotra-85e718dee3df2c.png" alt="" style="display: block;margin: 0 auto">
                                                                    </a>
                                                                </p>
        
                                                                <div style="padding: 5px;">
                                                                    <p style="padding: 0;margin: 0;padding-top: 5px;">
                                                                        <a href="#" style="color: #333;font-size: 110%;text-decoration: none">
                                                                            gotrangtri.vn dynamic ads
                                                                        </a>
                                                                    </p>
                                                                    <p style="padding: 0;margin: 0;padding-top: 5px;">
                                                                        <span style="text-decoration: line-through;color: #999 !important;vertical-align: middle;margin-right: 5px;" >600k</span>
        
                                                                        <span style="color: #c71610;font-weight: bold;vertical-align: middle;">400k</span>
                                                                        <span style="color: #999;vertical-align: middle">(-33%)</span>
                                                                    </p>
                                                                    <p style="color: #999;padding: 0;margin: 0;padding-top: 5px;" >gotrangtri.vn dynamic ads</p>
                                                                    <p style="color: #999;padding: 0;margin: 0;padding-top: 5px;">Free Shipping</p>
        
                                                                    <p style="height: 20px; overflow: hidden; display: none;">
                                                                        <img alt="" height="12" src="">
                                                                        <span style="padding-bottom: 2px;"></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
        
                                            <p style="padding-top:20px;margin:0;font-family: Arial, Helvetica, sans-serif; font-size:13px; margin:0; line-height:1.5; mso-line-height-rule: exactly; overflow:hidden;text-decoration: underline">
                                                <strong>Thông tin chiến dịch</strong>
                                            </p>
        
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="width: 105px;vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;text-align: right;">
                                                                <strong>Tên chiến dịch</strong></p>
                                                        </td>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;padding-left: 15px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;">
                                                                gotrangtri.vn dynamic campaign </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;text-align: right;">
                                                                <strong>Ngân sách</strong></p>
                                                        </td>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;padding-left: 15px;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;">
                                                                200,000 VND Mỗi ngày </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;text-align: right;">
                                                                <strong>Thời gian chạy</strong></p>
                                                        </td>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;padding-left: 15px;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;">
                                                                01-04-2020 - 30-04-2020 </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
        
                                            <p style="padding-top:20px;margin:0;font-family: Arial, Helvetica, sans-serif; font-size:13px; margin:0; line-height:1.5; mso-line-height-rule: exactly; overflow:hidden;text-decoration: underline">
                                                <strong>Thông tin người tạo</strong>
                                            </p>
        
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="width: 105px;vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;text-align: right;">
                                                                <strong>Username: </strong></p>
                                                        </td>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;padding-left: 15px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;">
                                                                thinhluuvan </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;text-align: right;">
                                                                <strong>Họ và tên</strong></p>
                                                        </td>
                                                        <td style="vertical-align:top; margin:0;">
                                                            <p style="padding-top:5px;margin:0;padding-left: 15px;font-family: Arial, Helvetica, sans-serif;font-size:13px;margin:0;line-height:1.5;mso-line-height-rule: exactly;color: #111111;overflow:hidden;font-style: italic;">
                                                                Lưu văn thịnh </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
        
        
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                                            <p style="padding:0;margin:0; text-align:left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; margin:0; line-height:1.5; line-height: 150%; mso-line-height-rule: exactly; color: #333; overflow:hidden;">
                                                <strong>Trân trọng!</strong>
                                            </p>
                                        </td>
                                        <td width="15" style="padding: 0; margin: 0; border: 0;vertical-align:top; overflow: hidden; width: 14px;">
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
        
                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 13px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
            <table style="max-width:600px !important; width: 100%; margin-left:auto; margin-right:auto; border: 0; padding: 0;" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                        <td style="padding: 0; margin: 0; border: 0;vertical-align:top;">
        
                            <table style="width: 100%; margin-left:auto; margin-right:auto; border: 0; padding: 0;" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                        <td width="15" style="padding: 0; margin: 0; border: 0;vertical-align:top; overflow: hidden; width: 15px;">
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                        </td>
                                        <td width="90%" style="width: 90%; padding: 0; margin: 0; border: 0;vertical-align:top; overflow: hidden;">
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1.3; line-height: 130%; mso-line-height-rule: exactly; color: #797979; overflow:hidden;">
                                                Copyright © 2016 Admicro, VCCorp Corporation. All rights reserved.
                                            </p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1.3; line-height: 130%; mso-line-height-rule: exactly; color: #797979; overflow:hidden;">
                                                Tầng 20, Center Building, Hapulico Complex, </p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1.3; line-height: 130%; mso-line-height-rule: exactly; color: #797979; overflow:hidden;">số 1 Nguyễn Huy Tưởng, phường Thanh Xuân Trung, quận Thanh Xuân, Hà Nội</p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1.3; line-height: 130%; mso-line-height-rule: exactly; color: #797979; overflow:hidden;">
                                                Điện thoại: (84 24) 7300 2211 </p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1.3; line-height: 130%; mso-line-height-rule: exactly; color: #797979; overflow:hidden;">
                                                Email: <a target="_blank" rel="noopener noreferrer" href="mailto:adx_support@admicro.vn" style="color:#797979 !important;text-decoration:none !important;"><strong style="color: #797979 !important; text-decoration: none !important;">adx_support@admicro.vn</strong></a>
                                            </p>
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; margin:0; line-height:1.3; line-height: 130%; mso-line-height-rule: exactly; color: #797979; overflow:hidden;">
                                                <strong>Bạn vui lòng không reply lại email này.</strong> Nếu bạn có bất kỳ thăc mắc nào, hãy liên hệ với chúng tôi qua emai
                                                <a target="_blank" rel="noopener noreferrer" href="mailto:adx_support@admicro.vn" style="color:#696969 !important;text-decoration:none !important;"><strong style="color: #696969 !important; text-decoration: none !important;">adx_support@admicro.vn</strong></a>                                        hoặc số điện thoại
                                                <a target="_blank" rel="noopener noreferrer" href="tel:842473002211" style="color:#696969 !important;text-decoration:none !important;"><strong style="color: #696969 !important; text-decoration: none !important;">(84 24) 7300 2211</strong></a>
                                            </p>
                                        </td>
                                        <td width="15" style="padding: 0; margin: 0; border: 0;vertical-align:top; overflow: hidden; width: 15px;">
                                            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 5px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style="padding:0;margin:0; text-align:center; font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin:0; line-height:1; line-height: 100%; mso-line-height-rule: exactly; color: #111111; overflow:hidden;">&nbsp;</p>
        </div>`
        });
    }
    res.send('ok');
}