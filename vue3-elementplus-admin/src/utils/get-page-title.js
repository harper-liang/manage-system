import defaultSetting from "./default-setting";
const title = defaultSetting.title || ''
export default function getPageTitle(pageTitle){
  return (pageTitle ? `${pageTitle} - `: '') + title
}