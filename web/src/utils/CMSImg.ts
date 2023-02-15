export default function cmsImg(imgContext: any) {
  const urlWithoutEndSlash =
    process.env.NODE_ENV === "development"
      ? "//api.jagathifoundation.org"
      : "//api.jagathifoundation.org";

  let imgURl = "";

  if (imgContext?.formats?.large?.url) {
    imgURl = imgContext?.formats?.large?.url;
  } else if (imgContext?.formats?.medium?.url) {
    imgURl = imgContext?.formats?.medium?.url;
  } else if (imgContext?.formats?.small?.url) {
    imgURl = imgContext?.formats?.small?.url;
  } else if (imgContext?.formats?.thumbnail?.url) {
    imgURl = imgContext?.formats?.thumbnail?.url;
  } else {
    imgURl = imgContext?.url;
  }

  return urlWithoutEndSlash + imgURl;
}
