import profilepic from './assets/goof_wizard_sticker.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src="https://avatars.fastly.steamstatic.com/efeabab3d464161b1dbbca2221db94769b571b21_full.jpg" alt="profile picture"></img>
            {/* <img src={profilepic}></img> */}
            <h2 className='card-title'>richardrxn</h2>
            <p className='card-text'>Software Engineer and a rockclimber</p>
        </div>
    );
}

export default Card