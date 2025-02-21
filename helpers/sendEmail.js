const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: email, // Change to your recipient
//     from: 'kovbasyuk.yurij@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
const sendEmail = async (data) => {
    try {
        const msg = { ...data, from: 'kovbasyuk.yurij@gmail.com' }
        await sgMail.send(msg)
    } catch (error) {
        console.error(error)
    }
}

module.exports = sendEmail
