const { createCanvas, loadImage, registerFont } = require('canvas')
const sharp = require('sharp')
const path = require('path')
const crypto = require('crypto')
const { uploadDir, backgroundDir, publicUrl } = require('../config/config')
const fs = require('fs').promises


registerFont(path.resolve(__dirname, 'fonts/AntonSC.ttf'), {
  family: 'AntonSC',
})

// Configure directories
const UPLOADS_DIR = uploadDir
const BACKGROUNDS_DIR = backgroundDir
const PUBLIC_URL = publicUrl
const FONTS_DIR = path.join(__dirname, '../../fonts')


// Define available background patterns
let BACKGROUNDS = {
  
}

fs.readdir(BACKGROUNDS_DIR).then((files) => {
  files.forEach((file) => {
    const patternName = path.basename(file, path.extname(file))
    BACKGROUNDS[patternName] = file
  })
})

const registerAvailableFonts = async () => {
  try {
    const files = await fs.readdir(FONTS_DIR)

    for (const file of files) {
      if (
        file.endsWith('.ttf') ||
        file.endsWith('.otf') ||
        file.endsWith('.woff') ||
        file.endsWith('.woff2')
      ) {
        const fontPath = path.join(FONTS_DIR, file)
        // Just remove the extension, keep the exact name
        const fontFamily = path.basename(file, path.extname(file))
       

        registerFont(fontPath, { family: fontFamily })
        
      }
    }
  } catch (error) {
    console.error('Error registering fonts:', error)
  }
}
registerAvailableFonts().then()

// Generate unique filename
const generateUniqueFilename = () => {
  const timestamp = Date.now()
  const random = crypto.randomBytes(8).toString('hex')
  return `${timestamp}-${random}.png`
}

const getRandomBackground = () => {
  const backgrounds = Object.keys(BACKGROUNDS)
  const randomIndex = Math.floor(Math.random() * backgrounds.length)
  return backgrounds[randomIndex]
}

// Function to register available fonts
// Generate image function with local font support
const generateImage = async ({
  text,
  width = 350,
  height = 480,
  textColor = '#ffffff',
  fontSize = 38,
  fontFamily = 'AntonSC',
  padding = 20,
  lineHeight = 1.5,
  backgroundPattern = 'pattern1',
  textShadowColor = 'rgba(0, 0, 0, 0.6)',
}) => {
  backgroundPattern = getRandomBackground();
  
  // await registerAvailableFonts()
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // Set initial background
  ctx.fillStyle = '#f0f0f0'
  ctx.fillRect(0, 0, width, height)

  // Load and draw background image
  try {
    

    if (!BACKGROUNDS[backgroundPattern]) {
      throw new Error(`Background pattern "${backgroundPattern}" not found`)
    }

    const backgroundPath = path.join(
      BACKGROUNDS_DIR,
      BACKGROUNDS[backgroundPattern]
    )


    await fs.access(backgroundPath)


    const backgroundImage = await loadImage(backgroundPath)

    const scale = Math.max(
      width / backgroundImage.width,
      height / backgroundImage.height
    )

    const scaledWidth = backgroundImage.width * scale
    const scaledHeight = backgroundImage.height * scale

    const x = (width - scaledWidth) / 2
    const y = (height - scaledHeight) / 2

    ctx.drawImage(backgroundImage, x, y, scaledWidth, scaledHeight)
  } catch (error) {
    console.error('Error loading background:', error)
  }

  // Configure text settings with font
  ctx.fillStyle = textColor
  ctx.font = `${fontSize}px "${fontFamily}"` // Use quotes around font family name for better compatibility
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Word wrap function
  const wrapText = (text, maxWidth) => {
    const words = text.split(' ')
    let lines = []
    let currentLine = words[0]
  
    for (let i = 1; i < words.length; i++) {
      const word = words[i]
      const lineWidth = ctx.measureText(`${currentLine} ${word}`).width
      if (lineWidth < maxWidth - padding * 2) {
        currentLine += ` ${word}`
      } else {
        lines.push(currentLine)
        currentLine = word
      }
    }
    lines.push(currentLine)
    return lines
  }

  // Draw wrapped text
  const lines = wrapText(text, width - padding * 10) // Make sure to consider padding for maxWidth
  const lineHeightPx = fontSize * lineHeight
  const totalHeight = lines.length * lineHeightPx
  const startY = (height - totalHeight) / 2

  // Add text shadow for better readability
  ctx.shadowColor = textShadowColor
  ctx.shadowBlur = 8
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY = 2

  lines.forEach((line, index) => {
    ctx.fillText(
      line,
      width / 2,
      startY + index * lineHeightPx + lineHeightPx / 2
    )
  })

  // Reset shadow
  ctx.shadowColor = 'transparent'

  // Convert to buffer and optimize with sharp
  const buffer = canvas.toBuffer('image/png')
  return sharp(buffer).png({ quality: 90 }).toBuffer()
}

const generateThumbnail = async (data) => {
  const {
    text,
    width,
    height,
    textColor,
    fontSize,
    fontFamily,
    padding,
    lineHeight,
    backgroundPattern,
    textShadowColor,
  } = data || {}

  const imageBuffer = await generateImage({
    text,
  })

  const filename = generateUniqueFilename()
  const filePath = path.join(UPLOADS_DIR, filename)
  await fs.writeFile(filePath, imageBuffer)

  const imageUrl = `${PUBLIC_URL}/images/${filename}`
  return { url: imageUrl }
}




module.exports = { generateThumbnail }
