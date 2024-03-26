import PhotoCard from "./PhotoCard"

const PhotoList = ({photos}) => {
  return (
    <div className="img-grid">
        {
            photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))
        }
    </div>
  )
}

export default PhotoList