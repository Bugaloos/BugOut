function isEmailInvalid (email) {
  const arr = email.split('@')
  if (arr.length === 2 && arr[1] !== ('')) {
    const arr2 = arr[1].split('.')
    if (arr2.length > 1 && arr2[1].length) {
      return false
    }
  }
  return true
}

module.exports = function ({ userName, email, password, confirmPassword }, cb) {
  if (isEmailInvalid(email)) {
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Not a valid email address'}})
    return
  }
  if (userName.length < 2) {
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Username must be 2 characters or more'}})
    return
  }
  if (password.length < 8) {
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Password must be at least 8 characters'}})
    return
  }
  if (password !== confirmPassword) {
    cb({ valid: false, dispatch: {type: 'AUTH_ERR', payload: 'Passwords do not match'}})
    return
  }
  cb({valid: true})
}
