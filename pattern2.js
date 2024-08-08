function printG() {
    let pattern = "";
    let size = 7; // Adjust the size for a bigger or smaller 'G'
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (
          (i === 0 && j > 0 && j < size - 1) || // Top horizontal line
          (i === size - 1 && j > 0 && j < size - 1) || // Bottom horizontal line
          (j === 0 && i > 0 && i < size - 1) || // Left vertical line
          (i === size / 2 && j >= size / 2) || // Middle horizontal line
          (j === size - 1 && i >= size / 2 && i < size - 1) // Right vertical line at the bottom half
        ) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
      pattern += "\n";
    }
  
    console.log(pattern);
  }
  
  printG();
