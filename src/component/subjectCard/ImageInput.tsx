import * as Style from "./styled/EditSubjectCard";
import { Image } from "./styled/SubjectCard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface Props {
  image: string;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput = ({ image, onChangeFile }: Props): JSX.Element => {
  return (
    <>
      <label htmlFor="file">
        <Style.ImageInputLabel>
          {image ? (
            <Image src={image} />
          ) : (
            <Style.ImageInputIconWrapper>
              <CameraAltIcon />
            </Style.ImageInputIconWrapper>
          )}
        </Style.ImageInputLabel>
      </label>
      <Style.ImageInput
        id="file"
        type="file"
        accept="image/jpg, image/png, image/jpeg, image/webp"
        onChange={onChangeFile}
      />
    </>
  );
};
export default ImageInput;
