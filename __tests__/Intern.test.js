const Intern = require("../lib/Intern");

test('can getName', () => {
  const name = "tom";
  const e = new Intern (name)
  expect(e.name).toBe(name);
});
test('can getId', () => {
  const name = "tom";
  const id = 6;
  const e = new Intern (name.id)
  expect(e.id).toBe(id);
});
test('can getEmail', () => {
  const name = "tom";
  const email = "checkthis@yahoo.com";
  const e = new Intern (name.id,email)
  expect(e.email).toBe(email);
});
test('can getEmail', () => {
    const name = "tom";
    const school = "unccharlotte";
    const e = new Intern (name.id,email,school)
    expect(e.school).toBe(school);
  });