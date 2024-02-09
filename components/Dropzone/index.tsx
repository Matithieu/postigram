import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface MyDropzoneProps {
  onFileDrop: (acceptedFiles: File[]) => void;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ onFileDrop }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Gérez les fichiers acceptés, ici vous pouvez effectuer des opérations sur le fichier PDF
      onFileDrop(acceptedFiles);
    },
    [onFileDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
    },
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Glissez-déposez l&apos;image ici...</p>
      ) : (
        <p>Glissez-déposez une image ou cliquez pour en sélectionner une</p>
      )}
    </div>
  );
};

// Style de la drop zone
const dropzoneStyle: React.CSSProperties = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default MyDropzone;
