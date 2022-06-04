import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { PixelButton } from "../pixel-button/pixel-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export interface DropzoneProps {
  className: string;
  onChange: any;
}

const Container = styled.div`
  overflow-x: auto;
  height: 180px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border-width: 2px;
  border-radius: 6px;
  border-color: #717386;
  border-style: dashed;
  color: #bdbdbd;
  outline: none !important;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;
const StyledPixelDropZone = styled.div``;

export const PixelDropZone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  ({ className, onChange, ...rest }, ref) => {
    const [files, setFiles] = React.useState([]);
    const onDrop = (acceptesFiles) => {
      setFiles(
        acceptesFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    };

    const { acceptedFiles, open, getRootProps, getInputProps, isDragActive } =
      useDropzone({ onDrop });

    React.useEffect(() => {
      onChange(files);
    }, [files]);

    React.useEffect(() => {
      if (files.length > 0) {
        setFiles(
          [...files, ...acceptedFiles].map((file) => {
            file["preview"] = URL.createObjectURL(file);
            return file;
          })
        );
      } else {
        setFiles(
          acceptedFiles.map((file) => {
            file["preview"] = URL.createObjectURL(file);
            return file;
          })
        );
      }
      return () => {
        files.map((file) => {
          URL.revokeObjectURL(file.preview);
        });
      };
    }, [acceptedFiles]);
    return (
      <StyledPixelDropZone>
        <PictureArea>
          {files.map((file) => (
            <ImageContainer>
              <CloseIconContainer
                onClick={() => {
                  setFiles(files.filter((f) => f.name !== file.name));
                }}
              >
                {" "}
                <CloseIcon icon={faClose} />
              </CloseIconContainer>

              <Image key={file.name} src={file.preview} />
            </ImageContainer>
          ))}
        </PictureArea>
        <Container onDrop={onDrop} onClick={open} {...getRootProps()}>
          <input {...getInputProps()} />
          <DragDrop>Drag and Drop Product Images</DragDrop>
          <OR>or</OR>
          <PixelButton>Select Files</PixelButton>
        </Container>
      </StyledPixelDropZone>
    );
  }
);

const DragDrop = styled.div`
  font-size: 16px;
`;
const OR = styled.div`
  font-size: 12px;
`;

const CloseIconContainer = styled.div`
  align-items: center;
  background: #bbb;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  height: 22px;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 22px;
  font-size: 15px;
  display: none;
`;
const ImageContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  border: 1px #ccc solid;
  border-radius: 5px;
  display: inline-block !important;
  vertical-align: middle !important;
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
  margin: 10px;
  max-width: 180px;
  min-width: 180px;
  position: relative;
  &:hover {
    ${CloseIconContainer} {
      display: flex;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 12px;
`;
const PictureArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export default PixelDropZone;
