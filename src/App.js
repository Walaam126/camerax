import camphoto from './cameraxphoto.jpg';

function App() {
  return (
    <div>
      <head>
      <title>CameraX</title>
      </head>
      
      <h1 style={{textAlign:"center"}}>CameraX</h1>
      <h2 style={{textAlign:"center"}}>Find your amazing items</h2>
      <img style={{display: "block",marginLeft: "650px"}} src={camphoto} alt="camphoto" />
    </div>
  );
}

export default App;
