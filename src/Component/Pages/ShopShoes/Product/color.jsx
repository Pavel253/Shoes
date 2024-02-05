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
      return 'Green'
    } 
    if (color === 4) {
      return 'Red'
    }
    if (color === 5) {
      return 'Purple'
    } 
    if (color === 6) {
      return 'Pink'
    }
    if (color === 7) {
      return 'Yellow'
    } 
    if (color === 8) {
      return 'Orange'
    }
    if (color === 9) {
      return 'Blue'
    }
  }

export default colorId;