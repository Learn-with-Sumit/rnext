const { publicUrl } = require("../config/config");

const generateThumbnail = () => {
  const images = ["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
  const randomIndex = Math.floor(Math.random() * images.length)
  const randomImage = images[randomIndex];

  return publicUrl + "/images/" + randomImage;
}
module.exports = { generateThumbnail }
