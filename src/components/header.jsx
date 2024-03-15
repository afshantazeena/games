export default function Header(){
    const Reload = () => {
      window.location.reload()};
    return(
  
  
       <nav className="burger navbar navbar-expand-lg bg-dark">
    <div className="container-fluid headerBar">
      <div className="logo d-flex align-items-center">
        <img src="/gamer.png" alt="logo" height={"50px"} />
        <h4 className="mx-1 text-light">CREATIVE GAMER</h4>
      </div>
          <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
      </div>
      <div >
        <h2 className="d-flex justify-content-center text-light">Flag Quiz Game</h2>
      </div>
      <div className="btn">
      <button type="button" onClick={Reload} className="btn btn-primary">Reset Game
      </button>
  
      </div>
    </div>
  </nav>
  
    );
  }
  