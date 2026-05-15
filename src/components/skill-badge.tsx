import { Azure } from "@/components/ui/svgs/azure";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Css3 } from "@/components/ui/svgs/css3";
import { Docker } from "@/components/ui/svgs/docker";
import { Git } from "@/components/ui/svgs/git";
import { Html5 } from "@/components/ui/svgs/html5";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Mysql } from "@/components/ui/svgs/mysql";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Sql } from "@/components/ui/svgs/sql";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Angular } from "@/components/ui/svgs/angular";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Django } from "@/components/ui/svgs/django";
import { SharePoint } from "@/components/ui/svgs/sharepoint";
import { PowerBI } from "@/components/ui/svgs/powerbi";
import { Perl } from "@/components/ui/svgs/perl";
import { Shell } from "@/components/ui/svgs/shell";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { DotNet } from "@/components/ui/svgs/dotnet";
import { WordPress } from "@/components/ui/svgs/wordpress";
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const SKILL_ICONS: Record<string, IconComponent> = {
  html: Html5,
  css: Css3,
  react: ReactLight,
  "next.js": NextjsIconDark,
  nextjs: NextjsIconDark,
  typescript: Typescript,
  javascript: Javascript,
  "node.js": Nodejs,
  nodejs: Nodejs,
  python: Python,
  "c#": Csharp,
  csharp: Csharp,
  java: Java,
  sql: Sql,
  postgresql: Postgresql,
  mysql: Mysql,
  docker: Docker,
  azure: Azure,
  git: Git,
  angular: Angular,
  mongodb: MongoDB,
  django: Django,
  sharepoint: SharePoint,
  powerbi: PowerBI,
  "power bi": PowerBI,
  perl: Perl,
  shell: Shell,
  "shell scripting": Shell,
  tailwind: Tailwind,
  "tailwind css": Tailwind,
  tailwindcss: Tailwind,
  ".net": DotNet,
  dotnet: DotNet,
  wordpress: WordPress,
};

export const getSkillIcon = (name: string): IconComponent | undefined =>
  SKILL_ICONS[name.toLowerCase()];

interface SkillBadgeProps {
  name: string;
  icon?: IconComponent;
  size?: "sm" | "md";
}

export const SkillBadge = ({ name, icon, size = "md" }: SkillBadgeProps) => {
  const Icon = icon ?? getSkillIcon(name);

  const isSm = size === "sm";

  return (
    <div
      className={cn(
        "border bg-background border-border ring-2 ring-border/20 w-fit flex items-center",
        isSm
          ? "h-6 rounded-lg px-2 gap-1.5"
          : "h-8 rounded-xl px-4 gap-2"
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "rounded overflow-hidden object-contain",
            isSm ? "size-3" : "size-4"
          )}
        />
      )}
      <span
        className={cn(
          "text-foreground font-medium",
          isSm ? "text-xs" : "text-sm"
        )}
      >
        {name}
      </span>
    </div>
  );
};
