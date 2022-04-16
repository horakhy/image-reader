import { Button, TextField } from "@material-ui/core";
import { UploadButton } from "../components/buttons/upload-button";
import "./image-reader.scss";

const ImageReader = () => {
  return (
    <div className="image-reader--container">
      <div className="image-reader-header">
        <h1 className="image-reader-header-text">Image Reader 2.0</h1>
      </div>
      <div className="button-body">
        <UploadButton />
      </div>
    </div>
  );
};

export default ImageReader;
