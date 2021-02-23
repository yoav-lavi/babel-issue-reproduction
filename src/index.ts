const userAgentRegex = /(?<type>(Chrome|Firefox|Version|CriOS|FxiOS|SamsungBrowser))\/(?<version>\d+)(.|\s)/;

const x = true;
export const getBrowserInformation = (userAgent: string) => {
  console.log("#");
  try {
    // uncomment this and remove the comment to make the first log "undefined"
    // if (x) {
    //   console.log("#");
    // }
    const groups = userAgentRegex.exec(userAgent)?.groups;
    console.log({ regex: RegExp(userAgentRegex).exec(userAgent)?.groups });
    console.log({ regex: userAgentRegex.exec(userAgent)?.groups });
    return groups;
  } catch {
    return null;
  }
};
