import React from "react";

interface ProjectCardProps {
  title: string;
  date?: string;
  description: React.ReactNode;
  link?: {
    href: string;
    label: string;
  };
  variant?: "default" | "compact";
}

export default function ProjectCard({
  title,
  date,
  description,
  link,
  variant = "default",
}: ProjectCardProps) {
  // Replicating .button and .os-button styles with Tailwind
  const baseButtonClass = "text-center no-underline font-medium text-xs uppercase cursor-pointer w-fit border-[1.5px] border-text transition-colors duration-200 font-mono";
  const defaultButtonClass = `${baseButtonClass} bg-text text-background px-[10px] py-[6px] min-w-[120px] hover:bg-transparent hover:text-text`;
  const compactButtonClass = `${baseButtonClass} bg-text text-background px-[4px] py-[2px] min-w-[80px] hover:bg-transparent hover:text-text`;

  const buttonClass = variant === "default" ? defaultButtonClass : compactButtonClass;

  if (variant === "default") {
    return (
      <table className="w-full border-collapse mb-[5px] relative top-[0.8rem]">
        <colgroup>
            <col span={5} width="83.33%" />
            <col width="16.67%" />
        </colgroup>
        <tbody>
          <tr>
            <th colSpan={5} className="border-[1.5px] border-text p-[0.8rem_0.6rem] text-left align-top">
                <h4 className="m-0 p-[5px] font-bold text-lg">{title}</h4>
            </th>
            <td colSpan={1} className="border-[1.5px] border-text p-[0.8rem_0.6rem] text-left align-top">
                <p className="m-0 p-[5px] text-sm">{date}</p>
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="border-[1.5px] border-text p-[0.8rem_0.6rem] text-left align-top">
                <div className="flex flex-col gap-[0.1rem] h-full items-start justify-between">
                    <div className="text-sm m-0 p-0 mb-4">
                        {description}
                    </div>
                    {link && (
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonClass}
                        >
                            {link.label}
                        </a>
                    )}
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    // Compact / OS Project style
    return (
      <div className="flex-1 min-w-[300px] mb-0">
          <table className="w-full border-collapse m-0">
            <tbody>
                <tr>
                    <th className="border-[1.5px] border-text p-[0.8rem_0.6rem] text-left align-top">
                        {title}
                    </th>
                </tr>
                <tr>
                    <td className="border-[1.5px] border-text p-[0.8rem_0.6rem] text-left align-top">
                        <div className="flex flex-col gap-[0.1rem] h-full items-start justify-between">
                            <div className="text-sm m-0 p-0 mb-4">
                                {description}
                            </div>
                            {link && (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonClass}
                                >
                                    {link.label}
                                </a>
                            )}
                        </div>
                    </td>
                </tr>
            </tbody>
          </table>
      </div>
    );
  }
}
