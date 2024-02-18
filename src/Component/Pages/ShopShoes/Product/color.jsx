const colorId = (color) => {
    if (color === 'All') {
      return 'All'
    } 
    if (color === 1) {
      return 'Black'
    } 
    if (color === 2) {
      return 'White'
    }
    if (color === 3) {
      return 'Red'
    } 
    if (color === 4) {
      return 'Purple'
    }
    if (color === 5) {
      return 'Pink'
    } 
    if (color === 6) {
      return 'Yellow'
    }
    if (color === 7) {
      return 'Blue'
    } 
    if (color === 8) {
      return 'Green'
    }
    if (color === 9) {
      return 'Orange'
    }
    if (color === 10) {
      return 'Gray'
    }
  }

export default colorId;