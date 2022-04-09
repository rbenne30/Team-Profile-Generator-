const Manager = require("../lib/Manager");

test('can getName', () => {
  const name = "tom";
  const e = new Manager (name)
  expect(e.name).toBe(name);
});
test('can getId', () => {
  const name = "tom";
  const id = 6;
  const e = new Manager (name,id)
  expect(e.id).toBe(id);
});
test('can getEmail', () => {
  const name = "tom";
  const id = 6;
  const email = "checkthis@yahoo.com";
  const e = new Manager (name,id,email)
  expect(e.email).toBe(email);
});
test('can getOfficenumber', () => {
    const name = "tom";
    const id = 6;
    const email = "checkthis@yahoo.com";
    const officeNumber = 34;
    const e = new Manager (name,id,email,officeNumber)
    expect(e.officeNumber).toBe(officeNumber);
  });