import React, { useState } from "react";

const TableRow = ({ file, index }) => {
  // initialize state for tags
  const [tags, setTags] = useState([]);

  const handleSelectChange = (event) => {
    const selectedTagName =
      event.target.options[event.target.selectedIndex].text;
    setTags([...tags, selectedTagName]);
  };

  return (
    <React.Fragment>
      <tr className="h-2"></tr>
      <tr className=" bg-white-50">
        <td className="py-2 px-4">{index + 1}</td>
        <td className="py-2 px-4">{file?.name}</td>
        <td className="py-2 px-4">Prefix Example</td>
        <td className="py-2 px-4">
          <select
            className="p-1 border border-slate-200 w-28 rounded-lg"
            onChange={handleSelectChange}
          >
            <option value="Active">Tag1</option>
            <option value="Inactive">Tag2</option>
            <option value="Pending">Tag3</option>
          </select>
        </td>
        {/* <td className="py-2 px-4">tags</td> */}
        <td className="py-2 px-4 text-white">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#605BFF] p-2 rounded-lg text-xs">
                {tag}
              </span>
            ))}
          </div>
        </td>
      </tr>
      <tr className="h-2"></tr>
    </React.Fragment>
  );
};

export default TableRow;
