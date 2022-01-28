function getAdmins(map) {
  for([key, value] of map) {
    if(value === 'Admin') {
      admins.push(key)
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Amanda', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Julia', 'Admin');

console.log(getAdmins(usarios));