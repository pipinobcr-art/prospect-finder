import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return format(new Date(date), 'dd MMM yyyy', { locale: fr });
}

export function formatRelative(date: string | Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
}

export const STATUS_LABELS: Record<string, string> = {
  nouveau: 'Nouveau', contacte: 'Contacté', repondu: 'A répondu',
  converti: 'Converti', ignore: 'Ignoré', brouillon: 'Brouillon',
  envoye: 'Envoyé', erreur: 'Erreur', active: 'Actif',
  pending: 'En attente', past_due: 'Impayé', canceled: 'Annulé',
};

export const STATUS_COLORS: Record<string, string> = {
  nouveau: 'bg-blue-500/20 text-blue-300',
  contacte: 'bg-yellow-500/20 text-yellow-300',
  repondu: 'bg-green-500/20 text-green-300',
  converti: 'bg-green-500/20 text-green-300',
  ignore: 'bg-gray-500/20 text-gray-400',
  brouillon: 'bg-gray-500/20 text-gray-400',
  envoye: 'bg-green-500/20 text-green-300',
  erreur: 'bg-red-500/20 text-red-300',
  active: 'bg-green-500/20 text-green-300',
  pending: 'bg-yellow-500/20 text-yellow-300',
  past_due: 'bg-red-500/20 text-red-300',
  canceled: 'bg-gray-500/20 text-gray-400',
};

export const INDUSTRIES = [
  'SaaS / Logiciel', 'E-commerce', 'Immobilier', 'Finance / FinTech',
  'Marketing / Agences', 'Santé / MedTech', 'Éducation / EdTech',
  'Consulting', 'Ressources Humaines', 'Industrie / Manufacturing',
];

export const COUNTRIES = [
  'France', 'Belgique', 'Suisse', 'Luxembourg', 'Canada (Québec)',
  'Maroc', 'Tunisie', 'Algérie', 'États-Unis', 'Royaume-Uni',
];

export const PLATFORMS = ['email', 'linkedin', 'les deux'];
