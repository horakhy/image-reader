import { Button, TextField } from "@material-ui/core";
import { MatrixButton } from "../components/buttons/matrix-op-button/matrix-op-button";
import { UploadButton } from "../components/buttons/upload-button/upload-button";
import "./image-reader.scss";

const ImageReader = () => {
  return (
    <div className="image-reader--container">
      <div className="image-reader-header">
        <h1 className="image-reader-header-text">Image Reader 2.0</h1>
      </div>
      <span className="image-reader-button-body">
        <UploadButton />
		<MatrixButton />
      </span>
    </div>
  );
};

export default ImageReader;
