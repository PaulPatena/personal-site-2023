import GithubIcon from "../../public/images/github.svg";
import LinkedInIcon from "../../public/images/linkedin.svg"
import CertIcon from "../../public/images/iconmonstr-certificate-5.svg";
import CvIcon from "../../public/images/iconmonstr-cv-4.svg";
import PpLightIcon from "../../public/images/pp-light.svg";

const MyHeader = () => {
  return (
    <div className="flex justify-center items-center w-full h-14 py-2 px-4 bg-primary">
      <div className="mr-2 flex justify-center items-center w-6 h-6">
        <PpLightIcon className={'fill-sky-50'}/>
      </div>
      <div className="mr-4 text-xl text-sky-50">Paul Patena</div>
      <div className="flex-1">&nbsp;</div>
      <div className="mr-4 flex justify-center items-center w-6 cursor-pointer">
        <a href="https://paulpatena.com/public_images/Resume_PaulPatena_latest.pdf" target="_blank">
          <CvIcon className={'fill-sky-50'}/>
        </a>
      </div>
      <div className="mr-4 flex justify-center items-center w-6 cursor-pointer">
        <a href="https://www.linkedin.com/in/paulpatena/" target="_blank">
          <LinkedInIcon className={'fill-sky-50'}/>
        </a>
      </div>
      <div className="mr-4 flex justify-center items-center w-6 cursor-pointer">
        <a href="https://github.com/PaulPatena" target="_blank">
          <GithubIcon className={'fill-sky-50'}/>
        </a>
      </div>
      <div className="mr-4 flex justify-center items-center cursor-pointer">
        <div className="w-6">
          <a href="https://www.credly.com/badges/0c10a8e5-d58d-4c8b-93b5-fd0e9203f429" target="_blank">
            <CertIcon className={'fill-sky-50'}/>
          </a>
        </div>
        <div className="text-sky-50 text-[10px]">
          AWS<br/>CSAA
        </div>
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <div className="w-6">
          <a href="https://www.credly.com/badges/a83a06e7-a2d1-44ca-864e-e06a77b7eb04" target="_blank">
            <CertIcon className={'fill-sky-50'}/>
          </a>
        </div>
        <div className="text-sky-50 text-[10px]">
          AWS<br/>CDA
        </div>
      </div>
    </div>
  );
}

export default MyHeader;