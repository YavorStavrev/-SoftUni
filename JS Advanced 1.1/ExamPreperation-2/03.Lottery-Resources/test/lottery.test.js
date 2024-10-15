import { expect } from 'chai';
import lottery from '../Lottery.js';

describe('Lottery', function() {
  
  describe('buyLotteryTicket', function() {
    it('should throw an error if buy is false', function() {
      expect(() => lottery.buyLotteryTicket(10, 1, false)).to.throw('Unable to buy lottery ticket!');
    });

    it('should throw an error for invalid input', function() {
      expect(() => lottery.buyLotteryTicket(-10, 1, true)).to.throw('Invalid input!');
      expect(() => lottery.buyLotteryTicket(10, -1, true)).to.throw('Invalid input!');
      expect(() => lottery.buyLotteryTicket('string', 1, true)).to.throw('Invalid input!');
      expect(() => lottery.buyLotteryTicket(10, 1, 'string')).to.throw('Invalid input!');
    });

    it('should return correct message for valid input', function() {
      expect(lottery.buyLotteryTicket(10, 3, true)).to.equal('You bought 3 tickets for 30$.');
    });
  });

  describe('checkTicket', function() {
    it('should throw an error for invalid input', function() {
      expect(() => lottery.checkTicket([1, 2, 3], [1, 2])).to.throw('Invalid input!');
      expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3])).to.throw('Invalid input!');
    });

    it('should return "Congratulations you win..." for winning ticket', function() {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])).to.equal('Congratulations you win, check your reward!');
    });

    it('should return "You win the JACKPOT!!!" for jackpot winning ticket', function() {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });
  });

  describe('secondChance', function() {
    it('should throw an error for invalid input', function() {
      expect(() => lottery.secondChance('string', [1, 2])).to.throw('Invalid input!');
      expect(() => lottery.secondChance(1, 'string')).to.throw('Invalid input!');
    });

    it('should return "You win our second chance prize!" if ticketID is in secondChanceWinningIDs', function() {
      expect(lottery.secondChance(1, [1, 2, 3])).to.equal('You win our second chance prize!');
    });

    it('should return "Sorry, your ticket didn\'t win!" if ticketID is not in secondChanceWinningIDs', function() {
      expect(lottery.secondChance(4, [1, 2, 3])).to.equal('Sorry, your ticket didn\'t win!');
    });
  });

});
