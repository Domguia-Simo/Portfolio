import React from "react";

// Styling
import '../assets/styles/InterestStyles.css'

const Interests =()=>{
    return(
        <React.Fragment>
            <h2>

                <div className="interest-container" id="interests">
                    <div className="interests">
                        <div>
                           <h2> 🖥👨‍💻💻</h2>
                            Programming
                        </div>

                        <div>
                            <h2>🎮🏆😈</h2>
                            Gaming
                        </div>

                        <div>
                            <h2>⛩👺🎌</h2>
                            Animes & Mangas
                        </div>

                        <div>
                            <h2>💪🏋️‍♂️⚽</h2>
                            Sports
                        </div>

                        <div>
                            <h2>🎶🎵🖖</h2>
                            Music
                        </div>

                    </div>
                </div>

            </h2>
        </React.Fragment>
    )
}

export default Interests