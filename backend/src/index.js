import 'dotenv/config'
import app from './config/app.js'

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`eit-server running on http://localhost:${PORT}`)
})
