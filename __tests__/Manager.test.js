test('creates a manager object', () => {
    const manager = new Manager('Tom');
  
    expect(manager.name).toBe('Tom');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toBe('tom1@yahoo.com');
    expect(manager.officenumber).toEqual(expect.any(Number));
  });

// function Potion(name) {
//     this.types = ['strength', 'agility', 'health'];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
//     if (this.name === 'health') {
//       this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//       this.value = Math.floor(Math.random() * 5 + 7);
//     }
//   }
  
//   module.exports = Potion;