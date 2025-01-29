const styles = (col, row) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${col}, 109px)`,
    gridTemplateRows: `repeat(${row}, 1fr)`,
    gap: "20px",
  };
};

const Grid = ({ col, row, children }) => {
  return <div style={styles(col, row)}>{children}</div>;
};

export default Grid;
