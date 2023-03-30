import camel2snake from "./camel2snake";

export default function getTeleport(name: string, placement?: string) {
  const teleport = document.createElement("div");

  teleport.setAttribute("class", placement ? `${name}-list ${name}-list-${camel2snake(placement)}` : `${name}-list`);

  return teleport;
};