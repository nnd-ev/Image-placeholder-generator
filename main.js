 const inputWidth = document.querySelector("#inputWidth");
 const inputHeight = document.querySelector("#inputHeight");
 const inputDataUrl = document.querySelector("#inputDataUrl");
 const imagePreview = document.querySelector("#image-preview");

document.querySelector("#buttonGenerate").addEventListener("click", ()=>{
  const MIN_LEN = 200;
  //validation
  if(isNaN(inputWidth.value) || isNaN(inputHeight.value) || inputWidth.value < MIN_LEN || inputHeight.value< MIN_LEN){
    alert(`Please enter a valid image size. The minimum len is ${MIN_LEN} px`);
    return;
  }
  const canvasEl = imagePlaceholderCanvas(inputWidth.value, inputHeight.value);
  const dataUrl = canvasEl.toDataURL();

  inputDataUrl.value = dataUrl;
  imagePreview.src = dataUrl;
  imagePreview.style.display = "block";
  imagePreview.style.maxWidth = `${inputWidth.value}px`;
});


 function imagePlaceholderCanvas(width, height){  
   const element = document.createElement("canvas");
   const context = element.getContext("2d");

   element.width = width;
   element.height = height;

   //background
   context.fillStyle = "#aaaaaa";
   context.fillRect(0,0,element.width, element.height);

   //text
   context.font = "bold 20px sans-serif";
   context.fillStyle = "#333333";
   context.textAlign = "center";
   context.textBaseline = "middle";
   context.fillText(`${width} x ${height}`, element.width/2, element.height/2); 

   return element; 
 }
 
  imagePreview.src = `${imagePlaceholderCanvas(300, 200).toDataURL()}`;
 