export default function BoatVideo() {
  return (
    <video className="h-100vh w-full object-cover" autoPlay muted loop>
        <source src="src/assets/mixkit-sample-vid.mp4" type="video/mp4" />
    </video>
  )
}
