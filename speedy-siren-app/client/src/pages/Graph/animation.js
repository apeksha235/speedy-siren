function animatePath(fromBlock, toBlock, roadStyles) {
    const ROWS = 9;
    const COLUMNS = 9;
    const BLOCK_SIZE = 70; // Size of each block in pixels
    const GRID_GAP = 20;
    const fromRow = Math.floor(fromBlock / ROWS);
    const fromCol = fromBlock % COLUMNS;
    const toRow = Math.floor(toBlock / COLUMNS);
    const toCol = toBlock % COLUMNS;
  
    const dx = toCol - fromCol;
    const dy = toRow - fromRow;
  
    const roadLength = Math.sqrt(dx * dx + dy * dy);
    const roadAngle = Math.atan2(dy, dx);
    const roadWidth = GRID_GAP;
  
    let roadIndex = 0;
    const interval = setInterval(() => {
      if (roadIndex >= roadLength) {
        clearInterval(interval);
        return;
      }
  
      const roadX = fromCol * (BLOCK_SIZE + GRID_GAP) + BLOCK_SIZE / 2 + roadIndex * Math.cos(roadAngle) * (BLOCK_SIZE + GRID_GAP) + roadWidth / 2;
      const roadY = fromRow * (BLOCK_SIZE + GRID_GAP) + BLOCK_SIZE / 2 + roadIndex * Math.sin(roadAngle) * (BLOCK_SIZE + GRID_GAP) + roadWidth / 2;
      const roadStyle = roadStyles && roadStyles[roadIndex] ? roadStyles[roadIndex] : {};
  
      const roadElement = document.createElement('div');
      roadElement.style.position = 'absolute';
      roadElement.style.backgroundColor = 'yellow';
      roadElement.style.width = `${roadWidth}px`;
      roadElement.style.height = `${BLOCK_SIZE}px`;
      roadElement.style.left = `${roadX}px`;
      roadElement.style.top = `${roadY}px`;
      Object.assign(roadElement.style, roadStyle);
  
      document.body.appendChild(roadElement);
  
      roadIndex++;
    }, 50);
  }
  
  export { animatePath };