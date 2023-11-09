import { compiledContent as whatsappCompiledContent } from "./scripts/whatsapp.md";
import { marked } from "marked";

type GenerateContent = {
  whatsappContent: string;
};

type GenerateContentParams = {
  scriptRendered: string;
};

export function generateContent({
  scriptRendered,
}: GenerateContentParams): GenerateContent {
  const markdownWhatsapp = whatsappCompiledContent().replace(
    "scriptRendered",
    scriptRendered
  );
  const whatsappContent = marked.parse(markdownWhatsapp);
  return {
    whatsappContent,
  };
}
