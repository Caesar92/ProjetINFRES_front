/**
 * Evenement
 */
export interface Evenement {
  id: string;
  titre: string;
  description: string;
  lieu: string;
  date: Date;
  image?: {
    url: string;
    alt: string;
  };
  limiteParticipants: number;
}
