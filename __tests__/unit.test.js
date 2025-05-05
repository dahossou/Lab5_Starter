// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check a paranthesesed phone number is valid', () => {
  expect(isPhoneNumber('(310) 624-6265')).toBe(true);
});

test('check a hyphenated phone number is valid', () => {
  expect(isPhoneNumber('888-123-4567')).toBe(true);
});

test('check too short phone number is not valid', () => {
  expect(isPhoneNumber('1234567')).toBe(false);
});

test('check too long phone number is not valid', () => {
  expect(isPhoneNumber('858980283455')).toBe(false);
});

test('check an email is valid', () => {
  expect(isEmail('j7su@ucsd.com')).toBe(true);
});

test('check an email is valid', () => {
  expect(isEmail('person@gmail.org')).toBe(true);
});

test('check email with invalid name is not valid', () => {
  expect(isEmail('john.doe@gmail.com')).toBe(false);
});

test('check email with invalid domain is not valid', () => {
  expect(isEmail('person@123.com')).toBe(false);
});

test('check a strong password is valid', () => {
  expect(isStrongPassword('JvUl94_f')).toBe(true);
});

test('check a different strong password is valid', () => {
  expect(isStrongPassword('fHild88w')).toBe(true);
});

test('check short password is not strong', () => {
  expect(isStrongPassword('hi')).toBe(false);
});

test('check password is invalid with special character', () => {
  expect(isStrongPassword('ijadfuo?')).toBe(false);
});

test('check todays date is valid', () => {
  expect(isDate('05/05/2005')).toBe(true);
});

test('check a future date is valid', () => {
  expect(isDate('03/29/2030')).toBe(true);
});

test('check date with invalid month is invalid', () => {
  expect(isDate('111/29/2004')).toBe(false);
});

test('check date with invalid year is invalid', () => {
  expect(isDate('05/05/25')).toBe(false);
});

test('check a 3 character hexcolor is valid', () => {
  expect(isHexColor('ABC')).toBe(true);
});

test('check a 6 character hexcolor is valid', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('check a 4 character hexcolor is invalid', () => {
  expect(isHexColor('ABCD')).toBe(false);
});

test('check invalid format is invalid hexcolor', () => {
  expect(isHexColor('#G80808')).toBe(false);
});