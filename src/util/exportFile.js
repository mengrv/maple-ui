// 文件相关操作类
function _download (fileName, blob) {
  const aLink = document.createElement('a');
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  document.body.appendChild(aLink);
  aLink.click();
  document.body.removeChild(aLink);
}

// 下载保存文件
function downloadFile (fileName, string) {
  const blob = new Blob([string]);
  _download(fileName, blob)
}

// 下载导出图片
function downloadImage (name, canvas) {
  const base64 = canvas.toDataURL('image/png');
  const blob = base64Img2Blob(base64);
  _download(name + '.png', blob);
}

function base64Img2Blob (code) {
  const parts = code.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for ( let i = 0; i < rawLength; ++i ) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], {type: contentType})
}


export default  {
  downloadFile,
  downloadImage
}
