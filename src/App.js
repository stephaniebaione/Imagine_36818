import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';

const arrayOfColors = ["#92374D", "#654597", "#E6C79C", "#EF798A", "#6A8D73", "#F79D65", "#E1DD8F", "#E36397", "#00A878", "#00B2CA", "#9A031E"];

const poem = [
  [
    {key: 1, word: 'Imagine', offset: {x: -140, y: -339}, img: require('./images/Imagine.png')},
    {key: 2, word: "there's", offset: {x: -90, y: -373}, img: require('./images/theres.png')},
    {key: 3, word: "no", offset: {x: -162, y: -310}, img: require('./images/no.png')},
    {key: 4, word: "countries", offset: {x: -66, y: -276}, img: require('./images/countries.png')},
  ],
  [
    {key: 5, word: "it isn't", offset: {x: -437, y: -339}, img: require('./images/it_isnt.png')},
    {key: 6, word: "hard to do", offset: {x: -91, y: -374}, img: require('./images/hard_to_do.png')},
  ],
  [
    {key: 7, word: 'Nothing to', offset: {x: 28, y: -333}, img: require('./images/Nothing_to.png')},
    {key: 8, word: "kill", offset: {x: 88, y: -366}, img: require('./images/kill.png')},
    {key: 9, word: "or", offset: {x: 115, y: -223}, img: require('./images/or.png')},
    {key: 10, word: "die", offset: {x: 45, y: -144}, img: require('./images/die.png')},
    {key: 11, word: "for", offset: {x: -141, y: -296}, img: require('./images/for.png')},
  ],
  [
    {key: 12, word: 'and no', offset: {x: -114, y: -281}, img: require('./images/and_no.png')},
    {key: 13, word: "religion,", offset: {x: -167, y: -288}, img: require('./images/religion.PNG')},
    {key: 14, word: "too", offset: {x: -114, y: -255}, img: require('./images/too.PNG')},
  ],
  [
    {key: 15, word: 'Imagine', offset: {x: 89, y: -114}, img: require('./images/Imagine(3).png')},
    {key: 16, word: "all the people", offset: {x: 123, y: -116}, img: require('./images/all_the_people.png')},
  ],
  [
    {key: 17, word: "living", offset: {x: -424, y: -82}, img: require('./images/living.png')},
    {key: 18, word: "life in", offset: {x: 190, y: -230}, img: require('./images/life_in.png')},
    {key: 19, word: "peace", offset: {x: 20, y: -49}, img: require('./images/peace.png')},
  ],
  [
    {key: 20, word: "", offset: {x: -186, y: 4}},
  ],

  [
    {key: 21, word: 'You', offset: {x: 25, y: -113}, img: require('./images/you.PNG')},
    {key: 22, word: 'may', offset: {x: 55, y: -128}, img: require('./images/may.PNG')},
    {key: 23, word: "say I'm", offset: {x: -186, y: -73}, img: require('./images/sayim.PNG')},
    {key: 24, word: "a", offset: {x: -52, y: -227}, img: require('./images/a_.PNG')},
    {key: 25, word: 'dreamer', offset: {x: 364, y: -145}, img: require('./images/dreamers.PNG')},
  ],
  [
    {key: 26, word: "but I'm not", offset: {x: -391, y: -13}, img: require('./images/butimnot.PNG')},
    {key: 27, word: 'the only one', offset: {x: 195, y: -68}, img: require('./images/theonlyone.PNG')},
  ],
  [
    {key: 28, word: "I hope", offset: {x: -363, y: 71}, img: require('./images/ihope.PNG')},
    {key: 29, word: 'someday', offset: {x: 134, y: 74}, img: require('./images/someday.PNG'), val: 1},
    {key: 30, word: 'you will', offset: {x: -196, y: 30}, img: require('./images/youwill.PNG')},
    {key: 31, word: 'join us', offset: {x: 164, y: -40}, img: require('./images/joinus.PNG')},
  ],
  [
    {key: 32, word: "and the world", offset: {x: 96, y: 3}, img: require('./images/and_the_world.PNG')},
    {key: 33, word: 'will be as', offset: {x: -19, y: 23}, img: require('./images/willbeas.PNG')},
    {key: 34, word: 'one', offset: {x: 432, y: -72}, img: require('./images/one.PNG')},
  ],

  [
    {key: 35, word: "", offset: {x: -186, y: 4}},
  ],

  [
    {key: 36, word: 'Imagine', offset: {x: 92, y: 278}, img: require('./images/Imagine(1).png'), remain: true},
    {key: 37, word: "no", offset: {x: 226, y: 172}, img: require('./images/no(1).png')},
    {key: 38, word: "possessions", offset: {x: -215, y: 126}, img: require('./images/possession.png')},
  ],
  [
    {key: 39, word: "I wonder if", offset: {x: 102, y: 300}, img: require('./images/i_wonder_if.png')},
    {key: 40, word: "you can", offset: {x: -217, y: 299}, img: require('./images/you_can.png')},
  ],
  [
    {key: 41, word: 'no', offset: {x: -165, y: 179}, img: require('./images/no(2).png')},
    {key: 42, word: "need for", offset: {x: -42, y: 251}, img: require('./images/need_for.png')},
    {key: 43, word: "greed", offset: {x: 274, y: 166}, img: require('./images/greed(2).PNG')},
    {key: 44, word: "or", offset: {x: 295, y: 318}, img: require('./images/or(2).png')},
    {key: 45, word: "hunger", offset: {x: 140, y: 265}, img: require('./images/hunger.png')},
  ],
  [
    {key: 46, word: 'a', offset: {x: -291, y: 133}, img: require('./images/a_.PNG')},
    {key: 47, word: "brotherhood", offset: {x: -40, y: 372}, img: require('./images/brotherhood.png')},
    {key: 48, word: "of man", offset: {x: -5, y: 344}, img: require('./images/of_man.png')},
  ],
  [
    {key: 49, word: 'Imagine', offset: {x: -38, y: 378}, img: require('./images/Imagine(4).png')},
    {key: 50, word: "all the", offset: {x: -9, y: 282}, img: require('./images/all_the(2).png')},
    {key: 51, word: "people", offset: {x: 141, y: 412}, img: require('./images/people.png')},
  ],
  [
    {key: 52, word: "sharing", offset: {x: -316, y: 452}, img: require('./images/sharing.png')},
    {key: 53, word: "all the", offset: {x: 17, y: 530}, img: require('./images/all_the.png')},
    {key: 54, word: "world", offset: {x: 253, y: 383}, img: require('./images/world.png')},
  ],
];

//make an array of random colors
function getRandomColor() {
  return arrayOfColors[Math.floor(Math.random()*arrayOfColors.length)];
}

const WordImage = ({ word, hover, hide, mouseEnter, mouseLeave, remain }) => (
  <span className={classNames("word", word.key, {hover: hover, hide: hide, remain: remain})} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    <span style={{
      color: hover ? getRandomColor() : "#000",
    }}>{word.word}</span>
    <img src={word.img} style={{
      top: "calc(50% + " + word.offset.y + "px)",
      left: 'calc(50% + ' + word.offset.x + 'px)',
    }} alt=""/>
  </span>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWord: null,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="poem">
          {poem.map((line, lIndex) =>
            <p key={lIndex}>{line.map((word, wIndex) => 
              <WordImage 
                word={word}
                remain={word.remain}
                hover={word.word + word.key ===this.state.selectedWord}
                hide={this.state.selectedWord !== null && word.word !== this.state.selectedWord}
                mouseEnter={() => this.setState({ selectedWord: word.word + word.key })}
                mouseLeave={() => this.setState({ selectedWord: null })}
                key={String(wIndex) + lIndex}/>)}
            </p>)}
        </div>
      </div>
    );
  }
}

export default App;
