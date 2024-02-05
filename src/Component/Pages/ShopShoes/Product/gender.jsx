const genderId = (gender) => {
    if (gender === 'All') {
      return 'All'
    } 
    if (gender === 1) {
      return 'Male'
    } 
    if (gender === 2) {
      return 'Female'
    }
    if (gender === 3) {
      return 'Children'
    }
  }

export default genderId;