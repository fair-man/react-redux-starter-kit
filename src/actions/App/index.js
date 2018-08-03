export function typedName(name) {
  return {
    type: 'TYPED_NAME',
    payload: name
  }
}

export function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    payload: name
  }
}