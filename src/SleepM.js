import "./SleepM.css";
import {Link} from 'react-router-dom'
import Srectangle71 from "./assets/Srectangle71.svg";
import Sframe17 from "./assets/Sframe17.svg";
import SmaterialSymbolsarro from "./assets/SmaterialSymbolsarro.svg";
import Sgroup30 from "./assets/Sgroup30.svg";
const SleepM = () => {
  return (
    <div className="mac-book-pro-16-7s">
      <div className="android-large-4s">
        <div className="laura-vinck-hyu-76-lo-qs">
          <div className="rectangle-64s">
          <Link to="sback"><img className="material-symbolsarros" alt="" src={SmaterialSymbolsarro} /></Link>
            <span className="sleeps">SLEEP</span>
          </div>
          <img className="group-30s" alt=""src={Sgroup30} />
          <span className="stories-to-fall-asles">
            Stories to fall asleep to :)
          </span>
          <div className="flex-containers">
            <div className="group-6s">
              <div className="rectangle-69s">
                <div className="rectangle-71s">24 min</div>
                <span className="blue-golds">Blue Gold</span>
              </div>
            </div>
            <div className="group-7s">
              <div className="rectangle-69-1s">
                <div className="rectangle-71-1s">
                  <span className="num-37-mins">37 min</span>
                </div>
                <span className="night-falls">Night Fall</span>
              </div>
            </div>
            <div className="rectangle-69-2s">
              <div className="flex-container-1s">
                <span className="num-40-mins">40 min</span>
                <img className="rectangle-71-2s" alt=""src={Srectangle71} />
              </div>
              <span className="easter-islands">Easter Island</span>
            </div>
            <div className="rectangle-69-3s">
              <div className="rectangle-71-3s">32 min</div>
              <span className="dream-with-mes">Dream With Me</span>
            </div>
            <div className="rectangle-69-4s">
              <div className="rectangle-71-4s">18 min</div>
              <span className="fantasy-worlds">Fantasy World</span>
            </div>
          </div>
          <div className="flex-container-2s">
            <div className="flex-container-3s">
              <div className="cat-absolute-containers">
                <span className="timers">TIMER</span>
              </div>
              <img className="frame-17s" alt="" src={Sframe17} />
            </div>
            <div className="rectangle-10s">
              <span className="sleep-sounds">SLEEP SOUND</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default SleepM;
