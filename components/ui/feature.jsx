import { cn } from "@/lib/utils";
import {
  Hourglass,
  ScrollText,
  Bell,
  FolderLock,
  Workflow,
  Coins 
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Fast Verification",
      description: "Quick verification for faster disbursement.",
      icon: <Hourglass />,
    },
    {
      title: "Completely Paperless",
      description: "Paperless process for streamlined submissions.",
      icon: <ScrollText />,
    },
    {
      title: "Synchronous Updates",
      description: "Real-time updates on your application status.",
      icon: <Bell />,
    },
    {
      title: "Foolproof security and privacy",
      description: "Secure and efficient data handling.",
      icon: <FolderLock />,
    },
    {
      title: "Automation, automation and more automation",
      description: "Automated processing for timely payments.",
      icon: <Workflow />,
    },
    {
      title: "Easy to use",
      description:
        "Easy tracking and access to scholarship funds",
      icon: <Coins />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

export default function Features({ title, description, icon, index }) {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}
