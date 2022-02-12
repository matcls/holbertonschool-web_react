import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Basic tests', function () {
  describe('test getFullYear', function () {
    it('should return current year', function () {
      expect(getFullYear()).toEqual(new Date().getFullYear());
    });
  });
  describe('test getFooterCopy when argument true or false', function () {
    it('Should return true message', function () {
      expect(getFooterCopy(true)).toEqual('Holberton School');
    });
    it('Should return false message', function () {
      expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
  });
  describe('Test getLatestNotification', function () {
    it('shold return correct string element', function () {
      expect(getLatestNotification()).toEqual(
        '<strong>Urgent requirement</strong> - complete by EOD'
      );
    });
  });
});


