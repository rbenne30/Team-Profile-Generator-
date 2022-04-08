const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Engineer");

test('can getName', () => {
  const name = "tom";
  const e = new Engineer (name)
  expect(e.name).toBe(name);
});
test('can getId', () => {
  const name = "tom";
  const id = 6;
  const e = new Engineer (name.id)
  expect(e.id).toBe(id);
});
test('can getEmail', () => {
  const name = "tom";
  const email = "checkthis@yahoo.com";
  const e = new Engineer (name.id,email)
  expect(e.email).toBe(email);
});
test('can github', () => {
    const name = "tom";
    const github = "tom30!";
    const e = new Engineer (name.id,email,github)
    expect(e.github).toBe(github);
  });