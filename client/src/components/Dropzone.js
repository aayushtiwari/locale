import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import { withRouter } from "react-router-dom";

const Dragger = Upload.Dragger;

class Dropzone extends Component {
  route() {
    this.props.history.push("/vis");
  }
  render() {
    const work = this;
    const state = {
      name: "data",
      multiple: false,
      method: "post",
      processData: false,
      action: "/file",
      onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);

          setTimeout(() => {
            work.route();
          }, 500);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <div className="drop">
        <Dragger {...state} className="dragger">
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">only csv files accepted</p>
        </Dragger>
      </div>
    );
  }
}

export default withRouter(Dropzone);
