import { Button } from "@material-ui/core";
import "./matrix-op-button.scss";


export interface MatrixButtonProps {
  matrix?: any[];
}

export const MatrixButton = (props: MatrixButtonProps) => {
  
  const handleClick = () => {
    let blas = require("blas");
    console.log("blas: ", blas);

    let rand;
    let sign;
    let x;
    let y;
    let i;

    x = new Float64Array(100);
    for (i = 0; i < x.length; i++) {
      rand = Math.round(Math.random() * 100.0);
      sign = Math.random();
      if (sign < 0.5) {
        sign = -1.0;
      } else {
        sign = 1.0;
      }
      x[i] = sign * rand;
    }
    console.log(blas.dasum(x.length, x, 1));

    x = new Float64Array(10);
    y = new Float64Array(10);
    for (i = 0; i < x.length; i++) {
      x[i] = Math.round(Math.random() * 500.0);
      y[i] = Math.round(Math.random() * 255.0);
    }
    console.log(x);
    console.log(y);

    // Copy elements from `x` into `y` starting from the end of `y`:
    blas.dcopy(x.length, x, 1, y, -1);
    console.log(y);
  };

  return (
    <span className="matrix-button">
      <Button
        onClick={handleClick}
        variant="contained"
        component="label"
      >
        Matrix Op
      </Button>
    </span>
  );
};
