export const convertRawViewstoString = (
    labelValue: String,
    isSub = false
  ): string => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(0) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(0) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(isSub ? 2 : 0) + "K"
      : Math.abs(Number(labelValue)).toString();
  };
  export const parseVideoDuration = (duration: string): string => {
    const durationParts: string[] = duration
      .replace("PT", "")
      .replace("H", ":")
      .replace("M", ":")
      .replace("S", "")
      .split(":");
  
    if (durationParts.length === 3) {
      return `${durationParts[0]}:${
        parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
      }:${
        parseInt(durationParts[2]) < 9 ? `0${durationParts[2]}` : durationParts[2]
      }`;
    }
  
    if (durationParts.length === 2) {
      return `${durationParts[0]}:${
        parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
      }`;
    }
  
    if (durationParts.length === 1) {
      return `0:${
        parseInt(durationParts[0]) < 9 ? `0${durationParts[0]}` : durationParts[0]
      }`;
    }
  
    return "";
  };