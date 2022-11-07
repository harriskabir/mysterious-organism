// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let oldBase = this.dna[randIndex];
      let altBases = ['A', 'T', 'C', 'G'];
      altBases.splice(altBases.indexOf(oldBase), 1);
      let mutatedBase = altBases[Math.floor(Math.random() *3)];
      return this.dna.splice(randIndex, 1, mutatedBase);
    },
    compareDNA(otherObj) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherObj.dna[i]) {
          count++;
        } else {
          count;
        }
      }
      const percentageOfDNAshared = (count/this.dna.length) * 100;
      const percentageToTwoDec = percentageOfDNAshared.toFixed(2);
      console.log(`Specimen ${this.specimenNum} and Specimen ${otherObj.specimenNum} have ${percentageToTwoDec}% DNA in common.`);
    },
    willLikelySurvive() {
      let surviveCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          surviveCount++;
        } else {
          surviveCount;
        }
      }
      const percentageSurvive = (surviveCount/this.dna.length) * 100;
      if (percentageSurvive >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      const compStrand = [];
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          compStrand.push('T');
        } else if (this.dna[i] === 'T') {
          compStrand.push('A');
        } else if (this.dna[i] === 'G') {
          compStrand.push('C')
        } else if (this.dna[i] === 'C') {
          compStrand.push('G')
        }
      }
      return compStrand;
    }
  }
};

const survivingSpecimen = [];
let num = 1;

while (survivingSpecimen.length < 30) {
  let newObj = pAequorFactory(num, mockUpStrand());
  num++;
  if (newObj.willLikelySurvive()) {
    survivingSpecimen.push("Specimen " + newObj.specimenNum);
    survivingSpecimen.push(newObj.dna);
  }
}




/* 
const test1 = pAequorFactory(1, mockUpStrand());
console.log(test1.dna);
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test2.dna);
test1.compareDNA(test2);
console.log(test1.willLikelySurvive());
console.log(survivingSpecimen);
*/

/*
const test1 = pAequorFactory(1, mockUpStrand());
console.log(test1.dna);
console.log(test1.complementStrand());
*/
