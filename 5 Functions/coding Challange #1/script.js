'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let number = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\nWrite the Option`)
    );

    if (!(number < 0 || number > 4)) {
      this.answers[number]++;
    }
    console.log(poll.displayResults(''));
  },
  displayResults(type = 'array') {
    console.log('O');
    if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    } else {
      console.log(...this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
