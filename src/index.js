function pyramid(n) {
  let columns = 2 * n - 1;
  const midpoint = Math.floor((2 * n - 1) / 2);
  let level = "";
  for (var rows = 0; rows < n; rows++) {
    for (var column = 0; column < columns; column++) {
      if (midpoint - rows <= column && midpoint + rows >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    level += "\n";
  }
  console.log(level);
}
pyramid(5);
