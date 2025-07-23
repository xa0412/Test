import profilepic from './assets/Logo1.png' 
function Card() {
    return(
        <div className="card">
            <img src={profilepic} alt="profile picture"></img>
            <h2>Utopia</h2>
            <p>Hi, I am a CS student!</p>
        </div>
    );
}

export default Card