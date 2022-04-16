import { Button } from "@material-ui/core";
import "./upload-button.scss";

export const UploadButton = () => {
  return (
    <div className="upload-button">
      <Button
        onClick={() => {
          console.log("Clicou");
        }}
        variant="contained"
        component="label"
      >
        Upload File
        <input type="file" accept="image/*" hidden />
      </Button>
    </div>
  );
};
