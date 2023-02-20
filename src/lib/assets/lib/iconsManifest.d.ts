interface IconManifest {
  id: string;
  name: string;
  projectUrl: string; license: string;
  licenseUrl: string;
}
type icons = {	id: string; name:string; content: string[];};declare const IconsManifest:IconManifest[];
export default IconsManifest;export declare const namesAllIcons: icons[];