import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: Date): string {
  const formattedDate = format(date, "EEEE, dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
  return formattedDate
    .replace(/(^\w{1})|(\s\w{1})/g, (char) => char.toUpperCase())
    .replace(/\bDe\b/g, "de");
}
