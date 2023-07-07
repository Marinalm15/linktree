import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { Control, Controller } from "react-hook-form";

interface InputUploadProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  multiple: boolean;
  maxCount: number;
  imagesList: any;
}

const dummyRequest = (options: any) => {
  const { onSuccess } = options;
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export const InputUpload = ({
  control,
  name,
  placeholder,
  multiple,
  maxCount,
  imagesList,
}: InputUploadProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Upload
          listType="picture"
          accept="image/*"
          multiple={multiple}
          maxCount={maxCount}
          customRequest={dummyRequest}
          fileList={imagesList}
          onChange={(info) => {
            if (info.file.status === "done") {
              field.onChange(info.fileList);
            }
          }}
          onRemove={(file) => {
            let index = field.value
              .map(function (fileToRemove: any, index: number) {
                if (file.uid == fileToRemove.uid) {
                  return index;
                }
              })
              .filter(isFinite)[0];

            let newFileList = field.value;
            newFileList.splice(index, 1);

            field.onChange(newFileList);
          }}
        >
          <Button
            className="upload_button"
            size="large"
            icon={<UploadOutlined />}
          >
            {placeholder}
          </Button>
        </Upload>
      )}
    />
  );
};
