import './style/index.less'

// import Food from './moduls/Food'
import ScorePanel from './moduls/ScorePanel'


const scorePanel =new ScorePanel(100,2);

for (let i = 0; i <200; i++) {
    scorePanel.addScore();
}
