import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        <video className='container__video' src="video.mp4" muted loop autoPlay></video>
        <div className='container__text'>
          <div className='container__text-block'>We,re here </div> 
          <div className='container__empty-block'></div> 
          <div className='container__text-block'>to make healthy</div>
          <div className='container__empty-block'></div> 
          <div className='container__text-block'>living effortless, so you can </div>
          <div className='container__empty-block'></div> 
          <div className='container__text-block'>live longer and happier</div>
          <div className='container__empty-block'></div>
        </div>
      </div>
    </>
  )
}

export default App
