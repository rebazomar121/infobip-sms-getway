const sendSms = require("./sendSms")

const handleSendSMS = async () => {
  const config = {
    domain: "you domain here",
    apiKey: "your api key",
  }
  await sendSms(config, recipient, `message here`, "your company name").then(
    (result) => console.log(result)
  )
}
handleSendSMS()
