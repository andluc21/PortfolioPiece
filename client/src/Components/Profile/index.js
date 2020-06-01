import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./Profile.css";
import axios from "axios"

// stateless function
// not classes  (somewhat the same)
// could be easier to integrate states as classes
// redux in stateless functions

function Profile() {
  const [files, setFiles] = useState([]);
  const [any, setAny] = useState('a');
  let staticConst = '';
    const processed = (file)=>{
        console.log(file.substring(100,200));
        setAny('Hello');
        console.log(any);
        // axios.post('https://example.com/any',{img:profileImage})
    }
    // useEffect(()=>processed('string'))
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
        const reader = new FileReader();

        reader.onload = function() {

            processed(reader.result);
            axios.post('https://example',{
                base64Img: reader.result
            })

        }
        reader.readAsDataURL(acceptedFiles[0]);


      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div className="Photo">
        <img src={file.preview} style={{ width: "180px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div>
      <form className="bio">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">bio </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="bioButton" type="submit">
          submit bio
        </button>
      </form>

      <div>{images}</div>

      <div className="dragndrop" {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="p1"> Drop files here </p>
      </div>
    </div>
  );
}

export default Profile;
