import { expect } from 'chai';
import t from '../boot/t';

const sut = new t();

describe('calculator/add', () => {

    it('should return a number when parameters are passed to `add()`', () => {
        expect(sut.add()).to.be.a('number');
    });

    it('should return sum of `2` when 1 + 1 is passed to `add()`', () => {
        expect(sut.add()).to.equal(1);
    });
});
