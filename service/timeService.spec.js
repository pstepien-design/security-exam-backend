import getCurrentTime from './timeService.js'

const testingMyMans = {
  getCurrentTime: jest.fn().mockReturnValue('12:00'),
}

it("should return the current time", () => {
  const result = testingMyMans.getCurrentTime();
  
  expect(result).toEqual('12:00');
});

