const Employee = require("../lib/Employee");

test('can getName', () => {
  const name = "tom";
  const e = new Employee (name)
  expect(e.name).toBe(name);
});
test('can getId', () => {
  const name = "tom";
  const id = 6;
  const e = new Employee (name,id)
  expect(e.id).toBe(id);
});
test('can getEmail', () => {
  const name = "tom";
  const id = 6;
  const email = "checkthis@yahoo.com";
  const e = new Employee (name,id,email)
  expect(e.email).toBe(email);
});