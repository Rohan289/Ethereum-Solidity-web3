const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
  const encytptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  )
  console.log(encytptedJsonKey)
  fs.writeFileSync("./.encryptKey.json", encytptedJsonKey)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
