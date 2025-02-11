

import { CoreComponentsProps } from "@/app/types";

const PageBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames } = props;

  return (
    <div
      className={`relative flex flex-col justify-start items-start w-screen max-w-full p-0 m-0 overflow-hidden
        
         
         `}
    >
      {children}
    </div>
  );
};

export default PageBox;
