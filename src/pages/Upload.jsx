import React, { useRef, useState } from "react";
import img21 from "../images/xl.png";
import { MdOutlineFileUpload } from "react-icons/md";

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleClearFiles = () => {
    setSelectedFiles([]);
  };

  return (
    <div className="w-full bg-[#FAFAFB] h-screen py-5 flex flex-col justify-center items-center">
      <div
        className="bg-white p-5 rounded-xl"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div
          className={`bg-white p-10 w-96 border-2 border-dotted rounded-xl ${
            isDragging
              ? "bg-blue-100 border-blue-500"
              : "bg-gray-100 border-gray-100"
          }`}
        >
          <img src={img21} className="w-36 ml-20" alt="upload" />
          <p className="text-center">
            Drop your excel sheet here or{" "}
            <span
              className="text-[#605BFF] cursor-pointer"
              onClick={handleButtonClick}
            >
              browse
            </span>
          </p>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          multiple
          accept=".xls,.xlsx"
        />

        <button className="bg-[#605BFF] w-96 p-2 my-3 flex justify-center items-center text-white rounded-lg">
          <MdOutlineFileUpload size={20} />
          Upload
        </button>
        {selectedFiles.length > 0 && (
          <button
            onClick={handleClearFiles}
            className=" w-96 p-2 my-3 flex justify-center items-center text-black  rounded-lg"
          >
            Clear Files
          </button>
        )}
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100 w-full m-8">
        <table className="w-full bg-white p-4">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Sl.No
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Links
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Prefix
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Add Tags
              </th>
              <th className="py-2 px-4 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                Selected Tags
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedFiles.map((file, index) => (
              <React.Fragment key={index}>
                <tr className="h-2"></tr>
                <tr className=" bg-white-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{file.name}</td>
                  <td className="py-2 px-4">Prefix Example</td>
                  <td className="py-2 px-4">
                    <select className="p-1">
                      <option value="Active">Tag1</option>
                      <option value="Inactive">Tag2</option>
                      <option value="Pending">Tag3</option>
                    </select>
                  </td>
                  <td className="py-2 px-4">tags</td>
                </tr>
                <tr className="h-2"></tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Upload;
