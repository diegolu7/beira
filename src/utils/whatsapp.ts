import { site } from '../data/site';

export function getWhatsAppUrl(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}
